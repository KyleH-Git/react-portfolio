
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Footer from './components/footer';

const client = new ApolloClient({
  uri: 'graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>
        <Header />
          <Outlet />
        <Footer />
      </ApolloProvider>
  )
}

export default App
