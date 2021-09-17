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
    def post(self, request):
        dataserializer = SiginSerializers(data=request.data)
        if not dataserializer.is_valid():
             return Response('Vui long nhap day du')

        Cemail= dataserializer.data['Email']
        Cpass= dataserializer.data['Pass']

        try:
            user= Customer.objects.get(Email= Cemail, Pass=Cpass)
            profile = SigupSerializers(user)
            return Response(data= profile.data, status= status.HTTP_200_OK)
        except Customer.DoesNotExist:

            return Response('dang nhap that bai', status = status.HTTP_400_BAD_REQUEST)                




        

        
       
            
        

