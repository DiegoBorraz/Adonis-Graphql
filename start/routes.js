'use strict'

const Route = use("Route");
const GraphqlAdonis = use("ApolloServer");
// const schema = require("../app/data/schemas");
const schema = require("../app/Graphql/");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");


Route.route(
  "/graphql",
  ({ request, auth, response }) => {
    return GraphqlAdonis.graphql(
      {
        schema,
        context: { auth }
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);
