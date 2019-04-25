from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from . import serializers
from .permissions import ReadOnly
from rest_framework_jwt.settings import api_settings



def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    return render(request, 'index.html')


class UserViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the User model
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (ReadOnly, )

    