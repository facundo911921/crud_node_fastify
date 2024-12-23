// Projeto de API com Node.js, Fastify e Postgress para sistema de vídeos.

import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js';


const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

// reply é a mesma coisa do response, pode até ser chamado igual
server.post('/videos', async (request, reply) => {
    const {title, description, duration} = request.body;

    // Short sintax. Pode ser usado quando o nome do atributo é igual o nome da variável
    await database.create({
        title,
        description, 
        duration
    });

    return reply.status(201).send();
})

server.get('/videos', async (request, reply) => {
    const search = request.query.search;

    const videos = await database.list(search);

    // Para o caso de só retornar algo, não é necessário usar request, reply. O status code, por padrão é 200 quando é um envio de resposta.
    // Retornar um Array
    return videos;
})

server.put('/videos/:id', async (request, reply) => {
    const videoID = request.params.id;
    const {title, description, duration} = request.body;

    await database.update(videoID, {
        title,
        description,
        duration
    })

    // 204 significa que algo foi alterado, mas não há o que retornar
    return reply.status(204).send();

})

server.delete('/videos/:id', async (request, reply) => {
    const videoID = request.params.id;

    await database.delete(videoID);

    return reply.status(204).send();
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
});