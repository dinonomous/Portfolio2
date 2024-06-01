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

// Function to remove the mask at 50% progress
function removeMaskAtHalfway(self) {
  if (self.progress >= 0.5) {
    self.maskRemoved = true;
    mask.style.setProperty("display", "none", "important");
    mask = null;
    console.log("half way")
  }
}

// Create a new GSAP timeline with ScrollTrigger
const tb = gsap.timeline({
  scrollTrigger: {
    trigger: ".page_2_parent",
    scroller: "body",
    markers: true,
    start: "top 59.9%",
    end: "top 30%",
    pin: ".page1page2parent",
    scrub: 2,
    onUpdate: self => {
      removeMaskAtHalfway(self);
    }
  }
});

tb.to(".page_2", {
  x: "-50%",
})
.call(() => {
  console.log("Animation complete!");
}); // Example of calling a function after animations

