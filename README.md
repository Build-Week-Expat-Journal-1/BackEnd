# BackEnd

## Deployed Site: https://expat-digital-journal.herokuapp.com/


## Expat Journal API Guide

### Authentication Routes

#### User Registration

##### POST /auth/register

<br/>

| Method |      Endpoint      |
|--------|--------------------|
|  POST  |   /auth/register   |

Input:\
email: "`generic@mail.com`", (string required, unique)\
username: "gandalf", (string required, unique)\
password: "password1", (string required)

Output:\
ID: 1, (id assigned automatically)\
email: "`generic@mail.com`",\
username: "gandalf",\
password: "hashed password"

<br/>

### User Login

#### POST /auth/login


| Method |      Endpoint      |
|--------|--------------------|
|  POST  |    /auth/login     |


Input:\
username: "gandalf", (string required, unique)\
password: "password1", (string required)\

Output:\
ID: "id assigned to user",\
username: "username of user",\
token: JSON webtoken returned,\
message: "Welcome, user!"

<br/>

### User Posts Routes

<br/>

|      Endpoints       | Method|            Purpose              |
| :------------------: | :----:| :-----------------------------: |
|      /posts          | GET   |     Gets a List of posts        |
|      /posts/:id      | GET   |     Gets a post By Id           |
|      /posts          | POST  |     POST a new travel post      |
|      /posts/:id      | PUT   |        Edits a post             |
|      /posts/:id      |DELETE |        Deletes a post           |


<br/>
