# checkout_api

A checkout API.

# Documentation

The checkout api is available on https://weslopescheckout.herokuapp.com

And to see more about the available routes and how to use see: https://weslopescheckout.herokuapp.com/api/docs/

## Getting Started

Clone the project, install dependencies, set env variables and run with npm script.

To clone the project:

```
git clone https://github.com/weslopes/checkout_api.git
```

Enter the project directory:

```
cd checkout_api
```

Install all dependencies:

```
npm install
```

Create a file .env based on .env.example, after that open .env file and set your corret values:

```
cp .env.example .env
```

Now you can start the server:

```
npm start
```

### DOCKER

To use docker environment follow the steps:

First time you will need to rum

```
npm run docker-build
```

Now you are able to run the others docker commands presents in the package.json

### TESTS

To run tests just run npm test command:

```
npm test
```

## Built With

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

- [Postgres](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database.

- [KnexJs](https://knexjs.org/) - Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

- [Swagger](https://swagger.io/) - Swagger aides in development across the entire API lifecycle, from design and documentation, to test and deployment.

- [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser.

- [Chai](http://www.chaijs.com) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

- [Docker](https://www.docker.com/) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.

- [Docker Compose](https://docs.docker.com/compose/) - Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## Authors

- **Wesley Lopes** - _BackEnd Developer NodeJs_ - [weslopes](https://github.com/weslopes)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
