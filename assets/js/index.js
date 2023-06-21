window.addEventListener("DOMContentLoaded", function() {
    //console.log("hello");

    let boxes = document.querySelectorAll("main div");

    for (let i=0; i<boxes.length; i++)
    {
        boxes[i].style.opacity = 0;
        this.setTimeout(function() {
            boxes[i].classList.add("animate");
        }, i*500);
    }
})