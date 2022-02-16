from django.conf.urls import include, url
from django.urls import reverse
from .views import (LoginAPIView, 
                    RegistrationAPIView,
                    UserRetrieveUpdateAPIView,
                    UserViewSet, 
                    UserAdminAPIView,
)

app_name = 'authentication'

#Admin
user_list = UserViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    url(r'^user/?$', UserRetrieveUpdateAPIView.as_view()),
    url(r'^users/?$', RegistrationAPIView.as_view()),
    url(r'^users/login/?$', LoginAPIView.as_view()),
    url(r'^user/isAdmin/?$', UserAdminAPIView.as_view()),
    #Admin
    url(r'^userlist/$', user_list, name='user_list'),                                       
    url(r'^userdetail/(?P<username>[0-9a-zA-Z_-]+)/$', user_detail, name='user_detail'), 
]
