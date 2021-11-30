from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import Quiz
from Serializers.QuizSerializers import GetAllQuizSerializers

class GetAllQuiz(APIView):
    def get(self, request):
        list_quiz=  Quiz.objects.all()
        mydata= GetAllQuizSerializers(list_quiz,many=True)
        return Response(data= mydata.data,status=status.HTTP_200_OK)