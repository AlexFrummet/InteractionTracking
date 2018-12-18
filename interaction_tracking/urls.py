from . import views

from django.urls import re_path

urlpatterns = [
    re_path(r'^$', views.IndexView.as_view(), name='index'),
    re_path(r'^demographic_questionnaire$', views.DemographicQuestionnaireView.as_view(),
            name='demographic_questionnaire'),
    re_path(r'^generate_hierarchy/(?P<testperson_id>[0-9]+)/$', views.GenerateHierarchyView.as_view(), name='generate_hierarchy'),
    re_path(r'^pretask_questionnaire/(?P<testperson_id>[0-9]+)/$', views.PreTaskQuestionnaireView.as_view(), name='pretask_questionnaire'),
    re_path(r'^browse_search_task/(?P<testperson_id>[0-9]+)/$', views.BrowseSearchTaskView.as_view(), name='browse_search'),
    re_path(r'^posttask_questionnaire/(?P<testperson_id>[0-9]+)/$', views.PostTaskQuestionnaireView.as_view(), name='posttask_questionnaire'),
    re_path(r'^thankyou$', views.ThankYouView.as_view(), name='thank_you'),
    re_path(r'^get_article_data$', views.get_article_data, name='get_article_data'),
    re_path(r'^get_search_results$', views.get_search_results, name='get_search_results'),
]
