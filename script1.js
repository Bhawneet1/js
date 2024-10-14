//DOM-Document Object Model

//4 pillars of DOM

//selection of an Element 
//Changing HTML
//changing CSS
//Event Listener

//to select element from html document
var a=document.querySelector('h1')
console.log(a)

// document.querySelector('.class')
// document.querySelector('#element')

//Change HTML
a.innerHTML="changed"

//change CSS
a.style.color='pink'
a.style.backgroundColor="royalblue"

//Event listener
//Anything we do (action)

var h1=document.querySelector("h1")
h1.addEventListener("click",function(){//(action,function)
    h1.innerHTML="Helllllo"
    h1.style.color="white"
    h1.style.backgroundColor="pink"
})

//click
//mouseenter-when mouse hover over h1
//dblclick-doouble click