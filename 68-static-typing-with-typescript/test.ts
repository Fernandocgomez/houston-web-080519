const fruitName : string = 'Bananna';
const fruitColor : string = 'Yellow'

interface IVeggitable {
    name: string,
    color: string
}


const veggitables = [ 
    {
        name: 'Spinach',
        color: 'Green'
    },
    {
        name: 'Spinach',
        color: 'Yellow'
    }
]

const description = (veggitable : IVeggitable) => {
    return `${veggitable.name} (${veggitable.color})`
}