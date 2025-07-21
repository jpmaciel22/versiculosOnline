require('dotenv').config();
const express = require('express')
const route = require('./routes')
const cors = require('cors');
const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' })); 

app.use(route)


app.use((req, res,) => {
  res.json({ message: 'API CONNECTED.' });
});

app.listen(PORT, (e) => {
    if(!e){
    console.log(`Servidor escutando na porta ${PORT}`);
    }else console.log(e)
  });