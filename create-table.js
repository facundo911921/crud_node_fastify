import { sql } from './db.js';

sql`
    CREATE TABLE vídeos (
        title	TEXT,
        description	TEXT,
        duration	INTEGER
    );
`.then(() => {
    console.log('tabela criada com sucesso');
})