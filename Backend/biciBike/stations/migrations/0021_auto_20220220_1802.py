# Generated by Django 3.1.14 on 2022-02-20 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0031_auto_20220220_1802'),
        ('stations', '0020_auto_20220220_1748'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='bike',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slots', to='bikes.bike'),
        ),
    ]
