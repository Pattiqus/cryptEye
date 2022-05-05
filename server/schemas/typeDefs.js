const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        watchedCoin: [WatchedCoin]!
        pnl
        journal: [Journal]!
    }

    type WatchedCoin {
        _id: ID
        coinId: String
        user: User
    }

    type Pnl {
        _id: ID
        coinId: String
        amount: Float
        boughtAt: Float
        currentPrice: Float
        netPosition: Float
    }

    type Journal {
        _id: ID
        journalSubject: String
        journalText: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }


`;

module.exports = typeDefs;