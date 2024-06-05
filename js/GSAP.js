// Initial animations for elements on page load
var tl = gsap.timeline();
tl.from(".page1_text h1", {
  x: "-10%",
  opacity: 0,
  duration: 0.5,
});
tl.from(".page1_above_photo_dinesh_photo", {
  x: "10%",
  opacity: 0,
  duration: 0.5,
});
tl.from(".topline", {
  x: "-50%",
  duration: 0.5,
});
tl.from(".github", {
  x: 10,
  opacity: 0,
  duration: 0.3,
});
tl.from(".insta", {
  x: 10,
  opacity: 0,
  duration: 0.3,
});
tl.from(".linkedin", {
  x: 10,
  opacity: 0,
  duration: 0.3,
});
tl.from(".telegram", {
  x: 10,
  opacity: 0,
  duration: 0.3,
});


const tb = gsap.timeline({
  scrollTrigger: {
    trigger: ".page_2_parent",
    scroller: "body",
    markers: true,
    start: `top cal(57% + 6rem)`,
    end: "top 30%",
    pin: ".page1page2parent",
    scrub: 2,
    onUpdate: self => {
      const progress = self.progress;
      if(progress === 1){
        animation = false;
      }
      else{
        animation = true;
      }
    }
  }
});

tb.to(".page_2", {
  x: "-50%",
})
.call(() => {
  console.log("Animation complete!");
}); // Example of calling a function after animations

