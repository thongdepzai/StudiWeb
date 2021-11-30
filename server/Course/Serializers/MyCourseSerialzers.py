from rest_framework import serializers

from Course.models import MyCourses

class GetAllMyCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyCourses
        fields = '__all__'