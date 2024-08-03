let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let today=document.querySelector(".today")
let yesterday=document.querySelector(".yesterday")
let yesterday2=document.querySelector(".yesterday2")
button1.addEventListener('click', function(){
    today.style.display="flex"
    yesterday.style.display='none'
       yesterday2.style.display='none'
})
button2.addEventListener('click', function(){
    yesterday.style.display="flex"
       yesterday2.style.display='none'
         today.style.display='none'
})
button3.addEventListener('click', function(){
    yesterday2.style.display="flex"
     yesterday.style.display='none'
        today.style.display='none'
})
