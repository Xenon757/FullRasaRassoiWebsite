from django.shortcuts import render
from rest_framework import viewsets
from .serializers import orderSerializer, accountSerializer
from .models import order, account

# Create your views here.

class OrderView(viewsets.ModelViewSet):
    serializer_class = orderSerializer
    queryset = order.objects.all()

class accountView(viewsets.ModelViewSet):
    serializer_class = accountSerializer
    queryset = account.objects.all()
