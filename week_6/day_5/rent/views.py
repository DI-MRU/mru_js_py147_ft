from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *


class RentalList(APIView):

    def get(self, request, format=None):
        rentals = Rental.objects.all()
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalDetail(APIView):

    def get(self, request, pk, format=None):
        rental = Rental.objects.get(pk=pk)
        serializer = RentalSerializer(rental)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        rental = Rental.objects.get(pk=pk)
        serializer = RentalSerializer(rental, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        rental = Rental.objects.get(pk=pk)
        rental.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CustomerList(APIView):

    def get(self, request, format=None):
        customer = Customer.objects.all()
        serializer = CustomerSerializer(customer, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleList(APIView):

    def get(self, request, format=None):
        vehicle = Vehicle.objects.all()
        serializer = VehicleSerializer(vehicle, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleDetail(APIView):

    def get(self, request, pk, format=None):
        vehicle = Vehicle.objects.get(pk=pk)
        serializer = VehicleSerializer(vehicle)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        vehicle = Vehicle.objects.get(pk=pk)
        serializer = VehicleSerializer(vehicle, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        vehicle = Vehicle.objects.get(pk=pk)
        vehicle.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
