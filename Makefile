.PHONY: migrate
migrate:
	docker-compose run --rm api yarn ts-node ./node_modules/.bin/typeorm migration:run
