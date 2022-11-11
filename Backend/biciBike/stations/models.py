from django.db import models

class Station(models.Model):

    name        = models.CharField(max_length=100,unique=True)             # numero serie.
    created_at  = models.DateTimeField(auto_now_add=True)                    # fecha puesta en marcha.
    latitude    = models.CharField(max_length=300)                             # coordenadas latitud.
    longitude   = models.CharField(max_length=300)                            # coordenadas longitud.
    slot_number = models.CharField(max_length=300)                              # Estación en la que se encuentra la bici.
           
    def __str__(self):
        return self.name

class Slot(models.Model):

    name     = models.CharField(max_length=300, blank=True, default='' )
    station     = models.ForeignKey('stations.Station', related_name='slots', on_delete=models.CASCADE, null=True)
    bike     = models.OneToOneField('bikes.Bike', related_name='slots', on_delete=models.SET_NULL, null=True, blank=True)
    status      = models.CharField(max_length=300)
 
    def __str__(self):
        campos=(
            self.name,
            self.station,
            self.bike,
            self.status,
        )
        return str(campos)