#!/usr/bin/python

import sqlite3
from sqlite3 import Error

class Database(object):
	def __init__(self, filename):
		self.filename = filename
		self.connect()

	def connect(self):
        	self.db_conn = sqlite3.connect(self.filename)

	def __del__(self):
		self.db_conn.close()
