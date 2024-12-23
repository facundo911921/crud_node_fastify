import 'dotenv/config';
import postgres from "postgres";


const URL= process.env.URL;
export const sql = postgres(URL, {ssl: 'require'});