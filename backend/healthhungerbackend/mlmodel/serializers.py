# todo/serializers.py

from rest_framework import serializers
from .models import Recipe


class mlmodelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'ingridents', 'glutenfree')
