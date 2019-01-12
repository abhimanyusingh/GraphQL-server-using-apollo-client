import {ApolloServer, gql} from 'apollo-server'

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        age: Int
        employed: Boolean!
        bio: String!
    }

    type Query {
        user: User!
    }
`

const resolvers = {
    Query: {
       user: () => ({
        id: '1',
        name: 'Abhimanyu Singh',
        age: '35',
        employed: true,
        bio: 'Front end engineer in visto.'
       })
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then((url) => {
    console.log(`Server is up at http://localhost:${url.port}`)
})