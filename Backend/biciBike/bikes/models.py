from django.db import models
from django.utils import timezone
class Bike(models.Model):

    serialNumber= models.CharField(max_length=100,unique=True)             # numero serie.
    created_at  = models.DateTimeField(auto_now_add=True)                    # fecha puesta en marcha.
    latitude    = models.CharField(max_length=300)                             # coordenadas latitud.
    longitude   = models.CharField(max_length=300)                            # coordenadas longitud.
    station     = models.CharField(max_length=300)
    slot        = models.CharField(max_length=300)                         # Estación en la que se encuentra la bici.
    available   = models.BooleanField(default=True,db_index=True)             # Habilitar / Deshabilitar uso.
    at_use      = models.BooleanField(default=False,db_index=True)                # esta alquilada.                        
    #it will be an image field but for now working with third party urls
    # author = models.ForeignKey("Author",on_delete=models.SET_NULL,null=True)
    # category = models.ManyToManyField("Category")
    def __str__(self):
        return self.serialNumber 

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
                self.user,
                self.slot,
                self.bike,
                self.date_start,
                self.date_finish,
                self.from_station,
                self.to_station,
                self.state
            )
            return str(data)
         # return str(self.user)