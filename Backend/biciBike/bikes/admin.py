from django.contrib import admin
from .models import Bike, RentBike

# Register your models here.
admin.site.register(Bike)
admin.site.register(RentBike)