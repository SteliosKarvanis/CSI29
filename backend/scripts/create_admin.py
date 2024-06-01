# https://stackoverflow.com/questions/39744593/how-to-create-a-django-superuser-if-it-doesnt-exist-non-interactively

from django.contrib.auth import get_user_model

User = get_user_model()  # get the currently active user model,

with open("/run/secrets/django_admin_pwd", 'r') as f:
    pwd = f.read()

User.objects.filter(username='admin').exists() or \
    User.objects.create_superuser('admin', '', pwd)
