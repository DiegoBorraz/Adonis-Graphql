
// Define our schema using the GraphQL schema language
module.exports = `
    type User {
      id: Int!
      username: String!
      password: String
      email: String!
    }
    
    
    type Query {
      allUsers: [User]
      fetchUser(id: Int!): User
    }
    type Mutation {
      login (email: String!, password: String!): String
      createUser (username: String!, email: String!, password: String!): User
    }
  `;

