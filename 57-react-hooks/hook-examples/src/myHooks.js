import { useState, useEffect } from 'react'

export function useFetch(url, initialValue) {
    let [state, setState] = useState(initialValue)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                setState(response)
            })
    }, [])

    function updateState(newThing) {
        setState(newThing)
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newThing)
        })
    }

    return [state, updateState]
}