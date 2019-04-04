## Step one: Start Project
* create folder
```
mkdir my-app
cd my-app
```

## Step two: Init App
```
npm init -y
```
* [-y for all default values]

## Step three: Create Public access folder
```
mkdir public
cd public
type NUL > index.html
```
* Add following code to index.html
```
<!DOCTYPE html>
<html>
    <head>
        <title>My App one</title>
    </head>
    <body>
        <div id="app-root"></div>
        <script src="/bandel.js"></script>
    </body>
</html>
```
## Step four: Setup for webpack dev server
```
npm i --save-dev webpack webpack-dev-server webpack-cli
```
* Create file under project root directory 'webpack.config.js'
```
type NUL > webpack.config.js
```

* Config webpack dev server add following code to 'webpack.config.js'
```
module.exports = {
    entry: [
        './src/index.js'
    ],
    output : {
        path: __dirname + './public',
        publicPath: '/',
        filename: 'bundel.js'
    },
    devServer: {
        contentBase: './public'
    }
}
```

* To start a dev server add following code to 'package.json' under scripts.
```
"start": "webpack-dev-server --open --config ./webpack.config.js --mode development"
```
* Run following command to start webpack server
```
npm start
```

## Step five: Setup for babel 

Add following packages is for transpile ES6 and nextES code to ES5

npm i --save-dev babel-core babel-loader babel-preset-env

For some more experimental features in ES6 (e.g. object spread) add following package.
npm i --save-dev babel-preset-stage-2

For use JSX add following package.
npm i --save-dev babel-preset-react

create file under root directory '.babelrc' and add following code to babel setup.

{
    presets: [
        "env",
        "react",
        "stage-2"
    ]
} 

* Update 'webpack.config.js' with following code to transpile ruels.

module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node-modules/,
            use: ['babel-loader]
        }
    ]
},
resolve: {
    extensions: ['*', '.js', '.jsx']
}

## Step Six: Setup React + Webpack + Babel
In order to use react need two packages, react and react-dom
npm i --save react react-dom

Hook a react with App add following code to './src/index.js'.

import React from 'react'
import ReactDOM from 'react-dom'

const target = document.getElementById('app-root'); 
const title = "My bilerplate for react + webpack + babel. "
```
ReactDOM.render(
    <div>{title}</div>,
    traget
);
```

## Aditional: Webpack watch and Host setup
To hot reload while code change update following code with 'webpack.config.js' under 'devServer'.

devServer: {
    contentBase: './public',
    watchContentBase: true,
    disableHostCheck: true,
}

That's it App it ready for development. Happy codding.