const express = require('express')
const session = require("express-session")
const path = require('path')
const addSessionToTemplate = require("./middleware/addSessionToTemplate")

//PORT
const { port, sessionSecret } = require('./config')

//const port = process.env.PORT //leer las variables de entorno del Sistema Operativo


// Routes
const auth = require("./routes/auth")
const playlists = require("./routes/playlists")
const songs = require("./routes/songs")

const app = express()

//usando un middlewares
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({
    extended: true // permite pasar querys
}))
app.use(express.json())//para poder trabajar con json en la aplicacion

app.use(session({
    secret:sessionSecret, //
    resave: false, //volverlo a reguardar
    saveUninitialized: false //se guarda un identificador de cuantos usuarios visitan la aplicacion sin importar si tienen o no una sesion activa
}))
//Redis es un motor de base de datos que se almacena


app.use(addSessionToTemplate())

// Configurando template engine
app.set("view engine","pug")
app.set("views","views")

app.use("/auth",auth)
app.use("/playlists",playlists)
app.use("/songs",songs)

app.get("/",function(req,res){
    // return res.json({
    //     hola:"mundo"
    // })
    console.log(req.session)
    // return res.render("home",{
    //     username: "Dereck"
    // })
    return res.render("index")
})

app.listen(port, function(){
    console.log('listening on port: http://localhost:' + port)
    //console.log(dbHost)
})