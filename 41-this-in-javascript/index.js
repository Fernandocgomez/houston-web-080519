let link;

async function fetchCharacter(){
    let response = await fetch('http://localhost:3000/characters/1')
    let position = await response.json()
    link = new Character('green', position.x, position.y)
}

fetchCharacter()

document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            link.walkLeft()
        }
        if(e.key == "ArrowRight"){
            link.walkRight()
        }
        if(e.key == "ArrowUp"){
            link.walkUp()
        }
        if(e.key == "ArrowDown"){
            link.walkDown()
        }
    }
})

document.addEventListener('keyup', function(){
    link.stop()
    fetch('http://localhost:3000/characters/1', {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "x": parseFloat(link.image.style.left),
            "y": parseFloat(link.image.style.top)
        })
    })
})

let form = document.querySelector('.settings-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    speed = parseFloat(speedInput.value)
})