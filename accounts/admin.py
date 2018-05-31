from django.contrib import admin
# Register your models here.
from .models import *


class ProfileAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Profile._meta.fields]
    search_fields = [field.name for field in Profile._meta.fields]
    list_filter = [field.name for field in Profile._meta.fields]

admin.site.register(Profile, ProfileAdmin)