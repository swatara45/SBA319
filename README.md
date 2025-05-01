# SBA 319: MongoDB Database Application
//Steps to set up Express/Mongoose Server

Objectives

1. Create a server application with Node, Express, and MongoDB.
2. Create a CRUD API using Express and MongoDB.
3. Create MongoDB indexes.
4. Use MongoDB indexing to make efficient queries.
5. Create MongoDB validation rules.
6. Use MongoDB validation to ensure data consistency.

#Steps

1. create server.mjs
2. execute: npm init -y 
3. execute: npm i express dotenv mongoose
4. edit package.json to correct file/ commands
5. .gitinore and .env
6. ignore both node_modules and .env
7. populate .env w/PORT and mongoURI
8. setup server.js boilerplate
9. setup DB connection
10. create schema

//DB connection 
1. import: mongoose and dotenv
2. setup dotenv and connectionstr in variable
3. create async connection function w/trycatch
4. await mongoose.connect
5. export function

All routes in this application:
#####GET /seed: Fill database with hardcoded data - for testing purpose

GET /users: View all users

POST /users: Add a new user

GET /users/:id : View a user info by id

DELETE /users/:id : Delete a user by id

GET /posts : View all posts

POST /posts: Add a new posts

GET /feedback/:id : View a feedback info by id

DELETE /feedback/:id : Delete a feedback by id


1. What could you have done differently during the planning stages of your project to make the execution easier?
 I could have invested more time in breaking down user information into smaller, more actionable tasks. 



2. Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
Yes, integrating a third-party API presented unexpected challenges due to incomplete documentation and inconsistent response formats

# What would you add to or change about your application if given more time?
I will add error-handling logic to provide more informative feedback to users
