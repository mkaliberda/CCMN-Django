from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, related_name="notes",
                              on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=255)
    register_date = models.DateTimeField(auto_now_add=True)


