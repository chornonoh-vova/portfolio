import ApolloClient from 'apollo-boost';
// import { loader } from 'graphql.macro';

// export const getPinnedRepos = loader('./pinned-repos.graphql');

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${atob('YTM3MGIxMDc1NzEwNjg4YWI0NzVlNTZmNDZiN2QyOWY2ZTY0OGM4NA==')}`,
      },
    });
  }
});


