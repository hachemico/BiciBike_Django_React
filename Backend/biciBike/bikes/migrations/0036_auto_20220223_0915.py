# Generated by Django 3.1.14 on 2022-02-23 09:15

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0035_auto_20220222_1215'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 23, 9, 15, 41, 878453, tzinfo=utc)),
        ),
    ]
