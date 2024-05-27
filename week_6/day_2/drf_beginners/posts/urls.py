from django.urls import path
from .views import *

urlpatterns = [
    path("api/get/", post_view, name="post_view"),
    path("api/post/", post_view, name="post_view"),
    path("api/detail/<int:pk>/", post_detail_view, name="post_detail_view"),
]
