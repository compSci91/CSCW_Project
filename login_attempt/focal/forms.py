from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import FocalUser

class FocalUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = FocalUser
        fields = ('username', 'email')

class FocalUserChangeForm(UserChangeForm):

    class Meta:
        model = FocalUser
        fields = ('username', 'email')