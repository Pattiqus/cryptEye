const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date 
    type User {
        _id: ID
        username: String
        email: String
        password: String
        pnl: [Pnl]
        # journal: [Journal]!
    }

    type Pnl {
        _id: ID
        coinId: String
        quantity: Float
        boughtDate: Date
        boughtPrice: Float
        user: ID
    }

    input PostPnl {
        coinId: String
        quantity: Float
        boughtDate: Date
        boughtPrice: Float
    }

    # type Journal {
    #     _id: ID
    #     journalSubject: String
    #     journalText: String
    #     createdAt: String
    # }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        pnls: [Pnl]
        pnl(pnl: ID!): Pnl
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPnl(data: PostPnl): User
        editPnl(_id: ID!, coinId: String, quantity: Float, boughtDate: Date, boughtPrice:Float): Pnl
        dropPnl(pnlId: ID!): Pnl
    }
    

`;

module.exports = typeDefs;