# ReactFlappy Bird

This project is a React & Redux PWA reproduction of a popular side-scroller game.

Live demo: https://kozlovvski.github.io/ReactFlappyBird

## Current tasks

* Create a better way to detect collisions. Currently `getBoundingClientRect()` is used to get the coordinates of the bird, but that doesn't take rotation into account and sometimes game ends when it would seem that the bird didn't hit a pipe

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have installed `npm` and preferably `yarn`

### Installing

First of all, fork the repository and clone it. Run terminal inside the cloned directory and run:

```
yarn
```

This will install necessary packages. When packages are installed, run a development server with:

```
yarn start
```

Open `localhost:3000` in browser and app should be running.


## Deployment

Use: 

```
yarn deploy
```

This will fire a build process and push the production version of the app to the `gh-pages` branch

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - Tool for quick React.js dev environment setup
* [Redux](https://github.com/reduxjs/redux) - Central storage for JavaScript apps

## Contributing

Currently contributions are disabled.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
