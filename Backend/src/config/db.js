const { default: mongoose } = require('mongoose');
const mngoose = require('mongoose');
require('dotenv').config({path:"variables.env"});
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Base de datos conectada");        
    } catch (error) {
        process.exit(1);
    }
}
module.exports = conectarDB;