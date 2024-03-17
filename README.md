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