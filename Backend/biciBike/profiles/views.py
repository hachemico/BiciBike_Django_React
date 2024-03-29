from rest_framework import serializers, status, generics
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from .models import Profile
from .renderers import ProfileJSONRenderer
from .serializers import ProfileSerializer,ProfileListSerializer



#Admin
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = 'user_id'
    permission_classes = (IsAuthenticated,)
    permission_classes = (IsAdminUser,)


class ProfileRetrieveAPIView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = Profile.objects.select_related('user')
    renderer_classes = (ProfileJSONRenderer,)
    serializer_class = ProfileSerializer

    def retrieve(self, request, username, *args, **kwargs):
        # Try to retrieve the requested profile and throw an exception if the
        # profile could not be found.
        try:
            profile = self.queryset.get(user__username=username)
        except Profile.DoesNotExist:
            raise NotFound('A profile with this username does not exist.')

        serializer = self.serializer_class(profile, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)


class ProfileFollowAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (ProfileJSONRenderer,)
    serializer_class = ProfileSerializer

    def delete(self, request, username=None):
        follower = self.request.user.profile

        try:
            followee = Profile.objects.get(user__username=username)
        except Profile.DoesNotExist:
            raise NotFound('A profile with this username was not found.')

        follower.unfollow(followee)

        serializer = self.serializer_class(followee, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, username=None):
        follower = self.request.user.profile

        try:
            followee = Profile.objects.get(user__username=username)
        except Profile.DoesNotExist:
            raise NotFound('A profile with this username was not found.')

        if follower.pk is followee.pk:
            raise serializers.ValidationError('You can not follow yourself.')

        follower.follow(followee)

        serializer = self.serializer_class(followee, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ProfileFavoriteBikesListAPIView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer

    def list(self, request, username=None):
        print("Entra profileFavoritesAPIView2")
        profile = self.request.user.profile
        serializer_context = {'request': request}

        serializer = self.serializer_class(profile, context = serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ProfileUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ProfileSerializer

    
    def update(self, request):
         
        try: #validamos contra base de datos.
            profile_instance = Profile.objects.get(id=self.request.user.profile.id)
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        Profile.objects.filter(id = self.request.user.id).update(bio = request.data['bio'])       
            
        return Response('Hola', status=status.HTTP_200_OK)