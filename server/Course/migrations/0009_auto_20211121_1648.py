# Generated by Django 3.2.7 on 2021-11-21 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0008_auto_20211117_2042'),
    ]

    operations = [
        migrations.AddField(
            model_name='mycourses',
            name='Location',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='NameTeach',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='NumberStudy',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='Skill',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='TimeStudy',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='Timedeadline',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='mycourses',
            name='Title',
            field=models.CharField(default='', max_length=500),
        ),
    ]
