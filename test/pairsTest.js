//importing fun from pair.js file
var pairs_fn=require('../pairs');

//given object
const testObject={
   name : 'Bruce Wayne',
   age : 36,
   location : 'Gothan'
};

//storing what function returns i.e nested array
let arrs=pairs_fn(testObject);
//pprinting the nested array which has key and value in an array
console.log(arrs);