#!/bin/sh

# BUILD DJANGO DATABASE
python3 src/manage.py makemigrations
python3 src/manage.py migrate