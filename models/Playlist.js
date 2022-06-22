const { query } = require("../libs/database");

class Playlist{
    static async getMyPlaylists(idUser){
        // try {
        //     const result = await query("SELECT * FROM playlists WHERE owner=?",[idUser])
        //     return {
        //         success:true,
        //         result
        //     }
        // } catch ({message}) {
        //     return {
        //         success:false,
        //         message
        //     }
        // }
        return await query("SELECT * FROM playlists WHERE owner=?",[idUser])
    }

    static async create(data){
        // try {
        //     const result =await query("INSERT INTO playlists(??) VALUES(?)",[Object.keys(data),Object.values(data)])
        //     return {
        //         success:true,
        //         result
        //     }
        // } catch ({message}) {
        //     return {
        //         success:false,
        //         message
        //     }
        // }
        return await query("INSERT INTO playlists(??) VALUES(?)",[Object.keys(data),Object.values(data)])
    }

    static async addSong(idPlaylist, idSong){
        return await query ("INSERT INTO playlists_songs(??) VALUES(?)",[Object.keys(data),Object.values(data)])
    }
}

module.exports = Playlist 