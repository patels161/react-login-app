# React Login application

Simple app with react, webpack 4, hot-reload &amp; bootstrap 4.

## Steps to run the application

1. Unzip the project folder.

2. Open project in any IDE i.e. WebStorm, Sublime, etc.

3. Go to IDE terminal or open git bash/command prompt and change the path to where your project folder is.

4. Run command `npm install`. This should generate node_modules folder inside root project folder where package.json file is.

5. After node_modules is generate, run command `npm start` which runs the start script.

6. After the compilation is done, your default browser should open our project application to http://localhost:8080/

7. You should see the home page which is our login page with username and password fields. Enter any username &amp; password and click on Login button.

8. After clicking on login button, it should welcome the user with saying: 'Welcome username!' with Log out button.

9. If you click on Log out button, it should change back to Login view.


## About files

1. package.json
package.json file has all the dependencies including ones required by developers. It has scripts to test, start and build the application.
Here we are using webpack-dev-server to bundle and start the application.

2. webpack.config.js
This file has all the configuration for webpack module bundler.

3. babel.rc
to provide options for babel-loader.

4. index.html
Main html file which gets loaded when we run the application.

5. index.js
JavaScript code for our react components.


## How to install
You can use both npm or yarn, the version I used to create this project:
npm -> 3.10.8

