

var tl=gsap.timeline()

tl.from("#nav h3",{
  y:-50,
  opacity:0,
  delay:0.4,
  duration:0.6,
  stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.7,
    stagger:0.5
})

tl.from("#main img",{
    x:50,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    rotate:150 
})

tl.from("#bottom h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.6,
    stagger:0.3
  })




