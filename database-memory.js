import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    // `Map` é uma estrutura de dados semelhante a um objeto, mas com algumas vantagens:
    // 1. Ele mantém a ordem de inserção dos pares chave-valor.
    // 2. Permite que qualquer tipo de valor (incluindo objetos) seja usado como chave.
    // 3. Métodos como `.set()`, `.get()`, `.delete()`, e `.has()` tornam o uso mais prático.

    // `new` é usado para instanciar uma nova classe. OBS: nem toda classe exige.
    
    // `#videos` é uma propriedade privada da classe. O prefixo `#` é uma sintaxe de campo privado em JavaScript.
    // Isso significa que a propriedade só pode ser acessada ou modificada dentro da classe onde foi definida.
    #videos = new Map();

    list (search) {
        // `this` refere-se à instância atual da classe `DatabaseMemory`.
        // É usado para acessar propriedades e métodos da instância atual. Como o ''self' em Python.
        // `Array.from()` é um método que cria uma nova instância de um Array a partir de um objeto iterável.
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0];
            const data = videoArray[1];

            return {
                id,
                // Spread operator. Pega os atributo do objeto e aplica em outro objeto. 'Trás de dentro para fora'
                ...data
            }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search);
            }

            return true;
        });
    }

    create (video) {
        const videoID = randomUUID();
        
        this.#videos.set(videoID, video);
    }

    update (id, video) {
        this.#videos.set(id, video);
    }

    delete (id) {
        this.#videos.delete(id);
    }
}