# Iterators and Higher Order Functions

##### Time Estimate: 1:40 + Recommended 10 minute break



## Learning Goals

- Write more readable code using `find`,  `map`, and  `filter`

- Explain the relationship between declarative and imperative programming

- Recognize how `reduce` works

- Define "Higher Order Functions" and explain why they are useful for writing declarative code



## Resources

- [Sample Video](<https://youtu.be/Y_FQdisxJ2w>)
- [Kahoot Quiz](https://create.kahoot.it/share/iterators-and-higher-order-functions/b07c32df-5ae1-475c-af18-9c8e8569bfad)



## Outline

### Activation

Our last lecture of the week, our last enhancements to our game. 

Introduce the npcs.  

Show how they work

Introduce the domain of our game (these are students calmly and collectively looking for answers to JS questions)

We have two new methods.

##### What does this code do?

Daily Deliverables

* Refactor our current code to be more readable
* Implement a method to find the student who is traveling the farthest



### Learning Goal 1: Write more readable code using `find`,  `map`, and  `filter`

#### Time Estimate: 25 min

#### Demonstrate:

* Refactoring each of our three functions to use the common iterators
* Using arrow functions with implicit return values
* Using currying to make this even more readable (temp)

#### Reinforce:

* *Driver / Navigator:*
  Write a readable function that returns an array of directions that a character is traveling

#### Check for Understanding: 

* *Kahoot Quiz:* [1-3]



### Learning Goal 2: Explain the relationship between declarative and imperative programming

#### Time Estimate: 15 min

#### Demonstrate:

* How our new functions are easier to read because they say *what* they are going to do rather than *how* they are going to do it

#### Check for Understanding: 

* *Kahoot Quiz:* [4-6]




> Recommended Break



### Learning Goal 3: Recognize how `reduce` works

#### Time Estimate: 20 min

#### Demonstrate:

* How to use `reduce` to create a method that determines how far a given character has traveled

#### Reinforce:

* *Driver / Navigator:*

  Use reduce to find the character that has traveled the farthest

#### Check for Understanding: 

* *Kahoot Quiz:* [7-10]



### Learning Goal 4: Define "Higher Order Functions" and explain why they are useful for writing declarative code

#### Time Estimate: 30 min

#### Demonstrate:

- Defining higher order functions as functions that take a function as an argument (callback) or return a function (currying)
- How they empower us to write code with a more singular responsibility by taking responsibility for:
  - When a function runs
  - What variables the function has access to
  - How many times the function is invoked
  - What to do with what a function returns
- How this results in more declarative code

#### Check for Understanding: 

* *Think-Pair-Share:*
  * *Think:* Write down answers to the following questions
  * *Pair:* With one partner
  * *Share:* Your answers to the questions, and discuss any differences of opinion



1) `setInterval`

**Is it a Higher Order Function?** ___

**Why?** ___



2) `document.querySelector`

**Is it a Higher Order Function?** ___

**Why?** ___



3) `addEventListener`

**Is it a Higher Order Function?** ___

**Why?** ___



4) `forEach`

**Is it a Higher Order Function?** ___

**Why?** ___



5) `document.body.append`

**Is it a Higher Order Function?** ___

**Why?** ___



## Recommended Prework

- Iterator Drill Map
- Iterator Drill Find
- Iterator Drill Filter
- Iterator Drill Reduce
- Intermediate JavaScript



## Recommended Postwork

* **Group (3 person) Project**: Functional Library Project