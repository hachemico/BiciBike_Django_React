# Generated by Django 3.1.14 on 2022-02-14 08:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0008_auto_20220214_0847'),
    ]

    operations = [
        migrations.RenameField(
            model_name='slot',
            old_name='id_bike',
            new_name='bike',
        ),
    ]
