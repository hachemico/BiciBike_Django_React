# from re import I
from pymysql import NULL
from rest_framework import serializers

from biciBike.stations.serializers import SlotSerializer

# from BiciBike_Django_React.Backend.biciBike.stations.serializers import SlotSerializer
from .models import Bike, RentBike
from rest_framework.exceptions import NotFound
from biciBike.profiles.models import Profile
from biciBike.stations.models import Slot, Station
from biciBike.bikes.models import Bike, RentBike

from biciBike.stations.serializers import StationSerializer

from biciBike.profiles.serializers import ProfileSerializer

from django.utils import timezone
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
    slot= StationSerializer(read_only = True)
    # user = ProfileSerializer(read_only = True)

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
            print("USER")
            print(user)
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        try:#valores station, bike, status from SLOT
            slot_id = self.context['slot']
            print("valor slot_id "+slot_id)
            slot=Slot.objects.get(id=slot_id)
            print("SLOT")
            print(slot)
        except Slot.DoesNotExist:
             raise NotFound('No existe slot con ese id')

        rentBike= RentBike.objects.create(user = user,bike = slot.id_bike,from_station = slot.station, slot=slot , state = True)

        refreshBike = Bike.objects.filter(id = str(slot.id_bike)).update( at_use = True , station = ' ', slot= ' ')

        refreshSlot = Slot.objects.filter(id = slot_id).update(id_bike = '', status = 'Disponible')
        
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

        print("+++++ UPDATE SERIALIZER +++++")
       
        try: #validamos contra base de datos.
            user_id = self.context['user']
            user = Profile.objects.get(id=user_id)

            print("USER_ID >> "+ str(user_id))
        except Profile.DoesNotExist:
             raise NotFound('No existe usuario con ese id')

        try:#valores station, bike, status from SLOT
            slot_id = self.context['slot']
            print("Slot_id >>"+slot_id)

            slot=Slot.objects.get(id=slot_id)
            print("Valor SlotID>> "+str(slot.id))
            print("Valor Station>> ")
            print(slot.station)
            print(str(slot.station))
            print("Valor Slot-STATUS>> "+str(slot.status))
            print("Valor Slot >>"+ str(slot))
            
        except Slot.DoesNotExist:
             raise NotFound('No existe slot con ese id')

        try:#valores station, bike, status from SLOT
    
            rent=RentBike.objects.filter(user_id=user_id).filter(state=True)
            
            if rent is None:
                return False
            aux = rent[0].bike_id
            print("Valor Rent>> ")
            print(rent)          
            print("Valor Rent-UserID>> "+ str(rent[0].user_id))
            print("Valor Rent-State>> "+ str(rent[0].state))
            print("Valor rent-BikeID>> "+ str(rent[0].bike_id))
            print("Valor rent-Station>> "+ str(rent[0].to_station))

            refreshBike = Bike.objects.filter(id = str(rent[0].bike_id)).update( at_use = False , station = str(slot.station), slot= slot_id)
            refreshRent = RentBike.objects.filter(id = str(rent[0].id)).update( state = False , to_station = slot.station, slot=slot.id, date_finish=timezone.now())
            
            print("Valor rent-BikeID DESPUES>> "+ str(aux))
            print("Valor slot-ID DESPUES>> "+ str(slot_id))
            refreshSlot = Slot.objects.filter(id = slot_id).update(id_bike = aux, status = 'No Disponible')   

        except Slot.DoesNotExist:
             raise NotFound('No existe slot con ese id')

        return refreshSlot
