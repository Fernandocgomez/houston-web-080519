
function createCharacter(color){ // <- "red" or "green"
    const ASSET_ROOT = `./assets/${color}-character`

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

    let newCharacter = {

        walkRight: function(duration){
            duration // 5000
            character.src = `${ASSET_ROOT}/walkright.gif`
            direction = 'right'
        },

        walkLeft: function(duration){
            character.src = `${ASSET_ROOT}/walkleft.gif`
            direction = 'left'
        },

        walkUp: function(duration){
            character.src = `${ASSET_ROOT}/walkup.gif`
            direction = 'up'
        },

        walkDown: function(duration){
            character.src = `${ASSET_ROOT}/walkdown.gif`
            direction = 'down'
        },

        stop: function(){
            character.src = `${ASSET_ROOT}/static.gif`
            direction = null
        },

        setSpeed(value){
            speed = value
        }
    }

    return newCharacter
}