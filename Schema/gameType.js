const gameType = `#graphql

type Game{
    id:ID!
    title:String!
    genre:String!
}
    extend type Query{
        games:[Game]
    }
`

export default gameType