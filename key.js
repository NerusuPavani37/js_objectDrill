 /*Object.keys() prints all the keys of object the below function is custom layout */

//function printing has object and call back function as parameters which returns the array of keys
function pritningkeys(object,cb){

    //created empty array to store keys of object as string
    let arrayOfKeys=[];

    //for in loop which traverse the keys of whole object
   for(const key in object){

    //calling cb() and sending key as argument and storing key in string
     let keyStr=cb(key);

     //pushing key string into the array
     arrayOfKeys.push(keyStr);
   }

   //returning the array of strings(keys)
   return arrayOfKeys;
}

//exporting the funtion printingKeys to ketTest.js file
module.exports=pritningkeys;