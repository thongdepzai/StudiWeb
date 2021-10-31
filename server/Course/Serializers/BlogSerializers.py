from rest_framework import serializers

from Course.models import Blog

class GetAllBlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'