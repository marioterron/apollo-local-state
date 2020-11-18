import { InMemoryCache, makeVar } from '@apollo/client';

const todosVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
      },
    },
  },
});

export { todosVar };

export default cache;
