from biciBike.core.renderers import BiciBikeJSONRenderer


class ProfileJSONRenderer(BiciBikeJSONRenderer):
    object_label = 'profile'
    pagination_object_label = 'profiles'
    pagination_count_label = 'profilesCount'
