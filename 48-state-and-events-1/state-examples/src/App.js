import React from 'react';


class App extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         counter: 0
    //     }
    // }
    // Same as: 

    state = {
        message: 'Hello World'    
    }

    // setState(newState){
    //     this.state = { ...this.state, ...newState }
    //     this.render()
    // }


    render(){
        return (
            <div  style={{ width: '100vw', height: '100vh' }}>
                <h1>{this.state.message}</h1>
                <input 
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })} 
                />
            </div>
        )
    }
}

export default App