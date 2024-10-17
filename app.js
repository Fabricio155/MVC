const express = require('express');
const clienteController = require('./controllers/ClienteController');

const path = require('path');
const app = express()
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/update',(req,res)=>{   
    res.sendFile(path.join(__dirname,'public','update.html'))

   });
   app.get('/',(req,res)=>{   
    res.sendFile(path.join(__dirname,'public','delete.html'))

   });

   app.delete('/api/clientes/:id',clienteController.deleteClient)
   app.put('/api/clientes/:id',clienteController.updateClient)

app.get('/api/clientes', clienteController.getAllClients);

app.post('/api/clientes', clienteController.createNewClient);


app.listen(PORT, function(){
    console.log('Servidor na porta ' + PORT);
});