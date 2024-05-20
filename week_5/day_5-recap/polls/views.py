from urllib import request
from django.shortcuts import render  # this line is added automatically
from django.http import HttpResponse  # pass view information into the browser
from .models import Pets  # import the model from the models.py file


# takes a request, returns a response
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def page(request):
    # pets = Pets.objects.all()
    return render(request, "index.html", {"pets": Pets.objects.all()})

