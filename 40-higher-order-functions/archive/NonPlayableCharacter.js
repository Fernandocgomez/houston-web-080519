class NonPlayableCharacter extends Character {

    constructor(playerData, color){
        super(playerData, color)
        this.steps = playerData.steps
        this.cursor = 0
        this.walk()
    }

    walk(){
        let step = this.steps[this.cursor]
        switch(step.direction){
            case 'left':
                this.walkLeft()
            break;
            case 'right':
                this.walkRight()
            break;
            case 'up':
                this.walkUp()
            break;
            case 'down':
                this.walkDown()
            break;
        }
        this.cursor = (this.cursor + 1) % this.steps.length
        setTimeout(() => {
            this.walk()
        }, step.duration)
    }

    totalDuration(){
        return this.steps.reduce( (total, step) => total + step.duration,  0 )
    }

}