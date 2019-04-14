# CSCW_Project

For login attempt you have to setup a python virtual environment

In the root folder:
```bash
pipenv install
pipenv shell
cd microblog/front-end
npm install
ng build
cd ../..
python manage.py runserver
```

When you make changes to a db make sure to 

```bash
python manage.py migrations
python manage.py runserver

```
