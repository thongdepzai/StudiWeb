from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import StudiVideo
from Serializers.StudiVideoSerializers import GetAllStudiVideoSerializers

class GetAllStudiVideo(APIView):
    def get(self, request):
        list_video = StudiVideo.objects.all()
        mydata = GetAllStudiVideoSerializers(list_video,many=True)
        return Response(data=mydata.data, status = status.HTTP_200_OK)
