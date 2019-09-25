const ASSET_ROOT = './assets/'

let direction = null
let speed = 5

document.addEventListener('DOMContentLoaded', function(){
    
    const playerList = document.querySelector('.player-list')
    fetch('http://localhost:3000/players')
        .then(function(response){
            return response.json()
        })
        .then(function(players){
            for(let i = 0; i < players.length; i++ ){
                const player = players[i];
                let playerListItem = document.createElement('li')
                playerListItem.innerText = player.name
                playerList.append(
                    playerListItem
                )
                playerListItem.addEventListener('click', function(){
                    playerList.style.display = 'none'
                    selectPlayer(player)
                })
            }
        })
})

const selectPlayer = function(playerData){
    renderForm(playerData)
    
    new PlayableCharacter(playerData, 'josh')

    fetch('http://localhost:3000/npcs')
        .then( response => response.json() )
        .then( npcData => {
            npcData.forEach( npc => {
                new NonPlayableCharacter(npc, 'red')
            })
        })

}

function oneOnOne(x){
    Character.all.forEach(function(student){
        if(
            student.name == x
        ){
            Character.all.splice(Character.all.indexOf(student), 1)
            student.element.remove()
        }
    })
}

function stillConfused(){
    let names = []
    Character.all.forEach(function(student){
        if(
            student instanceof NonPlayableCharacter 
        ){
            names.push(student.name)
        }
    })
    return names
}

function groupReview(){
    Character.all.forEach(function(student){
        if(
            student instanceof NonPlayableCharacter 
        ){
            student.element.remove()
        }
    })
    Character.all = []
}

function directions(){
    // ?
}