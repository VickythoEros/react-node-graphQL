const express = require('express')
const cors = require('cors')
const mongoClient = require('./mongoClient')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const app = express()
const PORT = 8000

app.use(cors())

app.use(
        '/graphql',
        graphqlHTTP({
        schema: schema,
        graphiql: true,
        }),
    );

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
    mongoClient.initialize()
})