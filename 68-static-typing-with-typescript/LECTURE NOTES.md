# Static Typing with TypeScript


### Resources
* https://create.kahoot.it/share/intro-to-typescript/c832a5cd-4c64-4848-a6a4-a05b9fee9506



### Learning Goals

* Explain what TypeScript is, and how to implement it
* Add typing to basic data structures
* Recognize the goals of Static Typing
* Apply static typing to Object Oriented Code



### Activation

* Why won't this code work?



### Learning Goal 1: Explain what TypeScript is, and how to implement it

##### Timestamp: _

##### Demonstrate
* Apologies: TypeScript is Statically and Weakly typed
* Made by Microsoft
* installation
  * `npm install -g typescript`
* Init

##### Vocabulary
* 

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3] 

##### Cue
* 



### Learning Goal 2: Add typing to basic data structures

##### Timestamp: _

##### Demonstrate

- _

  ```typescript
  const fruitName : string = 'Bananna'
  const fruitColor : string = 'Yellow'
  
  const description = (name : string, color: string) : string => (
      `${name} (${color})`
  )
  
  interface Fruit {
      name: string,
      color: string
  }
  
  const bananna : Fruit = {
      name: 'Bananna',
      color: 'Yellow'
  }
  
  const desc = (fruit : Fruit) => (
      `${fruit.name} (${fruit.color})`
  )
  ```

##### Vocabulary

- Type definitions
- Duck typing -> Interface

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [4-6] 

##### Cue

- 



### Learning Goal 3: Apply static typing to Object Oriented Code

##### Timestamp: _

##### Demonstrate

- Auto fields
- public / protected / private

```typescript
class Fruit {

    constructor(
        public name : string, 
        public color : string 
    ){}

    description() : string {
        return `${this.name} (${this.color})`
    }

}
```

##### Vocabulary

- Class properties

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [7-9] 

##### Cue

- 



### Learning Goal 4: Recognize the goals of Static Typing

##### Timestamp: _

##### Demonstrate

- _

```typescript
const express = require('express');

// Create a new express application instance
const app = express();

interface Request {
    params: {
        id: string
    }
}

app.get('/fruits/:id',  (req : Request, res : Response) => {
    if( parseInt(req.params.id) === 5){

    }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Think-Pair-Share:* 

  1. Answer the following four questions
  2. Compare and discuss your answers with a partner
  3. As a pair, be prepared to share your conclusions with the class

  - What is the biggest disadvantage of static typing?

  - What is the biggest advantage of static typing?

  - Which seems more valuable to you, static typing or strong typing?

  - TypeScript allows us to define instance properties more easily. List 3 other places Typing could be used to make JavaScript less verbose












