const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        watchedCoin: [WatchedCoin]!
        pnl: [Pnl]!
        journal: [Journal]!
    }

    type WatchedCoin {
        _id: ID
        coinId: String
        user: ID
    }

    type Pnl {
        _id: ID
        coinId: String
        amount: Float
        boughtAt: Float
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

    type Query {
        users: [User]
        user(username: String!): User
        watchedCoins(userid: ID!): [WatchedCoin]
        watchedCoin(watchedCoinId: ID!): WatchedCoin
        pnls(userId: ID!): [Pnl]
        pnl(pnl: ID!): Pnl
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        watchCoin(coinId: String!): User
        
    }
    

`;

module.exports = typeDefs;