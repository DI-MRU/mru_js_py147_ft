from django.urls import path
from . import views


urlpatterns = [
    path("page/", views.index, name="index"),
    path("", views.display, name="display"),
]
