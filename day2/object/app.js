//object

// let person={
//    name:'spoorti',
//    age:20,
//    favColor:'Black' 
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.favColor);
// console.log(person['age']);

// change properties in object
// person.name='spoorti gundi';
// console.log(person);

//adding new property
//  person.gender='female';
//  console.log(person);

//delete property
// delete person.favColor;
// console.log(person);

//advance object
let person={
   name:'sanmati',
   age:20,
   favcolor:'white',
   fun:function print(){
      return(`my name is ${this.name} and my age is ${this.age}`);
   },
   newObj:{
      gender:"female",
      address:"nipani",
   }
}

// console.log(person.fun());
console.log(person.newObj.address);