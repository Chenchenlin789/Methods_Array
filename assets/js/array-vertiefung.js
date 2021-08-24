//Lev1.1 Array sort()
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortLanguages = languages.sort()
console.log(sortLanguages)

//Lev1.2 Array reverse()
let sortLanguages2 = languages.reverse()
console.log(sortLanguages2)

//Lev2.2 sort() bigger numbers
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
numArray2.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
})

let numbers = numArray2.sort((a, b) => a - b)
console.log(numbers)

//Lev3.1 Reverse Name, Words
function reverseName(param) {
    console.log(reverse())
}

names = ['Sergio, Hannah, Regallager, Reliefpfeiler, Rentner']
// let reversedName =

//lev1.13 Array join()
let meinText1 = ["Hello", "World"]
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = meinText1.join()
let join2 = meinText1.join('')
let join3 = meinText1.join(" ")
let join4 = meinText1.join("+")

console.log(join1, join2, join3, join4)

join1 = meinText2.join()
join2 = meinText2.join('')
let join5 = meinText3.join(" ")
let join6 = meinText2.join("+")
console.log(join1)
console.log(join2)
console.log(join5)
console.log(join6)