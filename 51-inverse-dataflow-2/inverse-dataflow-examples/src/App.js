import React from 'react';

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
                if(counter === clickedCounter){
                    return { ...counter, number: counter.number + 1 }
                } else {
                    return counter
                }
            }) 
        })
    }

    render(){
        const { counters } = this.state
        // Same as: const counters = this.state.counter
        
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                {counters.map( counter => (
                    <Header counter={counter.number} onClick={() => this.incrementCounter(counter)} />
                ))}
            </div>
        )
    }
}

function Header(props){
    return (
        <h1 onClick={() => props.onClick()}>
            {props.counter}
        </h1>
    )
}

// Exact same as:

// class Header extends React.Component {

//     // constructor(props){
//     //     this.props = props
//     // }

//     render(){
//         return (
//             <h1 onClick={() => this.props.incrementCounter()}>
//                 {this.props.counter}
//             </h1>
//         )
//     }
// }



export default App