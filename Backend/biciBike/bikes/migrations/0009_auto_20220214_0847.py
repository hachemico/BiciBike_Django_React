# Generated by Django 3.1.14 on 2022-02-14 08:47

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0008_auto_20220214_0839'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 14, 8, 47, 1, 501335, tzinfo=utc)),
        ),
    ]
