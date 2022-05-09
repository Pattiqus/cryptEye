const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');

        },
    },
    Mutation: {
        login: async (parent, { email, password}) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found with this email address')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create({ ...args });
            const token = signToken(user);
            return { token, user };
        },
    }
}

module.exports = resolvers;