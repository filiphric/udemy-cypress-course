# Cypress automation for people in a hurry
Repository for a course hosted on Udemy on the topic of test automation in Cypress. The name of the course is a homage to [Neil DeGrasse Tyson’s book](https://www.amazon.com/Astrophysics-People-Hurry/dp/B06XB2PX7G) which I recommend you give a read.

## About author
I’m Filip. I’m a QA lead at [Slido](https://www.sli.do/) and [Cypress.io ambassador](https://cypress.io/ambassadors/)

## What’s in here
In this repo, you can find an application we are testing throughout the course as well as all the examples in video course. Each coding video chapter starts with `start.js` file, so you can follow along and code with me. The final state of the code can be found in `final.js` file. Some of the chapters contain `challenge.js` file too. As the name suggest, you can find additional examples and challenges to improve your Cypress skills.

## TodoMVC app
Simple todoMVC app build with Vue.js, originally forked from [testing-workshop-cypress](https://github.com/cypress-io/testing-workshop-cypress). I expanded the application and added a couple of features.

### How to install and run app
1. `npm install`
2. `npm start`
3. open app on http://localhost:3000

### Backend
Backend is a json-server on a static json file located in `todomvc/data.json`. 

### API
Just a short API documentation for our todo app.

---
#### GET /todos
Returns an array of all todo items.

---
#### POST /todos
Creates a todo item. 

**Example of a an item payload:**
```json
{
  "title": "buy milk",
  "completed": false,
  "id": 1
}
```
---
#### PATCH /todos/{id}
Edits todo item, usually to change `completed` state. {id} stands for todo id.

**Example payload:**
```json
{
  "completed": true
}
```
---
#### DELETE /todos/{id}
Deletes todo item with given id.

---
#### DELETE /todos
Deletes all todos.

---
#### POST /todos/seed
Seed an array of todos. Payload needs to be an array of objects, containing todos. This request rewrites all todos.

---
#### POST /signup
Creates a new account. 
**Example payload:**
```json
{
  "email": "email@example.com",
  "password": "abc123"
}
```
**Example error statuses:**

`409 (Conflict)` - Account already exists

`401 (Unauthorized)` - Email or password was not provided

**Request headers:**

`sendwelcomeemail: true` - Sends welcome email to signed up user

**Response headers:**

`Set-Cookie: "auth=true;"`

---
#### POST /login
Logs into a new account.

**Example payload:**
```json
{
  "email": "email@example.com",
  "password": "abc123"
}
```
**Response headers:**

`Set-Cookie: "auth=true;"`

**Example error statuses:**

`401 (Unauthorized)` - Wrong email or password

---
#### POST /reset
Deletes all todos and all accounts.

---
#### DELETE /accounts
Deletes all accounts.

---
#### POST /accounts/seed
Seed an array of accounts. Payload needs to be an array of objects, containing accounts. This request rewrites all accounts.
