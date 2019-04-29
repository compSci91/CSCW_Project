from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import CharField
from django.db.models import BooleanField
from django.db.models import TextField
from django.db.models import DateTimeField
from django import forms
from .models import Course

class AddCourseForm(forms.ModelForm):

    class Meta:
        model = Course
        fields = [
            'name'
        ]

    