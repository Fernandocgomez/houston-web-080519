const BASE_URL = 'http://localhost:3000'
const PETS_URL = `${BASE_URL}/all-pets`

const petList = document.querySelector('.pet-list')

function createForm(){
    let nameInput, imageInput;

    document.body.prepend(
                form({ submit: createPet },
    nameInput =     input({ placeholder: "Name"}),
    imageInput=     input({ placeholder: "Image"}),
                    button("Create Pet")
                )
    )

    async function createPet(e){
        e.preventDefault()
        let response = await fetch(`${BASE_URL}/make-pet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                image: imageInput.value
            })
        })
        let pet = await response.json()
        renderPet(pet)
    }
}
createForm()

async function getAllPets(){
    let response = await fetch(PETS_URL)
    let pets = await response.json()
    pets.forEach(function(pet){
        renderPet(pet)
    })
}

getAllPets()

function renderPet(pet){
    let petLi = li(
        h3(pet.name),
        img({ src: pet.image}),
        button({ click: removePet }, 
            'Remove'
        )
    )
    function removePet(){
        petLi.remove()
        fetch(`http://localhost:3000/delete-pet/${pet.id}`, {
            method: 'DELETE'
        })
    }
    petList.append(petLi)
}