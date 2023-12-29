//importing the function from test.js and storing in key_fn variable
var key_fn=require('../key');

//given object
const testObject={
   name : 'Bruce Wayne',
   age : 36,
   location : 'Gothan'
};

//call back fuction which has key as parameter and returns key when fun is called
function cb(key){
     return key;
}

//storing what funtion returns i.e array of key in string format
let strArray=key_fn(testObject,cb);

//And returning the array
console.log(strArray);