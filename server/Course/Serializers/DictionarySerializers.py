from rest_framework import serializers

from Course.models import Dictionary

class GetAllDictionarySerializers(serializers.ModelSerializer):
    class Meta:
        model = Dictionary
        fields = '__all__'