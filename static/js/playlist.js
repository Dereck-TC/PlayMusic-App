const addBtns = document.querySelectorAll(".addBtn")

addBtns.forEach(btn=>{
    btn.onclick = (event)=>{
        event.target.nextElementSibling.classList.toggle("hidden")
    }
}) 

async function addToPlaylist(idPlaylist, idSong){
    // fetch("/playlists/addSongs",{
    //     method: "POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //         idPlaylist,
    //         idSong
    //     })
    // }).then()//nos devuelve una promesa
    const response = await fetch("/playlists/addSongs",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            idPlaylist,
            idSong
        })
    })

    //obteniendo el body (data) de la respuesta
    const data = response.json()
    console.log(data)
}