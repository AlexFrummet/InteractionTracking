from django.shortcuts import render, redirect

# Create your views here.
from django.views import View
from .models import Testperson
from .forms import TestpersonFrom


class IndexView(View):
    def get(self, request):
        return render(request, 'index.html')


class DemographicQuestionnaireView(View):
    def get(self, request):
        testperson_form = TestpersonFrom()
        return render(request, 'demographic_questionnaire.html', {'form': testperson_form, })

    def post(self, request):
        testperson_form = TestpersonFrom(request.POST)
        if testperson_form.is_valid():
            testperson_form.save()
            return redirect('generate_hierarchy')


class GenerateHierarchyView(View):
    def get(self, request):
        return render(request, 'generate_hierarchy.html')


class BrowseSearchTaskView(View):
    def get(self, request):
        return render(request, 'browse_search_task.html')
