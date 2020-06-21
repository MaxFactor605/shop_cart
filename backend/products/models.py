from django.db import models

# Create your models here.
class Cart(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.FloatField()
    quantity = models.IntegerField(default=1)


    def __str__(self):
        return self.title 


class Product(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.FloatField()


    def __str__(self):
        return self.title