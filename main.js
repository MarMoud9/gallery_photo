var gall1 = document.querySelector('.gallery-collumn-1')
var gall2 = document.querySelector('.gallery-collumn-2')
var imgs = document.querySelectorAll(".content")
var table_div = []
var overview = document.querySelector(".overview")
var img_overview = document.querySelector(".overview img")
fetch("./data.json")
    .then((response)=> response.json())
    .then((json)=> appendImg(json) )


function appendImg(arrayImg){
     console.log(Math.floor(arrayImg.length/2))
    for(i=0; i < arrayImg.length - 1; i++){
        newImg = document.createElement("img")
        newP = document.createElement("p")
        newP.textContent = arrayImg[i].date
        newImg.setAttribute("src", arrayImg[i].link )
        var div = document.createElement("div")
        div.setAttribute('id', i)
        div.setAttribute('onclick', "clickfunct(this.id)")
        div.classList.add("content")
        div.append(newImg)
        div.append(newP)
        table(div)
        if(i < (Math.floor(arrayImg.length/2)))  
           gall1.append(div) 
        else 
            gall2.append(div)
            
    }
    
}

setTimeout(
    ()=>{
        document.querySelector('main').style.display="flex"
    },1400
)


table_div = []
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

