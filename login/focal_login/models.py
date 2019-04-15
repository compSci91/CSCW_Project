from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import CharField
from django.db.models import BooleanField


class FocalUser(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	userID = CharField(max_length=50)
	type_id = CharField(max_length=50)
	is_active = BooleanField()

	'''def get_username(self):
			return self.username
			
	def get_email(self):
		return self.email

	def get_first_name(self):
		return self.first_name

	def get_last_name(self):
		return self.last_name

	def get_password(self):
		return self.password
	
	def get_userID(self):
		return self.userID

	def get_type_id(self):
		return self.type_id

	def get_is_active(self):
		return self.is_active'''

class Event(models.Model):
	def __init__(self, status_id, project_id, datetime=None):
		self.project_id = project_id		
		self.status_id = status_id
		self.datetime = datetime

	def get_project_id(self):
		return self.project_id

	def get_status_id(self):
		return self.status_id

	def get_date(self):
		return self.datetime

class Project(models.Model):
	def __init__(self, name, desc, file_path, project_id=None):
		self.project_id = project_id		
		self.desc = desc
		self.name = name
		self.file_path = file_path

	def get_project_id(self):
		return self.project_id

	def get_desc(self):
		return self.desc

	def get_name(self):
		return self.name

	def get_file_path(self):
		return self.file_path