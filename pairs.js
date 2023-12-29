/*Object.entries() will give key and value in a nestedarray */

//function that returns the nested array which has key value in a array
function entries(object){
    let objectArray=[];//creating emoty array to push array of key and vaue 

    //traversing the object using for in loop
    for(const key in object){
        let arr=[];//createde empty array to push keys and values
        arr.push(key);
        arr.push(object[key]);
        //pushing the array into nested array
        objectArray.push(arr);
    }
    //returning the nestedArray
    return objectArray;
}

//exporting the fun to pairTest.js file
module.exports=entries;
