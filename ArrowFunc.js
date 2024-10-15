add = (a,b)=>{
    return a+b;
}
var c=add(10,20);
console.log(c);


let square=(a)=>a*a;
console.log(square(2));


//callback arrow anonymous
fetchData(data=>{
    console.log('Received',data);
    
});
fetchData(10)