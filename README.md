# Webpack Boilerplates

Basic boilerplates for JS/TS/React/TS+React.

All boilerplates contain dev-server, handlers for static files, CSS-modules(SASS), babel, linter, HMR.  

React and TS+React boilerplates contain config for Jest/Enzyme.

### Project structure:
  - webpack-configuration/webpack.common - basic webpack config, common for dev/prod
  - webpack-configuration/webpack.dev - webpack config for dev
  - webpack-configuration/webpack.prod - webpack config for prod
  - mocks/* - config files and mocks for testing
  - **src/index.html - HTML template for App**
  - **src/index.js - entry point for webpack, mounts App into html**
  - **src/app.js - root component**

## Scripts for JS/TS:
  1. ```npm run dev``` - to launch local dev-server
  2. ```npm run build``` - to build app

## Scripts for React/TS+React:
  1. ```npm run dev``` - to launch local dev-server
  2. ```npm run build``` - to build app
  3. ```npm run test``` - to launch test run in watch mode
  4. ```npm run test-clear-cache``` - to clear tests cache
  5. ```npm run test:coverage``` - to build code coverage
