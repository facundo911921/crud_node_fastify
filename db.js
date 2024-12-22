import 'dotenv/config';
import postgres from "postgres";

// const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const URL='postgresql://videos_owner:gIXSF57nMkrQ@ep-quiet-tree-a5j549th.us-east-2.aws.neon.tech/videos?sslmode=require'
export const sql = postgres(URL, {ssl: 'require'});