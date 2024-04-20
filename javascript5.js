const togler=document.querySelector(".togler"),
nav=document.querySelector("nav");
togler.addEventListener("click",()=>{
    nav.classList.toggle("show-flex");
})
const accordionnu=document.querySelectorAll(".accordion-nu"),
accordionTitle=document.querySelectorAll(".accordion-desc h3"),
accordionText=document.querySelectorAll(".accordion-desc p");

accordionTitle.forEach((item,i)=>{
    item.addEventListener('click',()=>{
     item.classList.toggle('accordion-title_activ');
     accordionnu[i].classList.toggle('accordion-nu_activ');
     accordionText[i].classList.toggle('show'); 
    })
});