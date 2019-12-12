# checkout_api

A checkout API.


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

## Authors

* **Wesley Lopes** - *BackEnd Developer NodeJs* - [weslopes](https://github.com/weslopes)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
