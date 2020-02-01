'use strict'

const Tweet = use("App/Models/Tweet");

//Define resolvers
module.exports = {
    Query: {
        //
        async allTweets() {
            const tweets = await Tweet.all();
            return tweets.toJSON();
        },

        async showTweet(_, { id }) {
            const tweet = await Tweet.find(id);
            return tweet.toJSON();
        }
    },
    Mutation: {
        async addTweet(_, { content }, { auth }) {
            try {
                await auth.check();
                console.log("TESTEEE", auth)
                const user = await auth.getUser();

                return await Tweet.create({
                    user_id: user.id,
                    content: content
                });
            } catch (error) {
                // Throw error if user is not authenticated
                throw new Error('Missing or invalid jwt token')
            }
        },
        async deleteTweet({ id }, { auth }) {
            const tweet = await Tweet.findOrFail(id);
            //verifica se é o usuário logado
            if (tweet.user_id != auth.user.id) {
                return response.status(401);
            }
            await tweet.delete();
        }
    }
}

