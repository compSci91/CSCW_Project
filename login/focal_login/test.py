#!/usr/bin/env python
from django.test import TestCase
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import CharField
from django.db.models import BooleanField
from django.db.models import TextField
from django.db.models import DateTimeField
from django import forms
from .models import Course
from .forms import CourseCreateForm

class TestCourseCreateForm(TestCase):
    """
    TESTS: form.is_valid
    """
    # form.is_valid=True
    # middle_name not required.
    # middle_name is blank.
    def test_form_valid_middle_optional_blank(self):
        name_form_data = {'name': 'Test Course',     # Required
                            'projects': '',       # Optional
                
                        }
        name_form = CourseCreateForm(data=name_form_data)

        self.assertTrue(name_form.is_valid())