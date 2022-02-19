# from rest_framework import generics, mixins, status, viewsets
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
# from rest_framework.generics import (RetrieveAPIView , UpdateAPIView, RetrieveUpdateDestroyAPIView)
from .serializers import (  BikeSerializer, 
                            BikeListSerializer,
                            BikeDetailSerializer,
                            BikeRentSerializer,
                            BikeRentUpdateSerializer,
                            )

# from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.permissions import (IsAdminUser, AllowAny,IsAuthenticated)
from biciBike.core.permissions import IsStaff
from .models import Bike

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
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print('*********** serializer.data ************')
        print(serializer.data)
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
        print('*********** serializer.data ************') 
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BikeFavoriteAPIView(APIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeSerializer

    def post(self, request, serialNumber=None):
        
        print('*********** BikeFavouriteAPIView ************') 

        profile = self.request.user.profile
        serializer_context = {'request': request}

        try:
            bike = Bike.objects.get(serialNumber=serialNumber)
            print("*******bike*********")
            print(bike)
        except Bike.DoesNotExist:
            return Response('No existe una bici con ese Numero de Serie.', status=404)

        profile.favorite(bike)

        serializer = self.serializer_class(bike, context = serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

        
    def delete(self, request, serialNumber=None):
        
        print('*********** Bike-UNfavouriteAPIView ************') 
        profile = self.request.user.profile
        serializer_context = {'request': request}

        try:
            bike = Bike.objects.get(serialNumber=serialNumber)
            print("*******bike*********")
            print(bike)
            # favs= 
        except Bike.DoesNotExist:
           return Response('No existe una bici con ese Numero de Serie.', status=404)

        profile.unfavorite(bike)

        serializer = self.serializer_class(bike, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

# EDITANDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

class BikeAvailableUpdateAPIView(generics.UpdateAPIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeSerializer
        
    def update(self, request):
    
        print("ENTRA BIKE AVAILABLE")
        print(request.data['bike']['at_use'])

        serializer_context = {
            'serialNumber': request.data['bike']['serialNumber'],
            'available': request.data['bike']['available'],
            'slot': request.data['bike']['slot'],
            'station': request.data['bike']['station'],
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


# EDITANDDDDDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

class BikeRentAPIView(generics.ListCreateAPIView):

    # print("BIKE RENT APIVIEW")

    permission_classes = (IsAuthenticated,)
    serializer_class = BikeRentSerializer
    
    def create(self, request):
        print("USER ID")
        print(request.user.profile.id)
        serializer_context = {
            'user': request.user.profile.id,
            'slot': request.data['rent']['slot'],
            'request': request
        }
        print("BIKE RENT APIVIEW")
        # serializer_data = request.data.station

        serializer_data = request.data.get('rent', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        
        )

        serializer.is_valid(raise_exception=True)
        
        serializer.save()
        print("serializer_data")
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class BikeRentUpdateAPIView(generics.ListCreateAPIView):
    
    permission_classes = (IsAuthenticated,)
    serializer_class = BikeRentUpdateSerializer

    def create(self,request):

        print("dentro del update RENT")
        print("VALOR IDUSUARIO")
        print(request.user.profile.id)
        print(request.data)
        serializer_context = {
            'user': request.user.profile.id,
            'slot': request.data['rent']['slot'],
            'request': request
        }
        serializer_data = request.data.get('rent', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        
        )

        serializer.is_valid(raise_exception=True)
        
        serializer.save()
        print("serializer_data")
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return "hola"