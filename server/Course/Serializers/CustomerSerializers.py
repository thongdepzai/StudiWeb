from rest_framework import serializers
from django.contrib.postgres.fields import ArrayField

from Course.models import Customer

class SigupSerializers(serializers.ModelSerializer):
    # 
    class Meta:
        model = Customer
        fields = '__all__'
    

class SiginSerializers(serializers.ModelSerializer):
    Email = serializers.CharField(max_length=500)
    Pass = serializers.CharField(max_length=200) 

    class Meta:
        model = Customer
        fields = ('Email','Pass')


class UpdateListCourseSerializers(serializers.ModelSerializer):
    id = serializers.CharField(max_length=500)
   
    class Meta:
        model = Customer
        fields = ('id')

class UpdateCustommerSerializers(serializers.ModelSerializer):
    id = serializers.CharField(max_length=500)    
    Name = serializers.CharField(max_length=500)
    Birthday = serializers.CharField(max_length=100)
    Email = serializers.EmailField(max_length=200)
    Pass = serializers.CharField(max_length=100)
    Sex = serializers.CharField(max_length=200,default="")

    class Meta:
        model = Customer
        fields = ('id','Name','Birthday','Email','Pass','Sex')