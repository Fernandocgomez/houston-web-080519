class Character {

    static all = []

    constructor(color, x, y){
        this.ASSET_ROOT = `./assets/${color}-character`
        Character.all.push(this)
        // this.constructor.all(this)
        this.image = document.createElement('img')
        this.image.style.width = '75px'
        this.image.style.position = 'absolute'
        this.image.style.left = `${x}px`
        this.image.style.top = `${y}px`
        this.image.src = `${this.ASSET_ROOT}/static.gif`
        document.body.append(this.image)
    
        this.direction = null
        let speed = 0.5
    
        setInterval(function(){
            
            if(this.direction == 'right'){
                const left = parseFloat(this.image.style.left)
                this.image.style.left = `${left+speed}px`
            }
    
            if(this.direction == 'left'){
                const left = parseFloat(this.image.style.left)
                this.image.style.left = `${left-speed}px`
            }
    
            if(this.direction == 'up'){
                const top = parseFloat(this.image.style.top)
                this.image.style.top = `${top-speed}px`
            }
    
            if(this.direction == 'down'){
                const top = parseFloat(this.image.style.top)
                this.image.style.top = `${top+speed}px`
            }
    
        }, 60 / 1000)
    }

    stop(){
        this.image.src = `${this.ASSET_ROOT}/static.gif`
        this.direction = null
    }

    walkDown(duration){
        this.image.src = `${this.ASSET_ROOT}/walkdown.gif`
        this.direction = 'down'
        return new Promise(function(resolve){
            setTimeout(resolve, duration)
        })
    }

    walkUp(duration){
        this.image.src = `${this.ASSET_ROOT}/walkup.gif`
        this.direction = 'up'
        return new Promise(function(resolve){
            setTimeout(resolve, duration)
        })
    }

    walkLeft(duration){
        this.image.src = `${this.ASSET_ROOT}/walkleft.gif`
        this.direction = 'left'
        return new Promise(function(resolve){
            setTimeout(resolve, duration)
        })
    }

    walkRight(duration){
        this.image.src = `${this.ASSET_ROOT}/walkright.gif`
        this.direction = 'right'
        return new Promise(function(resolve){
            setTimeout(resolve, duration)
        })
    }

}