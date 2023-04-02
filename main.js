var gall1 = document.querySelector('.gallery-collumn-1')
var gall2 = document.querySelector('.gallery-collumn-2')
var arrayImg = []
var xhr = new XMLHttpRequest();

fetch('data.json')
   .then(response => response.json())
   .then(elements => appendImg(elements))

function appendImg(elements){
    arrayImg = elements
    for(i=0; i < arrayImg.length - 1; i++){
        var newImg = document.createElement("img")
        var newP = document.createElement("p")
        newP.textContent = arrayImg[i].date
        
        newImg.setAttribute("src", arrayImg[i].link )
        var div = document.createElement("div")
        div.setAttribute('id', i)
        div.setAttribute('onclick', "clickfunct(this.id)")
        div.classList.add("content")
        div.append(newImg)
        div.append(newP)
        table(div)
        if(i < ((arrayImg.length/2) - 1)){
           
            gall1.append(div) 
        }
            
        else 
            gall2.append(div)
            
    }
    
}
setTimeout(
    ()=>{
        document.querySelector('main').style.display="flex"
    },1400
)

var div_left = document.querySelector(".gallery-collumn-1 .content")

var imgs = document.querySelectorAll(".content")
table_div = []
var overview = document.querySelector(".overview")
var img_overview = document.querySelector(".overview img")
function table(div){
    table_div.push(div)
}


function clickfunct(id){
    img_overview.src = table_div[id].children[0].attributes[0].nodeValue
    overview.style.display = 'flex'
    document.querySelector(".overview p").textContent = arrayImg[id].date
    document.querySelector('body').style.overflowY = 'hidden'
}
var icon_close = document.querySelector('.icon-close')
icon_close.addEventListener('click', ()=>{
    overview.style.display = "none"
    document.querySelector('body').style.overflowY = 'auto'
})
/*
setTimeout( ()=>{
   const observer = new IntersectionObserver(() =>{
        document.querySelector(".title h1").style.color = '#fff'
    })
    var target = document.querySelector(".content")
    observer.observe(target) 
}, 1500
    
)
var target_2 = document.querySelector(".title h1")
const second_observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      entry.target.style.color = intersecting ? "#000" : "#fff"
    })
  }))
second_observer.observe()*/
