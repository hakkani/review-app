# review-app

Back-end: [back-end](https://github.com/hakkani/review-app/tree/master/back-end)<br/>
Front-end: [web-app](https://github.com/hakkani/review-app/tree/master/web-app)<br/>

## Available Scripts For Back-end(REST API)

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the postman.<br/>

Create Mysql Schema, Schema name : 'review-app' then, 
import database in Mysql Workbench [Import Mysql Database](https://github.com/hakkani/review-app/blob/master/review-app.sql).
If the node server runs in port 8080. The front-end application uses the localhost:8080 to read, create, update, and delete the employee list. In this project just use the read operation to fetch the employee list.

Database: In database create 3 tables, 1. employees, 2. reviews and 3. review_assignments<br/>
employees table: <br/>
reviews table: <br/>
review_assignments table: <br/>

## Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts For Front-end(Web application)

In the project directory, you can run:

### `npm install`

### `npm start or sudo npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Available Pages/Routes

### Employee view

Landing/Home Page: [http://localhost:3000](http://localhost:3000)<br/>
About Page: [http://localhost:3000/about](http://localhost:3000/about)<br/>
Login as Admin: [http://localhost:3000/admin](http://localhost:3000/admin) <br/>
To login as admin please enter any name or email address, Username/Email and Password field is just empty validation check.

### Admin view

Employee List: [http://localhost:3000/admin/employees](http://localhost:3000/admin/employees) <br/>
Review List: [http://localhost:3000/admin/reviews](http://localhost:3000/admin/reviews)<br/>
Assignment List: [http://localhost:3000/admin/assingment](http://localhost:3000/admin/assingment)<br/>
Admin Login: [http://localhost:3000/admin](http://localhost:3000/admin)<br/>
To login as admin please enter any name or email address, Username/Email and Password field is just empty validation check.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Backend

first we need to .env.example to .end file creation and set your database details. then 
### `npm install`

then we need to migrate the migrations.

### `npx sequelize-cli db:migrate`

### `npm start`
backend port default 8000.

