
var count = 0;
var count_burger = 0;
var slide_1 = document.getElementById('slide_1');
var slide_2 = document.getElementById('slide_2');
var slide_3 = document.getElementById('slide_3');
var text_slide_1 = document.getElementById('text_slide_1');
var text_slide_2 = document.getElementById('text_slide_2');
var text_slide_3 = document.getElementById('text_slide_3');
var a = 0;
var heightForProducts = document.querySelector(".heightForProducts").clientHeight;

document.getElementById('arrow_b').addEventListener('click', function(){
    document.querySelector('.header').scrollIntoView({
        behavior: 'smooth'
    })
})
document.querySelector('.intro_scroll').addEventListener('click', function(){
    document.querySelector('.about').scrollIntoView({
        behavior: 'smooth', block: 'start'
    })
})
document.querySelector('.about_link').addEventListener('click', function(){
    document.querySelector('.about').scrollIntoView({
        behavior: 'smooth', block: 'start'
    })
})
document.querySelector(".menu").addEventListener("click", function(){
    if (count_burger == 0){
        document.querySelector("#burger_b").style.transform = "rotate(90deg) scale(1)";
        document.querySelector("#close_b").style.transform = "rotate(90deg) scale(1)";
        document.querySelector("#burger_b").style.opacity = "0";
        document.querySelector("#close_b").style.opacity = "1";
        document.querySelector(".burger_nav").style.opacity = "1";
        document.querySelector(".burger_nav").style.top = "100px";
        document.querySelector(".burger_back").style.backgroundColor = "#00000098";
        document.querySelector(".burger_nav").style.pointerEvents = "initial";
        var backHeight = document.querySelector("#body").clientHeight + "px";
        console.log(backHeight);
        document.querySelector(".burger_back").style.height = backHeight;
        count_burger++;
    }
    else {
        document.querySelector("#burger_b").style.transform = "rotate(0) scale(1)";
        document.querySelector("#close_b").style.transform = "rotate(0) scale(1)";
        document.querySelector("#burger_b").style.opacity = "1";
        document.querySelector("#close_b").style.opacity = "0";
        document.querySelector(".burger_nav").style.opacity = "0";
        document.querySelector(".burger_nav").style.top = "50px";
        document.querySelector(".burger_nav").style.pointerEvents = "none";
        document.querySelector(".burger_back").style.height = 0;
        count_burger = 0;
    }
    console.log(count_burger);
})
document.querySelector(".link").addEventListener("click", function(){
    document.querySelector("#burger_b").style.transform = "rotate(0) scale(1)";
        document.querySelector("#close_b").style.transform = "rotate(0) scale(1)";
        document.querySelector("#burger_b").style.opacity = "1";
        document.querySelector("#close_b").style.opacity = "0";
        document.querySelector(".burger_nav").style.opacity = "0";
        document.querySelector(".burger_nav").style.top = "50px";
        document.querySelector(".burger_nav").style.pointerEvents = "none";
        document.querySelector(".burger_back").style.height = 0;
        count_burger = 0;
})
document.getElementById("body").onscroll = function(){
    console.log(a);
    a = window.pageYOffset;
    if (document.getElementById('intro').clientHeight < a ) {
        document.getElementById("nav").style.left = '-30px';
        document.getElementById("nav").style.opacity = '1';
        document.getElementById("nav").style.transition = 'all 0.5s';
        document.getElementById("arrow_b").style.opacity = 1;
        document.getElementById("arrow_b").style.right = "50px";
    }
    else{
        document.getElementById("nav").style.left = '-100%';
        document.getElementById("nav").style.opacity = '0';
        document.getElementById("nav").style.transition = 'all 0.5s';
        document.getElementById("arrow_b").style.opacity = 0;
        document.getElementById("arrow_b").style.right = "-100%";
    }
}
document.getElementById("btn_next").onclick = function (){
    count++;
    console.log(count);
    if (count == 1) {
        
        slide_1.style.transform = 'translate(-100%)'
        slide_1.style.opacity = 0;
        slide_2.style.transform = 'translate(0)'
        slide_2.style.opacity = 1;
        text_slide_1.style.transform = "translate(-1000px)";
        text_slide_1.style.opacity = 0;
        text_slide_2.style.opacity = 1;
        text_slide_2.style.transform = "translate(0px)";
        slide_3.style.transform = "translate(100%)";
        text_slide_3.style.transform = "translate(1000px)";
    }
    if (count == 2){
        text_slide_1.style.transform = "translate(100%)";
        slide_1.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(-100%)";
        text_slide_2.style.transform = "translate(-1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 1;
        slide_3.style.transform = "translate(0)";
        text_slide_3.style.opacity = 1;
        text_slide_3.style.transform = "translate(0)";
        
    }
    if (count == 3){
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        slide_2.style.transform = "translate(100%)";
        text_slide_2.style.transform = "translate(1000px)";
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.transform = "translate(-1000px)";
        text_slide_3.style.opacity = 0;
        count = 0;
    }
    if (count == -1) {
        slide_1.style.opacity = 0;
        text_slide_1.style.transform = "translate(100%)";
        text_slide_1.style.opacity = 0;
        slide_1.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(-100%)";
        text_slide_2.style.transform = "translate(-1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 1;
        slide_3.style.transform = "translate(0)";
        text_slide_3.style.opacity = 1;
        text_slide_3.style.transform = "translate(0)";
    }
    if (count == -2){
        slide_1.style.transform = 'translate(-100%)'
        slide_1.style.opacity = 0;
        slide_2.style.transform = 'translate(0)'
        slide_2.style.opacity = 1;
        text_slide_1.style.transform = "translate(-1000px)";
        text_slide_1.style.opacity = 0;
        text_slide_2.style.opacity = 1;
        text_slide_2.style.transform = "translate(0px)";
        slide_3.style.transform = "translate(100%)";
        slide_3.style.transition = "all 0.5s"
        slide_3.style.opacity = 0;
        text_slide_3.style.opacity = 0;
        text_slide_3.style.transform = "translate(1000px)";
        
    }
    if (count == -3){
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        slide_2.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        text_slide_2.style.transform = "translate(1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.transform = "translate(-1000px)";
        text_slide_3.style.opacity = 0;
        count = 0;
    }
    if(count == 0){
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(100%)";
        text_slide_2.style.transform = "translate(1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.opacity = 0;
        text_slide_3.style.transform = "translate(-1000px)";
    }

}
document.getElementById("btn_back").onclick = function (){
    count--;
    console.log(count);
    if (count == -1) {
        slide_1.style.opacity = 0;
        text_slide_1.style.transform = "translate(100%)";
        text_slide_1.style.opacity = 0;
        slide_1.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(-100%)";
        text_slide_2.style.transform = "translate(-1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 1;
        slide_3.style.transform = "translate(0)";
        text_slide_3.style.opacity = 1;
        text_slide_3.style.transform = "translate(0)";
    }
    if (count == -2){
        slide_1.style.transform = 'translate(-100%)'
        slide_1.style.opacity = 0;
        slide_2.style.transform = 'translate(0)'
        slide_2.style.opacity = 1;
        text_slide_1.style.transform = "translate(-1000px)";
        text_slide_1.style.opacity = 0;
        text_slide_2.style.opacity = 1;
        text_slide_2.style.transform = "translate(0px)";
        slide_3.style.transform = "translate(100%)";
        slide_3.style.opacity = 0;
        text_slide_3.style.opacity = 0;
        text_slide_3.style.transform = "translate(1000px)";
        
    }
    if (count == -3){
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        slide_2.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        text_slide_2.style.transform = "translate(1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.transform = "translate(-1000px)";
        text_slide_3.style.opacity = 0;
        count = 0;
    }
    if (count == 1) {
        
        slide_1.style.transform = 'translate(-100%)'
        slide_1.style.opacity = 0;
        slide_2.style.transform = 'translate(0)'
        slide_2.style.opacity = 1;
        text_slide_1.style.transform = "translate(-1000px)";
        text_slide_1.style.opacity = 0;
        text_slide_2.style.opacity = 1;
        text_slide_2.style.transform = "translate(0px)";
        slide_3.style.transform = "translate(100%)";
        slide_3.style.opacity = 0;
        text_slide_3.style.transform = "translate(1000px)";
        text_slide_3.style.opacity = 0;
    }
    if (count == 2){
        text_slide_1.style.transform = "translate(100%)";
        slide_1.style.transform = "translate(100%)";
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(-100%)";
        text_slide_2.style.transform = "translate(-1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 1;
        slide_3.style.transform = "translate(0)";
        text_slide_3.style.opacity = 1;
        text_slide_3.style.transform = "translate(0)";
        
    }
    if (count == 3){
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        slide_2.style.transform = "translate(0)";
        text_slide_2.style.transform = "translate(1000px)";
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.transform = "translate(-1000px)";
        text_slide_3.style.opacity = 0;
        count = 0;
    }
    if(count == 0){
        slide_1.style.opacity = 1;
        slide_1.style.transform = "translate(0)";
        text_slide_1.style.transform = "translate(0)";
        text_slide_1.style.opacity = 1;
        slide_2.style.opacity = 0;
        slide_2.style.transform = "translate(100%)";
        text_slide_2.style.transform = "translate(1000px)";
        text_slide_2.style.opacity = 0;
        slide_3.style.opacity = 0;
        slide_3.style.transform = "translate(-100%)";
        text_slide_3.style.opacity = 0;
        text_slide_3.style.transform = "translate(-1000px)";
    }

}
var click = false;
document.querySelector(".products").addEventListener("mouseover", function(){
    if (click == false){
        document.querySelector(".products_slide_1").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_2").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_1").style.opacity = ("1");
        document.querySelector(".products_slide_2").style.opacity = ("1");
        document.querySelector(".products_slide_5").style.opacity = ("0");
        document.querySelector(".products_slide_6").style.opacity = ("0");
        document.querySelector(".products_slide_3").style.opacity = ("0");
        document.querySelector(".products_slide_4").style.opacity = ("0");
    }
    click = true; 
    
})
var count_products = 0;
document.querySelector(".products_buttons_left").addEventListener("click", function(){
    count_products--;
    if (count_products < 0){
        count_products = 0
    }
    if (count_products == 0){
        document.querySelector(".products_slide_1").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_2").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_3").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_4").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_5").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_6").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_1").style.opacity = ("1");
        document.querySelector(".products_slide_2").style.opacity = ("1");
        document.querySelector(".products_slide_5").style.opacity = ("0");
        document.querySelector(".products_slide_6").style.opacity = ("0");
        document.querySelector(".products_slide_3").style.opacity = ("0");
        document.querySelector(".products_slide_4").style.opacity = ("0");
    }
    if(count_products == 1){
        document.querySelector(".products_slide_5").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_6").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_1").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_2").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_4").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_3").style.opacity = ("1");
        document.querySelector(".products_slide_4").style.opacity = ("1");
        document.querySelector(".products_slide_1").style.opacity = ("0");
        document.querySelector(".products_slide_2").style.opacity = ("0");
        document.querySelector(".products_slide_5").style.opacity = ("0");
        document.querySelector(".products_slide_6").style.opacity = ("0");

    }
    if(count_products == 2){
        document.querySelector(".products_slide_5").style.transform = ("translate(0, 0)");
        document.querySelector(".products_slide_6").style.transform = ("translate(0, 0)");
        document.querySelector(".products_slide_1").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_2").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_4").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.opacity = ("0");
        document.querySelector(".products_slide_4").style.opacity = ("0");
        document.querySelector(".products_slide_1").style.opacity = ("0");
        document.querySelector(".products_slide_2").style.opacity = ("0");
        document.querySelector(".products_slide_5").style.opacity = ("1");
        document.querySelector(".products_slide_6").style.opacity = ("1");
    }
    console.log(count_products);
})

