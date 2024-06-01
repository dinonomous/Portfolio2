const cursor = document.querySelector(".cursor_pointer");
const maskElement = document.querySelector(".mask1");
var Yaxis = 0;
var mask = null;

// Check if the mask element is hidden
if (window.getComputedStyle(maskElement).getPropertyValue("display") === "none") {
} else {
    mask = document.querySelector(".mask1");
}

var masksize = 40;

document.addEventListener("mousemove", e => {
    Yaxis = e.pageY;
    gsap.to(cursor,{
        x:e.pageX,
        y:Yaxis,
        ease: "elastic.out(1,0.3)",
        duration: 1,
    })
    gsap.to(mask,{
        ease: "elastic.out(1,0.3)",
        duration: 200,
        delay:7000, 
        maskPosition: `${e.pageX - masksize / 2}px ${e.pageY - masksize / 2}px;`,
        maskSize: masksize,
        webkitMaskSize: masksize,
        autoAlpha: 1, 
        maskPosition: 'center'
    })
    mask.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - masksize / 2}px ${e.pageY - masksize / 2}px;`);
});

document.addEventListener("scroll",e=>{
    console.log(e)
    
})

function maskExpand() {
    masksize = 400;
    mask.setAttribute("style", `mask-size: ${masksize}px !important;`);
}

function maskShrink() {
    masksize = 40;
    mask.setAttribute("style", `mask-size: ${masksize}px !important;`);
}

function divein(){
    cursor.innerHTML="Dive";
    gsap.to(cursor,{
        width: "70px",
        height: "70px",
        backgroundColor: "#ffffff00",
        border:"1px solid black"
    })
}

function diveout(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        width: "10px",
        height: "10px",
        backgroundColor: "#ffffff00"
    })
}
