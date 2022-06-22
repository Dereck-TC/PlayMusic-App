const express = require("express")

//Controller
const AuthController = require("../controllers/auth") //Importacion de una clase
const authConstroller = new AuthController()//Instancia de una clase(Objeto)
const authPermissions = require("../middleware/authPermissions")


const router = express.Router()

// router.get("/login",(req,res)=>{
//     return res.render("login",{
//         username: "Dereck",
//         lista:["María","Miguel","Emilio"],
//         id:123,
//         //hiddenNavbar:true
//     })
// })

router.use(authPermissions({
    authRequired:false,
    exclude:["/logout"]
}))

router.get("/login", AuthController.getLoginForm)

router.post("/login", AuthController.login)

router.get("/signup", AuthController.getSignUpForm)

// router.post("/signup",AuthController.signUp)

//Esto no funciona, SignUp pierde la referencia al prototype
// router.post("/signup",authController.signUp)

//Esto si funciona
router.post("/signup",(req,res)=>{
    authConstroller.signUp(req,res)
})
// router.post("/signup",authConstroller.signUp.bind(AuthController)) //bind enlaza una propiedad
// router.post("/signup",(...args)=>authController.signUp(...args))

//lambdas => funciones anónimas

router.get("/logout",AuthController.logout)

module.exports = router