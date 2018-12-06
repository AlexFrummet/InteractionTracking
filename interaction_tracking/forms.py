from django import forms

from .models import Testperson


class TestpersonFrom(forms.ModelForm):
    age = forms.IntegerField(required=True, label='Alter')
    gender = forms.ChoiceField(required=True, label='Geschlecht', choices=Testperson.GENDER_CHOICES)
    education_level = forms.CharField(required=True, label='Höchster Bildungsabschluss')
    occupation = forms.CharField(required=True, label='Beruf')

    class Meta:
        model = Testperson
        fields = ('age', 'gender', 'education_level', 'occupation')
