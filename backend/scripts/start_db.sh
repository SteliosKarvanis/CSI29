#!/bin/sh

# BUILD DJANGO DATABASE
python3 manage.py makemigrations
python3 manage.py migrate