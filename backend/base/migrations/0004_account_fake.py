# Generated by Django 4.2.4 on 2023-10-13 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_foodrequest_name_alter_foodrequest_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='fake',
            field=models.TextField(null=True),
        ),
    ]
