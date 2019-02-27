#!/usr/bin/python

import database

class User():
	def __init__(self, email, name, pwd, type_id):
		self.email = email
		self.name = name
		self.pwd = pwd
		self.type_id = type_id

	def get_email(self):
		return self.email

	def get_name(self):
		return self.name

	def get_pwd(self):
		return self.pwd

	def get_type_id(self):
		return self.type_id

class UserDB(database.Database):
	def __init__(self, filename):
		super().__init__(filename)

	def find_user_name(self, user):
		cur = self.db_conn.cursor()
		cur.execute("SELECT email, name, pwd, type_id FROM user WHERE email=?", (user,))
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			user = User(rows[0][0], rows[0][1], rows[0][2], rows[0][3])
			return user 

























