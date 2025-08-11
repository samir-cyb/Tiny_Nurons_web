// Parallax Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Hero section parallax
    const heroBg = document.querySelector('.hero-bg-parallax');
    if (heroBg) {
        new Parallax(heroBg, {
            imageSrc: heroBg.getAttribute('data-image-src'),
            positionY: 'top',
            bleed: 10,
            naturalWidth: 1920,
            naturalHeight: 1080
        });
    }
    
    // CTA section parallax
    const ctaBg = document.querySelector('.cta-bg');
    if (ctaBg) {
        new Parallax(ctaBg, {
            positionY: 'center',
            bleed: 10
        });
    }
    
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.feature-icon, .testimonial-content, .logo-icon');
    floatingElements.forEach(el => {
        el.style.animation = `float 4s ease-in-out infinite`;
        el.style.animationDelay = `${Math.random() * 2}s`;
    });
    
    // Scroll-triggered animations
    const scrollElements = document.querySelectorAll('[data-scroll-animation]');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initialize scroll animations
    handleScrollAnimation();
    
    // Hover tilt effect
    const tiltElements = document.querySelectorAll('.feature-card, .testimonial-content');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const x = e.clientX - el.getBoundingClientRect().left;
            const y = e.clientY - el.getBoundingClientRect().top;
            
            const centerX = el.offsetWidth / 2;
            const centerY = el.offsetHeight / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            el.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // Gradient text animation
    const gradientTexts = document.querySelectorAll('.gradient-text');
    
    gradientTexts.forEach(text => {
        text.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            text.style.setProperty('--gradient-x', x);
            text.style.setProperty('--gradient-y', y);
        });
    });
    
    // Micro-interactions for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(2px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});