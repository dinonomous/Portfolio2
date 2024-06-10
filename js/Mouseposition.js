const cursor = document.querySelector(".cursor_pointer");
const mask2 = document.querySelector(".mask");
const rootElement = document.getElementById('root');
const styles = getComputedStyle(rootElement);
const height = styles.getPropertyValue('--height');
const side = parseInt(styles.getPropertyValue("--side"));
const parsedHeight = parseInt(height);
var scrollAmount = 0;
var scrollAmount1 = 0;
var Yaxis = 0;
const mask = document.querySelector(".mask1");
var animation = true;

var masksize = 40;

document.addEventListener("scroll", e => {
    scrollAmount = window.pageYOffset;
    const cursorTop = cursor.getBoundingClientRect().top;
    cursorTop += scrollAmount;
    gsap.to(cursor, {
        y: cursorTop,
        ease: "elastic.out(1,0.3)",
        duration: 1,
    });
    if (animation) {
        scrollAmount1 = scrollAmount;
    }
});


document.addEventListener("mousemove", e => {
    Yaxis = e.pageY;

    const maskRect = mask2.getBoundingClientRect();
  const maskX = maskRect.left;
  const maskY = maskRect.top;
  const maskWidth = maskRect.width;
  const maskHeight = maskRect.height;

  // Check if mouse is inside mask2 (assuming it's fully contained within mask1)
  const isInsideMask = e.pageX >= maskX && e.pageX <= maskX + maskWidth &&
                       e.pageY >= maskY && e.pageY <= maskY + maskHeight + scrollAmount;

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
    if (isInsideMask) {
        gsap.to(mask2, {
            ease: "elastic.out(1,0.3)",
            duration: 200,
            delay: 7000,
            maskPosition: `${e.pageX - masksize / 2}px ${e.pageY - masksize / 2}px`,
            maskSize: masksize,
            webkitMaskSize: masksize,
            autoAlpha: 1,
            maskPosition: 'center'
        });
        mask2.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - maskX - masksize / 2}px ${e.pageY - maskY - scrollAmount - masksize / 2}px;`);
  }
  if(animation){
    mask.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - masksize / 2}px ${e.pageY - scrollAmount - masksize / 2}px;`);
  }
  else{
    
    mask.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - masksize / 2}px ${e.pageY - scrollAmount1 - masksize / 2}px;`);
  }
    
    
});

function maskExpand() {
    masksize = 400;
    mask.setAttribute("style", `mask-size: ${masksize}px !important;`);
}

function maskShrink() {
    masksize = 40;
    mask.setAttribute("style", `mask-size: ${masksize}px !important;`);
}

function divein(e){
    if(e){
        cursor.innerHTML=`${e}`;
    }
    else{
        cursor.innerHTML='';
    }
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
