#!/bin/sh

ls
/usr/app/scripts/start_db.sh
/usr/app/scripts/run_test.sh
python src/manage.py shell < /usr/app/scripts/create_admin.py
python src/manage.py runserver 0.0.0.0:8000