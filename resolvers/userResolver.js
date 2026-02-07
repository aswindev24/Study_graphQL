import { User } from "../db.js"

const userResolver = {
    Query: {
        users() {
            return User
        }
    }
}

export default userResolver