let popup_offer = document.querySelector(".popupoffer");

function openoffer(){
    popup_offer.classList.add("openoffer");
}
function closeoffer(){
    popup_offer.classList.remove("openoffer");
}
let listnav=document.querySelector(".new");
document.querySelector(".openlistw").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw2").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw2").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw3").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw3").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw4").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw4").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw5").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw5").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw6").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw6").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw7").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw7").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw8").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw8").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw9").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw9").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw10").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw10").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw11").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw11").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
document.querySelector(".openlistw12").addEventListener("mouseover",function(){
    listnav.classList.add("openlist");
});
document.querySelector(".openlistw12").addEventListener("mouseleave",function(){
    listnav.classList.remove("openlist");
});
listnav.addEventListener("mouceover",function(){
    listnav.classList.add("openlist");
})
let popup_fb = document.querySelector(".popupfeedback");

function openfeedback(){
    popup_fb.classList.add("openfb");
}
function closeofferfb(){
    popup_fb.classList.remove("openfb");
}


let slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
         showSlides(slideIndex += n);
      }
      function currentSlide(n) {
         showSlides(slideIndex = n);
      }
      function showSlides(n) {
         let i;
         let slides = document.getElementsByClassName("mySlides");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         slides[slideIndex-1].style.display = "block";
      }
let slideIndex1 = 1;
      showSlides1(slideIndex1);
      function plusSlides1(m) {
         showSlides1(slideIndex1 += m);
      }
      function currentSlide1(m) {
         showSlides1(slideIndex1 = m);
      }
      function showSlides1(m) {
         let slides1 = document.getElementsByClassName("mySlides1");
         if (m > slides1.length) {slideIndex1 = 1}
         if (m < 1) {slideIndex1 = slides1.length}
         for (let j = 0; j < slides1.length; j++) {
            slides1[j].style.display = "none";
         }
         slides1[slideIndex1-1].style.display = "block";
      }
let slideIndex3 = 1;
      showSlides3(slideIndex3);
      function plusSlides3(p) {
         showSlides3(slideIndex3 += p);
      }
      function currentSlide3(p) {
         showSlides3(slideIndex3 = p);
      }
      function showSlides3(p) {
         let k;
         let slides3 = document.getElementsByClassName("mySlides3");
         if (p > slides3.length) {slideIndex3 = 1}
         if (p < 1) {slideIndex3 = slides3.length}
         for (k = 0; k < slides3.length; k++) {
            slides3[k].style.display = "none";
         }
         slides3[slideIndex3-1].style.display = "block";
      }
let slideIndex4 = 1;
      showSlides4(slideIndex4);
      function plusSlides4(c) {
         showSlides4(slideIndex4 += c);
      }
      function currentSlide4(c) {
         showSlides4(slideIndex4 = c);
      }
      function showSlides4(c) {
         let slides4 = document.getElementsByClassName("mySlides4");
         if (c > slides4.length) {slideIndex4 = 1}
         if (c < 1) {slideIndex4 = slides4.length}
         for (let j = 0; j < slides4.length; j++) {
            slides4[j].style.display = "none";
         }
         slides4[slideIndex4-1].style.display = "block";
      }
let slideIndex5 = 1;
      showSlides5(slideIndex5);
      function plusSlides5(q) {
         showSlides5(slideIndex5 += q);
      }
      function currentSlide5(q) {
         showSlides5(slideIndex5 = q);
      }
      function showSlides5(q) {
         let slides5 = document.getElementsByClassName("mySlides5");
         if (q > slides5.length) {slideIndex5 = 1}
         if (q < 1) {slideIndex5 = slides5.length}
         for (let j = 0; j < slides5.length; j++) {
            slides5[j].style.display = "none";
         }
         slides5[slideIndex5-1].style.display = "block";
      }