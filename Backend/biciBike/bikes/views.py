# from rest_framework import generics, mixins, status, viewsets
import json
from pymysql import NULL
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from .serializers import (  BikeSerializer, 
                            BikeListSerializer,
                            BikeDetailSerializer,
                            BikeRentSerializer,
                            BikeRentUpdateSerializer,
                            BikeCreateSerializer,
                            BikeSlotSerializer,
                            BikeUpdateSerializer,
                            IncidenceSerializer,
                            )

from rest_framework.permissions import (IsAdminUser, AllowAny,IsAuthenticated)
from biciBike.core.permissions import IsStaff
from .models import Bike,Incidence,RentBike,Incidence
from biciBike.stations.models import Slot, Station

#Admin
class BikeViewSetAdmin(viewsets.ModelViewSet):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer
    lookup_field = 'serialNumber'
    permission_classes = (IsAdminUser,)

class BikeViewSet(viewsets.ModelViewSet):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer
    lookup_field = 'serialNumber'
    permission_classes = (AllowAny,)

class BikeListAPIView(generics.ListAPIView):
    queryset = Bike.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = BikeListSerializer

    def list(self, request):
        # cambiado .order_by('station')
        serializer_data = self.get_queryset().order_by('id')
        serializer = self.serializer_class(serializer_data, many=True)

        return Response({
            'bikes': serializer.data
        }, status=status.HTTP_200_OK)


class BikeRetrieveAPIView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    lookup_url_kwarg = 'serialNumber'
    queryset = Bike.objects.all()           #obtenemos todas las bicis.
    serializer_class = BikeDetailSerializer 
   
    def retrieve(self, request, serialNumber, *args, **kwargs):
        try:
            bike = self.queryset.get(serialNumber=serialNumber)
        except Bike.DoesNotExist:
            return Response('No existe una bici con ese Numero de Serie.', status=404)

        serializer = self.serializer_class(bike, context={
            'request': request
        })
       
        return Response(serializer.data, status=status.HTTP_200_OK)


class BikeCreateAPIView(APIView):
  
    permission_classes = (IsAuthenticated,IsStaff)
    serializer_class = BikeCreateSerializer
    serializer_slot = BikeSlotSerializer
    
    def post(self, request):
       
        serializer_context = {
            'serialNumber': request.data['bike']['serialNumber'],
            'available': request.data['bike']['available'],
            'at_use': request.data['bike']['at_use'],
            'request': request
        }

        serializer_data = request.data.get('bike', {})

        serializer_bike = self.serializer_class( data=serializer_data, context=serializer_context)

        serializer_bike.is_valid(raise_exception=True)
        serializer_bike.save()

        return Response(serializer_bike.data, status=status.HTTP_201_CREATED)

    
class BikeDeleteAPIView(generics.DestroyAPIView):

    permission_classes = (IsAuthenticated,IsStaff)
    serializer_class = BikeCreateSerializer

    def delete(self,request, bike):
       
        try:
            bike_instance=Bike.objects.get(serialNumber = bike)

        except Bike.DoesNotExist:
            return Response('No existe una bici con ese Numero de Serie.', status=404)
        
        
        try:
            slot_instance=Slot.objects.get(bike_id= bike)
        except Slot.DoesNotExist:
            print("NOEXISTE")
            bike_instance.delete()
            return Response('La bici no estaba asociada a ningún SLOT.', status=status.HTTP_200_OK)

        updateSlot = Slot.objects.filter(name = slot_instance.id).update(status = "Disponible", bike_id = NULL)  
        bike_instance.delete()

        return Response('Borrada Correctamente.', status=status.HTTP_200_OK)


class BikeUpdateAPIView(generics.UpdateAPIView):
  
    permission_classes = (IsAuthenticated,IsStaff,)
    serializer_class = BikeUpdateSerializer
    
    def update(self, request):
        
        serializer_context = {
            'serialNumber': request.data['bike']['serialNumber'],
            'available': request.data['bike']['available'],
            'at_use': request.data['bike']['at_use'],
        }

        try:
            bike_instance=Bike.objects.get(id = request.data['bike']['serialNumber'])
            
        except Bike.DoesNotExist:
            return Response('No existe una bici con ese Numero de Serie.', status=404)

        updateBike = Bike.objects.filter(id = request.data['bike']['serialNumber']).update(available = request.data['bike']['available'],
                                                                                            at_use=request.data['bike']['at_use'])       

        return Response(updateBike, status=status.HTTP_201_CREATED)
       

