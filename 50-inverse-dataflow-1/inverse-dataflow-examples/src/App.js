import React from 'react';
import { Header } from './Header.js'

class App extends React.Component {

    state = {
        counters: [ 
            {
                number: 0
            },
            {
                number: 1
            },
            {
                number: 2
            }
        ]
        
    }
        

    incrementCounter = (clickedCounter) => {
        this.setState({
            counters: this.state.counters.map( counter => {
                if(clickedCounter == counter){
                    return { ...counter, number: counter.number + 1 }
                } else {
                    return counter
                }
            })
        })
    }

    render() {

        const { counters } = this.state
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                {counters.map( (counter) => (
                    <Header counter={counter.number} onClick={() => this.incrementCounter(counter)} />
                ))}
            </div>
        )
    }
}

export default App