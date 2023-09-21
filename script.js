const navLinksEls = document.querySelectorAll('.nav-bar');
const sectionEls = document.querySelectorAll('.section');

let currentSection =  'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)){
           currentSection = sectionEl.id;
        }
});

    navLinksEls.forEach(navLinksEl => {
        if(navLinksEl.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('.active');
            navLinksEl.classList.add('.active');
        }
    });
});