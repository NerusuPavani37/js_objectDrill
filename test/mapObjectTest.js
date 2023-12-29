//importing the function from maoObject.js file
var mapping_fn=require('../mapObject');

//given object
const testObject={
   key1 : 10,
   key2 : 36,
   key3 : 20
};

//cb() recives value as parameter and retuns the value after transformation
function cb(value){
   return value+5;
}

//calling function and storing the object whic it retunrs i.e transformed object
const mappedObject=mapping_fn(testObject,cb);

//printing the transformed object
 console.log(mappedObject);
