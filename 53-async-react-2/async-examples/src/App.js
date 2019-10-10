import React from 'react';
 

class App extends React.Component {

   
    state = {
        counter: 0
    }
    
    componentDidMount(){
        fetch('http://10.185.3.83:3001/my-route')
            .then( response => response.json())
            .then( result => this.setState({ counter: result.counter }))
    }

    incrementCounter = () => {
        const { counter } = this.state
        this.setState({ counter: counter + 1 })
        fetch('http://10.185.3.83:3001/my-route', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                counter: counter + 1
            })
        })
    }

    render(){
        const { counter } = this.state
        return (
            <div  style={{ width: '100vw', height: '100vh' }}>
                <h1 onClick={this.incrementCounter}>
                    {counter}
                </h1>
            </div>
        )
    }
}

export default App