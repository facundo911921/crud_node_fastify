import 'dotenv/config';
import postgres from "postgres";



// const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const URL= process.env.URL;
export const sql = postgres(URL, {ssl: 'require'});