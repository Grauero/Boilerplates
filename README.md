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
------------------------------------------------------------------------------------
Webpack configs for dev/prod placed in a 'webpack-configuration/' folder.

Initial files:
- 'src/index.js' for root .JS file
- 'src/style.scss' for styling

Scripts:

- 'npm run build' for build production version of app
- 'npm run start' for start dev-server
