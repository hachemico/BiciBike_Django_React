# Generated by Django 3.1.14 on 2022-02-13 21:02

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0005_remove_slot_slot'),
        ('bikes', '0005_auto_20220213_2100'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rentbike',
            name='slot',
        ),
        migrations.AddField(
            model_name='rentbike',
            name='from_slot',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='from_slot', to='stations.slot'),
        ),
        migrations.AddField(
            model_name='rentbike',
            name='to_slot',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='to_slot', to='stations.slot'),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 13, 21, 2, 14, 920352, tzinfo=utc)),
        ),
    ]