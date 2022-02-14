from pymysql import NULL
from rest_framework import serializers
from .models import Bike, RentBike
from rest_framework.exceptions import NotFound
from biciBike.profiles.models import Profile
from biciBike.stations.models import Slot
from biciBike.bikes.models import Bike

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
            'serialNumber',
            'station',
            'available'
        ]

class BikeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
        'serialNumber',
        'station',
        'available'
        ]

class BikeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
        'serialNumber',
        'available',
        'created_at'
        ]

class BikeRentSerializer(serializers.ModelSerializer):
    # print("BIKE RENT SERIALIZER")
    # date_start = serializers.SerializerMethodField(method_name='get_date_start')
    class Meta:
        model = RentBike
        fields = [
           'user',
           'bike',
           'slot',
           'date_start',
           'date_finish' 
        ]
    def create(self, validated_data):

        try: #validamos contra base de datos.
            user_id = self.context['user']
            user = Profile.objects.get(id=user_id)

        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        try:#valores station, bike, status from SLOT
            slot_id = self.context['slot']
            slot=Slot.objects.get(id=slot_id)
         
        except Slot.DoesNotExist:
             raise NotFound('No existe slot con ese id')

        rentBike= RentBike.objects.create(user=user,bike=slot.id_bike,from_station=slot.station)

        refreshSlot = Slot.objects.filter(id = slot_id).update(id_bike = '', status = 'Disponible')
        
        refreshBike = Bike.objects.filter(id = str(slot.id_bike)).update( at_use = True , station = ' ', slot= ' ')
       
        return rentBike
    
    def update(self,validated_data):

        print("UPDATE SERIALIZER")
        print(self)
        try: #validamos contra base de datos.
            user_id = self.context['user']
            user = Profile.objects.get(id=user_id)

        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        slot_id = self.context['slot']
        print("SLOT ID******")
        print(slot_id)



        return "hola"
