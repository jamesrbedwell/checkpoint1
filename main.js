// JS Variables
var captain = 'Jack';
var phrase = 'Oh ' + captain + ', my ' + captain + '!';

// JS Conditionals
var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
    console.log("SOS!");
}

// Data Strucutres - JS Arrays
var weekend = ['Saturday'];

weekend.push('Sunday');

weekend.unshift('Friday');

var day = weekend[1];

weekend.shift();

// Data Structures - JS Objects
var brain = {
    energyLevel: 10
};
var energy = brain.energyLevel;
brain.dream = 'electric sheep';
brain.dayDream = {
    lunch: ['burger', 'beer']
}
brain.dayDream.lunch.push('pudding');

// JS Functions
function area(height, width) {
    return height * width
}
var result = area(3, 4);