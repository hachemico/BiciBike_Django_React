# from rest_framework import generics, mixins, status, viewsets
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView

from .serializers import BikeSerializer, BikeListSerializer, BikeDetailSerializer

# from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.permissions import (IsAdminUser, AllowAny,)
from .models import Bike


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


class BikeRetrieveAPIView(RetrieveAPIView):
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