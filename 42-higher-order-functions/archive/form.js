const renderForm = function(playerData){
    
    const form = document.querySelector('.preference-form')
    const speedCheckbox = document.querySelector('.speed-checkbox')
    
    
    if(playerData.fast_mode){
        speed = 10
        speedCheckbox.checked = true
    } else {
        speed = 5
        speedCheckbox.checked = false
    }

    form.addEventListener('submit', function(e){
        e.preventDefault()
        if(speedCheckbox.checked){
            speed = 10
        } else {
            speed = 5
        }
        fetch(`http://localhost:3000/players/${playerData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fast_mode: speedCheckbox.checked  // <- Checkboxes have a boolean "checked" property
            })
        })
    })
}