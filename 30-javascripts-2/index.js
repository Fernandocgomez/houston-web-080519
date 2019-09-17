ASSET_ROOT = "./assets/green-character/"

character = document.createElement('img')
character.src = `${ASSET_ROOT}static.gif`

// Tells the browser "I'm going to position this":
character.style.position = 'absolute' 

character.style.top = "0px"
character.style.left = "0px"

// "#{ASSET_ROOT}/static.gif" <-- In Ruby

document.body.append(character)

let speed = 0

setInterval(function(){
    character.style.left = parseFloat(character.style.left) + speed + 'px'
}, 60 / 1000) // (60 times a second)
    
function walkRight(){
    speed = 0.1
    character.src = `${ASSET_ROOT}walkright.gif`
}

function walkLeft(){
    speed = -0.1
    character.src = `${ASSET_ROOT}walkleft.gif`
}

function stop(){
    speed = 0
    character.src = `${ASSET_ROOT}static.gif`
}

// walkLeft, walkUp, walkDown, stop 

// In Ruby:
// def walkRight()
// end

// walkRight()  <- Invoking a function

