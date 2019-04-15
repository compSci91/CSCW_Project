# CSCW_Project

For login attempt you have to setup a python virtual environment

In the root folder:
```bash
pipenv install
pipenv shell
cd focal_login/front-end
npm install
ng build
cd ../..
python3 manage.py runserver
```

When you make changes to a db make sure to 

```bash
python3 manage.py migrations
python3 manage.py runserver

```
