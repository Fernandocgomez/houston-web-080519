# Object Orientation

### Deliverables
* Add non playable characters to our game

### Learning Goals

- Implement a class with the `class` and `constructor` keywords, and instantiate it with the  `new` keyword
- Determine the value of `this` based on how a function is defined and invoked 
- Change the value of `this` within a function using the arrow-function syntax
- Explain when and why to use class methods

## Vocabulary
* Object
    * Data + Behavior
* Class
    * A template (or function) which creates an object
* Instance
    * An object created from a class
* `constructor`
    * A function invoked when a class is instantiated
* `this`
    * A context specific keyword which references the object a function is attached to
* Arrow function
* Static Method

### Learning Assessments
- *Think-Pair-Share*
  - *Think:* Classify the following methods below as instance method or as a class method. Then replace the arrow in the leftmost column with either a "." for class methods or a "#" for instance methods.
  - *Pair:* With one partner
  - *Share:* Your answers to the questions, and discuss any differences of opinion

| Name                  | Desc.                                                  |
| --------------------- | ------------------------------------------------------ | 
| `Square -> area`      | Returns the area of a square                           |    #
| `Square -> overlap `  | Returns the area of the overlap of two or more squares |    .
| `Square -> width`     | Returns the width of a square                          |    #
| `Square -> totalArea` | Returns the total area of all squares                  |    .
| `Square -> largest`   | Returns the largest instance of a square               |    .
| `Square -> height`    | Returns the height of a square                         |    #
