# Generated by Django 3.2.7 on 2021-11-30 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0011_mycourses_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mycourses',
            name='Price',
            field=models.FloatField(default='', max_length=500),
        ),
    ]
