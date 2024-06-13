const cursor = document.querySelector(".cursor_pointer");
const mask = document.querySelector(".mask1");
const mask2 = document.querySelector(".mask");
const rootElement = document.getElementById('root');
const styles = getComputedStyle(rootElement);
const parsedHeight = parseInt(styles.getPropertyValue('--height'));
const side = parseInt(styles.getPropertyValue("--side"));
let scrollAmount = 0;
let scrollAmount1 = 0;
let lastScrollTop = 0;
let cursorTop = 0;
let cursorLeft = 0;
let masksize = 40;
let animation = true;

// document.addEventListener("scroll", () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     cursorTop += scrollTop - lastScrollTop;
//     cursor.style.transform = `translate(${cursorLeft}px, ${cursorTop}px)`;

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// });

document.addEventListener("mousemove", e => {
    gsap.to(cursor, {
        x: e.pageX,
        y: e.pageY - window.pageYOffset + 'px',
        ease: "elastic.out(1,0.3)",
        duration: 1,
    });

    gsap.to(mask, {
        ease: "elastic.out(1,0.3)",
        duration: 200,
        delay: 7000,
        maskSize: masksize,
        webkitMaskSize: masksize,
        autoAlpha: 1,
        maskPosition: 'center'
    });

    if (animation) {
        mask.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - masksize / 2}px ${(e.pageY - scrollAmount - masksize / 2)-amountScrolled}px;`);
    } else {
        mask.setAttribute("style", `mask-size: ${masksize}px !important; mask-position: ${e.pageX - masksize / 2}px ${(e.pageY - scrollAmount - masksize / 2)-amountScrolled}px;`);
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

function divein(e) {
    cursor.innerHTML = e ? `${e}` : '';
    gsap.to(cursor, {
        width: "70px",
        height: "70px",
        backgroundColor: "#ffffff00",
        border: "1px solid black"
    });
}

function diveout() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        width: "10px",
        height: "10px",
        backgroundColor: "#ffffff00"
    });
}
