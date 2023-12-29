//importung the function from value.js file
var values_fn =require('../values');

//given object
const testObject={
    name : 'Bruce Wayne',
    age : 36,
    location : 'Gothan'
 };

 //call back function which recives value ogf key as parameter and prints it
 function cb(value){
     console.log(value);
 }

 //calling the funtion which is in value.js.
 values_fn(testObject,cb);