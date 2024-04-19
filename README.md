# Run Frontend
* In local machine
```
cd frontend
npm start # npm run dev to debug
```

* Run in a docker container
```
docker compose up
```
> To install `docker-compose`, visit https://docs.docker.com/compose/install/

Note:
> To change between `production/stage`, in `docker-compose.yml` file, change app target between `production/dev` respectively. 


# Run Backend
First, create a `.env` file in this directory (that is, in the same level as `docker-compose.yml`) with the following content, which must be updated with the proper values:
```
POSTGRES_USER=...
POSTGRES_PASSWORD=...
POSTGRES_DB=...
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
```

* In local machine
```
cd backend
pip3 install -r requirements.txt
python3 run 
```
(*) the suffix `3` in `pip3` and `python3` depends on your installation.

* Run in a docker container => same as for frontend
