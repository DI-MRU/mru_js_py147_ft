from django.db import models
from datetime import datetime

# Create your models here.

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=40)
    birth_date = models.DateField()
    has_pet = models.BooleanField(default=True)
    number_pet = models.IntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class ImageProfile (models.Model):
    person = models.OneToOneField(
        Person,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    image = models.URLField()

    def __str__(self):
        return f'ImageProfile of {self.person.first_name} {self.person.last_name}'


class Post(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    released_date = models.DateField(default = datetime.now())
    author = models.ForeignKey(Person, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'

class Category(models.Model):
    name = models.CharField(max_length=50)
    posts = models.ManyToManyField(Post, related_name='categories', blank=True)
    # related_name is to retrieve the categories from a post

    def __str__(self):
        return f'Category {self.name}'