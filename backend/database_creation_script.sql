PRAGMA foreign_keys = ON;

CREATE TABLE User_Type (
	id_type integer PRIMARY KEY AUTOINCREMENT,
	desc string
);

CREATE TABLE User (
	id_user integer PRIMARY KEY AUTOINCREMENT,
	type_id integer,
	name string,
	email string,
	pwd string,
	is_active integer DEFAULT 1, /* Only 0 or 1 */
	FOREIGN KEY(type_id) REFERENCES User_Type(id_type)
);

CREATE TABLE Project (
	id_project integer PRIMARY KEY AUTOINCREMENT,
	name string,
	desc string,
	file_path string
);

CREATE TABLE Status (
	id_status integer,
	name string,
	desc string
);

CREATE TABLE Events (
	id_events integer PRIMARY KEY AUTOINCREMENT,
	date timestamp,
	project_id integer,
	status_id integer,
	FOREIGN KEY(project_id) REFERENCES Project(id_project),
	FOREIGN KEY(status_id) REFERENCES Status(id_status)
);

CREATE TABLE User_Project (
	user_id integer,
	project_id integer,
	FOREIGN KEY(user_id) REFERENCES User(id_user),
	FOREIGN KEY(project_id) REFERENCES Project(id_project)
);

INSERT INTO User_Type VALUES (1, "Admin");
INSERT INTO User_Type VALUES (2, "Professor");
INSERT INTO User_Type VALUES (3, "Committee Member");
INSERT INTO User_Type VALUES (4, "Content Manager");
INSERT INTO User_Type VALUES (5, "Design Team");
INSERT INTO User (name, email, pwd, type_id) VALUES ("Admin", "admin@admin.com", "admin", 1);
