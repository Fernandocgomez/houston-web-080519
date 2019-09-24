class PlayableCharacter extends Character {

    constructor(playerData, color){
        super(playerData, color)
        this.addEventListeners()
    }


    addEventListeners(){

        document.addEventListener('keydown', (e) => {
            if(e.repeat) return
            if(e.key == 'ArrowRight'){
                this.walkRight()
            }
            if(e.key == 'ArrowLeft'){
                this.walkLeft()
            }
            if(e.key == 'ArrowUp'){
                this.walkUp()
            }
            if(e.key == 'ArrowDown'){
                this.walkDown()
            }
        })

        document.addEventListener('keyup', () => {
            this.stop()
            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)
        
            fetch(`http://localhost:3000/players/${this.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    x: left,
                    y: bottom,
                })
            })
        })
    }

}