class Character {


    constructor(playerData, color){
        this.id = playerData.id
        this.name = playerData.name

        this.direction = null
        this.color = color

        this.element = document.createElement('div')
        this.image = document.createElement('img')
        this.element.append( this.image )
        this.element.append( this.name ) 

        this.element.style.position = 'absolute'
        this.element.style.left = `${playerData.x}px`
        this.element.style.bottom = `${playerData.y}px`
        this.element.style.zIndex = window.innerWidth - playerData.y

        this.image.style.width = '75px'
        this.image.src = `${ASSET_ROOT}/${color}-character/static.gif`
        
        if(Character.all == undefined) Character.all = []
        Character.all.push(this)
        this.element.addEventListener('click', () => {
            this.element.remove()
        })

        document.body.append(this.element)

        setInterval( () => {
            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)
        
            if(this.direction == 'right'){
                this.element.style.left = `${left+speed}px`
            }
        
            if(this.direction == 'left'){
                this.element.style.left = `${left-speed}px`
            }
        
            if(this.direction == 'up'){
                this.element.style.bottom = `${bottom+speed}px`
            }
        
            if(this.direction == 'down'){
                this.element.style.bottom = `${bottom-speed}px`
            }
        
            this.element.style.zIndex = window.innerWidth - bottom
        }, 20)

    }

    static closest(){
        // this === Character
        let closestCharacter = this.all[0]
        this.all.forEach(function(character){
            let closestY = parseInt(closestCharacter.element.style.bottom)
            let characterY = parseInt(character.element.style.bottom)
            if(characterY < closestY){
                closestCharacter = character
            }
        })
        return closestCharacter
    }

    walkRight(){
        this.image.src = `${ASSET_ROOT}/${this.color}-character/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.image.src = `${ASSET_ROOT}/${this.color}-character/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.image.src = `${ASSET_ROOT}/${this.color}-character/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.image.src = `${ASSET_ROOT}/${this.color}-character/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.image.src = `${ASSET_ROOT}/${this.color}-character/static.gif`
        this.direction = null
    }

}

