// Projeto de API com Node.js, Fastify e Postgress para sistema de vídeos.

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

// reply é a mesma coisa do response, pode até ser chamado igual
server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body;

    // Shot sintax. Pode ser usado quando o nome do atributo é igual o nome da variável
    database.create({
        title,
        description, 
        duration
    });

    return reply.status(201).send();
})

server.get('/videos', (request, reply) => {
    const search = request.query.search;

    const videos = database.list(search);

    // Para o caso de só retornar algo, não é necessário usar request, reply. O status code, por padrão é 200 quando é um envio de resposta.
    // Retornar um Array
    return videos;
})

server.put('/videos/:id', (request, reply) => {
    const videoID = request.params.id;
    const {title, description, duration} = request.body;

    database.update(videoID, {
        title,
        description,
        duration
    })

    // 204 significa que algo foi alterado, mas não há o que retornar
    return reply.status(204).send();

})

server.delete('/videos/:id', (request, reply) => {
    const videoID = request.params.id;

    database.delete(videoID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});