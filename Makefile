curdir :=$(shell pwd)
app_name :=$(shell basename ${curdir}_api_1)

.PHONY: migrate
migrate:
	docker-compose run --rm api yarn ts-node ./node_modules/.bin/typeorm migration:run

.PHONY: up
up:
	docker-compose up 
