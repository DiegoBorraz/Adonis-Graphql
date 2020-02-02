# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Required for adonisjs

```bash
npm install --global @adonisjs/cli
```

Use the adonis command to install the blueprint

```bash
adonis new nome --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Controller

Run the following command to create a controller.

```js
adonis make:controller nome
```

### Model

Run the following command to create model, migrate, and controller.

```js
adonis make:model nome -m -c
```

### Routes

Lists created routes

```js
adonis route:list
```
