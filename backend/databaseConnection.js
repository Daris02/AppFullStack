import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "postgres",
    port: 5432
});

export default pool;