# Generated by Django 2.0.5 on 2018-07-20 18:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import itineraries.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cities', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Itinerary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('likes', models.IntegerField(default=0)),
                ('slug', models.SlugField(unique=True)),
                ('updated_date', models.DateTimeField(auto_now_add=True)),
                ('views', models.IntegerField(default=0)),
                ('image', models.ImageField(blank=True, null=True, upload_to=itineraries.models.upload_location)),
                ('budget', models.CharField(choices=[('Cheap', '$'), ('Affordable', '$$'), ('Expensive', '$$$'), ('Very_Expensive', '$$$$')], default='Affordable', max_length=15)),
                ('number_of_days', models.IntegerField(default=1)),
                ('day1_morning', models.TextField(blank=True, null=True)),
                ('day1_lunch', models.TextField(blank=True, null=True)),
                ('day1_afternoon', models.TextField(blank=True, null=True)),
                ('day1_diner', models.TextField(blank=True, null=True)),
                ('day2_morning', models.TextField(blank=True, null=True)),
                ('day2_lunch', models.TextField(blank=True, null=True)),
                ('day2_afternoon', models.TextField(blank=True, null=True)),
                ('day2_diner', models.TextField(blank=True, null=True)),
                ('day3_morning', models.TextField(blank=True, null=True)),
                ('day3_lunch', models.TextField(blank=True, null=True)),
                ('day3_afternoon', models.TextField(blank=True, null=True)),
                ('day3_diner', models.TextField(blank=True, null=True)),
                ('city', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cities.City')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]