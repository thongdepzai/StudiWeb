from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import Dictionary
from Serializers.DictionarySerializers import GetAllDictionarySerializers

class GetAllDictionarry(APIView):
    def get(self, request):
        list_dictionary = Dictionary.objects.all()
        mydata = GetAllDictionarySerializers(list_dictionary,many=True)
        return Response(data=mydata.data, status = status.HTTP_200_OK)