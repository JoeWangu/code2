// function add1(n1, n2) {
//     total = n1 + n2;
//     console.log(total);
// };

// add1(12, 12);

// const add2 = (n3, n4) => n3 + n4;

// console.log(add2(20, 12))

// if (add2(23, 12) > 50) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// const age = 45
// const name1 = age < 50 && "Jake"; // if condition is true name = jake
// const name2 = age > 50 || "John"; // if condition is false name = John
// const name3 = age > 50 ? "Jill" : "Justina"; // if else condition
// console.log(name1)
// console.log(name2)
// console.log(name3)
// const f_name = "John"

// const person = {
//     f_name,
//     age: 20,
//     isMarried: false,
// };

// const myName = person.f_name
// console.log(myName)
// const { f_names, age, isMarried } = person;

// const person2 = { ...person, f_name: "Jack" }

// const names = ["Pedro", "Jack", "Jessica"]
// const names2 = [...names, "Joel"];
// const names3 = names2.map((name) => {
//     return name + "1"
// })
// console.log(names3)

// const names4 = ["Jessica", "Pedro", "Jack", "Jessica", "Jessica", "Jessica"]
// const names5 = names4.filter((name) => {
//     return name !== "Jessica";
// })
// console.log(names5)

// fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a04b02ae8e51ec0836ccc9ae3bd2d0b5")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json(); // Parse the JSON from the response
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log("cannot access => ", error)
//     })

// const weather = async () => {
//     try {
//         const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=96ac4c6d7a726794274a3121ca506004")
//         const res = await response.json()
//         console.log(res)
//     } catch {
//         console.log("error getting data")
//     }
// }
// weather()