# Generated by Django 2.1.8 on 2019-04-26 00:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('focal_login', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='focaluser',
            name='is_active',
        ),
    ]
