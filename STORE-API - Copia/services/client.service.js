import ClientRepository from "../repositories/client.repository.js"

async function createClient(client){
    return await ClientRepository.insertClient(client);  //retornar o objeto, criando o client no banco e retornando o cliente criado
}

export default {
    createClient
}