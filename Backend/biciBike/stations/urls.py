from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (
    StationViewSetAdmin,StationViewSet,StationListAPIView,StationRetrieveAPIView
)

app_name = 'stations'

router = DefaultRouter()
router.register(r'stations_Admin', StationViewSetAdmin)
router.register(r'stations_Admin', StationViewSetAdmin)
# router.register(r'bikes', BikeViewSet) 

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^stations/?$', StationListAPIView.as_view()), 
    url(r'^stations/(?P<name>\w+)/slots/?$', StationRetrieveAPIView.as_view()),
    # url(r'^stations/(?P<name>\w+)/?$', StationRetrieveAPIView.as_view()),  
]