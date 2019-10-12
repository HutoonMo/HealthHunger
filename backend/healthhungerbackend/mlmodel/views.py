from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import mlmodelSerializer      # add this
from .models import Recipe                     # add this

class mlmodelView(viewsets.ModelViewSet):       # add this
    serializer_class = mlmodelSerializer          # add this
    queryset = Recipe.objects.all()              # add this