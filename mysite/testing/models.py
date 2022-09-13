from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.TextField(blank=False)
    designation = models.TextField(blank=False)
    imagess =  models.ImageField(upload_to ='uploads/',blank =True)
    def __str__(self):
        return self.name
    
