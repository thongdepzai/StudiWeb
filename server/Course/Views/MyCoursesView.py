from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import MyCourses
from Serializers.MyCourseSerialzers import GetAllMyCoursesSerializer

class GetAllMyCourses(APIView):
    def get(self, request):
        list_courses=  MyCourses.objects.all()
        mydata= GetAllMyCoursesSerializer(list_courses,many=True)
        return Response(data= mydata.data,status=status.HTTP_200_OK)


class PostMyCourses(APIView):
    def post(self,request):
        mydata = GetAllMyCoursesSerializer(data=request.data)
        if not mydata.is_valid():
             return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        mydata.save()
        return  Response(data=mydata.data, status= status.HTTP_200_OK)



  