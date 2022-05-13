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
  mutation addPnl($data: PostPnl) {
    addPnl(data: $data) {
      _id
    }
  }
`;

export const EDIT_PNL = gql`
  mutation editPnl($id: ID, $coinId: String, $quantity: Float, $boughtDate: Date, $boughtPrice: Float) {
    editPnl(id: $id, coinId: $coinId, quantity: $quantity, boughtDate: $boughtDate, boughtPrice: $boughtPrice) {
      _id
      coinId
      quantity
      boughtDate
      boughtPrice
    }
  }
`;

export const DROP_PNL = gql`
  mutation dropPnl($pnlId: ID!) {
    dropPnl(pnlId: $pnlId) {
      _id
      coinId
      quantity
      boughtDate
      boughtPrice
    }
  }
`;