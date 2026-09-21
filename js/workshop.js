document.addEventListener('DOMContentLoaded', function() {
    // Workshop data
    const workshopsData = {
        1: {
            type: "seminar",
            title: "IEEE Publications and Benefits & How to Do Research",
            date: "August 11 , 2025",
            time: "9:00 PM",
            location: "Online",
            audience: "Researchers, Medical Professionals",
            description: "On August 11, 2025, the IEEE ULAB Student Branch hosted a webinar titled 'IEEE Publications and Benefits & How to Do Research.' The session provided a comprehensive guide to the research and publication process, beginning with strategies for generating research ideas—moving from initial hypothesis through literature review to formal idea generation. It then covered how to effectively convert a research idea into a structured study, followed by guidance on selecting an appropriate publication venue, including the decision between conference papers and journals. The webinar also detailed the process of writing a paper from introduction to conclusion, offered advice on identifying suitable and legitimate conferences or journals, outlined typical timelines after article submission, and explained the steps to take following an article acceptance, including handling updates and revisions.",
            highlights: [
                "Strategies for generating and shaping research ideas.",
                "Step-by-step process of writing a paper from introduction to conclusion.",
                "Guidance on choosing the right publication venue (conference vs. journal).",
                "Insights into submission timelines, acceptance procedures, and revisions."
            ],
            speakers: [
                {
                    name: "Fazlay Rabbi",
                    role: "Lead Researcher, Tiny Neurons Research Group",
                    image: "images/rabbi vai.jpg"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Presentation Slides",
                    icon: "file-powerpoint",
                    link: "https://www.canva.com/design/DAGvlGm5rfc/15H-pM2al5xnDLx10uvlLA/edit?utm_content=DAGvlGm5rfc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                }
            ],
            gallery: [
                "images/gallery/s1c.jpeg",
            ]
        },
        3: {
            type: "seminar",
            title: "Bridging AI and EEE",
            date: "Febuary 25, 2025",
            time: "12:30 PM",
            location: "Stamford University Bangladesh",
            audience: "EEE Students",
            description: "On February 25, 2025, the IEEE Stamford University Bangladesh Student Branch and the Department of EEE at Stamford University Bangladesh co-organized a technical seminar titled 'Bridging AI and EEE: Intelligent Solutions for Modern Engineering.' The event, held as a hands-on training session at the Department of EEE, focused on the intersection of Artificial Intelligence, Machine Learning, and Data Science with Electrical and Electronics Engineering. Participants explored practical applications of ML in engineering, covering areas such as predictive maintenance and intelligent control systems. The discussions emphasized how EEE students can integrate AI-driven solutions to address real-world challenges, thereby enhancing automation, optimization, and decision-making processes in modern engineering.",
            highlights: [
                "Hands-on training on integrating AI, ML, and Data Science with EEE.",
                "Practical applications in predictive maintenance and intelligent control systems.",
                "Focus on solving real-world engineering challenges with AI-driven solutions.",
                "Emphasis on automation, optimization, and smarter decision-making in EEE."
            ],
            speakers: [
                {
                    name: "Fazlay Rabbi",
                    role: "Lead Researcher, Tiny Neurons Research Group",
                    image: "images/rabbi vai.jpg"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Lecture Slides",
                    icon: "file-powerpoint",
                    link: "https://www.canva.com/design/DAGf9I_o0ck/N3ty4n204-aGFHCCZ2Rj_g/edit?utm_content=DAGf9I_o0ck&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                }
            ],

            gallery: [
                "images/gallery/s2c.jpeg",
                "images/gallery/s2cl1.jpeg", 
                "images/gallery/s2cl2.jpeg",
                "images/gallery/s2cl3.jpeg",
                "images/gallery/s2cl4.jpeg",
                "images/gallery/s2cl5.jpeg"
            ]
        },
        2: {
            type: "seminar",
            title: "Mastering Git",
            date: "August 16, 2025",
            time: "8:00 PM",
            location: "Online",
            audience: "Students of ULAB",
            description: "The IEEE ULAB Student Branch successfully hosted “Mastering Git” on 16th August 2025, conducted by Ehasan Ahmed (Ngaze), Junior Software Engineer. The webinar covered the fundamentals of Git and GitHub with live demonstrations, practical commands, and best practices like Conventional Commits. It was an engaging session designed to strengthen participants’ understanding of version control systems.",
            highlights: [
                "Covered essential Git and GitHub concepts with live demos.",
                "Introduced practical commands and workflows for version control.",
                "Emphasized best practices, including Conventional Commits.",
                "Strengthened participants’ skills in collaborative software development."
            ],
            speakers: [
                {
                    name: "Mr. Ehasan Ahmed",
                    role: "Research Assistants, Tiny Neurons Research Group",
                    image: "images/Ehasan.png"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Workshop Slides",
                    icon: "file-powerpoint"
                }
            ],


            gallery: [
                "images/gallery/s3c1.jpg",
                "images/gallery/s3c2.jpg", 
                "images/gallery/s3c2.jpg",
                "images/gallery/s3c3.jpg",
                "images/gallery/s3c4.jpg",
                "images/gallery/s3c5.jpg",
                "images/gallery/s3c6.jpg",
                "images/gallery/s3c7.jpg"
            ]


        }
    };

    // Upcoming Events Data
    const upcomingEventsData = {
        1: {
            type: "workshop",
            title: "AI in Healthcare Workshop",
            date: "June 15, 2023",
            time: "2:00 PM - 5:00 PM",
            location: "Online",
            description: "Join us for an interactive workshop exploring the latest advancements in AI applications for healthcare. This session will cover diagnostic tools, treatment planning algorithms, and ethical considerations in medical AI.",
            highlights: [
                "Current AI applications in medical diagnostics",
                "Ethical frameworks for healthcare AI",
                "Hands-on with medical imaging AI tools",
                "Regulatory considerations"
            ]
        },
        2: {
            type: "seminar",
            title: "Quantum Computing Seminar",
            date: "June 22, 2023",
            time: "10:00 AM - 12:00 PM",
            location: "Campus Hall",
            description: "Discover the fundamentals of quantum computing and its potential impact on machine learning and cryptography. This seminar will include live demonstrations of quantum algorithms.",
            highlights: [
                "Quantum computing basics",
                "QML algorithms overview",
                "Live quantum computing demo",
                "Future applications discussion"
            ]
        },
        3: {
            type: "workshop",
            title: "Machine Learning Bootcamp",
            date: "June 30, 2023",
            time: "9:00 AM - 4:00 PM",
            location: "Lab 204",
            description: "A full-day intensive bootcamp covering machine learning fundamentals, practical implementation, and real-world case studies. Perfect for beginners and intermediate practitioners.",
            highlights: [
                "ML fundamentals review",
                "Hands-on coding sessions",
                "Real-world project implementation",
                "Best practices and optimization"
            ]
        }
    };

    // Show workshop modal
    function showWorkshopModal(workshopId) {
        const modal = document.getElementById('workshop-modal');
        const workshop = workshopsData[workshopId];
        
        if (workshop) {
            // Set basic info
            document.getElementById('modal-badge').textContent = workshop.type.charAt(0).toUpperCase() + workshop.type.slice(1);
            document.getElementById('modal-badge').setAttribute('data-type', workshop.type);
            document.getElementById('modal-date').textContent = workshop.date;
            document.getElementById('modal-title').textContent = workshop.title;
            document.getElementById('modal-time').textContent = workshop.time;
            document.getElementById('modal-location').textContent = workshop.location;
            document.getElementById('modal-audience').textContent = workshop.audience;
            document.getElementById('modal-description').textContent = workshop.description;
            
            // Set highlights
            const highlightsContainer = document.getElementById('modal-highlights');
            highlightsContainer.innerHTML = '';
            workshop.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsContainer.appendChild(li);
            });
            
            // Set speakers
            const speakersContainer = document.getElementById('modal-speakers');
            speakersContainer.innerHTML = '';
            workshop.speakers.forEach(speaker => {
                const speakerCard = document.createElement('div');
                speakerCard.className = 'speaker-card';
                speakerCard.innerHTML = `
                    <div class="speaker-image">
                        <img src="${speaker.image}" alt="${speaker.name}">
                    </div>
                    <div class="speaker-info">
                        <h4>${speaker.name}</h4>
                        <p>${speaker.role}</p>
                    </div>
                `;
                speakersContainer.appendChild(speakerCard);
            });
            
            // Set resources
            const resourcesContainer = document.getElementById('modal-resources');
            resourcesContainer.innerHTML = '';
            workshop.resources.forEach(resource => {
                const resourceItem = document.createElement(resource.link ? 'a' : 'div');
                resourceItem.className = 'resource-item';
                
                if (resource.link) {
                    resourceItem.href = resource.link;
                    resourceItem.target = '_blank';
                    resourceItem.rel = 'noopener noreferrer';
                }
                
                resourceItem.innerHTML = `
                    <div class="resource-icon">
                        <i class="fas fa-${resource.icon}"></i>
                    </div>
                    <p>${resource.title}</p>`;
                resourcesContainer.appendChild(resourceItem);
            });
            
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }
    
    // Close workshop modal
    function closeWorkshopModal() {
        const modal = document.getElementById('workshop-modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Show gallery modal
    function showGalleryModal(workshopId) {
        const modal = document.getElementById('gallery-modal');
        const workshop = workshopsData[workshopId];
        
        if (workshop && workshop.gallery) {
            // Set gallery title
            document.getElementById('gallery-title').textContent = workshop.title + ' - Gallery';
            
            // Clear previous images
            const galleryGrid = document.getElementById('gallery-grid');
            galleryGrid.innerHTML = '';
            
            // Add images to gallery
            workshop.gallery.forEach(imageSrc => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `
                    <img src="${imageSrc}" alt="Event photo" loading="lazy">
                    <div class="gallery-item-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                `;
                galleryGrid.appendChild(galleryItem);
            });
            
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }

    // Close gallery modal
    function closeGalleryModal() {
        const modal = document.getElementById('gallery-modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Highlight current page in navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && linkHref === '/') || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'workshop.html' && linkHref.includes('workshop'))) {
                link.classList.add('active');
            }
        });
    }

    // Initialize upcoming events
    function initUpcomingEvents() {
        // Set first event as active by default
        showEventDetails(1);
        
        // Add event listeners to list items
        document.querySelectorAll('.event-list-item').forEach(item => {
            item.addEventListener('click', function() {
                const eventId = this.getAttribute('data-event');
                
                // Remove active class from all items
                document.querySelectorAll('.event-list-item').forEach(i => {
                    i.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Show event details
                showEventDetails(eventId);
            });
        });
        
        // Add event listener to notify button
        document.querySelector('.notify-btn').addEventListener('click', function() {
            showNotifyModal();
        });
    }

    // Show event details in right panel
    function showEventDetails(eventId) {
        const event = upcomingEventsData[eventId];
        
        if (event) {
            document.getElementById('detail-title').textContent = event.title;
            document.getElementById('detail-date').textContent = event.date;
            document.getElementById('detail-time').textContent = event.time;
            document.getElementById('detail-location').textContent = event.location;
            document.getElementById('detail-description').textContent = event.description;
            
            // Update event type badge
            const badge = document.querySelector('.event-type-badge');
            badge.textContent = event.type.charAt(0).toUpperCase() + event.type.slice(1);
            
            // Update highlights
            const highlightsContainer = document.getElementById('detail-highlights');
            highlightsContainer.innerHTML = '';
            event.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsContainer.appendChild(li);
            });
            
            // Store current event ID for notification
            document.querySelector('.notify-btn').setAttribute('data-event', eventId);
        }
    }

    // Show notify me modal
    function showNotifyModal() {
        const modal = document.querySelector('.notify-modal');
        const eventId = document.querySelector('.notify-btn').getAttribute('data-event');
        const event = upcomingEventsData[eventId];
        
        if (event) {
            document.getElementById('notify-event-title').textContent = event.title;
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }

    // Close notify modal
    function closeNotifyModal() {
        const modal = document.querySelector('.notify-modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Handle notify form submission
    function handleNotifySubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const eventId = document.querySelector('.notify-btn').getAttribute('data-event');
        const event = upcomingEventsData[eventId];
        
        // Simple validation
        if (!name || !email) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send this data to your server
        // For now, we'll just show a confirmation and close the modal
        console.log('Notification request:', { name, email, event: event.title });
        
        // Show success message
        alert(`Thank you, ${name}! We'll notify you about "${event.title}"`);
        
        // Close modal and reset form
        closeNotifyModal();
        e.target.reset();
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Event listeners for view buttons
    function setupEventListeners() {
        // Workshop modal event listeners
        document.querySelectorAll('.view-workshop').forEach(button => {
            button.addEventListener('click', function() {
                const workshopId = this.getAttribute('data-workshop');
                showWorkshopModal(workshopId);
            });
        });
        
        // Close modal when clicking close button or overlay
        document.querySelector('.modal-close').addEventListener('click', closeWorkshopModal);
        document.querySelector('.modal-overlay').addEventListener('click', closeWorkshopModal);

        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeWorkshopModal();
            }
        });
        
        // New listeners for upcoming events
        document.querySelector('.notify-modal-close').addEventListener('click', closeNotifyModal);
        document.querySelector('.notify-modal-overlay').addEventListener('click', closeNotifyModal);
        document.querySelector('.notify-form').addEventListener('submit', handleNotifySubmit);
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.notify-modal.active')) {
                closeNotifyModal();
            }
        });

        // Gallery button event listener
        document.addEventListener('click', function(e) {
            if (e.target.closest('.modal-footer .btn') && 
                document.getElementById('workshop-modal').classList.contains('active')) {
                
                // Get the workshop ID from the currently open modal
                const modalTitle = document.getElementById('modal-title').textContent;
                let workshopId = null;
                
                // Find which workshop matches the current modal title
                for (const id in workshopsData) {
                    if (workshopsData[id].title === modalTitle) {
                        workshopId = id;
                        break;
                    }
                }
                
                if (workshopId) {
                    showGalleryModal(workshopId);
                }
            }
        });

        // Gallery modal close events
        document.querySelector('.gallery-modal-close').addEventListener('click', closeGalleryModal);
        document.querySelector('.gallery-modal-overlay').addEventListener('click', closeGalleryModal);

        // Close gallery with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('gallery-modal').classList.contains('active')) {
                closeGalleryModal();
            }
        });
    }

    // Initialize Parallax effect
    function initParallax() {
        if (window.Parallax && document.querySelector('.hero-bg-parallax')) {
            new Parallax(document.querySelector('.hero-bg-parallax'));
        }
    }

    // Initialize everything
    function initEverything() {
        highlightCurrentPage();
        initUpcomingEvents();
        setupEventListeners();
        initParallax();
    }

    // Call the initialization
    initEverything();
});