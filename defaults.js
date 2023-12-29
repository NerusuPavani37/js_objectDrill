/*defaults(object,defaultObject) returns the object that will contain the key value pairs of its
and will get which are not present in it but present in defaultObject */

//returns the object which contain both key value pairs of object and defaultobject only once
function defaulting(object,defaultObject){

    //traversing defaultObject using for in loop
     for(const key in defaultObject){

        //checking if the key is already present in object if not we will add it into our object
        //if yes we do nothing we donot overwright
        if(object.hasOwnProperty(key)==false){
            
            //adding new key to object and giving the value pf that key in defautObject
           object[key]=defaultObject[key];
        }
     }

     //returning the object
     return object;
}

//exporting the function to defaultsTest.js
module.exports=defaulting;