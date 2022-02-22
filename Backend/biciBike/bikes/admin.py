from django.contrib import admin
from .models import Bike, RentBike, Incidence

# Register your models here.
admin.site.register(Bike)
admin.site.register(RentBike)
admin.site.register(Incidence)