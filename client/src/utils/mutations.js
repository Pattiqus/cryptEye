import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PNL = gql`
  mutation addPnl($input: PostPnl!) {
    addPnl(input: $input) {
      _id
      coinId
      quantity
      boughtDate
      boughtPrice
    }
  }
`;

export const DROP_PNL = gql`
  mutation dropPnl($id: ID!) {
    dropPnl(_id: $id) {
      _id
      coinId
      quantity
      boughtDate
      boughtPrice
    }
  }
`;