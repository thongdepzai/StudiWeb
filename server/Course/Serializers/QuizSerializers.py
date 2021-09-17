from rest_framework import  serializers

from Course.models import Quiz


class GetAllQuizSerializers(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'