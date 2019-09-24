# JavaScript: Object Orientation

### Learning Goals

- Implement a class with the `class` and `constructor` keywords, and instantiate it with the  `new` keyword

- Determine the value of `this` based on how a function is defined and invoked 

- Change the value of `this` within a function using the arrow-function syntax

- Explain when and why to use class methods


### Activation

##### We want multiple characters on screen



### Learning Goal 1: Implement a class with the `class` and `constructor` keywords, and instantiate it with the  `new` keyword

#### Demonstrate:

* Classes are similar to the syntax we saw in ruby
* Basic refactor of our character logic into a class
* Using `new` to instantiate mutliple characters 
* Passing arguments with `new` to the constructor to change the position

#### Reinforce:

* Driver / Navigator: Add an option for image

#### Check for Understanding: 

* Kahoot



### Learning Goal 2: Determine the value of `this` based on how a function is defined and invoked

#### Demonstrate:

* That `this` is whatever object the current method belongs to
* That `this` is the current instance, or a "specific" character
* Refactoring our Character class to rely on `this`
* How `this` can change value if the function is made a method of another object

#### Reinforce:

* Critical Analysis: What will the value of `this` be when I reassign a method from Bobby to Eli?

#### Check for Understanding: 

* Kahoot



> Break



### Learning Goal 3: Change the value of `this` within a function using the arrow-function syntax

#### Demonstrate:

* Changing our `setInterval` callback to accept an arrow function
* How arrow functions are inherintly bound to whatever `this` was where they were defined 

#### Reinforce:

* Driver / Navigator: Adding the ability to remove a character when it is clicked
  * Make them describe the arrow function syntax!!!

#### Check for Understanding: 

* Kahoot



### Learning Goal 4: Explain when and why to use class methods

#### Demonstrate:

* We can use `static` (class) methods for behavior which takes into account **all** characters
* Implement a "closest" 

#### Reinforce:

* Driver / Navigator: Implement a "farthest" method

#### Check for Understanding: 

* *Think-Pair-Share*
  * *Think:* Classify the following methods below as instance method or as a class method. Then replace the arrow in the leftmost column with either a "." for class methods or a "#" for instance methods.
  * *Pair:* With one partner
  * *Share:* Your answers to the questions, and discuss any differences of opinion

| Name                  | Desc.                                                  |
| --------------------- | ------------------------------------------------------ |
| `Square -> area`      | Returns the area of a square                           |
| `Square -> overlap `  | Returns the area of the overlap of two or more squares |
| `Square -> width`     | Returns the width of a square                          |
| `Square -> totalArea` | Returns the total area of all squares                  |
| `Square -> largest`   | Returns the largest instance of a square               |
| `Square -> height`    | Returns the height of a square                         |







```

let character;
Character.all = []

class Character {


    constructor(playerData, color){
        this.direction = null
        this.color = color
        this.element = document.createElement('img')
        this.element.style.width = '75px'
        this.element.style.position = 'absolute'
        this.element.src = `${ASSET_ROOT}/${color}-character/static.gif`
        this.element.style.left = `${playerData.x}px`
        this.element.style.bottom = `${playerData.y}px`
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
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/static.gif`
        this.direction = null
    }

}


```

