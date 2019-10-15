var app = require('express')();
var fruits = [
    { id: 1, name: 'Bananna', color: 'Yellow' },
    { id: 2, name: 'Orange', color: 'Orange' },
    { id: 3, name: 'Dragon Fruit', color: 'Red' }
];
app.get('/fruits', function (req, res) {
    res.json(fruits);
});
app.get('/fruits/:id', function (req, res) {
    res.json(fruits.find(function (fruit) { return fruit.id === parseInt(req.params.id); }));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
