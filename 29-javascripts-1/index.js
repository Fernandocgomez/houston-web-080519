const ASSET_ROOT = './assets/green-character'
const speed = 0.1
const character = document.createElement('img')

document.body.append(character)
character.src = `${ASSET_ROOT}/static.gif`
character.style.position = 'absolute'
character.style.left = '100px'
character.style.top = '100px'

function walkLeft(){
    character.src = `${ASSET_ROOT}/walkleft.gif`
}

function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
}

function walkUp(){
    character.src = `${ASSET_ROOT}/walkup.gif`
}

let stopped = false;

function walkDown(){
    stopped = false
    setInterval(function (){
        if(stopped == false){
            console.log(character.style.top); // <- "100px" => 100
            character.style.top  = parseFloat(character.style.top) + speed + 'px';
            console.log(character.style.top);
        }
    }, 60 / 1000);
    character.src = `${ASSET_ROOT}/walkdown.gif`;
}

function stop(){
    stopped = true
    character.src = `${ASSET_ROOT}/static.gif`
}
