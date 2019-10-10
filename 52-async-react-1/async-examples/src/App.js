import React from 'react';


class App extends React.Component {

    state = {
        counter: 0
    }

    componentDidMount(){    
        console.log('component did mount', this.state.counter)
        fetch('http://10.185.3.83:3001/my-route')
            .then( response => response.json() )
            .then( response => {
                console.log('setting state', response)
                this.setState({ counter: response.counter })
            })
    }

    incrementCounter = () => {
        const { counter } = this.state
        
        fetch('http://10.185.3.83:3001/my-route', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                counter: counter + 1
            })
        })
            .then( response => response.json())
            .then( () => this.setState({ counter: counter + 1}))
        
    }

    render(){
        const { counter } = this.state
        console.log('render', counter)
        return (
            <div  style={{ width: '100vw', height: '100vh' }}>
                <h1 onClick={this.incrementCounter}>
                    {this.state.counter}
                </h1>
            </div>
        )
    }

}

export default App