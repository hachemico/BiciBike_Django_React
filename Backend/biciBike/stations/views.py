# from rest_framework import generics, mixins, status, viewsets
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView

from biciBike.bikes.models import Bike

from .serializers import (  StationSerializer, 
                            StationListSerializer,
                            StationRetrieveSerializer, 
                            StationSlotSerializer,
                            SlotSerializer,)

# from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.permissions import (IsAdminUser, AllowAny,IsAuthenticated)
from .models import Station, Slot

class StationViewSetAdmin(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer
    lookup_field = 'name'
    permission_classes = (IsAdminUser,)

    
class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer
    lookup_field = 'name'
    permission_classes = (AllowAny,)

class StationListAPIView(generics.ListAPIView):
    queryset = Station.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = StationRetrieveSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print('*********** serializer.data list ************')
        print(serializer.data)
        return Response({
            'stations': serializer.data
        }, status=status.HTTP_200_OK)
        


class StationRetrieveAPIView(generics.RetrieveAPIView):      ##Obtenemos los SLOTS de la Estación.    #COMPLETAR MAS ADELANTE!
  
    lookup_field = 'name'
    lookup_url_kwarg = 'name'
    queryset = Station.objects.all().prefetch_related('slots')           #obtenemos todas las estaciones. SE PUEDE QUITAR EL PREFETCH?¿?¿¿? PROVAR
    permission_classes = (AllowAny,)
    serializer_class = StationRetrieveSerializer 
   
    
    def filter_queryset(self, queryset):
       
        filters = {self.lookup_field: self.kwargs[self.lookup_url_kwarg]}
       
        return queryset.filter(**filters)
    



class StationSlotUpdateAPIView(generics.UpdateAPIView): #Actualizar el Slot al crear una BIKE
    
    permission_classes = (IsAuthenticated,)
    serializer_class = SlotSerializer

    def update(self, request):
    
        try: #validamos contra base de datos.
            slot_instance = Slot.objects.get(id=request.data['slot']['slot'])

        except Slot.DoesNotExist:
             raise NotFound('No existe SLOT con ese id')

        try: #validamos contra base de datos.
            bike_instance = Bike.objects.get(id=request.data['slot']['bike'])
          
        except Bike.DoesNotExist:
             raise NotFound('No existe bici con ese id')

        updateSlot = Slot.objects.filter(id = slot_instance.id ).update(bike = bike_instance, status = 'No Disponible',name = slot_instance.id)       

     
        return Response(status=status.HTTP_201_CREATED)


class SlotViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSlotSerializer
    permission_classes = (AllowAny,)

