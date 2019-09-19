const moveableCharacter = createCharacter('red')

document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            moveableCharacter.walkLeft()
        }
        if(e.key == "ArrowRight"){
            moveableCharacter.walkRight()
        }
        if(e.key == "ArrowUp"){
            moveableCharacter.walkUp()
        }
        if(e.key == "ArrowDown"){
            moveableCharacter.walkDown()
        }
    }
})

document.addEventListener('keyup', function(){
    moveableCharacter.stop()
})

let form = document.querySelector('.settings-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    moveableCharacter.setSpeed(parseFloat(speedInput.value))
})


function sleep(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}

const enemy = createCharacter('green')

async function startTrack(){
	while(true){
        enemy.walkRight()
        await sleep(5000)
        enemy.walkDown()
        await sleep(5000)
        enemy.walkLeft()
        await sleep(5000)
        enemy.walkUp()
        await sleep(5000)
    }
}
// OR:
// israel.walkRight()
// sleep(5000)
// 	.then(function(){
// 		israel.walkDown()
// 		return sleep(5000)
// 	})
// 	.then(function(){
// 		israel.walkLeft()
// 		return sleep(5000)
// 	})
// 	.then(function(){
// 		israel.walkUp()
// 		return sleep(5000)
// 	})
// 	.then(function(){
// 		israel.stop()
// 	})

startTrack()