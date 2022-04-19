# Node E-commerce API
Simple E-commerce API with Node, Typescript, Express.

# Requiriments
* npm >= 8.1.2
* node >= 16.13.2

# Install and run the project on development mode
1. Using `yarn` install all dependencies.
```bash
  yarn install
```

2. Run the project in locally.

```bash
  yarn dev
```

# Run Docker services
Using `Makefile` and `docker compose` to builds and starts a service container.
```bash
  make up
```

Stops and removes a service container.
```bash
  make down
```

Displays log output from services.
```bash
  make logs
```

# Build and run project for production
1. Transpile and compiles files for production.
```bash
  yarn build
```

2. Run the project on development mode.
```bash
  yarn start
```

# Run tests
Run all tests.
```bash
  yarn tests
```

# Lint and fix files
Check all files.
```bash
  yarn lint
```

Check all files and fix all issues.
```bash
  yarn lint:fix
```
