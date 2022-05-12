import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_PNLS = gql`
  query getPnls {
    getPnls {
      _id
      coinID
      quantity
      boughtDate
      boughtPrice
    }
  }
`;


