const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./Schema');

const app = express();

app.use(
    'graphgl',
    graphqlHTTP({
        schema,
        graphql: true,
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));