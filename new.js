//for each
const names =["Alice","Bob","Charlie","David","Emma"]
names.forEach(function(value){
    if(value=="Charlie"){
        // break,continue not allowed
    }else{
        console.log(value)
    }
    
});

//Map
//Array sai naya array banana hai usme bhi same number of member honge
//eg har ke naam kai aage g laga do
//map use hoga
var newarr=names.map(function(value)
{
    return value+" g";
});
console.log(newarr)


//filter
//Blank Array banata hai
//members kam ho sakte hai butr in map same hote hai
let newarr1=names.filter(function(value){
    //return true ya false agar true hoga to value jaegi aur flase hoga to va value nahi jaegi
    // return true;//sara array chala jaega
    // return false//empty array
    // if(value==='Alice')
    // {
    //     return true;
    // }
    // return value.startsWith('A')
    if(value.startsWith('A'))
    {
        return true;
    }
    if(value.endsWith('e'))
    {
        return true;
    }
})
console.log(newarr1)



//destructuring
user={
    address:{
        zipcode:"12345"
    },
    roles:["user","admin"]
}
console.log(user.address.zipcode)
//same as above
var {zipcode}=user.address;
console.log(zipcode);
var [_,second] =user.roles
console.log(second)
var[first,second]=user.roles
console.log(first,second);


//spread and Rest...
const names1=['John','Jane','Doe','Smith']
//copy names1
//like this we will pass by reference that will change orginal array too
const newNames=names1
console.log(newNames);
newNames.pop()

console.log(newNames);
console.log(names1);
//to do not make changes in original array we need spread
const copynames=[...names1]
copynames.pop();
console.log(copynames)
console.log(names1)//original array remains same

const smallObject={
    name:"Bhawneet",
    age:20,
    city:"Patiala"
}
const newobj={...smallObject}
console.log(smallObject)
console.log(newobj)

//rest
function abcd(a,b,c,...ch)
{
    console.log(a,b,c,ch)
}
//pehli 3 values hongi as value aur aage wali as array
abcd(1,2,3,4,5,6)



//Merge two arrays of data fetched from seperate APIs into single list
const named=["John","Jane","Doe","Smith"]
const lnamed=["Doer","Smith","Johnson","Williams"]
const fullnames=[...named,...lnamed]
console.log(fullnames);

//Filtering an array of object to display items based on a search query(eg filter product by type)
const products=[
    {namess:"Laptop",price:100,type:"Electronics"},
    {namess:"Phone",price:500,type:"Electronics"},
    {namess:"Tablet",price:300,type:"Electronics"},
    {namess:"Monitor",price:200,type:"Electronics"},
    {namess:"Shirt",price:50,type:"Clothing"},
    {namess:"Pants",price:25,type:"Clothing"}
];
var newa=products.filter(function(product){
    return product.type==="Electronics"
})
console.log(newa);


//Mapping over an Array of user data to create a list of user cards
const users=[
    {namesss:"John",age:20},
    {namesss:"Jane",age:21},
    {namesss:"Doe",age:22}
];
let mappp=users.map(function(user){
    return `<div><h3>${user.namesss}</h3><h5>${user.age}</h5></div>`
})
console.log(mappp);


//grouping an array of objects by a specific property (eg user by roles)
const u=[
    {naam:"John",age:20,role:"admin"},
    {naam:"Jane",age:21,role:"use"},
    {naam:"Doe",age:22,role:"admin"}
]

let obj ={};
u.forEach(function(el){
    if(obj[u.role])
    {
        obj[u.role].push(el);
    }else{
        obj[u.role]=[];
        obj[u.role].push(el);

    }
});
console.log(obj);


//Removing or updating a specific object in an array of data based on unique Id
let o=[
    {id:1,name:"Bhawneet"},
    {id:2,name:"Karan"},
    {id:3,name:"Rohit"}
]
let neww=o.filter(function(user){
    return user.id !=2;
})
console.log(neww)