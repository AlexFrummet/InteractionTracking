# Generated by Django 2.1 on 2018-12-02 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interaction_tracking', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testperson',
            fields=[
                ('testperson_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('age', models.IntegerField()),
                ('gender', models.TextField(blank=True, choices=[('M', 'm'), ('F', 'w'), ('D', 'd')], max_length=1, null=True)),
                ('education_level', models.TextField(blank=True, null=True)),
                ('occupation', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'testperson',
                'managed': False,
            },
        ),
    ]
