# from re import I
from ast import Global
from rest_framework import serializers

from biciBike.stations.serializers import SlotSerializer


from .models import Bike, Incidence, RentBike
from rest_framework.exceptions import NotFound
from biciBike.profiles.models import Profile
from biciBike.stations.models import Slot, Station
# from biciBike.bikes.models import Bike, RentBike,Incidence

from biciBike.stations.serializers import StationSerializer

from django.utils import timezone

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
            'serialNumber',
            'available',
            'at_use'
        
        ]

class BikeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
        'serialNumber',
        'available',
        'at_use'
        ]

class BikeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
        'serialNumber',
        'available',
        'created_at'
        ]

class BikeCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bike
        fields = [
            'serialNumber',
            'available',
            'at_use'
        ]
        
    def create(self, validated_data):
        
        valueBike = Bike.objects.create(serialNumber = self.context['serialNumber'],
                                        available = self.context['available'], 
                                        at_use=self.context['at_use'])
           
        return valueBike


class BikeUpdateSerializer(serializers.ModelSerializer):
    class Meta:
            model = Bike
            fields = [
                'serialNumber',
                'available',
                'at_use'
            ]


class BikeSlotSerializer(serializers.ModelSerializer):
   
    bike= BikeSerializer(read_only = True)
    class Meta:
        model = Slot
        fields = [
            'station',
            'bike',
            'status',
            'name'
        ]



class BikeRentSerializer(serializers.ModelSerializer):
 
    slot= StationSerializer(read_only = True)
   
    class Meta:
        model = RentBike
        fields = [
           'user',
           'bike',
           'slot',
           'from_station',
           'date_start',
           'date_finish',
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

        rentBike= RentBike.objects.create(user = user,bike = slot.bike,from_station = slot.station, slot=slot , state = True)

        refreshBike = Bike.objects.filter(id = str(slot.bike.id)).update( at_use = True)

        refreshSlot = Slot.objects.filter(id = slot_id).update(bike = '', status = 'Disponible')
        
        refreshUser = Profile.objects.filter(id=user_id).update(rentActive=True)
        return rentBike

class BikeRentUpdateSerializer(serializers.ModelSerializer):  
    class Meta:
        
        model = RentBike
        fields = [
           'user',
           'bike',
           'slot',
           'date_start',
           'date_finish',
           'from_station',
           'to_station' 
        ]

    def create(self,validated_data):
       
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

        try:#valores station, bike, status from SLOT
    
            rent=RentBike.objects.filter(user_id=user_id).filter(state=True)
            
            if rent is None:
                return False
            aux = rent[0].bike_id

            refreshBike = Bike.objects.filter(id = str(rent[0].bike_id)).update( at_use = False)
            refreshRent = RentBike.objects.filter(id = str(rent[0].id)).update( state = False , to_station = slot.station, slot=slot.id, date_finish=timezone.now())
            refreshSlot = Slot.objects.filter(id = slot_id).update(bike = aux, status = 'No Disponible') 
            refreshUser = Profile.objects.filter(id=user_id).update(rentActive=False)  

        except Slot.DoesNotExist:
             raise NotFound('No existe slot con ese id')

        return refreshSlot

class IncidenceSerializer(serializers.ModelSerializer):  
    class Meta:
        
        model = Incidence
        fields = [
            'id',
            'user',
            'bike',
            'description',
            'created_at',
            'checked',
            'status',
            
        ]

    def create(self, validated_data):
        
        try: #validamos contra base de datos.
            user = Profile.objects.get(id=self.context['user'])
            print(user)
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')
        
        try: #validamos contra base de datos.
         
            bike = Bike.objects.get(id=self.context['bike'])

        except Bike.DoesNotExist:
             raise NotFound('No existe bici con ese id')

        incidence= Incidence.objects.create(user = user,bike = bike, description = self.context['description'], status = "Pendiente")
      
           
        return incidence