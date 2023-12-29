/*.mapObjects() will transform the object values */

//function got object and cb as parameter and retuns transformed object
function mappingValues(object,cb){
    
    //creating emty object to store transformed array
    let transformedObject={};

    //usinf for in loop traversing the object
    for(const key in object){
        //calling cb gunction which takes value og object and tranforms and returns it and that is assigned to the key
        transformedObject[key]=cb(object[key]);
    }
    
    //returning the transformed aobject
    return transformedObject;
}

//exporting the fun to mapObjectTest.js file
module.exports=mappingValues;