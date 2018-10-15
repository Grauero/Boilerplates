# Boilerplates
Standart boilerplate for React applications configs.
Includes: 
- webpack
- webpack-dev-server + Hot Module Replacement
- babel
- url-loader
- html-webpack-plugin
- style-loader
- CSS-loader
- SASS-loader
- separate configs for DEV/PROD
-----------------------------------------------------------------------------------
- eslint
- react/react-dom/prop-types
- hot module replacement for React components
- jest + enzyme
-----------------------------------------------------------------------------------
Webpack configs for dev/prod placed in a 'webpack-configuration/' folder. 
Tests files should be placed in 'src/__tests__/' folder.

Initial files:
- 'src/App.js' for root React component
- 'src/index.js' for mount root React component
- 'src/index.html' for HTML template which will be used for building

Scripts:
- 'npm run build' for build production version of app
- 'npm run start' for start dev-server
- 'npm run test' for start testing
- 'npm run test:watch' for watching test files
- 'npm run test:coverage' for test-coverage
