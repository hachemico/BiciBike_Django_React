from rest_framework import serializers
from .models import Station, Slot

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


class SlotSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Slot
        fields = [
            'station',
            'id_bike',
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