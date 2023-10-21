from rest_framework import serializers
from .models import order
from .models import account

class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = order
        fields = ('id', 'user', 'name', 'foodItem', 'address', 'finished', 'date')

class accountSerializer(serializers.ModelSerializer):
    class Meta:
        model = account
        fields = ('id', 'name', 'email', 'phoneNum', 'address')