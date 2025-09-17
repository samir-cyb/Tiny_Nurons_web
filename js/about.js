document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Certificate Carousel
    const certificateCarousel = () => {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dots .dot');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        let currentSlide = 0;
        let autoSlideInterval;

        // Function to show a specific slide
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        }

        // Function to go to next slide
        function nextSlide() {
            let newIndex = currentSlide + 1;
            if (newIndex >= slides.length) newIndex = 0;
            showSlide(newIndex);
        }

        // Function to go to previous slide
        function prevSlide() {
            let newIndex = currentSlide - 1;
            if (newIndex < 0) newIndex = slides.length - 1;
            showSlide(newIndex);
        }

        // Start auto sliding
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
        }

        // Stop auto sliding
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Add click events to arrows
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        }

        // Add click events to dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                showSlide(slideIndex);
                stopAutoSlide();
                startAutoSlide();
            });
        });

        // Initialize carousel
        if (slides.length > 0) {
            showSlide(0);
            startAutoSlide();

            // Pause auto slide on hover
            const carousel = document.querySelector('.certificate-carousel');
            const arrows = document.querySelectorAll('.carousel-arrow');
            
            if (carousel) {
                carousel.addEventListener('mouseenter', stopAutoSlide);
                carousel.addEventListener('mouseleave', startAutoSlide);
            }
            
            // Also pause when hovering over arrows
            arrows.forEach(arrow => {
                arrow.addEventListener('mouseenter', stopAutoSlide);
                arrow.addEventListener('mouseleave', startAutoSlide);
            });
        }
    };

    // Initialize certificate carousel
    certificateCarousel();

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-animate');
                
                // Add staggered animation to timeline content
                const timelineContent = entry.target.querySelector('.timeline-content');
                setTimeout(() => {
                    timelineContent.classList.add('content-animate');
                }, 200);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Interactive timeline hover effects
    timelineItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            // Highlight current item
            this.classList.add('timeline-highlight');
            
            // Dim other items slightly
            timelineItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index) {
                    otherItem.classList.add('timeline-dimmed');
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            // Remove all highlights and dims
            timelineItems.forEach(item => {
                item.classList.remove('timeline-highlight', 'timeline-dimmed');
            });
        });
    });

    // Values cards interaction
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Add glow effect
            this.classList.add('card-glow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.classList.remove('card-glow');
        });
    });

    // Philosophy items progressive reveal
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    const philosophyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('philosophy-reveal');
                
                // Animate number
                const number = entry.target.querySelector('.philosophy-number');
                number.classList.add('number-animate');
                
                // Animate content with delay
                const content = entry.target.querySelector('.philosophy-content-item');
                setTimeout(() => {
                    content.classList.add('content-slide-in');
                }, 300);
            }
        });
    }, {
        threshold: 0.4,
        rootMargin: '0px 0px -50px 0px'
    });

    philosophyItems.forEach(item => {
        philosophyObserver.observe(item);
    });

    // Achievement cards counter animation
    const achievementCards = document.querySelectorAll('.achievement-card');
    const achievementCounts = document.querySelectorAll('.achievement-count');
    
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const countElement = card.querySelector('.achievement-count');
                
                if (countElement) {
                    const countText = countElement.textContent;
                    const isNumber = /^\d+$/.test(countText);
                    
                    if (isNumber) {
                        // Animate number counting
                        const target = parseInt(countText);
                        const duration = 2000;
                        const step = target / (duration / 16);
                        let current = 0;
                        
                        const updateCount = () => {
                            current += step;
                            if (current < target) {
                                countElement.textContent = Math.floor(current);
                                requestAnimationFrame(updateCount);
                            } else {
                                countElement.textContent = target;
                            }
                        };
                        
                        updateCount();
                    } else if (countText.includes('$')) {
                        // Animate money values
                        const value = countText.replace(/[^\d]/g, '');
                        const target = parseInt(value);
                        const suffix = countText.replace(/[\d]/g, '');
                        const duration = 2000;
                        const step = target / (duration / 16);
                        let current = 0;
                        
                        const updateCount = () => {
                            current += step;
                            if (current < target) {
                                countElement.textContent = `$${Math.floor(current)}${suffix.replace('$', '')}`;
                                requestAnimationFrame(updateCount);
                            } else {
                                countElement.textContent = countText;
                            }
                        };
                        
                        updateCount();
                    }
                }
                
                // Add card animation
                card.classList.add('achievement-animate');
                achievementObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.5
    });

    achievementCards.forEach(card => {
        achievementObserver.observe(card);
    });

    // Facility cards image hover effect
    const facilityCards = document.querySelectorAll('.facility-card');
    facilityCards.forEach(card => {
        const image = card.querySelector('.facility-image img');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
                image.style.filter = 'brightness(1.1)';
            }
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
                image.style.filter = 'brightness(1)';
            }
            this.style.transform = 'translateY(0)';
        });
    });

    // Mission and Vision cards parallax effect
    const missionVisionCards = document.querySelectorAll('.mission-card, .vision-card');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        missionVisionCards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardTop = cardRect.top + scrolled;
            const cardHeight = cardRect.height;
            const windowHeight = window.innerHeight;
            
            // Only apply parallax when card is in viewport
            if (cardRect.top < windowHeight && cardRect.bottom > 0) {
                const parallaxSpeed = 0.05;
                const yPos = -(scrolled - cardTop) * parallaxSpeed;
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    // Interactive story content
    const storyContent = document.querySelector('.story-content');
    const storyVisual = document.querySelector('.story-visual');
    
    if (storyContent && storyVisual) {
        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('story-animate');
                }
            });
        }, {
            threshold: 0.3
        });
        
        storyObserver.observe(storyContent);
        storyObserver.observe(storyVisual);
    }

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Ripple effect for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // CTA section interaction
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Value icons rotation on hover
    const valueIcons = document.querySelectorAll('.value-icon i');
    valueIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.6s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // Progressive loading animation for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Facilities grid animation
    const facilityGrid = document.querySelector('.facilities-grid');
    if (facilityGrid) {
        const facilityGridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('facilities-animate');
                    
                    // Animate each facility card with delay
                    const facilityCards = entry.target.querySelectorAll('.facility-card');
                    facilityCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('facility-slide-up');
                        }, index * 200);
                    });
                }
            });
        }, {
            threshold: 0.3
        });
        
        facilityGridObserver.observe(facilityGrid);
    }

    // Interactive background elements
    const heroSection = document.querySelector('.about-hero');
    if (heroSection) {
        // Add floating particles effect
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heroSection.appendChild(particle);
        }
    }

    // Static subtitle (removed typewriter effect)
    const heroSubtitle = document.querySelector('.about-hero .subtitle');
    if (heroSubtitle) {
        // Ensure the subtitle is fully visible with no cursor
        heroSubtitle.style.borderRight = 'none';
        
        // Make sure the content is properly displayed
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.visibility = 'visible';
    }

    // Achievement cards tilt effect
    achievementCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Hide loader when page is loaded
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 500);
        }
    });

    // Dynamic gradient animation for glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            this.style.setProperty('--mouse-x', xPercent);
            this.style.setProperty('--mouse-y', yPercent);
        });
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    const progressFill = progressBar.querySelector('.progress-fill');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        
        progressFill.style.width = progress + '%';
        
        // Show/hide progress bar
        if (scrolled > 100) {
            progressBar.classList.add('visible');
        } else {
            progressBar.classList.remove('visible');
        }
    });
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === 'index.html' && linkHref === '/') || 
        (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('active');
    }
});