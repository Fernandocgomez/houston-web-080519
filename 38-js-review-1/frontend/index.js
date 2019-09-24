
// Making the pet form

// Create the form
const petForm = document.createElement('form')

// Create stuff that goes inside the form
const nameInput = document.createElement('input')
const imageInput = document.createElement('input')
const submitButton = document.createElement('button')

// Add some placeholders so the user knows what the inputs are for
nameInput.placeholder = "Enter Pets Name Here"
imageInput.placeholder = "Enter Pets Image Here"

// Add some text to the button
submitButton.append( "Create Pet" )

// Add everything to form
petForm.append(
    nameInput,
    imageInput,
    submitButton
)

// Add the form to the page
document.body.prepend(petForm)


petForm.addEventListener('submit', function(e){
    e.preventDefault()
    // Optimistic Rendering
    fetch('http://localhost:3000/create-pet',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value,
            image: imageInput.value
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(pet){
        renderPet(pet)
    })
})

// Making the pet list
fetch('http://localhost:3000/all-pets')
    .then(function(response){
        return response.json()
    })
    .then(function(pets){
        for(let i = 0; i < pets.length; i++){
            const pet = pets[i];
            renderPet(pet)
        }
    })

function renderPet(pet){
    const petList = document.querySelector('.pet-list')
            
    const petLi = document.createElement('li')

    const image = document.createElement('img')
    image.setAttribute('src', pet.image)
    const br = document.createElement('br')

    petLi.append( 
        image,
        br,
        pet.name 
    )
    
    petList.append(petLi)
}