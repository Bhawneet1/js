//type of callback hai
//jonsa function koi bhi na call kar pae par sirf aap call kar pae
(function(){
    //function body
});


//eg setTimeout
setTimeout(function(){
    console.log("This is anonymous");
    
},1000);//after 1000 ms execute hoga


function greeting(){
    console.log(`Hello I am here`);
    
}
console.log('Before');//first print
setTimeout(greeting,1000);//third print as print after 1 sec
console.log('After');//second print



setTimeout(function(){
    console.log(`I am here`);
    
},3000);


const add=function(a,b){
    return a+b;
}

console.log(add(10,20));//also anonymous as assigned to variable

