from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import FocalUserCreationForm, FocalUserChangeForm
from .models import FocalUser

class FocalUserAdmin(UserAdmin):
    add_form = FocalUserCreationForm
    form = FocalUserChangeForm
    model = FocalUser
    list_display = ['email', 'username',]

admin.site.register(FocalUser, FocalUserAdmin)