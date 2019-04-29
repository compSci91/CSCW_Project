from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from . import serializers
from .permissions import ReadOnly
from rest_framework_jwt.settings import api_settings
from .models import Course
from .models import FocalUser
from django.shortcuts import render, get_object_or_404
from .forms import AddCourseForm



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

class CourseViewSet(viewsets.ModelViewSet):

    queryset = Course.objects.all()
    serializer_class = serializers.CouserSerializer


def add_course(request):

    if request.POST:
        course_form = AddCourseForm(request.POST)

        if course_form.is_valid():
            new_course_form = course_form.save()
            return redirect(new_course_form) #get_absolute_url set on model

        else:
            return render(request,
                'service/add_course.html',
                    {'course_form': course_form}
                    )

    else:
        course_form = AddCourseForm(
                        initial={'name': ' '}
                        )
        return render(request,
                'service/add_course.html',
                {'course_form': course_form}
                )


class FocalUserViewSet(viewsets.ModelViewSet):
    queryset = FocalUser.objects.all()
    serializer_class = serializers.FocalUserSerializer
