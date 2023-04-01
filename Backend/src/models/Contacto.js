const mongoose = require('mongoose')

const conntactoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    celular:{
        type: Number,
        required: true
    },
    fechaNacimiento:{
        type: Date,
        default: Date.now()
    },
    direcccion:{
        type: String,
        required: true
    },
    tipoDeContacto:{
        type: String,
        required: true
    },
    origen:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Contacto', conntactoSchema)