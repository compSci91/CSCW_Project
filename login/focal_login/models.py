from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import CharField
from django.db.models import BooleanField
from django.db.models import TextField
from django.db.models import DateTimeField

class FocalUser(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	userID = CharField(max_length=50)
	type_id = CharField(max_length=50)
	is_active = BooleanField()

class Project(models.Model):
	project_id = models.AutoField(primary_key=True)
	desc = CharField(max_length=150)
	name = CharField(max_length=50)
	file_path = TextField()

class Status(models.Model):
	status_id = models.IntegerField(primary_key=True)
	desc = CharField(max_length=150)
	name = CharField(max_length=50)

class Event(models.Model):
	project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
	status_id = models.ForeignKey(Status, on_delete=models.CASCADE)
	datetime = models.DateTimeField(auto_now_add=True, blank=True)
