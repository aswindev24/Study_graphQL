import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemaList from "./Routes/SchemaRoutes.js";
import resolverlist from "./Routes/ResolverRoutes.js";
const server = new ApolloServer({
    typeDefs: schemaList,
    resolvers: resolverlist
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`Server is running on ${url}`)