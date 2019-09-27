function createCharacterForColor(color) {
    return function createCharacter(x, y, name) {

        const ASSET_ROOT = `./assets/${color}-character`

        const littleDude = document.createElement('div')
        const image = document.createElement('img')
        const label = document.createElement('p')
        label.append(name)
        littleDude.append(image, label)
        littleDude.style.width = '75px'
        littleDude.style.position = 'absolute'
        littleDude.style.left = `${x}px`
        littleDude.style.top = `${y}px`
        image.style.width = '100%'
        image.src = `${ASSET_ROOT}/static.gif`
        // document.body.append(littleDude)
        let direction = null
        let speed = 0.5

        setInterval(function () {
            const left = parseFloat(littleDude.style.left)
            const top = parseFloat(littleDude.style.top)

            if (direction == 'right') {
                littleDude.style.left = `${left + speed}px`
            }

            if (direction == 'left') {
                littleDude.style.left = `${left - speed}px`
            }

            if (direction == 'up') {
                littleDude.style.top = `${top - speed}px`
            }

            if (direction == 'down') {
                littleDude.style.top = `${top + speed}px`
            }

        }, 60 / 1000)

        return {
            element: littleDude,

            stop: function () {
                image.src = `${ASSET_ROOT}/static.gif`
                direction = null
            },

            walkDown: function (duration) {
                image.src = `${ASSET_ROOT}/walkdown.gif`
                direction = 'down'
                return new Promise(function (resolve) {
                    setTimeout(resolve, duration)
                })
            },

            walkUp: function (duration) {
                image.src = `${ASSET_ROOT}/walkup.gif`
                direction = 'up'
                return new Promise(function (resolve) {
                    setTimeout(resolve, duration)
                })
            },

            walkLeft: function (duration) {
                image.src = `${ASSET_ROOT}/walkleft.gif`
                direction = 'left'
                return new Promise(function (resolve) {
                    setTimeout(resolve, duration)
                })
            },

            walkRight: function (duration) {
                image.src = `${ASSET_ROOT}/walkright.gif`
                direction = 'right'
                return new Promise(function (resolve) {
                    setTimeout(resolve, duration)
                })
            }
        }

    }
}

let createRedCharacter = createCharacterForColor('red')
let createGreenCharacter = createCharacterForColor('green')
