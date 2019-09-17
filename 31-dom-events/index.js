const ASSET_ROOT = './assets/green-character'

const character = document.createElement('img')
character.style.width = '75px'
character.style.position = 'absolute'
character.style.left = '0px'
character.style.top = '100px'
character.src = `${ASSET_ROOT}/static.gif`
document.body.append(character)

let direction = null
let speed = 0.5

setInterval(function(){
    // console.log('loop is running')
    const left = parseFloat(character.style.left)
    const top = parseFloat(character.style.top)

    if(direction == 'right'){
        character.style.left = `${left+speed}px`
    }

    if(direction == 'left'){
        character.style.left = `${left-speed}px`
    }

    if(direction == 'up'){
        character.style.top = `${top-speed}px`
    }

    if(direction == 'down'){
        character.style.top = `${top+speed}px`
    }

}, 60 / 1000)


function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
    direction = 'right'
}

function walkLeft(){
    character.src = `${ASSET_ROOT}/walkleft.gif`
    direction = 'left'
}

function walkUp(){
    character.src = `${ASSET_ROOT}/walkup.gif`
    direction = 'up'
}

function walkDown(){
    character.src = `${ASSET_ROOT}/walkdown.gif`
    direction = 'down'
}

function stop(){
    character.src = `${ASSET_ROOT}/static.gif`
    direction = null
}

document.addEventListener('keydown', function(e){
    if(e.repeat == false){ // <-- If the key is not held down
        if(e.key == "ArrowLeft"){
            walkLeft()
        }
        if(e.key == "ArrowRight"){
            walkRight()
        }
        if(e.key == "ArrowUp"){
            walkUp()
        }
        if(e.key == "ArrowDown"){
            walkDown()
        }
    }
})


document.addEventListener('keyup', function(){
    stop()
})

document.addEventListener('click', function(){
    // console.log('Success')
})

character.addEventListener('click', function(){
    alert('Ouch')
})

let form = document.querySelector('.settings-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    speed = parseFloat(speedInput.value)
})

// For Negative Numbers ~= slower speed:
// let form = document.querySelector('.settings-form')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     let speedInput = document.querySelector('.speed-input')
//     if(parseFloat(speedInput.value) < 0){
//         speed = 1 / ( 2 ** Math.abs(parseFloat(speedInput.value) ))
//     } else {
//         speed = parseFloat(speedInput.value)
//     }
// })
