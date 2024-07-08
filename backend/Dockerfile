FROM python:3.12.3-alpine3.19

RUN apk update \
	&& apk add postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000
RUN dos2unix /usr/app/scripts/*
CMD ["sh", "-C", "/usr/app/scripts/main.sh"]
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]