from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.http import JsonResponse

def activate(request, uidb64, token, backend='django.contrib.auth.backends.ModelBackend'):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user  and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        return JsonResponse({'status': True}, safe=False)
    else:
        return JsonResponse({'status': False}, safe=False)