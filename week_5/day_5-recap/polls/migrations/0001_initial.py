# Generated by Django 5.0.6 on 2024-05-17 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed', models.CharField(max_length=100)),
                ('species', models.CharField(max_length=100)),
                ('weight', models.IntegerField(null=True)),
                ('age', models.IntegerField(null=True)),
            ],
        ),
    ]