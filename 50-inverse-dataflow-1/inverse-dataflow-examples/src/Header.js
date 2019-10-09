import React from 'react';


export const Header = (props) => {
    return (
        <h1 onClick={() => props.onClick()}>
            {props.counter}
        </h1>
    )
}

// Will work:
// More flexibility
// const Header = ({ counter, doShit }) => 
//     <h1 onClick={() => doShit() }>
//         {counter}
//     </h1>


// Doesn't work:
// export const Header = ({ counter, doShit }) => 
//     <h1 onClick={doShit()}>
//         {counter}
//     </h1>
    
// Will work:
// More confusing to work with
// const Header = ({ counter, doShit }) => 
//     <h1 onClick={doShit}>
//         {counter}
//     </h1>
