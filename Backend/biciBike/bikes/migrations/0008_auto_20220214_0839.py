# Generated by Django 3.1.14 on 2022-02-14 08:39

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0007_auto_20220213_2119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 14, 8, 39, 6, 517362, tzinfo=utc)),
        ),
    ]
