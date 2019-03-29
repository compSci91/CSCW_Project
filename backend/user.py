#!/usr/bin/python

import database

class User():
	def __init__(self, email, name, pwd, type_id, is_active=True, user_id=None):
		self.user_id = user_id		
		self.email = email
		self.name = name
		self.pwd = pwd
		self.type_id = type_id
		self.is_active = is_active

	def get_user_id(self):
		return self.user_id

	def get_email(self):
		return self.email

	def get_name(self):
		return self.name

	def get_pwd(self):
		return self.pwd

	def get_type_id(self):
		return self.type_id

	def get_is_active(self):
		return self.is_active

class UserDB(database.Database):
	def __init__(self, filename):
		super().__init__(filename)

	def __del__(self):
		super().__del__()

	def create_user(self, user):
		param = (user.get_email(), user.get_name(), user.get_pwd(), user.get_type_id())
		sql = '''INSERT INTO user (email, name, pwd, type_id, is_active) values (?,?,?,?, 1)'''

		with self.db_conn:
			cur = self.db_conn.cursor()
			cur.execute(sql, param)
			return cur.lastrowid

	def find_user_by_email(self, email):
		cur = self.db_conn.cursor()
		cur.execute("SELECT email, name, pwd, type_id, is_active, id_user FROM user WHERE email=? LIMIT 1", (email,))
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			user = User(rows[0][0], rows[0][1], rows[0][2], rows[0][3], bool(rows[0][4]), rows[0][5])
			return user

	def alter_user_permission(self, user):
		param = (user.get_is_active(), user.get_user_id(), user.get_email())
		sql = '''UPDATE user SET is_active=? WHERE id_user=? and email=?'''

		with self.db_conn:
			cur = self.db_conn.cursor()
			cur.execute(sql, param)
			return cur.rowcount

#""" Test 
if __name__ == '__main__':
	db = UserDB("cscw.db")
	user = User("rafa@rafa.com", "Rafa", "pass", 1, False, 3)

	#print (db.create_user(user))
	#print (db.find_user_by_email("rafa@rafa.com").get_is_active())
	print (db.alter_user_permission(user))

	del db
#"""
