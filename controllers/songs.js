const Song = require("../models/Song")
const PLayList = require("../models/Playlist")
const Playlist = require("../models/Playlist")
class SongsController{
    static async getAllSongs(req,res){
        const {result:songs} = await Song.getAllSongs() //los dos puntos sirven para renombrar las variables
        const {result:playlists} = await Playlist.getMyPlaylists(req.session.user.idUser)

        console.log(songs)
        console.log(playlists)
        return res.render("songs",{
            // songs:result
            songs,
            playlists
        })
    }
    static async create(req,res){
        const {success,result,message} = await Song.create(req.body)
        if(success){
            return res.redirect("/songs")
        }

        return res.render("songs",{
            song:req.body,
            error:message
        })
    }
}

module.exports = SongsController