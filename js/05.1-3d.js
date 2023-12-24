const imgCont = document.querySelector(".img-container");
const img = document.querySelector("img");

imgCont.addEventListener("mousemove", (e) => {
  console.dir(imgCont);
  // розміри контейнера
  const contWidth = imgCont.clientWidth;
  const contHeight = imgCont.clientHeight;
  // визначаємо позиції курсора в контейнері
  console.log(e);
  const mouseX = e.clientX - imgCont.offsetLeft;
  const mouseY = e.clientY - imgCont.offsetTop;
  // обчислюємо поворот зображення
  const rotateY = 40 * (mouseX / contWidth - 0.5);
  const rotateX = 40 * (mouseY / contHeight - 0.5);
  console.log(rotateX, rotateY);

  img.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
});
