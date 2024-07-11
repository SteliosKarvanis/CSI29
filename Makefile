.PHONY: build up down restart prune clean

# Build Docker images
build:
	docker-compose $(COMPOSE_FILES) build

# Start Docker Compose services
up:
	docker-compose $(COMPOSE_FILES) up --build

# Stop Docker Compose services
down:
	docker-compose $(COMPOSE_FILES) down

# Restart specific service
restart:
	echo $1
	docker-compose restart ${s}
# Remove unused Docker resources
prune:
	docker image prune -f
	docker volume prune -f
	docker network prune -f
	docker container prune -f

# Clean up and remove everything
clean: down prune

# Default target
default: up
