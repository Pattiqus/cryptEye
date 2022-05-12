const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
        boughtDate: String
        boughtPrice: Float
        user: ID
    }

    input PostPnl {
        _id: ID
        coinId: String
        quantity: Float
        boughtDate: String
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
        pnls(userId: ID!): [Pnl]
        pnl(pnl: ID!): Pnl
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPnl(pnl: [PostPnl]): User
        editPnl(pnlId: ID!): User
        dropPnl(pnlId: ID!): User
    }
    

`;

module.exports = typeDefs;