# Generated by Django 3.2.7 on 2021-11-17 06:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0004_auto_20211117_1322'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mycourses',
            old_name='NamCourse',
            new_name='NamC',
        ),
        migrations.RenameField(
            model_name='mycourses',
            old_name='SizeCourse',
            new_name='SizeC',
        ),
    ]
