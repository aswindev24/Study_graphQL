import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import ListSchemaType from "./Schema/ListSchemaType.js"
import ListResolver from "./Routes/ResolverRoutes/Resolver.js"

const typeDefs = ListSchemaType
const resolvers = ListResolver
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

console.log('server running on port 4000')
console.log("apollo url", { url })