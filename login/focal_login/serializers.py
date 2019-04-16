from django.contrib.auth.models import User
from rest_framework import serializers
from .models import FocalUser
from .models import Event
from .models import Project


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

class FocalUserSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = FocalUser
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'userID',  'type_id', 'is_active')

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
        
