#!/usr/bin/python

import database

class Project():
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

class ProjectDB(database.Database):
	def __init__(self, filename):
		super().__init__(filename)

	def __del__(self):
		super().__del__()

	def create_project(self, project):
		param = (project.get_desc(), project.get_name(), project.get_file_path())
		sql = '''INSERT INTO project (desc, name, file_path) values (?,?,?)'''

		with self.db_conn:
			cur = self.db_conn.cursor()
			cur.execute(sql, param)
			return cur.lastrowid

	def find_project_by_name(self, name):
		cur = self.db_conn.cursor()
		cur.execute("SELECT name, desc, file_path, id_project FROM project WHERE name=? LIMIT 1", (name,))
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			project = Project(rows[0][0], rows[0][1], rows[0][2], rows[0][3])
			return project

	def find_all_projects(self):
		cur = self.db_conn.cursor()
		cur.execute("SELECT name, desc, file_path, id_project FROM project")
		rows = cur.fetchall()

		if not rows:
			return None
		else:
			projects = []
			for row in rows:
				project = Project(row[0], row[1], row[2], row[3])
				projects.append(project)
			return projects


""" Test 
if __name__ == '__main__':
	db = ProjectDB("cscw.db")
	project = Project("Project", "Project description", "//home//files//")

#	print (db.create_project(project))
#	print (db.find_project_by_name("Project").get_file_path())
	for project in db.find_all_projects():
		print (project.get_file_path())

	del db
"""
