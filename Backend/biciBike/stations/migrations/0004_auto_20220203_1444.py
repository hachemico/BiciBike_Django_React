# Generated by Django 3.1.14 on 2022-02-03 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0003_auto_20220203_1436'),
    ]

    operations = [
        migrations.RenameField(
            model_name='slot',
            old_name='id_slot',
            new_name='slot',
        ),
    ]
