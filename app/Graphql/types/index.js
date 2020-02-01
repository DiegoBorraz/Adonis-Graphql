'use strict'
const { mergeTypes } = require('merge-graphql-schemas');

const User = require('./User/');
const Tweet = require('./Tweet/')

const typeDefs = [User, Tweet];

//Se tiver mais de uma importação, ai deve  ser alterado para true
module.exports = mergeTypes(typeDefs, { all: true });