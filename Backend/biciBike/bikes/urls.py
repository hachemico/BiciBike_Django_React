from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (
    BikeViewSetAdmin,
    BikeViewSet,
    BikeListAPIView,
    BikeRetrieveAPIView,
    BikeFavoriteAPIView,
    BikeRentAPIView,
    BikeRentUpdateAPIView,
    BikeAvailableUpdateAPIView
)

app_name = 'bikes'

router = DefaultRouter()
router.register(r'bikes_Admin', BikeViewSetAdmin)
# router.register(r'bikes', BikeViewSet) 

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^bikes/?$', BikeListAPIView.as_view()), 
    url(r'^bikes/rent/?$',BikeRentAPIView.as_view()),
    url(r'^bikes/rentUpdate/?$',BikeRentUpdateAPIView.as_view()),
    url(r'^bikes/availableUpdate/?$',BikeAvailableUpdateAPIView.as_view()),
    url(r'^bikes/(?P<serialNumber>\w+)/?$', BikeRetrieveAPIView.as_view()),
    url(r'^bikes/(?P<serialNumber>[-\w]+)/favorite/?$',BikeFavoriteAPIView.as_view()),
    
    #  url(r'^bikes/(?P<serialNumber>[-\w]+)/rent/?$',BikeRentAPIView.as_view()),
  
    # url(r'^posts/(?P<name>\w+)/?$', PostRetrieveAPIView.as_view()),  
]