from . import views

from django.urls import re_path

urlpatterns = [
    re_path(r'^$', views.IndexView.as_view(), name='index'),
    re_path(r'^demographic_questionnaire$', views.DemographicQuestionnaireView.as_view(),
            name='demographic_questionnaire'),
    re_path(r'^generate_hierarchy$', views.GenerateHierarchyView.as_view(), name='generate_hierarchy'),
    re_path(r'^browse_search_task$', views.BrowseSearchTaskView.as_view(), name='browse_search'),
]
