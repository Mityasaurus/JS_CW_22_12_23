// mouseenter & mouseleave
// mouseover
// mouseout
// mousemove (гомінка подія)

const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseleave", onMouseLeave);
boxRef.addEventListener("mouseover", onMouseMove);

function onMouseEnter(e) {
  const box = e.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(e) {
  const box = e.currentTarget;
  box.classList.remove("box--active");
}

function onMouseMove(e) {
  console.log(e);
}

const rotate = document.querySelector(".img-rotate");

rotate.addEventListener("mouseenter", onImageHover);
rotate.addEventListener("mouseleave", removeClass);

function onImageHover(e) {
  rotate.classList.add("animate-rotate");
}

function removeClass(e) {
  rotate.classList.remove("animate-rotate");
}
