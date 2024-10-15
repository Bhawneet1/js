//function pass as variable
//first order function
//input output is slow 
//age badte raho
//ek cheese complete ho gya to yeh karna
function greeting(name){
    console.log(`Hello ${name}`);
    
}
function getUserInput(callback){
    var name=prompt(`Please enter your name : `);
    callback(name);
}
getUserInput(greeting);