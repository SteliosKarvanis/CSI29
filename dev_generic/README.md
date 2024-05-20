## Pré-populando o BD com dados de exemplo (por isso que essa pasta se chama `generic_dev`)

Para recuperar dados do BD, entrar na shell do back end com ``docker compose exec backend sh``, em seguida executar ``python3 manage.py loaddata --format=json -``,  e colar o conteúdo de `dev_generic/db_data.json` (após colar, dar CTRL+D).

Para copiar dados do BD no `dev_generic/db_data.json` (que é o que foi feito para disponibilizar esses dados para você): 
```bash
docker exec <NOME DO CONTAINER DO BACKEND> python manage.py dumpdata --indent 2 --exclude auth --exclude contenttypes --exclude sessions --exclude admin  > dev
_generic/db_data.json
```