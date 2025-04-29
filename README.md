# SBA 319: MongoDB Database Application
//Steps to set up Express/Mongoose Server

Objectives

1. Create a server application with Node, Express, and MongoDB.
2. Create a CRUD API using Express and MongoDB.
3. Create MongoDB indexes.
4. Use MongoDB indexing to make efficient queries.
5. Create MongoDB validation rules.
6. Use MongoDB validation to ensure data consistency.

create server.mjs
execute: npm init -y 
execute: npm i express dotenv mongoose
edit package.json to correct file/ commands
.gitinore and .env
ignore both node_modules and .env
populate .env w/PORT and mongoURI
setup server.js boilerplate
setup DB connection
create schema

//DB connection 
import: mongoose and dotenv
setup dotenv and connectionstr in variable
create async connection function w/trycatch
await mongoose.connect
export function

All routes in this application:
GET /seed: Fill database with hardcoded data - for testing purpose

GET /users: View all users

POST /users: Add a new user

GET /users/:id : View a user info by id

DELETE /users/:id : Delete a user by id

GET /posts : View all posts

POST /posts: Add a new posts

GET /feedback/:id : View a feedback info by id

DELETE /feedback/:id : Delete a feedback by id

