document.addEventListener('DOMContentLoaded', function(){
    
    let character;
    
    fetch('http://localhost:3000/players/1')
        .then(function(response){
            return response.json()
        })
        .then(function(result){
            character = new PlayableCharacter( result.name, result.x, result.y )
        })

    fetch('http://localhost:3000/npcs')
        .then(function(response){
            return response.json()
        })
        .then(function(results){
            results.forEach(result => {
                new NonPlayableCharacter( result.name, result.x, result.y )
            })    
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
                x: parseInt(character.element.style.left),
                y: parseInt(character.element.style.bottom)
            })
        })
    })

})

// function oneOnOne(x){
//     Character.all.forEach(function(student){
//         if(
//             student.name == x
//         ){
//             Character.all.splice(Character.all.indexOf(student), 1)
//             student.element.remove()
//         }
//     })
// }

function oneOnOne(searchTerm){
    // Remove the element from the page
    let student = Character.all.find( character => character.name === searchTerm )
    student.element.remove()
    
    // Remove the element from the array
    Character.all = Character.all.filter( character => character != student )
}

// function stillConfused(){
//     let names = []
//     Character.all.forEach(function(student){
//         if(
//             student instanceof NonPlayableCharacter 
//         ){
//             names.push(student.name)
//         }
//     })
//     return names
// }

let isNonPlayable = (character) => character instanceof NonPlayableCharacter
let to = (propertyName) => (character) => character[propertyName]

function stillConfused(){
    return Character.all
            .filter(isNonPlayable)
            .map( to('name') )
}

function groupReview(){
    Character.all.forEach(function(student){
        if(
            student instanceof NonPlayableCharacter 
        ){
            student.element.remove()
        }
    })
    Character.all = []
}


// array = [ 1, 2, 3, 4, 5 ]

// callback = number => { // => 4
//     return number > 3 // 4 > 3 => true
// }

// let find = (array, callback) => {
//     let result;
//     for(let index = 0; index < array.length; index++){
//         index // => 3
//         array[index] // => 4
//         if(callback(array[index])){ // true
//             result = array[index]
//             break;
//         }
//     }
//     return result
// }