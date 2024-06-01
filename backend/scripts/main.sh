#!/bin/sh

../scripts/start_db.sh
python manage.py shell < ../scripts/create_admin.py
python manage.py runserver 0.0.0.0:8000