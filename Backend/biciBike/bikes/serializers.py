from rest_framework import serializers
from .models import Bike



class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ['serialNumber']

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
        'available'
        'created_at'
        ]