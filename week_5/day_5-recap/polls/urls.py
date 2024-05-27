from django.urls import path
from . import views

urlpatterns = [
    path("poll/", views.index, name="index"),
    path("", views.page, name="page"),
]
