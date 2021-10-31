from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import Comment
from Serializers.CommentSerializers import GetAllCommentSerializers,PostCommentSerializers,UDCommentSerializers,DCommentSerializers
from pymongo import MongoClient

class GetAllComment(APIView):
    def get(self, request):
        list_dictionary = Comment.objects.all()
        mydata = GetAllCommentSerializers(list_dictionary,many=True)
        return Response(data=mydata.data, status = status.HTTP_200_OK)

class CreateComment(APIView):
    def post(self,request):
        mydata = PostCommentSerializers(data=request.data)
        if not mydata.is_valid():
            return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        mydata.save()
        return Response(data=mydata.data, status= status.HTTP_200_OK)

class UpdateComment(APIView):
    def post(self,request):
        mydata = UDCommentSerializers(data=request.data)
        if not mydata.is_valid():
            return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        Mid = mydata.data['id']
        Mbody = mydata.data['body']
        Comment.objects.update_or_create(id=Mid,defaults={'body':Mbody},)
        return Response(data=mydata.data, status= status.HTTP_200_OK)

        

class DeleteComment(APIView):
    def post(self,request):
        mydata = DCommentSerializers( data=request.data)
        if not mydata.is_valid():
            return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        Did = mydata.data['id']
        de = Comment.objects.get(id=Did)
        de.delete()
        return Response(data=mydata.data, status= status.HTTP_200_OK)