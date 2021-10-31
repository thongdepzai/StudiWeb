from rest_framework import serializers

from Course.models import Comment

class GetAllCommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PostCommentSerializers(serializers.ModelSerializer):
    userId= serializers.CharField(max_length=500)
    username= serializers.CharField(max_length=500)
    blogId = serializers.CharField(max_length=500)
    body= serializers.CharField(max_length=1000)
    parentId= serializers.CharField(max_length=500)
    createdAt= serializers.CharField(max_length=300)

    class Meta:
        model = Comment
        fields = ('userId','username','body','parentId','createdAt','blogId')

class UDCommentSerializers(serializers.ModelSerializer):
    id = serializers.CharField(max_length=500)
    userId= serializers.CharField(max_length=500)
    username= serializers.CharField(max_length=500)
    body= serializers.CharField(max_length=1000)
    parentId= serializers.CharField(max_length=500)
    createdAt= serializers.CharField(max_length=300)

    class Meta:
        model = Comment
        fields = ('id','userId','username','body','parentId','createdAt')
 
class DCommentSerializers(serializers.ModelSerializer):
    id = serializers.CharField(max_length=500)
    
    class Meta:
        model = Comment
        fields = ('id',)
    