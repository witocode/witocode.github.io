const header = document.getElementById('Header');

window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY

    if (scroll>10){
        header.style.backgroundColor = '#0131a1'
        header.style.boxShadow = '0 4px 5px var(--navbar-shallow-color)';
    }else{
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = '';
    }
});

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".mostrar-menu");
const closeMenuBtn = document.querySelector(".esconder-menu");
const chkval = document.getElementById('check');

/*function toggleMenu() {
menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);*/

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
  
        if (entry.isIntersecting) {
          document.querySelector(".menu a.selected").classList.remove("selected");
          menuLink.classList.add("selected");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function () {
        if (chkval.checked) {
            chkval.checked = false;
        }else{
            chkval.checked = true;
        }
    });
  
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });
