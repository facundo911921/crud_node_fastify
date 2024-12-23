import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DatabasePostgres {
    async list (search) {
        let videos;

        if (search) {
            videos = await sql`select * from vídeos where title ilike ${'%' + search + '%'}`;
        } else {
            videos = await sql`select * from vídeos`;
        }

        return videos;
    }

    async create (video) {
        const videoID = randomUUID();
        const { title, description, duration } = video;

        await sql`insert into vídeos (id, title, description, duration) values (${videoID}, ${title}, ${description}, ${duration})`;
    }

    async update (id, video) {
        const { title, description, duration} = video;

        await sql`update vídeos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
    }

    async delete (id) {
        await sql`delete from vídeos where id = ${id}`;
    }
}