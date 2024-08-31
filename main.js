var lastScrollTop = 0;
navbar = document.getElementById("nav");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-100px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
})







var tl = gsap.timeline();

tl.from("#page2 .vid2 video", {
  height: "50%",
  width: "50%",
  scrollTrigger: {
    // scroller:"body",
    trigger: "#page2",
    start: "top 80%",
    end: "top 10%",
    // markers:true,
    scrub: true,
  },
});

gsap.to("#page3 .page3-right-section", {
  y:"-200%",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 0%",
    end: "top -100%",
    pin: "#page3",
    scrub: 3,
    // markers:true
  },
});
gsap.to("#page3 .page3-left img", {
  rotate:"250deg",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 0%",
    end: "top -100%",
    scrub: 3,
    // markers:true
  },
});


document.addEventListener('mousemove', (event) => {
  const box = document.querySelector('#circle');
  const container = document.querySelector('.diamondball');
  const moveAmount = 50;

  // Calculate the mouse position relative to the container
  let x = event.clientX - container.getBoundingClientRect().left - (box.offsetWidth / 2);
  let y = event.clientY - container.getBoundingClientRect().top - (box.offsetHeight / 2);

  // Add slight randomness within the allowed range
  x += (Math.random() * moveAmount - moveAmount / 2);
  y += (Math.random() * moveAmount - moveAmount / 2);

  // Constrain x to stay within the container
  x = Math.max(0, Math.min(x, container.offsetWidth - box.offsetWidth));

  // Constrain y to stay within the container
  y = Math.max(0, Math.min(y, container.offsetHeight - box.offsetHeight));

  // Apply the constrained position with GSAP
  gsap.to(box, { x: x, y: y, duration: 3, ease: "power2.out" });
});