from rest_framework import serializers
import os
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth import authenticate

# For email approve
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from .tokens import account_activation_token
from django.utils.encoding import force_bytes, force_text
# For email approve


def _send_email(to_list, subject, message, sender='maxkaliberda1@gmail.com'):
    list = [to_list]
    msg = EmailMessage(subject=subject, body=message, from_email=sender, bcc=list)
    msg.content_subtype = "html"  # Main content is now text/html
    return msg.send()


class ProfileUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'text')

class CreateUserSerializer(serializers.ModelSerializer):
    profile = ProfileUserSerializer(required=True)
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'password', 'profile', 'email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'],
                                    first_name=validated_data['first_name'],
                                    password=validated_data['password'],
                                    email=validated_data['email'])
        subject = 'Активация аккаунта ccmn.com'
        profile_data = validated_data.pop('profile')
        message = render_to_string("account_activation_email.html", {
            'user': user,
            'domain': "http://127.0.0.1:8000",
            'uid': urlsafe_base64_encode(force_bytes(user.pk)).decode(),
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