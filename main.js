// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread'
// ]

// let [first,second, ...other] = list

// console.log(first);
// console.log(second);
// console.log(other);

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// let [[a,b,c,d], newArr] = arr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(newArr);

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }

// let {age, name, lastName} = person

// console.log(name,age, lastName);    

// let obj1 = {
//     subObj:{
//         name: 'Jack'
//     }
// }

// let {subObj:{name}} = obj1;

// console.log(name)

// let obj = {
//     arr:[
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let {arr: [{name}]} = obj

// console.log(name);

// function foo({arr:[a,b]}){
//     console.log(b);
// }

// let person = {
//     arr : [1,2],
//     name: "Makers",
//     lastName: 'Bootcamp',
//     age:2
// };

// foo(person)


// let arr = [1,2,3,4,5];
// let [,,,a] = arr
// console.log(a);

// function foo(a,b,c){
//     console.log(a,b,c);
// }

// let arr = [1,2,3,4,5]
// foo(...arr)

// let a = {
//     age: 20
// }

// // let b = {
// //     age:20
// // }

// let b = {...a}
// b.age = 30

// console.log(a,b);

// console.log(a === b)

// let obj = {
//     name: "Kani",
//     color: 'yellow'
// }

// let obj2 = {
//     lastName: 'East'
// }

// let {color} = obj
// let newObj = {color, ...obj2}
// console.log(color);
// console.log(newObj);

let obj = {
    name: "Kani",
    age:22,
    position: [
        'Mentor',
        'Backend-developer',
        'Frontend-developer',
        'Bloger'
    ],
    dog: {
        name: 'Oreo',
        age: 2
    }
}


// let {
//     name,
//     age,
//     position:[
//         firstPos,
//         secondPos,
//         ...otherPos
//     ],
//     dog:{
//         name: dogName,
//         age: dogAge
//     }
// }=obj

// console.log(name, age,firstPos,secondPos,otherPos,dogName,dogAge);

function sayHello({name,age,dog:{name: dogName}}){
    console.log(`
        Hello my name is ${name}
        I am ${age} y.o.
        I have a dog ${dogName}
    `);
}

sayHello(obj)