var addbtn=document.getElementById("addpop")
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup")

addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var canecl=document.getElementById("cancelbook")

canecl.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var contain=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var title=document.getElementById("bookid")
var author=getElementById("bookauthorinput")
var description=getElementById("des")

addbook.addEventListener("click",function(){
     
})