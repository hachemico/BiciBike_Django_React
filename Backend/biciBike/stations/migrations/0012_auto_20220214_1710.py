# Generated by Django 3.1.14 on 2022-02-14 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0015_auto_20220214_1710'),
        ('stations', '0011_auto_20220214_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='id_bike',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slots', to='bikes.bike'),
        ),
    ]