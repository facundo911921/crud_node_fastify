import { sql } from './db.js';

// sql`DROP TABLE IF EXISTS vídeos;`.then(() => {console.log('Tabela deletada com sucesso')});

sql`
    CREATE TABLE vídeos (
        id    TEXT PRIMARY KEY,
        title	TEXT,
        description	TEXT,
        duration	INTEGER
    );
`.then(() => {
    console.log('tabela criada com sucesso');
});