function createCharacter(color, x, y){

    const ASSET_ROOT = `./assets/${color}-character`

    const character = document.createElement('img')
    character.style.width = '75px'
    character.style.position = 'absolute'
    character.style.left = `${x}px`
    character.style.top = `${y}px`
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

    return {
        image: character, 

        stop: function(){
            character.src = `${ASSET_ROOT}/static.gif`
            direction = null
        },

        walkDown: function(duration){
            character.src = `${ASSET_ROOT}/walkdown.gif`
            direction = 'down'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkUp: function(duration){
            character.src = `${ASSET_ROOT}/walkup.gif`
            direction = 'up'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkLeft: function(duration){
            character.src = `${ASSET_ROOT}/walkleft.gif`
            direction = 'left'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkRight: function(duration){
            character.src = `${ASSET_ROOT}/walkright.gif`
            direction = 'right'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        }
    }

}