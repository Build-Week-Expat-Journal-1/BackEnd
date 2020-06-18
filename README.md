# BackEnd

## Expat Journal API Guide

## Authentication Routes

### User Registration

#### POST /auth/register


|--------|--------------------|
| Method |      Endpoint      |
|--------|--------------------|
|  POST  |   /auth/register   |
|--------|--------------------|

Input:
email: "generic@mail.com", (string required, unique)
username: "gandalf", (string required, unique)
password: "password1", (string required)

Output:
ID: 1, (id assigned automatically)
email: "generic@mail.com",
username: "gandalf",
password: "hashed password"


### User Login

#### POST /auth/login


|--------|--------------------|
| Method |      Endpoint      |
|--------|--------------------|
|  POST  |    /auth/login     |
|--------|--------------------|


Input: 
username: "gandalf", (string required, unique)
password: "password1", (string required)

Output:
ID: "id assigned to user",
username: "username of user",
token: JSON webtoken returned,
message: "Welcome, user!"
