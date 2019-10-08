import React, { Component } from 'react';

// class App extends Component {
    
//     // constructor(){
//     //     super()
//     //     this.counter = 0
//     // }
//     // Same as:

//     state = {
//         counter: 0
//     }

//     // setState
//     //  - changed state
//     //  - update the dom by re-running the render method


//     render(){
//         return (
//             <div  style={{ width: '100vw', height: '100vh' }}>
//                 <h1 onClick={() => {
//                     this.setState({
//                         counter: this.state.counter + 1
//                     })
//                 }}> {this.state.counter}</h1>
//             </div>
//         )
//     }
// }


class App extends React.Component {

    state = {
        message: 'Hello World'
    }

    render(){
        // setTimeout( () => this.setState({ message: `${this.state.message}!`}), 1000)

        return (
            <div>
                <input value={this.state.message} onChange={e => {
                    console.log(e)
                    console.log(e.target)
                    this.setState({ 
                        message: e.target.value
                    })
                }} />
            </div>
        )
    }


}


export default App