from django.urls import path
from . import views

urlpatterns = [
    path("my_view", views.my_view, name="some_my_view_name")
]
