const userType = `#graphql
type User{
    id:ID!
    name:String!
    email:String!
}

    extend type Query{
        users:[User]
    }


`
export default userType