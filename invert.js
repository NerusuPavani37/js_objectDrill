/*.invertObject() inverts the object i.e makes key as value and value as key */

//function which returns inverted object
function inverting(object,cb1,cb2){

    //created empty object to store keys and values
     const invertedObject={};

     //traversing object using for in loop
     for(const key in object){

        //caling cb1() which takes value and returns value but stored in keys variable
        let keys=cb1(object[key]);

        //calling cb2() which takes key and returns key but stored om values variable
        let values=cb2(key);

        //now we are pushing keys and values in our object for every iteration
        invertedObject[keys]=values;
     }

     //returing the inverted object 
     return invertedObject;
}

//exporting the function into invertTest.js file
module.exports=inverting;