from rest_framework import  serializers

from Course.models import StudiVideo

class GetAllStudiVideoSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudiVideo
        fields = '__all__'