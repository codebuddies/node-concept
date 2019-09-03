# Node proof-of-concept for CodeBuddies V3

Background: https://github.com/codebuddies/codebuddies/issues/1136

Crowdsourced brainstorm of problems we want to solve: https://pad.riseup.net/p/BecKdThFsevRmmG_tqFa-keep

# Proof-of-concept Goals

- Resource CRUD

TODO:

- User profiles
  - How easy is it to set up an editable user profile?
- Calendar/hangouts
  - How easy would it be to make a calendar widget that lets users block out times they're free for hangouts?

# Getting Started

Clone the project, run `npm install` and `npm start` to load up the server.
If having database errors with postgres, see this guide on getting it set up:
https://www.robinwieruch.de/postgres-sql-macos-setup
https://www.robinwieruch.de/postgres-sql-windows-setup

Copy `.env.example` as `.env` in the root directory. Not necessary to change the values at this time. Leave `DATABASE_PASSWORD` blank.

# How to use

Once the server is up, the application is available by visiting localhost:3000 in the browser. Using RESTful paths, going to `/resources` will list all current resources, `/resources/:resourceId` will show a single resource based on ID.

Alternatively, you can use cURL to interface with application.

```bash
# returns an collection of Resource objects
curl localhost:3000/resources
```

```bash
# POST request to create a new Resource with a JSON payload
curl -d '{ "title": "Some title!", "description": "Great description!" }' -H 'Content-Type: application/json' localhost:3000/resources
```

```bash
# DELETE request to delete a resource with the resource ID of 3
curl -X DELETE localhost:3000/resources/3
```

# Findings

TBD

# Technologies Used

Node, Express, Postgres, Sequelize (ORM to handle models and Postgres).
