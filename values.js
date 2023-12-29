/*Object.values() print all teh values of object the below fun does the same thing */

//function recieves object and call back fun as parameters
function printingValues(object,cb){
    
    //for in loop traverse the object
    for(const key in object){
        
        //calling call back fin and sending value oof key in object as argumemnt
         cb(object[key]);
    }
}

//exporting the funtion to vauesTest.js file
module.exports=printingValues;