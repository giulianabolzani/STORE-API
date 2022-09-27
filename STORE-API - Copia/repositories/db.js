import pg from "pg";

async function connect(){
    if (global.connection){ //vai verificar se existe um global.connection e se existe vai retornar aquela mesma conexão
        return global.connection.connect();
    }

    //esse código vai ser executado uma vez para que não crie uma conexão toda vez
    const pool = new pg.Pool({
        connectionString: "postgres://ubpdjpzv:EotFc3sqYhO4e-vEdJDYxSN27gnKW2Ti@babar.db.elephantsql.com/ubpdjpzv"   //string de conexão, iremos pegar a URL do elefante
    });
    global.connection = pool;  //criar de forma global o pool

    return pool.connect();   //para criar a conexão

}

export{
    connect
}