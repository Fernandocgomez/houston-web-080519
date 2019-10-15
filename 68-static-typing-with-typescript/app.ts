
const app  = require('express')();

// Private: only accessible in the class
// Protected: accessible in this class and *derived* classes
// Public: accessible anywhere

class Fruit {

    constructor(
        public id : number,
        public name : string,
        public color : string
    ){}

    description = () : string | boolean => {
        return `${this.name} (${this.color})`
    }
}

let fruits : Array<Fruit> = [
    new Fruit(1, 'Bananna', 'Yellow'),
    new Fruit(2, 'Orange', 'Orange'),
    new Fruit(3, 'Dragon Fruit', 'Red')
]

interface IResponse {
    json: Function
}

interface IIndexRequest {
    params: {}
}

app.get('/fruits',  (req : IIndexRequest, res : IResponse,) => {
    res.json(
        fruits
    )
});

interface IShowRequest {
    params: {
        id: string
    }
}

app.get('/fruits/:id',  (req : IShowRequest, res : IResponse,) => {
    res.json(
        fruits.find( fruit => fruit.id === parseInt(req.params.id))
    )
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

