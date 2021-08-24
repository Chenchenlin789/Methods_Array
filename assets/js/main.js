//lev1.1
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

// getraenke.sort()
// getraenke.forEach(element => document.write('<p>' + element + '</p>'))
// console.log(getraenke)

getraenke.sort()
function myDrinks() {
    getraenke.forEach(element => {
        document.write('<p>' + element + '</p>');
        console.log(element);
    });
}
myDrinks();
console.log(getraenke);

//lev1.2
// let upperDrinks = getraenke.map(x => x.toUpperCase())
// console.log(upperDrinks)
//Arrow function
console.log(getraenke.map(drinks => drinks.toUpperCase()));

//lev1.3
let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
console.log(array.map(x => x * 2))

//lev1.4
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// function FtoC(fahrenheit) {
//     let fTempert = fahrenheit;
//     let fToCel = (fTempert - 32) * 5 / 9;
//     let degree = (fToCel);
//     console.log(degree.toFixed(0));
// }

let degree = fahrenheit.map(f => ((f - 32) * 5 / 9).toFixed(0))
console.log(degree)

//lev1.5
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

checkNumber.forEach(n => console.log('<p>' + element + '</p>'))
console.log(getraenke)