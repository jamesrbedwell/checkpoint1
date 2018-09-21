var captain = 'Jack';
var phrase = 'Oh ' + captain + ', my ' + captain + '!';

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
    console.log("SOS!");
}

var weekend = ['Saturday'];
console.log(weekend);
weekend.push('Sunday');
console.log(weekend);
weekend.unshift('Friday');
console.log(weekend);
var day = weekend[1];
console.log(day);
weekend.shift();
console.log(weekend);