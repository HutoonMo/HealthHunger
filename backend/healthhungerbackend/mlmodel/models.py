from django.db import models

# Create your models here.


class Recipe(models.Model):

    ingridents = models.CharField(max_length=10000)

    glutenfree = models.BooleanField(default=False)

    def _str_(self):
        return self.ingridents
