const Playlist = require("../models/Playlist")
class Playlists{
    static async getMyPlaylists(req,res){
        const {result} = await Playlist.getMyPlaylists(req.session.user.idUser)

        console.log(result)
        return res.render("playlists",{
            playlists:result
        })
    }
    static async create(req,res){
        const {success,result,message} = await Playlist.create({
            ...req.body, //con el operador Spread Operator(...) puedo pasar el array como un alista de argumentos
            owner:req.session.user.idUser
        })

        if(success){
            return res.redirect("/playlists")
        }

        return res.render("playlists",{
            playlist:req.body,
            error:message
        })
    }

    static async addSongToPlayList(req,res){
        const {idSong, idPLaylist} = req.body
        // const body = req.body
        // const idSong = req.body.idSong
        // const idPlaylist = req.body.idPlaylist
        const {result,message,success} = await Playlist.addSong(idPLaylist, idSong)

        return res.status(success?200:400).json({
            result,
            message
        }) //devolviendo un json de status
    }
}

module.exports = Playlists