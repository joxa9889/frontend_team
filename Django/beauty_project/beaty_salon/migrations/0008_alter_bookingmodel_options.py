# Generated by Django 4.2.6 on 2023-11-25 14:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beaty_salon', '0007_bookingmodel_category_bookingmodel_master'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookingmodel',
            options={'verbose_name': 'Booking', 'verbose_name_plural': 'Bookings'},
        ),
    ]
