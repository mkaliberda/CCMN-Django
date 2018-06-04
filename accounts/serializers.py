from rest_framework import serializers
import os
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# For email approve
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from .tokens import account_activation_token
from django.utils.encoding import force_bytes, force_text
# For email approve

from config.settings import BASE_DIR



def _send_email(to_list, subject, message, sender='maxkaliberda1@gmail.com'):
    list = [to_list]
    msg = EmailMessage(subject=subject, body=message, from_email=sender, bcc=list)
    msg.content_subtype = "html"  # Main content is now text/html
    return msg.send()


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        email_registrarion_active = os.path.join(BASE_DIR, "accounts", "email_template", "account_activation_email.html")
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        subject = 'Активация аккаунта ccmn.com'
        message = render_to_string("account_activation_email.html", {
            'user': user,
            'domain': "ccmn.com",
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': account_activation_token.make_token(user),
        })
        emails = user.email
        _send_email(emails, subject, message)
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")