from django import forms

from .models import Testperson, PretaskQuestionnaire, PosttaskQuestionnaire, Documents

LIKERT_CHOICES = (('1', 'First'), ('2', 'Second'), ('3', 'Third'), ('4', 'Four'), ('5', 'Five'))


class TestpersonForm(forms.ModelForm):
    age = forms.IntegerField(required=True, label='Alter')
    gender = forms.ChoiceField(required=True, label='Geschlecht', choices=Testperson.GENDER_CHOICES)
    education_level = forms.CharField(required=True, label='Höchster Bildungsabschluss')
    occupation = forms.CharField(required=True, label='Beruf')

    class Meta:
        model = Testperson
        fields = ('age', 'gender', 'education_level', 'occupation')


class PretaskForm(forms.ModelForm):
    selected_answer = forms.ChoiceField(widget=forms.RadioSelect, choices=LIKERT_CHOICES)

    class Meta:
        model = PretaskQuestionnaire
        fields = ('selected_answer',)


class PosttaskForm(forms.ModelForm):
    selected_answer = forms.ChoiceField(widget=forms.RadioSelect, choices=LIKERT_CHOICES)

    class Meta:
        model = PosttaskQuestionnaire
        fields = ('selected_answer',)


class SearchForm(forms.ModelForm):
    content = forms.CharField(label='Schlagwort', required=True)

    class Meta:
        model = Documents
        fields = ('content',)
