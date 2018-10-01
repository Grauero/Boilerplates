# Boilerplates
Standart boilerplate for Webpack configs.
Includes: 
- webpack
- webpack-dev-server + Hot Module Replacement
- @babel/preset-env + @babel/plugin-transform-runtime" + "@babel/plugin-proposal-class-properties"
- file-loader
- html-webpack-plugin
- style-loader
- CSS-loader
- SASS-loader
- separate configs for DEV/PROD
-----------------------------------------------------------------------------------
- @babel/preset-react
- eslint
- react/react-dom/prop-types
-----------------------------------------------------------------------------------
Webpack configs for dev/prod placed in a 'webpack-configuration/' folder. 

Initial files:
- 'src/App.js' for root React component
- 'src/index.js' for mount root React component
- 'src/index.html' for HTML template which will be used for building

Scripts:
- 'npm run build' for build production version of app
- 'npm run start' for start dev-server
