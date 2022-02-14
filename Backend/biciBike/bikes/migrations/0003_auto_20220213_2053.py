# Generated by Django 3.1.14 on 2022-02-13 20:53

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0005_remove_slot_slot'),
        ('profiles', '0002_profile_favorites'),
        ('bikes', '0002_rentbike'),
    ]

    operations = [
        migrations.AddField(
            model_name='rentbike',
            name='from_station',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='station_from', to='stations.station'),
        ),
        migrations.AddField(
            model_name='rentbike',
            name='to_station',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='station_to', to='stations.station'),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='bike',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='bikes', to='bikes.bike'),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='date_finish',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='date_start',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 13, 20, 51, 6, 956302, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='slot',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slots', to='stations.slot'),
        ),
        migrations.AlterField(
            model_name='rentbike',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='profiles.profile'),
        ),
    ]
