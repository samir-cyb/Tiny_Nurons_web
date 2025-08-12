document.addEventListener('DOMContentLoaded', function() {
    // Workshop data
    const workshopsData = {
        1: {
            type: "workshop",
            title: "AI in Healthcare – Innovation & Ethics",
            date: "May 15, 2023",
            time: "2:00 PM - 5:00 PM",
            location: "Online",
            audience: "Researchers, Medical Professionals",
            description: "Exploring the latest AI applications in healthcare while addressing ethical considerations and regulatory frameworks. This workshop featured case studies from leading hospitals and interactive discussions with domain experts.",
            highlights: [
                "Case studies from leading hospitals",
                "Ethical framework development",
                "Interactive Q&A with experts",
                "Regulatory compliance discussion"
            ],
            speakers: [
                {
                    name: "Dr. Sarah Chen",
                    role: "Chief AI Officer, Boston Medical",
                    image: "images/speakers/speaker1.jpg"
                },
                {
                    name: "Prof. James Wilson",
                    role: "Bioethics, Harvard University",
                    image: "images/speakers/speaker2.jpg"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Presentation Slides",
                    icon: "file-powerpoint"
                },
                {
                    type: "video",
                    title: "Full Recording",
                    icon: "video"
                }
            ]
        },
        2: {
            type: "seminar",
            title: "Quantum Machine Learning Fundamentals",
            date: "Mar 22, 2023",
            time: "10:00 AM - 12:30 PM",
            location: "Main Campus, Room 204",
            audience: "CS Students, Researchers",
            description: "Introduction to quantum computing principles and their applications in machine learning algorithms. The seminar included theoretical foundations and practical coding examples using Qiskit.",
            highlights: [
                "Quantum vs classical computing",
                "QML algorithm walkthroughs",
                "Hands-on coding session",
                "Future research directions"
            ],
            speakers: [
                {
                    name: "Dr. Elena Rodriguez",
                    role: "Quantum Computing Lab",
                    image: "images/speakers/speaker3.jpg"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Lecture Slides",
                    icon: "file-powerpoint"
                },
                {
                    type: "code",
                    title: "Example Code",
                    icon: "code"
                }
            ]
        },
        3: {
            type: "workshop",
            title: "Responsible AI Development",
            date: "Jan 10, 2023",
            time: "9:00 AM - 4:00 PM",
            location: "Innovation Center",
            audience: "Developers, Product Managers",
            description: "Practical approaches to developing AI systems with fairness, accountability, and transparency in mind. The workshop covered tools and frameworks for bias detection and model explainability.",
            highlights: [
                "Bias detection techniques",
                "Explainability tools",
                "Regulatory compliance",
                "Case study analysis"
            ],
            speakers: [
                {
                    name: "Dr. Priya Patel",
                    role: "AI Ethics Lead, TechCorp",
                    image: "images/speakers/speaker4.jpg"
                },
                {
                    name: "Prof. David Kim",
                    role: "Computer Science Dept.",
                    image: "images/speakers/speaker5.jpg"
                }
            ],
            resources: [
                {
                    type: "slides",
                    title: "Workshop Slides",
                    icon: "file-powerpoint"
                },
                {
                    type: "toolkit",
                    title: "Responsible AI Toolkit",
                    icon: "toolbox"
                }
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
                const resourceItem = document.createElement('div');
                resourceItem.className = 'resource-item';
                resourceItem.innerHTML = `
                    <div class="resource-icon">
                        <i class="fas fa-${resource.icon}"></i>
                    </div>
                    <p>${resource.title}</p>
                `;
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
    
    // Event listeners for view buttons
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

    // Initialize Parallax effect
    if (document.querySelector('.hero-bg-parallax')) {
        new Parallax(document.querySelector('.hero-bg-parallax'));
    }
});