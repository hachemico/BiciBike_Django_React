# Generated by Django 3.1.14 on 2022-02-14 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0006_auto_20220214_0839'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='station',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='slots', to='stations.station'),
        ),
    ]
