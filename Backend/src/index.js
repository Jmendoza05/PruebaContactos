const express = require('express');
const morgan = require('morgan');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
conectarDB();

app.use('/api/contactos', require('./routes/contactos'));
//app.use('/api/equipos/equipoAlerta', require('./routes/equipoAlerta.routes'));

app.listen(app.get('port'),() =>{
    console.log("Server Success on port",app.get('port'));
});
module.exports = app;