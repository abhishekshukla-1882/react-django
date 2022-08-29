from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.TextField(blank=False)
    designation = models.TextField(blank=False)
    def __str__(self):
        return self.name
    
