from django.db import models

class Bike(models.Model):

    serialNumber = models.CharField(max_length=100,unique=True)             # numero serie.
    created_at = models.DateTimeField(auto_now_add=True)                    # fecha puesta en marcha.
    latitude = models.CharField(max_length=300)                             # coordenadas latitud.
    longitude = models.CharField(max_length=300)                            # coordenadas longitud.
    station = models.CharField(max_length=300)
    slot = models.CharField(max_length=300)                         # Estación en la que se encuentra la bici.
    available = models.BooleanField(default=True,db_index=True)             # Habilitar / Deshabilitar uso.
    at_use = models.BooleanField(default=False,db_index=True)                # esta alquilada.                        
    #it will be an image field but for now working with third party urls
    # author = models.ForeignKey("Author",on_delete=models.SET_NULL,null=True)
    # category = models.ManyToManyField("Category")
    def __str__(self):
        return self.serialNumber 

