'use strict'
const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./User');
const Tweet = require('./Tweet/')

const resolvers = [User, Tweet];

module.exports = mergeResolvers(resolvers);