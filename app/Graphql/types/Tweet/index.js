
// Define our schema using the GraphQL schema language
module.exports = `
    type Tweet {
      id: Int!
      content: String!
      user: User!
    }
    
    
    type Query {
      allTweets: [Tweet]
      showTweet(id: Int!): Tweet
    }
    type Mutation {
      addTweet (content: String!): Tweet
      deleteTweet (id: Int!): String
    }
  `;