from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Event
from .models import Project
from .models import FocalUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class FocalUserSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = FocalUser
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'user_id',  'type_id', 'is_active')

class ProjectSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = Project
        fields = ('project_id', 'desc', 'name', 'file_path')

class EventSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = Event
        fields = ('project_id', 'status_id', 'datetime')