# My Blog Backend

This is a practical **API** using Node, TypeScript form [my own blog](https://mhaqnegahdar.site). Created by `bun init -y`.

explore the demo [here](https://mhaqnegahdar.site)

## Technologies

-   Node
-   TypeScript
-   **Main Packages:** express, dotenv, reflect-metadata
-   **Dev Dependency Packages:** @types/express , @types/node , @types/supertest , supertest, typescript

## Features

-   Decorated Logging Function
-   Supports Tests
-   Typescript Modules

## Installation

#### Add Environment Variables

Create **.env** from '.env.example' file and declare the project environment variables

Starting a development instance of the app

##### Install The Dependencies

```bash
bun install
```

##### Run The Dev Server

```bash
bun run dev
```

##### Run The Production Server

```bash
bun run start
```

##### Run The Tests

```bash
bun run test
```

##### Build The App

```bash
bun run build
```

###### Run the Built App

```bash
bun run start-built
```

#### Running the App using Dockerfile on Production

```bash
# Build Image Command
docker build -t your-image-name .

# Run Image Command
docker run --env-file .env -p 8000:8000 your-image-name
```

#### Running the App using Dockerfile on Development

use `docker-compose.yml` file.

```bash
docker-compose up
```

This project was created using `bun init` in bun v1.1.40. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
