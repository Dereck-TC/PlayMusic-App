function addSessionToTemplate(config){
    return function(req,res,next){
        const user = req.session.user //extraer datos de la session de usuario

        res.locals.user = user //se lo mandan a los locals que son propios del template

        next() //pasa al siguiente middleware o al controlador
    }
}

// function addSessionToTemplate(req,res,next){
//     const user = req.session.user

//     res.locals.user = user

//     next()
// }


module.exports = addSessionToTemplate