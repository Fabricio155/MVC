const db = require('../config/db');

const Cliente = {
    getAllClients: async function () {
        try {
            const [rows] = await db.query('SELECT * FROM  cliente');
            return rows;
        }catch(error){
            throw error;
        }
    },

    createNewClient: async function (nome, cpf){
        try{
            const [result] = await db.execute('INSERT INTO CLIENTE(nome, cpf) VALUES(?,?)', [nome, cpf]);
            return { id: result.insertId, nome, cpf};

        }catch(error){
            throw error;
        }

    },
    updateClient: async (id, nome, cpf) =>{  
        try {
            if(!id){
                throw new Error("ID do cliente é obrigatório");
            }
            // ATUALIZAR O CLIENTE NO BANCO
            const [result] = await db.execute("UPDATE Cliente SET nome" +
                "= ?, cpf = ? WHERE id = ?", [nome, cpf, id]
            )
            // VERIFICAR SE TEVE ALTERACAO EM ALGUM REGISTRO
            if(result.affectedRows === 0){
                throw new Error('Cliente não encontrado')
            }
            return {id, nome, cpf }

        } catch (error) {
            throw error;
        }
    },

    deleteClient:async(id)=>{
        try{
            // verifica se o id é valido 
            if(!id){
                throw new error('id do cliente é necessario');

            }
            // exclua o cliente do banco de dados
            const [result]=await db.execute('DELETE FROM' ,'CLIENTE WHERE ID =?',[ID] )
            if(result.affectedRows===0){
                throw new error ('cliente nao encontrado');
            }return {message :'cliente excluido com sucesso'}
        }
        catch(error){
            throw error;
        }
    }

};



module.exports = Cliente;