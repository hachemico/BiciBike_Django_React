# Generated by Django 3.1.14 on 2022-01-25 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serialNumber', models.CharField(max_length=100, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('latitude', models.CharField(max_length=300)),
                ('longitude', models.CharField(max_length=300)),
                ('station', models.CharField(max_length=300)),
                ('slot', models.CharField(max_length=300)),
                ('available', models.BooleanField(db_index=True, default=True)),
                ('at_use', models.BooleanField(db_index=True, default=False)),
            ],
        ),
    ]
