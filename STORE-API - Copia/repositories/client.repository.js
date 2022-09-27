
import { connect } from "./db.js";

async function insertClient(client){   //(client) é um parametro que vai receber do banco de dados
    const conn = await connect();
    const sql = "INSERT INTO clients (name, cpf, phone, email, adress) VALUES ($1, $2, $3, $4, $5)"; //é importante passar os parametros dessa forma para que não tenha ataques
    const values = [client.name, client.cpf, client.phone, client.email, client.adress];
    const res = await conn.query(sql, values);
    return{};
}

export default {
    insertClient
}