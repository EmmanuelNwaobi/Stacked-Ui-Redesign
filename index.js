const barIcon = document.getElementById("bar-icon")
const mobileMenu = document.getElementById("mobile-menu")
const closeIcon = document.getElementById("close-icon")
const closeAndLogoContainer = document.getElementById("close-and-logo-container")
let editIcon = document.getElementById("edit-icon")
let actionContainer = document.getElementById("action-block-container")
let editIcon2 = document.getElementById("edit-icon2")
let actionContainer2 = document.getElementById("action-block-container2")
let editIcon3 = document.getElementById("edit-icon3")
let actionContainer3 = document.getElementById("action-block-container3")

barIcon.addEventListener("click",function(e){
    mobileMenu.style.display = "flex"
    closeAndLogoContainer.style.display = "none"
})

closeIcon.addEventListener("click", function(e){
    mobileMenu.style.display = "none"
    closeAndLogoContainer.style.display = "flex"
})

editIcon.addEventListener("click", ()=>{
   if(actionContainer.classList.contains("action-block-container")){
        actionContainer.classList.remove("action-block-container")
        actionContainer.classList.add("action-block")
   }else{
     actionContainer.classList.add("action-block-container")
     actionContainer.classList.remove("action-block")
   }
})

editIcon2.addEventListener("click", ()=>{
    if(actionContainer2.classList.contains("action-block-container")){
        actionContainer2.classList.remove("action-block-container")
        actionContainer2.classList.add("action-block")
   }else{
     actionContainer2.classList.add("action-block-container")
     actionContainer2.classList.remove("action-block")
   }
})

editIcon3.addEventListener("click", ()=>{
    if(actionContainer3.classList.contains("action-block-container")){
        actionContainer3.classList.remove("action-block-container")
        actionContainer3.classList.add("action-block")
   }else{
     actionContainer3.classList.add("action-block-container")
     actionContainer3.classList.remove("action-block")
   }
})