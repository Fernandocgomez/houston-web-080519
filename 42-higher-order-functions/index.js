let link;

async function fetchCharacter(){
    let response = await fetch('http://localhost:3000/characters/1')
    let position = await response.json()
    link = createGreenCharacter( position.x, position.y, 'Link')
    document.body.append(link.element)
}


fetchCharacter()


fetch('http://localhost:3000/npcs')
	.then( response => response.json())
	.then( characters => {
		// characters.forEach(npc => {
        //     let character = createCharacter('red', npc.x, npc.y, npc.name)
        //     document.body.append( character.element )
        // })
        document.body.append(
            ...characters.map( character => (
                createRedCharacter(character.x, character.y, character.name).element 
            ))
        )
    })


document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            link.walkLeft()
        }
        if(e.key == "ArrowRight"){
            link.walkRight()
        }
        if(e.key == "ArrowUp"){
            link.walkUp()
        }
        if(e.key == "ArrowDown"){
            link.walkDown()
        }
    }
})

document.addEventListener('keyup', function(){
    link.stop()
    fetch('http://localhost:3000/characters/1', {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "x": parseFloat(link.body.style.left),
            "y": parseFloat(link.body.style.top)
        })
    })
})