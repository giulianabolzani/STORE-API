import ClientService from "../services/client.service.js";

async function createClient(req, res, next){
    try{
        let client = req.body;
        if (!client.name || !client.cpf || !client.phone || !client.email || !client.adress){   //aqui vamos conferir se todos os parametros foram informados, se não for entra no if
            throw new Error("Name, CPF, Phone, Email e Adress são obrigatórios.")
        }
        //Consumir o clientService
        res.send(await ClientService.createClient(client)); //então ele vai criar no banco de dados e retornar o cliente criado
        logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);   //qualquer erro que der, nos vamos dar um next nele, ou seja, para o proximo middleware
    }
}


export default {
    createClient
}