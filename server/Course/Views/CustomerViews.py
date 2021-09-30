from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from rest_framework import status
from Course.models import Customer
from Serializers.CustomerSerializers import SiginSerializers, SigupSerializers

class SigupView(APIView):
    def post(self, request):
        mydata = SigupSerializers(data=request.data)
        if not mydata.is_valid():
            return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        mydata.save()
        return Response(data=mydata.data, status= status.HTTP_200_OK)


class SiginView(APIView):                     
    def get(self, request):
        list_customer = Customer.objects.all()
        mydata = SigupSerializers(list_customer, many= True)
        return Response(data= mydata.data,status=status.HTTP_200_OK)



        

        
       
            
        

