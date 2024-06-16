const page3Animate = document.querySelector('#page3')
const page4Animate = document.querySelector('#page4')
const page5Animate = document.querySelector('#page5')
const page6Animate = document.querySelector('#page6')
const page7Animate = document.querySelector('#page7')

gsap.registerPlugin(ScrollToPlugin);

function scrolltoprojects() {
      gsap.to(window, {
          duration: 2,
          scrollTo: "#page3id",
          ease: "power2.out",
        })
}
function scrolltoskill() {
      gsap.to(window, {
          duration: 2,
          scrollTo: "#page4id",
          ease: "power2.out",
        })
}
function scrolltoCertifications() {
      gsap.to(window, {
          duration: 2,
          scrollTo: "#page5id",
          ease: "power2.out",
        })
}

var tl = gsap.timeline();
function slideprloader(){
  tl.to(loader,{
      y: '-500%',
      duration: 2
  })
  playpause(musicBack)
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
}


let amountScrolled = 0;



// Function to create scroll trigger for large screens
function createLargeScreenScrollTrigger() {
  const tb = gsap.timeline({
    scrollTrigger: {
      trigger: ".page_2_parent",
      scroller: "body",
      markers: false,
      start: "top calc(57% + 6rem)",
      end: "top 30%",
      snap: 1,
      pin: ".page1page2parent",
      scrub: 2,
      onUpdate: self => {
        const progress = self.progress;
        const amountScrolled = self.scroll();
        console.log('Amount Scrolled:', amountScrolled);

        if (progress === 1) {
          animation = false;
        } else {
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
  });
}

// Function to create scroll trigger for small screens
function createSmallScreenScrollTrigger() {
  const tbSmallScreen = gsap.timeline({
    scrollTrigger: {
      trigger: ".page_2_parent",
      scroller: "body",
      markers: false,
      start: "top 0",
      end: "top -100vh",
      snap: 1,
      pin: ".page1page2parent",
      scrub: 2,
      onUpdate: self => {
        const progress = self.progress;
        const amountScrolled = self.scroll();
        console.log('Amount Scrolled:', amountScrolled);

        if (progress === 1) {
          animation = false;
        } else {
          animation = true;
        }
      }
    }
  });

  tbSmallScreen.to(".page_2", {
    x: "-50%",
  })
  .call(() => {
    console.log("Animation complete!");
  });
}

// Create matchMedia instance
const mm = gsap.matchMedia();

// Large screen setup
mm.add("(min-width: 885px)", () => {
  createLargeScreenScrollTrigger();
});

// Small screen setup
mm.add("(max-width: 884px)", () => {
  createSmallScreenScrollTrigger();
});

gsap.from(page3Animate, {
  scrollTrigger: {
    trigger: '.page_3',
    start: 'top 70%',
    end: 'top 60%',
    duration: 1
  },
  opacity: 0,
  scale: 0.9,
  duration: 1 // You can specify the duration of the animation
});
gsap.from(page4Animate, {
  scrollTrigger: {
    trigger: '.page_4',
    start: 'top 70%',
    end: 'top 60%',
    duration: 1
  },
  opacity: 0,
  scale: 0.9,
  duration: 1 // You can specify the duration of the animation
});
gsap.from(page5Animate, {
  scrollTrigger: {
    trigger: '.page5',
    start: 'top 70%',
    end: 'top 60%',
    duration: 1
  },
  opacity: 0,
  scale: 0.9,
  duration: 1 // You can specify the duration of the animation
});
gsap.from(page6Animate, {
  scrollTrigger: {
    trigger: '.page_6',
    start: 'top 70%',
    end: 'top 60%',
    duration: 1
  },
  opacity: 0,
  scale: 0.9,
  duration: 1 // You can specify the duration of the animation
});
gsap.from(page7Animate, {
  scrollTrigger: {
    trigger: '.page_7',
    start: 'top 70%',
    end: 'top 60%',
    duration: 1
  },
  opacity: 0,
  scale: 0.9,
  duration: 1 // You can specify the duration of the animation
});


