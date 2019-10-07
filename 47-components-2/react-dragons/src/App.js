import React from 'react';
import { dragons } from './dragons.js'

// class App extends React.Component {
//     render(){
//         return (
//             <h1>App</h1>
//         )
//     }
// }

function App(){
    return (
        <div>
            <Child number={3}/>
            <Child number={1}/>
            <Child number={2}/>
            {/* <DragonList /> */}
        </div>
    )
}



class Child extends React.Component {

    render(){
        return <li>{this.props.number}</li>
    }

}

function Title(){
    return <h1>Dragon List</h1>
}

function DragonList(){
    return (
        <div>
            {dragons.map( dragon => {
                return <DragonCard key={dragon.id} {...dragon} />
            })}
        </div>
    )
}

// function DragonCard(props){
//     console.log(props)
//     return (
//         <div>
//             <h3>{props.name}</h3>
//             <p>{props.description}</p>
//             <img alt={`Image for: ${props.name}`} src={props.image} style={{ width: '100px' }} />
//         </div>
//     )
// }

// function DragonCard(props){
//     const { name, description, image } = props
//     return (
//         <div>
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <img alt={`Image for: ${name}`} src={image} style={{ width: '100px' }} />
//         </div>
//     )
// }

const DragonCard = ({ name, description, image }) => 
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img alt={`Image for: ${name}`} src={image} style={{ width: '100px' }} />
        </div>


export default App