from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save

class Company(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True,  default="")
    domain_email = models.CharField(max_length=100, blank=True, null=True,  default="")

    def __str__(self):
        return '{0}'.format(self.name)

    class Meta:
        db_table = 'company'
        verbose_name = 'compamy'
        verbose_name_plural = 'companies'


class Profile(models.Model):
    user = models.OneToOneField(User, related_name="notes",
                              on_delete=models.CASCADE, null=True)
    company = models.OneToOneField(Company, related_name="company",
                              on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=255, blank=True, null=True, default="")

    register_date = models.DateTimeField(auto_now_add=True)
    email_confirmed = models.BooleanField(default=False)
    
    def __str__(self):
       return '{0}'.format(self.user)

    class Meta:
        db_table = 'profile'
        verbose_name = 'profile'
        verbose_name_plural = 'profiles'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
