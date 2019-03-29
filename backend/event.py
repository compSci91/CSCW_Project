#!/usr/bin/python

import database

class Event():
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

class EventDB(database.Database):
	def __init__(self, filename):
		super().__init__(filename)

	def __del__(self):
		super().__del__()

	def create_event(self, event):
		param = (event.get_project_id(), event.get_status_id())
		sql = '''INSERT INTO events (project_id, status_id, date) values (?,?,datetime('now'))'''

		with self.db_conn:
			cur = self.db_conn.cursor()
			cur.execute(sql, param)
			return cur.lastrowid

	def find_events_by_project(self, project_id):
		cur = self.db_conn.cursor()
		cur.execute("SELECT status_id, project_id, date FROM events WHERE project_id=?", (project_id,))
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			events = []
			for row in rows:
				event = Event(row[0], row[1], row[2])
				events.append(event)
			return events

	def find_project_currently_status(self, project_id):
		cur = self.db_conn.cursor()
		cur.execute("SELECT status_id, project_id, date FROM events WHERE project_id=? ORDER BY date DESC", (project_id,))
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			event = Event(rows[0][0], rows[0][1], rows[0][2])
			return event

""" Test 
if __name__ == '__main__':
	db = EventDB("cscw.db")
	event = Event(1, 1)

	print (db.create_event(event))
	print (db.find_project_currently_status(1).get_date())
	for e in db.find_events_by_project(1):
		print (e.get_date())

	del db
"""
