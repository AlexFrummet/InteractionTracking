from django import forms

from .models import Testperson, PretaskQuestionnaire


class TestpersonForm(forms.ModelForm):
    age = forms.IntegerField(required=True, label='Alter')
    gender = forms.ChoiceField(required=True, label='Geschlecht', choices=Testperson.GENDER_CHOICES)
    education_level = forms.CharField(required=True, label='Höchster Bildungsabschluss')
    occupation = forms.CharField(required=True, label='Beruf')

    class Meta:
        model = Testperson
        fields = ('age', 'gender', 'education_level', 'occupation')


class PretaskForm(forms.ModelForm):
    LIKERT_CHOICES = (('1', 'First',), ('2', 'Second',))
    selected_answer = forms.ChoiceField(widget=forms.RadioSelect, choices=LIKERT_CHOICES)

    class Meta:
        model = PretaskQuestionnaire
        fields = ('selected_answer', )
