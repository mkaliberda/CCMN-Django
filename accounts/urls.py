from django.conf.urls import url, include
from rest_framework import routers
from . import views
from .api import RegistrationAPI, LoginAPI


urlpatterns = [
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]