from rest_framework import serializers
from .models import Station, Slot
from biciBike.bikes.models import Bike, RentBike
# from biciBike.bikes.serializers import BikeSerializer

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['name']

class StationListSerializer(serializers.ModelSerializer):  #LIST VIEWSET NO_ADMIN
    class Meta:
        model = Station
        fields = [
        'name',
        'slot_number',
        'latitude',
        'longitude',
       
        ]


class StationSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'

    def to_list(self, instance):
        return{
            'name': instance.name,
            'slot_number': instance.slot_number,
            'slots': list(Slot.objects.filter(Station=instance.id).values())
        }

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
            'serialNumber',
            'station',
            'available',
            'at_use',
            'slot'
        ]

class SlotSerializer(serializers.ModelSerializer):

    bike= BikeSerializer(read_only = True)
    class Meta:
        model = Slot
        fields = [
            'station',
            'bike',
            'status',
            'name'
        ]

class StationRetrieveSerializer(serializers.ModelSerializer): #Serializer Slots por Stacion.

    slots = SlotSerializer(many=True)
    class Meta:
        model = Station
        fields = [
        'name',
        'slot_number',
        'latitude',
        'longitude',
        'slots'
       
        ]