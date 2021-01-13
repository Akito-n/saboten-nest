curdir :=$(shell pwd)
app_name :=$(shell basename ${curdir}_api_1)

.PHONY: migrate
migrate:
	docker-compose run --rm api yarn ts-node ./node_modules/.bin/typeorm migration:run

.PHONY: up
up:
	docker-compose up
.PHONY: attach
attach:
	docker exec -it saboten-web_api_1 bash
