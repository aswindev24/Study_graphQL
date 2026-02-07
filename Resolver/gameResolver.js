import { Game } from "../db.js"
const gameResolver = {
    Query: {
        games() {
            return Game
        }
    }
}

export default gameResolver