class BikeFavoriteAPIView(APIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeSerializer

    def post(self, request, serialNumber=None):
       
        profile = self.request.user.profile
        serializer_context = {'request': request}
       
        try:
            bike = Bike.objects.get(serialNumber=serialNumber)
          
        except Bike.DoesNotExist:
            return Response('No existe una bici con ese Numero de Serie.', status=404)
        print("+++ VALOR BIKE ++++")
        print(bike)
        profile.favorite(bike)

        serializer = self.serializer_class(bike, context = serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response("HOLA")

        
    def delete(self, request, serialNumber=None):
    
        profile = self.request.user.profile
        serializer_context = {'request': request}

        try:
            bike = Bike.objects.get(serialNumber=serialNumber)
            
        except Bike.DoesNotExist:
           return Response('No existe una bici con ese Numero de Serie.', status=404)

        profile.unfavorite(bike)

        serializer = self.serializer_class(bike, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)



class BikeAvailableUpdateAPIView(generics.UpdateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeSerializer
        
    def update(self, request):

        serializer_context = {
            'serialNumber': request.data['bike']['serialNumber'],
            'available': request.data['bike']['available'],
            'at_use': request.data['bike']['at_use'],
            'request': request
        }
    
        try: #validamos contra base de datos.
            serializer_instance = Bike.objects.get(id=request.data['bike']['serialNumber'])

        except Bike.DoesNotExist:
             raise NotFound('No existe usuario con ese id')
        serializer_data= request.data.get('bike',{})

        serializer = self.serializer_class(
            serializer_instance,
            context=serializer_context, 
            data=serializer_data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class BikeRentAPIView(generics.ListCreateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeRentSerializer
    
    def create(self, request):
     
        serializer_context = {
            'user': request.user.profile.id,
            'slot': request.data['rent']['slot'],
            'request': request
        }
       
        serializer_data = request.data.get('rent', {})

        serializer = self.serializer_class(data=serializer_data, context=serializer_context)

        serializer.is_valid(raise_exception=True)
        serializer.save()
       
        return Response(serializer.data, status=status.HTTP_201_CREATED)   

    def list(self, request):
        print("ENTRA UPDATE LISTTT!!!")
        user_id = self.request.user.profile.id
        rent = RentBike.objects.filter(user_id=user_id)
        incidences = Incidence.objects.filter(user_id=user_id)
        num_rents= len(rent)
        num_incidences=len(incidences)
        # try: #validamos contra base de datos.
        #     incidence_instance = Incidence.objects.get(id=request.data['id'])

        # except Bike.DoesNotExist:
        #      raise NotFound('No existe usuario con ese id')

        # updateIncidence = Incidence.objects.filter(id = incidence_instance.id )
        # serializer_data = self.get_queryset().order_by('id')
        # serializer = self.serializer_class(serializer_data, many=True)

        print(len(rent))
        return Response({'data_rents':num_rents,'data_incidences':num_incidences},status=status.HTTP_200_OK)

class BikeRentUpdateAPIView(generics.ListCreateAPIView):
    
    permission_classes = (IsAuthenticated,)
    serializer_class = BikeRentUpdateSerializer

    def create(self,request):

        serializer_context = {
            'user': request.user.profile.id,
            'slot': request.data['rent']['slot'],
            'request': request
        }
        serializer_data = request.data.get('rent', {})

        serializer = self.serializer_class(data=serializer_data, context=serializer_context)
        serializer.is_valid(raise_exception=True)
        
        serializer.save()
       
        return Response(serializer.data, status=status.HTTP_201_CREATED)
       
    

class IncidenceCreateAPIView(generics.ListCreateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = IncidenceSerializer
    queryset = Incidence.objects.all().order_by('status','created_at')
   
    def create(self,request):

        serializer_context = {
            'user': request.user.profile.id,
            'bike': request.data['incidence']['bike'],
            'description': request.data['incidence']['description'],
            'request': request
        }
        serializer_data = request.data.get('incidence', {})

        serializer_incidence = self.serializer_class( data=serializer_data, context=serializer_context)
        serializer_incidence.is_valid(raise_exception=True)
        serializer_incidence.save()
 
        return Response(serializer_incidence.data, status=status.HTTP_201_CREATED)
    

    def list(self, request):

        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)
        print(serializer.data)
        return Response({
            'incidences': serializer.data
        }, status=status.HTTP_200_OK)





class IncidenceUpdateAPIView(generics.UpdateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = IncidenceSerializer
    queryset= Incidence.objects.all()
    
    def update(self, request):
    
        try: #validamos contra base de datos.
            incidence_instance = Incidence.objects.get(id=request.data['id'])

        except Bike.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        serializer_data = request.data
        serializer_context = {'request': request}

        serializer = self.serializer_class(
            incidence_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class IncidenceCheckedUpdateAPIView(generics.UpdateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = IncidenceSerializer
    
    def update(self, request):
     
        try: #validamos contra base de datos.
            incidence_instance = Incidence.objects.get(id=request.data['id'])

        except Bike.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        updateIncidence = Incidence.objects.filter(id = incidence_instance.id ).update(checked = True)       

        return Response(status=status.HTTP_201_CREATED)

