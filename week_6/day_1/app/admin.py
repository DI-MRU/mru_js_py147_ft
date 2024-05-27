from django.contrib import admin
from .models import Person, ImageProfile, Post, Category

# Register your models here.

admin.site.register(Person)
admin.site.register(ImageProfile)
admin.site.register(Post)
admin.site.register(Category)
