# Generated by Django 3.1.14 on 2022-11-19 09:21

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0041_auto_20221119_0915'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 19, 9, 21, 46, 674892, tzinfo=utc)),
        ),
    ]