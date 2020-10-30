import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import './App.css';
import logo from './logo.jpg';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="container">
                    <img
                        src={logo}
                        alt="SpaceX"
                        style={{ width: 300, display: 'block', margin: 'auto' }}
                    />
                    <Launches />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
