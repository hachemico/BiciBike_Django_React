# Generated by Django 3.1.14 on 2022-02-14 17:10

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0014_auto_20220214_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 14, 17, 10, 25, 804441, tzinfo=utc)),
        ),
    ]
