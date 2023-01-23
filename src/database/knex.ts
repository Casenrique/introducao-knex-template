import { appendFile } from "fs"
import { knex } from "knex"

export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/introducao-knex.db"
    },
    useNullAsDefault: true,
    pool: {
        min: 0,
        max: 1
    }
})

