const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Pnl } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.find().populate('Pnl');
        },
        pnls: async (parent, args, context) => {
            return Pnl.find({ user: context.user._id });
        }
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
        addPnl: async (parent, args, context) => {
            const pnl = await Pnl.create({ ...args.data, user: context.user._id });
            return pnl
        },
        editPnl: async (parent, args, context) => {
            const pnl = await Pnl.findOneAndUpdate({ ...args });
            return pnl
        },
        dropPnl: async (parent, { pnlId }) => {

            return Pnl.findByIdAndRemove({ _id: pnlId});
        }
    }
}

module.exports = resolvers;