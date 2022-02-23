from turtle import title
from django.db import models
from django.utils import timezone


class Bike(models.Model):

    serialNumber= models.CharField(max_length=100,unique=True)             # numero serie.
    created_at  = models.DateTimeField(auto_now_add=True)                    # fecha puesta en marcha.                          # coordenadas longitud.
    station     = models.CharField(max_length=300)
    slot        = models.CharField(max_length=300)                         # Estación en la que se encuentra la bici.
    available   = models.BooleanField(default=True,db_index=True)             # Habilitar / Deshabilitar uso.
    at_use      = models.BooleanField(default=False,db_index=True)                # esta alquilada.                        

    def __str__(self):
        data=(
                self.serialNumber,
                self.created_at,
                self.station,
                self.slot,
                self.available,
                self.at_use
            )
        return str(data)

class RentBike(models.Model):

    user        = models.ForeignKey('profiles.Profile', related_name='profiles', on_delete=models.CASCADE, null=True)
    slot        = models.ForeignKey( 'stations.Slot', related_name='slots', on_delete=models.SET_NULL, null=True)
    bike        = models.ForeignKey('bikes.Bike',related_name ='bikes', on_delete=models.CASCADE, null=True)
    date_start  = models.DateTimeField(default=timezone.now())
    date_finish = models.DateTimeField(null=True)
    from_station= models.ForeignKey( 'stations.Station', related_name='station_from', on_delete=models.SET_NULL, null=True)
    to_station  = models.ForeignKey( 'stations.Station', related_name='station_to', on_delete=models.SET_NULL, null=True)
    state       = models.BooleanField(default=False,db_index=True)
    def __str__(self):
            data=(
                self.bike,
                self.date_start,
                self.date_finish,
                self.from_station,
                self.to_station,
                self.slot,
                self.state,
                self.user
            )
            return str(data)
         # return str(self.user)

class Incidence(models.Model):

    user     = models.ForeignKey( 'profiles.Profile', related_name='incidence_user', on_delete=models.CASCADE, null=True)
    bike        = models.ForeignKey('bikes.Bike',related_name ='incidence_bike', on_delete=models.CASCADE, null=True)
    description = models.CharField(max_length=600,default='Incidencia Bici')
    created_at  = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=200,null=True)
    
    def __str__(self):
        data=(
            self.bike,
            self.created_at,
            self.description,
            self.id,
            self.status,
            self.user
        )
        return str(data)