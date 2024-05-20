from django.db import models

# Create your models here.
class Pets(models.Model):
    breed = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    weight = models.IntegerField(null=True)
    age = models.IntegerField(null=True)

    def age(self):
        try:
            return self.age       
        except:
            return "No age provided"
