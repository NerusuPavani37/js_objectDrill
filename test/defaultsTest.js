//importing function from defaukts.js file
var default_fn=require('../defaults');


//this the normal object 
let myObject = {
    name: 'John',
    age: 30
};

//this is default object
let defaultProperties = {
    age: 25,
    city: 'New York',
    isAdmin: false
};

//storint the object i.e returned by function in defaulObject variable
let defaultObject =default_fn(myObject,defaultProperties);

//printing the object
console.log(defaultObject);