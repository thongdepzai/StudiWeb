from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Course.models import Blog
from Serializers.BlogSerializers import GetAllBlogSerializers

class GetAllBlog(APIView):
    def get(self, request):
        list_dictionary = Blog.objects.all()
        mydata = GetAllBlogSerializers(list_dictionary,many=True)
        return Response(data=mydata.data, status = status.HTTP_200_OK)

    def post(self, request):
        mydata = GetAllBlogSerializers(data=request.data)
        if not mydata.is_valid():
            return Response(mydata.errors ,status= status.HTTP_400_BAD_REQUEST)
        mydata.save()
        return Response(data=mydata.data, status= status.HTTP_200_OK)


