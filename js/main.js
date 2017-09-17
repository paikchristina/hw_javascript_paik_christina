var iceCream = ['Pistachio', 'Mint Chocolate Chip', 'Cookies and Cream'];
iceCream[4] = 'Cafe au Lait';

var trump = { firstName: 'Donald', lastName: 'Trump', termLength: 'ongoing', party: 'Republican'};
var obama = {firstName: 'Barack', lastName: 'Obama', termLength: '8', party: 'Democratic'};
var wbush = {firstName: 'George W.', lastName: 'Bush', termLength: '8', party: 'Republican'};
var clinton = {firstName: 'Bill', lastName: 'Clinton', termLength: '8', party: 'Democratic'};
var bush = {firstName: 'George H.W.', lastName: 'Bush', termLength: '4', party: 'Republican'};
var presidents = ['trump', 'obama', 'wbush', 'clinton', 'bush'];

console.log (presidents.wbush.firstName + presidents.wbush.lastName);

function howdy() {
    return 'Christina Paik says hi!';
}
howdy();
console.log(howdy());

// function expression
var numba = function abc(string) {
return string;

if(string.length < 7) {
string.replace('What a short little word!')
},

if(string.length > 7) {
string.replace('I’m sorry, but that’s too many to count.')
},

if(string.length = 7) {
string.replace('7, what a perfect choice!')
}

};

console.log(numba (7));
console.log(numba ('seventy'));
console.log(numba ('university'));
