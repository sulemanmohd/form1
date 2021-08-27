document.getElementById("frm").addEventListener("submit",function(){
// alert("hello")
event.preventDefault()
var pets={}
var obj=new FormData(this)
obj.forEach((e,k)=>{
//console.log(e,k)
pets[k]=e
})
console.log(pets)	
})