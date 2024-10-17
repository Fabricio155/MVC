const sql = require('mssql');

// Configurações de conexão com o SQL Server
const config = {
    user: 'aluno',
    password: '1234',
    server: ' ',  // Endereço do servidor SQL Server
    database: 'quiz', // Nome do banco de dados

    options: {
        encrypt: true, // Use a criptografia SSL
        trustServerCertificate: true // Aceita certificados autoassinados
    }
};
let pool;

async function connectDB() {
    if (!pool) {
        try {
            pool = await sql.connect(config);
            console.log('Conectado ao banco de dados SQL Server');
        } catch (err) {
            console.error('Erro ao conectar ao banco de dados:', err.message);
            throw new Error('Erro ao conectar ao banco de dados');
        }
    }
    return pool;
}