document.querySelector(".products_buttons_right").addEventListener("click", function(){
    count_products++;
    if (count_products > 2){
        count_products = 2;
    }
    if (count_products == 0){
        document.querySelector(".products_slide_1").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_2").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_3").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_4").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_5").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_6").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_1").style.opacity = ("1");
        document.querySelector(".products_slide_2").style.opacity = ("1");
        document.querySelector(".products_slide_5").style.opacity = ("0");
        document.querySelector(".products_slide_6").style.opacity = ("0");
        document.querySelector(".products_slide_3").style.opacity = ("0");
        document.querySelector(".products_slide_4").style.opacity = ("0");
    }
    if(count_products == 1){
        document.querySelector(".products_slide_5").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_6").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_1").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_2").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_4").style.transform = ("translate(0,0)");
        document.querySelector(".products_slide_3").style.opacity = ("1");
        document.querySelector(".products_slide_4").style.opacity = ("1");
        document.querySelector(".products_slide_1").style.opacity = ("0");
        document.querySelector(".products_slide_2").style.opacity = ("0");
        document.querySelector(".products_slide_5").style.opacity = ("0");
        document.querySelector(".products_slide_6").style.opacity = ("0");

    }
    if(count_products == 2){
        document.querySelector(".products_slide_5").style.transform = ("translate(0, 0)");
        document.querySelector(".products_slide_6").style.transform = ("translate(0, 0)");
        document.querySelector(".products_slide_1").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_2").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.transform = ("translate(100px,-100px)");
        document.querySelector(".products_slide_4").style.transform = ("translate(-100px,100px)");
        document.querySelector(".products_slide_3").style.opacity = ("0");
        document.querySelector(".products_slide_4").style.opacity = ("0");
        document.querySelector(".products_slide_1").style.opacity = ("0");
        document.querySelector(".products_slide_2").style.opacity = ("0");
        document.querySelector(".products_slide_5").style.opacity = ("1");
        document.querySelector(".products_slide_6").style.opacity = ("1");

    }
    console.log(count_products);
})
document.querySelector("#about_link, #about_link_scroll").addEventListener("click", function(){
    document.querySelector("#about").scrollIntoView({
        behavior: 'smooth'
    })
})
document.querySelector("#products_link").addEventListener("click", function(){
    document.querySelector(".products").scrollIntoView({
        behavior: 'smooth'
    })
})
document.querySelector("#blog_link").addEventListener("click", function(){
    document.querySelector(".blog").scrollIntoView({
        behavior: 'smooth'
    })
})

