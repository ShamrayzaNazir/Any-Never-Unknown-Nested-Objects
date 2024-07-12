



// Any 
// is me hm sari data types use kr skty hen

let num : any
num = "4"
num = 5
num = true

// unknown 
// bad me btaen gi Mam


// never    error deny k liye use krty h
let error : never
never = 55



// Nested Object
// is me hm object me object use krty hen 


let person = {
    name : "Nazir",
    age : 48,
    Child :{
        name: "Sherry",
        age : 24,
        grade: 16
    }
}
console.log(person);
console.log(person.Child);
console.log(person.Child.name);


