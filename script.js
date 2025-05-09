const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

const MainImg = document.getElementById('MainImg');
const SmallImg = document.getElementsByClassName('small-img');
SmallImg[0].onclick = function () {
  MainImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  MainImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  MainImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  MainImg.src = SmallImg[3].src;
};

const navlinks = document.querySelectorAll('#navbar li');
navlinks.forEach((link) => {
  link.addEventListener('click', () => {
    navlinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});
