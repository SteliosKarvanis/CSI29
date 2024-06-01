FROM python:3.12.3-alpine3.19

RUN apk update \
	&& apk add postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

WORKDIR ./src

EXPOSE 8000
CMD ["../scripts/main.sh"]