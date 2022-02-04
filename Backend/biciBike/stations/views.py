# from rest_framework import generics, mixins, status, viewsets
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView

from .serializers import StationSerializer, StationListSerializer, StationRetrieveSerializer, StationSlotSerializer

# from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.permissions import (IsAdminUser, AllowAny,)
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
    serializer_class = StationListSerializer

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
        # The built-in list function calls `filter_queryset`. Since we only
        # want comments for a specific article, this is a good place to do
        # that filtering.
        print('*********** DEBUG ************')
        filters = {self.lookup_field: self.kwargs[self.lookup_url_kwarg]}
        print(filters)
        return queryset.filter(**filters)
    



class SlotViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSlotSerializer
    permission_classes = (AllowAny,)

