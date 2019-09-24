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

let isNonPlayable =
     character => 
        character instanceof NonPlayableCharacter

let whereNameIs = name => student => student.name == name

function oneOnOne(name){ 
    let student = Character.all.find( whereNameIs(name) )
    Character.all.splice(Character.all.indexOf(student), 1)
    student.element.remove()
}

function stillConfused(){
    return Character.all
        .filter( isNonPlayable )
        .map( student => student.name)
}

function groupReview(){
    Character.all
        .filter( isNonPlayable )
        .forEach( student => student.element.remove())
    
    Character.all = []
}

function directions(){
    return Character.all.map( student => student.direction )
}

function walksFarthest(){

}