window.onload = function(){
    window.addEventListener("scroll", function(e){
        scrollEvent();
    })
}

var scrollEvent =  function(){
    var scroll = window.innerHeight + window.scrollY;
    var itemList = document.querySelectorAll(".sec");

    Array.prototype.forEach.call(itemList, function(sec){
        if(sec.offsetTop < scroll){
            sec.classList.remove("animatable");
            sec.classList.add("animated");
        }
    })
}