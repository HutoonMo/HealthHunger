from django.contrib import admin

# Register your models here.
from .models import Recipe
# Register your models here.


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('ingridents', 'glutenfree')


admin.site.register(Recipe, RecipeAdmin)
