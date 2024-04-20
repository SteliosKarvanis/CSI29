Para copiar dados do BD: 
```bash
docker exec <NOME DO CONTAINER DO BACKEND> python manage.py dumpdata --indent 2 --exclude auth --exclude contenttypes --exclude sessions --exclude admin  > dev
_generic/db_data.json
```

Para recuperá-los, ver [docs do `python manage.py loaddata`](https://docs.djangoproject.com/pt-br/5.0/ref/django-admin/#loaddata)