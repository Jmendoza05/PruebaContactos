const express = require('express');
const contactosControler = require("../controller/contactoController");
const router = express.Router();

// api-contactos

router.post("/saveContacto", contactosControler.crearContacto);
router.get("/findAllContactos", contactosControler.findAllContactos);
router.put("/findAndUpdateContacto/:id", contactosControler.findAndUpdateContacto);
router.get("/findByIdContacto/:id", contactosControler.findByIdContacto);
router.delete("/removeContacto/:id", contactosControler.removeContacto);



module.exports = router;