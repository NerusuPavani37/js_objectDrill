//importing the function from invert.js file
var invert_fn=require('../invert');

//given object
const testObject={
    name : 'Bruce Wayne',
    age : 36,
    location : 'Gothan'
 };

 //cb1() which recives key as value and returns it
 function cb1(value){
     return value;
 }

 //cb2() which recives value as key and returns it
 function cb2(key){
    return key;
 }

 //storing the inverted object i.e returned by the fun which takes object and both call back functions
 const objectInverted=invert_fn(testObject,cb1,cb2);

 //printing the inverted object
 console.log(objectInverted);