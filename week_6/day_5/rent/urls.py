from django.urls import path
from .views import *

urlpatterns = [
path('rent/rental', RentalList.as_view(), name='rental-list'),
path('rent/rental/<int:pk>', RentalDetail.as_view(), name='rental-detail'),
path('rent/customer', CustomerList.as_view(), name='customer-list'),
path('rent/vehicle', VehicleList.as_view(), name='vehicle-list')
]