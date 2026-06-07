document.addEventListener('DOMContentLoaded', () => {
  
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => observer.observe(el));

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Menu mobile acionado! A sidebar pode ser implementada aqui.');
        });
    }

const track = document.querySelector('.carousel-track');

const slides = document.querySelectorAll('.carousel-img');

let currentSlide = 0;

function moveSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    track.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}

setInterval(moveSlide, 3000);

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');
     });
});
