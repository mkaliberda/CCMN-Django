from django.conf.urls import url, include
from rest_framework import routers
from . import views as view
from .api import RegistrationAPI, LoginAPI

urlpatterns = [
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', view.activate, name='activate'),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework'))
]
