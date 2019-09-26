let playableCharacter;

async function fetchCharacter(){
    let response = await fetch('http://localhost:3000/characters/1')
    let position = await response.json()
    playableCharacter = createCharacter('green', position.x, position.y)
}

fetchCharacter()

document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            playableCharacter.walkLeft()
        }
        if(e.key == "ArrowRight"){
            playableCharacter.walkRight()
        }
        if(e.key == "ArrowUp"){
            playableCharacter.walkUp()
        }
        if(e.key == "ArrowDown"){
            playableCharacter.walkDown()
        }
    }
})

document.addEventListener('keyup', function(){
    playableCharacter.stop()
    fetch('http://localhost:3000/characters/1', {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "x": parseFloat(playableCharacter.image.style.left),
            "y": parseFloat(playableCharacter.image.style.top)
        })
    })
})

let form = document.querySelector('.settings-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    speed = parseFloat(speedInput.value)
})