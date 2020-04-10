# Udemy Cypress course
Repository for a testing hosted on Udemy on the topic of test automation in Cypress. The name of the course is **Cypress automation for people in a hurry**. The name of the course is a homage to [Neil DeGrasse Tyson’s book](https://www.amazon.com/Astrophysics-People-Hurry/dp/B06XB2PX7G) which I recommend you give a read.

## What’s in here
In this repo, you can find an application we are testing throughout the course as well as all the examples in video course. Each coding video chapter starts with `start.js` file, so you can follow along and code with me. The final state of the code can be found in `final.js` file. Some of the chapters contain `challenge.js` file. As the name suggest, you can find additional examples and challenges to improve your Cypress skills.

## TodoMVC app
Simple todoMVC app build with Vue.js, originally forked from [testing-workshop-cypress](https://github.com/cypress-io/testing-workshop-cypress). I expanded the application and added a couple of features.

### Backend
Backend is a json-server on a static json file located in `todomvc/data.json`. 

### API

#### GET /todos
Returns an array of all todo items.

#### POST /todos
Creates a todo item. Todo item contains these attributes:
```json
{
  "title": "buy milk",
  "completed": true,
  "id": 1
}
```

#### PATCH /todos/{id}
Edits todo item, usually to change `completed` state.

#### DELETE /todos/{id}
Deletes todo item.

#### DELETE /todos
Deletes all todos.

#### POST /todos/seed
Seed an array of todos. This rewrites all todos.

#### POST /signup
Creates a new account.

#### POST /login
Logs into a new account.

#### POST /reset
Deletes all todos and all accounts.

#### DELETE /accounts
Deletes all accounts.