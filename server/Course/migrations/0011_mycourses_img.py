# Generated by Django 3.2.7 on 2021-11-21 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0010_mycourses_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='mycourses',
            name='img',
            field=models.CharField(default='', max_length=500),
        ),
    ]
