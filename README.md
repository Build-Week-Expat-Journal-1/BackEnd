# BackEnd

## Expat Journal API Guide

### Authentication Routes

#### User Registration

##### POST /api/auth/register

<br/>

| Method |      Endpoint      |
|--------|--------------------|
|  POST  | /api/auth/register |

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
|  POST  |  /api/auth/login   |


Input:\
username: "gandalf", (string required, unique)\
password: "password1", (string required)\

Output:\
ID: "id assigned to user",\
username: "username of user",\
token: JSON webtoken returned,\
message: "Welcome, user!"

### Story Endpoints

#### GET /api/posts


| Method |      Endpoint      |
|--------|--------------------|
|  Get   |    /api/posts      |


Input:\
None

Output:\
Posts

#### GET /api/posts/:id


| Method |      Endpoint      |
|--------|--------------------|
|  Get   |   /api/posts/:id   |


Input:\
id: "id of post"

Output:\
Post of corresponding ID

#### POST /api/posts/


| Method |      Endpoint      |
|--------|--------------------|
|  Post  |     /api/posts     |


Input:\
category: "Category of post"\
story: "Story of post"

Output:\
ID: id of post (auto-generated)\
Category: "Category of post"\
Story: "Story of post"\
Posted_date: post date (auto-generated)

#### DELETE /api/posts/:id


| Method |      Endpoint      |
|--------|--------------------|
| Delete |   /api/posts/:id   |


Input:\
id: 1

Output:\
"Post id: 1 has been removed"

#### PUT /api/posts/


| Method |      Endpoint      |
|--------|--------------------|
|  Put   |   /api/posts/:id   |


Input:\
ID: 1
category: "Category of post"\
story: "Story of post"

Output:\
Category: "Category of post"\
Story: "Story of post"



