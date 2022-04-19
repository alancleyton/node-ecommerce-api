include .env
.PHONY: up
.PHONY: down
.PHONY: logs

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f
