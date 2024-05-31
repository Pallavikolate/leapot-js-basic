//There are two type of datatypes

//primitive datatype
// 7 datatypes: string,number,boolean,symbol,bigint,null,undefined

const name="pallavi"
const score=100
let loggedIn=false

let id=Symbol('123')
let anotherId=Symbol('123')
let bigNumber=122334483438746n;
console.log(typeof bigNumber);
//console.log(id===anotherId);



//reference datatype
//array,object,function

let movie=["Heropanti","Shenshah","Yodha"];
let myObj = {
    name:"pallavi",
    id:123,
    email:"pallavi@gmail.com"
}

const myFun= function () {
    console.log("Hello World");
    
}
