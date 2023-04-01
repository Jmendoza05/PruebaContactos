const Contacto = require('../models/Contacto');
exports.crearContacto = async (req , res) => {

    try {
        let contacto;
        contacto = new Contacto(req.body);
        let consultaContacto = await Contacto.find({"celular": contacto.celular});
        if(consultaContacto.length){
            res.status(301).send('El Contacto ya existente');
        }else{
            await contacto.save();
            res.send(contacto)
        }
    } catch (error) {
        res.status(500).send('Hubo un error')
        
    }
}
exports.findAllContactos = async (req , res) => {

    try {
        let contactos = await Contacto.find();
        res.json(contactos);        
    } catch (error) {
        res.status(500).send('Hubo un error')
        
    }
}
exports.findAndUpdateContacto = async (req , res) => {

    try {
        const { nombre,apellidos,email,celular,direcccion,tipoDeContacto,origen} = req.body        
        let contacto = await Contacto.findById(req.params.id);
        if(!contacto){
            res.status(404).send({msg:"No existe el Contacto"});
        }
        contacto.nombre = nombre;
        contacto.apellidos = apellidos;
        contacto.email = email;
        contacto.celular = celular;
        contacto.direcccion = direcccion;
        contacto.tipoDeContacto = tipoDeContacto;
        contacto.origen = origen;
        contacto = await Contacto.findOneAndUpdate({_id: req.params.id}, contacto,{new: true});
        res.json(contacto);
    } catch (error) {
        res.status(500).send('Hubo un error')        
    }
}
exports.findByIdContacto = async (req , res) => {

    try {
        let contacto = await Contacto.findById(req.params.id);
        if (!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }
        res.json(contacto);

    } catch (error) {
        res.status(500).send("Hubo un error");
    }
}
exports.removeContacto = async (req , res) => {

    try {
        let contacto = await Contacto.findById(req.params.id);
        if (!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }

        await Contacto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Contacto eliminado con exito' })
    } catch (error) {
        res.status(500).send("Hubo un error");
    }
}