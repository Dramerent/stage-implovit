// slider swipper

function pinktext(el){
    el.children[0].style.color = "#F4ACBA";
    el.style.transition = "0.3s"
}
function bluetext(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}
function whitetext(el){
 el.children[0].style.color = "white"
}
tumbler = 0

function tumblerRightLeft(){
    if(tumbler == 0){
        document.getElementsByClassName("turn-left-right__tumbler")[0].style.marginLeft = "auto"
        document.getElementsByClassName("turn-left-right__tumbler")[0].style.transition = "0.3s"


        tumbler = 1
    }
    else if(tumbler == 1){
        document.getElementsByClassName("turn-left-right__tumbler")[0].style.marginLeft = "0"
        tumbler = 0
    }
}
function activeTumblerHover(el){
    window.getComputedStyle(el).color = "blue"
}


var time = 0;
var searchGroup = document.getElementsByClassName("Anactive-Lupa")[0]
var products = [document.getElementsByClassName("Header-Menu__Products")[0], document.getElementsByClassName("Header-Group__Products")[0]]
var locate = 0
function ret(){
    time = 1;
    
    enable = 0
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = "flex"
    document.getElementsByClassName("Search-Group__Input")[0].placeholder = "поиск товара";
    document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "block"
    document.getElementsByClassName("Anactive-close")[0].style.display = "none"
    searchGroup.style.display = "none"
    document.getElementsByClassName("SearchLine")[0].style.width = "377px"
    document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
    setTimeout(timer, 0.1)
    document.getElementsByClassName("Search-Group__Input")[0].value = ""
    setTimeout(timer, 0.1)
    setTimeout(() => {enable = 2}, 1)

    
}

function changeActiveSearch(el){
    
    if(time != 1){

        time = 1
        enable = 0
        for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
        }
        el.children[1].placeholder = "Введите первые буквы";
        el.children[1].style.backgroundColor = "rgba(0, 89, 176, 0.2) ";
        el.children[1].style.fontWeight = "lighter";
        console.dir(el) 
        searchGroup.style.display = "block"
        document.getElementsByClassName("Search-Group__Lupa_Enabled")[0].style.display = "none"
        document.getElementsByClassName("Anactive-close")[0].style.display = "block"
        document.getElementsByClassName("SearchLine")[0].style.width = "395px"
        setTimeout(timer, 1)
    }
    
    setTimeout(timer, 1)
    setTimeout(() => {enable = 2}, 1)
        
        
}

function timer(){
 time = 0
}
function ReturnToHomePage(){
    time = 1
    if(window.location.pathname != "/index.html"){
        window.location.pathname = "/index.html"
        
    }
    setTimeout(timer, 1)
}
var enable = 0;
var groupChild = (document.getElementsByClassName("header__Group")[0].children)

function baseHeaderOff(){
    if(time == 0 && document.documentElement.scrollWidth >=1500){
         enable = 2;       
         time = 1
         document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "none"
         document.getElementsByClassName("Header__Menu")[0].style.display = "none"
         document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "flex"
         document.getElementsByClassName("Like Search-Group__like")[0].style.display = "none"
         
         for(i = 2; i <=8; i++){
            groupChild[i].style.display = "flex"
       }
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
        document.getElementsByClassName("Like header-group__like")[0].style.display = ""
        document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = ""
      
       
     } 
     
}  

function baseHeaderOn(){
    if(enable == 2){
        enable = 0
        time = 1
        document.getElementsByClassName("header__NameLogo-And-Search")[0].style.display = "flex"
        document.getElementsByClassName("Header__Menu")[0].style.display = "flex"
        document.getElementsByClassName("Header__Group_Disabled")[0].style.display = "none"
        document.getElementsByClassName("Like Search-Group__like")[0].style.display = "block"
        document.getElementsByClassName("Search-Group_anactive")[0].style.display = "none"
          for(i = 2; i <=8; i++){
            groupChild[i].style.display = "none"
        }
        
    }
    setTimeout(timer, 1)
    
}

document.onclick = function(){
    if(time != 1 && enable == 0){
        ret()
    }
}
document.getElementsByClassName("Search-Group__Input")[0].oninput = function(){
    if(document.getElementsByClassName("Search-Group__Input")[0].selectionStart>0){
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "white"
        console.dir(document.getElementsByClassName("Search-Group__Input")[0])
    }
    else{
        document.getElementsByClassName("Search-Group__Input")[0].style.backgroundColor = "rgba(0, 89, 176, 0.2) "
    }
}
function menuover(el){ 
    time = 1
    el.style.backgroundColor = "rgba(160, 220, 228, 1)"
    el.style.border = "1px transparent"
    el.style.borderStyle = "none none solid none"
    el.style.borderColor = "rgba(70, 192, 193, 1)"
    if(el.className == "Header-Group__Products"){
        enable = 0
        console.dir(enable)
    }
    
    
}
function menuleave(el){
    time = 0;
    enable = 2
    el.style.backgroundColor = "white"
    el.style.border = "0px none transparent"
    if(document.getElementsByClassName("Header-Menu__Products")[0]){
        for(i = 0; i<=products.length; i++)
            {   products[i].style.backgroundColor = "rgba(160, 220, 228, 1)";
                products[i].style.border = "1px transparent";
                products[i].style.borderStyle = "none none solid none";
                products[i].style.borderColor = "rgba(70, 192, 193, 1)";
            }
    }
}

for(i = 0; i<=products.length; i++)
{   
    products[i].style.backgroundColor = "rgba(160, 220, 228, 1)";
    products[i].style.border = "1px transparent";
    products[i].style.borderStyle = "none none solid none";
    products[i].style.borderColor = "rgba(70, 192, 193, 1)";
}


function headerGroupDisable(){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.cssText = "display: flex; margin-left:50px; padding: 0 30px"
    
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "none"
    }
    setTimeout(() => {enable = 2}, 1)
    document.getElementsByClassName("Like header-group__like")[0].style.display = "none"
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = "none" 
}

function headerGroupEnable(){
    enable = 0
    time = 1 
    document.getElementsByClassName("Search-Group_anactive")[0].style.display = ""
    for(i = 2; i <=8; i++){
         groupChild[i].style.display = "flex"
    }
    document.getElementsByClassName("Like header-group__like")[0].style.display = ""
    document.getElementsByClassName("Lupa header-group__Lupa")[0].style.display = ""
    setTimeout(() => {enable = 2}, 1)
}
function text(){
    time = 1
    enable = 0
    setTimeout(() => {enable = 2}, 1)
    setInterval(timer, 1)
}









