import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import base from "./Schema/base.js"
import userType from "./Schema/userType.js"
import gameType from "./Schema/gameType.js"
import userResolver from "./Resolver/userResolver.js"
import gameResolver from "./Resolver/gameResolver.js"

const typeDefs = [base, userType, gameType]
const resolvers = [userResolver, gameResolver]
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

console.log('server running on port 4000')
console.log("apollo url", { url })