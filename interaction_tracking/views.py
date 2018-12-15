import json

from django.shortcuts import render, redirect

# Create your views here.
from django.templatetags.static import static
from django.views import View
from .models import Testperson
from .forms import TestpersonForm, PretaskForm


class IndexView(View):
    def get(self, request):
        return render(request, 'index.html')


class DemographicQuestionnaireView(View):
    def get(self, request):
        testperson_form = TestpersonForm()
        return render(request, 'demographic_questionnaire.html', {'form': testperson_form, })

    def post(self, request):
        testperson_form = TestpersonForm(request.POST)
        if testperson_form.is_valid():
            testperson_form.save()
            return redirect('generate_hierarchy')


class GenerateHierarchyView(View):
    def get(self, request):
        return render(request, 'generate_hierarchy.html')


class BrowseSearchTaskView(View):
    def get(self, request):
        json_data = open('interaction_tracking/static/trees/sample_tree.json').read()
        json_tree = json.dumps(json_data)
        return render(request, 'browse_search_task.html', {'tree': json_tree})


class PreTaskQuestionnaireView(View):
    def get(self, request):
        pretask_form = PretaskForm()
        return render(request, 'pretask.html', {'form': pretask_form, })

    def post(self, request):
        pretask_form = PretaskForm(request.POST)
        if pretask_form.is_valid():
            pretask_form.save()
            return redirect('browse_search')
