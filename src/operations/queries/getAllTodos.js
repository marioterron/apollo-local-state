import { gql } from '@apollo/client';

const GET_ALL_TODOS = gql`
  query getAllTodos {
    todos @client {
      id
      text
    }
  }
`;

export default GET_ALL_TODOS;
