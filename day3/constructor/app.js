
// function Details(){
//     this.name ="sanmati";
//     this.age=20;
//     this.address="Nipani"
// }

// let user = new Details();
// console.log(user.name);

//custom constructor
function Details(name,age,address){
    this.name =name;
    this.age=age;
    this.address=address;
    this.description=function(){
        return(`my name is ${this.name},my age is ${this.age}`)
    }
    }
    
    let user = new Details("sanmati",20,"Nipani");
    let user1 = new Details("spoorti",20,"sankeshwar");
    let user2 = new Details("priya",30,"Delhi");
    // console.log(user);
    console.log(user.description())
    // console.log(user1);
    console.log(user1.description())
    // console.log(user2);
    console.log(user2.description())