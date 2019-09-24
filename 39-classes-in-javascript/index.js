const ASSET_ROOT = './assets/green-character'

class Character {

    constructor(x, y){

        this.element = document.createElement('img')
        this.element.style.width = '75px'
        this.element.style.position = 'absolute'

        this.element.src = `${ASSET_ROOT}/static.gif`
        this.direction = null
        this.speed = 5

        this.element.style.left = x + 'px'
        this.element.style.bottom = y + 'px'
        document.body.append(this.element)

        Character.all.push(this)


        setInterval( () => {

            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)

            if(this.direction == 'right'){
                this.element.style.left = `${left+this.speed}px`
            }

            if(this.direction == 'left'){
                this.element.style.left = `${left-this.speed}px`
            }

            if(this.direction == 'up'){
                this.element.style.bottom = `${bottom+this.speed}px`
            }

            if(this.direction == 'down'){
                this.element.style.bottom = `${bottom-this.speed}px`
            }

            
        }, 20)
    } 

    static destroyAll(){
        // this === Character
        Character.all.forEach( character => character.element.remove() )
    }


    walkRight(){
        this.element.src = `${ASSET_ROOT}/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.element.src = `${ASSET_ROOT}/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.element.src = `${ASSET_ROOT}/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.element.src = `${ASSET_ROOT}/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.element.src = `${ASSET_ROOT}/static.gif`
        this.direction = null
    }


    static all = []

}


document.addEventListener('DOMContentLoaded', function(){
    
    let playableCharacter;
    fetch('http://localhost:3000/players/1')
        .then(function(response){
            return response.json()
        })
        .then(function(result){
            playableCharacter = new Character( result.x, result.y )
        })

    document.addEventListener('keydown', function(event){
    
        if(event.repeat){
            return
        }
    
        if(event.key == "ArrowUp"){
            playableCharacter.walkUp()
        }
    
        if(event.key == "ArrowDown"){
            playableCharacter.walkDown()
        }
    
        if(event.key == "ArrowRight"){
            playableCharacter.walkRight()
        }
    
        if(event.key == "ArrowLeft"){
            playableCharacter.walkLeft()
        }
    
    
    })
    
    document.addEventListener('keyup', function(){
        playableCharacter.stop()
    })

    
    let button = document.querySelector('.button')
    button.addEventListener('click', function(e){
        e.preventDefault()
        let speedInput = document.querySelector('.speed-input')
        speed = parseInt(speedInput.value)
    })


    let saveButton = document.querySelector('.save-button')
    saveButton.addEventListener('click', function(){
        // VERB: POST
        // PATH: http://localhost:3000/characterData
        // body: { x, y }
        fetch('http://localhost:3000/players/1', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: parseInt(character.style.left),
                y: parseInt(character.style.bottom)
            })
        })
    })

})



// class Character

//     def initialize()

//     end

// end

// character = Character.new