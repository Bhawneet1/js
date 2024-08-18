//stack(Primitive) and heap(Non-Primitive) memory
//stack mai copy jati hai
//heap mai original value jati hai


let name="Bhawneet"
let anothername=name;
anothername="Karan"//change ho jaega kyoki copy hai
console.log(anothername);
console.log(name);//par pehlai walla same rahega


let userOne ={
    email:"usergoogle@gmail.com",
    upi:"user@ybl",
}
let userTwo=userOne
userTwo.email="Bhawneet@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)