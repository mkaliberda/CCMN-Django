# Generated by Django 2.0.5 on 2018-06-02 09:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'verbose_name': 'profile', 'verbose_name_plural': 'profiles'},
        ),
        migrations.AlterModelTable(
            name='profile',
            table='profile',
        ),
    ]
