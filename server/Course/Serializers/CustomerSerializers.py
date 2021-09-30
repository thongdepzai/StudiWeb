from rest_framework import serializers

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