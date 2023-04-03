var gall1 = document.querySelector('.gallery-collumn-1')
var gall2 = document.querySelector('.gallery-collumn-2')
var arrayImg = [
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220414_194255_241.jpg",
        "date": "4/14/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220530_092430.jpg",
        "date": "5/30/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220602_225610_629.jpg",
        "date": "6/2/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220607_161149_664.jpg",
        "date": "6/7/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220615_214939.jpg",
        "date": "6/15/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220724_173116_885.jpg",
        "date": "7/24/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220828_161342_624.jpg",
        "date": "8/28/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220828_161628_904.jpg",
        "date": "8/28/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20220828_161633_519.jpg",
        "date": "8/28/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20221017_191503_636.jpg",
        "date": "10/17/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20221109_163043.jpg",
        "date": "11/9/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20221121_170316.jpg",
        "date": "11/21/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG_20221215_125753.jpg",
        "date": "12/15/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20220925-WA0088.jpg",
        "date": "9/25/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20221104-WA0001.jpg",
        "date": "11/4/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20221106-WA0024.jpg",
        "date": "11/6/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20221106-WA0061.jpg",
        "date": "11/6/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20221225-WA0001.jpg",
        "date": "12/25/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/IMG-20230101-WA0107.jpg",
        "date": "1/1/2023 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-106865788.jpg",
        "date": "7/14/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1121438910.jpg",
        "date": "1/5/2023 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1185988455.jpg",
        "date": "3/29/2023"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1202682894.jpg",
        "date": "5/6/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-123250418.jpg",
        "date": "4/8/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1337104377.jpg",
        "date": "1/5/2023 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1442250113.jpg",
        "date": "10/10/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1533247209.jpg",
        "date": "1/18/2023 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1614054038.jpg",
        "date": "12/21/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1631578224.jpg",
        "date": "11/1/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-1676354575.jpg",
        "date": "6/10/2022 "
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-271077773.jpg",
        "date": "4/15/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-359012570.jpg",
        "date": "9/28/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-460930442.jpg",
        "date": "11/27/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-584308943.jpg",
        "date": "10/11/2022"
    },
    {
        "link": "http://127.0.0.1:5500/img/Snapchat-737148420.jpg",
        "date": "1/5/2023 "
    }
]


function appendImg(arrayImg){
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

