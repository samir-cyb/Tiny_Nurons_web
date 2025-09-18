document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projectsData = {
        completed: [
            {
                id: 1,
                title: "Energy Meter Reading Project",
                category: "Computer Vision AI",
                completionDate: "June 2025",
                description: "A hybrid deep learning pipeline was developed using YOLOv11s for region detection and TrOCR for optical character recognition (OCR) to automatically extract readings from analog energy meter images. The system was integrated into a web-based interface to enable real-time prediction and user-friendly interaction.",
                highlights: [
                    "Can automate energy meter reading in both residential and industrial settings,reducing reliance on manual inspection and minimizing human error.",
                    " Supports remote monitoring and digitization of utility infrastructure, contributing to the development of smart utility management systems.",
                    "Enables utility providers to streamline billing, improve operational efficiency,and offer real-time usage insights to consumers."
                ],
                //icon: "fa-microscope"
                icon: "fas fa-eye"
            },
            {
                id: 2,
                title: "User Independent Adaptive Hybrid Model for Automated Wheelchair",
                category: "Medical Sector",
                completionDate: "May 2025",
                description: "This project introduced a hybrid deep learning framework with few-shot learning to control a smart wheelchair using sEMG and IMU signals. The adaptive hybrid model processed multimodal biomedical signals and learned personalized control patterns, achieving robust performance even with limited training data.",
                highlights: [
                    "Empowered mobility-impaired users to operate a wheelchair through personalized gestures, enabling greater independence",
                    "Integrated into smart assistive devices that adapted to individual user patterns with minimal data requirements.",
                    "Supported personalized rehabilitation robotics",
                ],
                icon: "ffas fa-microchip"
            },
            {
                id: 3,
                title: "Medical Device Reading Project",
                category: "Health Care",
                completionDate: "July 2025",
                description: "An AI-powered deep learning pipeline was designed to automatically capture and interpret readings from analog medical device displays. The system combined YOLOv11s for precise region detection with TrOCR for optical character recognition (OCR), ensuring accurate data extraction. A web-based interface provided seamless real-time interaction, enabling healthcare professionals to access readings quickly and efficiently.",
                highlights: [
                    "Automated medical device reading in hospitals and clinics, **reducing** manual workload and minimizing human error.",
                    "Facilitated remote monitoring and digitization of patient data, **supporting** the advancement of smart healthcare systems.",
                    "Assisted healthcare providers in improving efficiency, **enhancing** patient safety, and enabling timely medical interventions.",
                ],
                icon: "fas fa-ruler-combined"
            },
            {
                id: 4,
                title: "Lightweight Hybrid Model for Robotic Arm Control",
                category: "Hardware AI",
                completionDate: "May 2022",
                description: "This project developed a lightweight hybrid deep learning model for controlling a robotic arm using multimodal input signals. The system leveraged a 1D convolutional pipeline with an attention mechanism, enabling low-latency gesture recognition on TinyML devices. To enhance portability and responsiveness, the model incorporated ESP-NOW communication, providing fast, wireless, and low-power data transmission between controllers and the robotic arm.",
                highlights: [
                    "Enabled precise and responsive robotic arm control in assistive technologies and rehabilitation systems.",
                    "Supported low-latency communication in industrial robotics where wired connections are impractical.",
                    "Provided lightweight, embedded solutions for portable and battery-powered robotic systems",
                    "Expanded accessibility of robotic control systems in education, healthcare, and smart manufacturing"
                ],
                icon: "fas fa-hand-point-up"
            }
        ],
        ongoing: [
            {
                id: 6,
                title: "AI Drug Discovery",
                category: "Pharmaceutical AI",
                progress: "Phase 2 Testing",
                description: "Developing generative AI models to accelerate pharmaceutical research. The system will predict molecular interactions and suggest promising drug candidates.",
                highlights: [
                    "Identified 15 promising drug candidates",
                    "Reduced discovery time by 60%",
                    "Partnership with major pharmaceutical company",
                    "Clinical trials planned for Q4 2023"
                ],
                icon: "fa-pills"
            },
            {
                id: 7,
                title: "Robot-Human Collaboration",
                category: "Robotics",
                progress: "Prototype Development",
                description: "Creating adaptive AI systems that enable seamless collaboration between humans and robots in manufacturing environments. Focus on intuitive interfaces and safety protocols.",
                highlights: [
                    "Intuitive gesture-based interface developed",
                    "Safety protocols certified by regulatory body",
                    "Pilot program with automotive manufacturer",
                    "3 research papers submitted"
                ],
                icon: "fa-robot"
            },
            {
                id: 8,
                title: "Emotion Recognition",
                category: "Affective Computing",
                progress: "Data Collection Phase",
                description: "Building multi-modal systems that understand human emotions through voice, facial expressions, and physiological signals. Applications in mental health and education.",
                highlights: [
                    "Multi-modal approach increases accuracy by 35%",
                    "Partnership with mental health organizations",
                    "Ethical framework developed for deployment",
                    "Dataset of 10,000+ annotated samples collected"
                ],
                icon: "fa-smile"
            }
        ],
        upcoming: [
            {
                id: 9,
                title: "AI Ethics Framework",
                category: "Responsible AI",
                stage: "Planning Phase",
                description: "Developing tools to detect and mitigate bias in AI systems across different domains. Includes fairness metrics and explainability dashboards.",
                highlights: [
                    "Comprehensive bias detection toolkit",
                    "Explainable AI dashboards",
                    "Industry partnerships being established",
                    "Grant funding secured"
                ],
                icon: "fa-balance-scale"
            },
            {
                id: 10,
                title: "Space Exploration AI",
                category: "Space Tech",
                stage: "Concept Development",
                description: "Creating autonomous systems for planetary exploration that can make independent decisions while navigating unknown environments with limited communication.",
                highlights: [
                    "Autonomous decision-making algorithms",
                    "Designed for limited communication environments",
                    "Partnership with space research organization",
                    "Simulation environment developed"
                ],
                icon: "fa-rocket"
            },
            {
                id: 11,
                title: "Personalized Education AI",
                category: "EdTech",
                stage: "Research Phase",
                description: "Building adaptive learning systems that personalize educational content based on individual student needs, learning styles, and progress.",
                highlights: [
                    "Adaptive learning algorithms",
                    "Multi-modal student assessment",
                    "Pilot program with 3 schools",
                    "Privacy-first design approach"
                ],
                icon: "fa-graduation-cap"
            },
            {
                id: 12,
                title: "Sustainable Agriculture AI",
                category: "AgriTech",
                stage: "Feasibility Study",
                description: "Developing AI systems to optimize crop yields, reduce resource consumption, and predict pest outbreaks for sustainable agriculture practices.",
                highlights: [
                    "Yield optimization algorithms",
                    "Resource consumption reduction targets",
                    "Partnerships with agricultural organizations",
                    "Field testing planned for next growing season"
                ],
                icon: "fa-leaf"
            },
            {
                id: 13,
                title: "AI-Powered Healthcare Access",
                category: "Health Equity",
                stage: "Grant Proposal",
                description: "Creating AI tools to improve healthcare access in underserved communities through telemedicine, diagnostic support, and resource allocation optimization.",
                highlights: [
                    "Focus on underserved communities",
                    "Telemedicine integration",
                    "Diagnostic support tools",
                    "Resource allocation algorithms"
                ],
                icon: "fa-heartbeat"
            }
        ]
    };

    // Initialize projects
    function initProjects() {
        // Add completed projects
        const completedList = document.querySelector('.completed-projects .projects-list');
        projectsData.completed.forEach(project => {
            completedList.appendChild(createProjectListItem(project, 'completed'));
        });
        
        // Add ongoing projects
        const ongoingList = document.querySelector('.ongoing-projects .projects-list');
        projectsData.ongoing.forEach(project => {
            ongoingList.appendChild(createProjectListItem(project, 'ongoing'));
        });
        
        // Add upcoming projects
        const upcomingList = document.querySelector('.upcoming-projects .projects-list');
        projectsData.upcoming.forEach(project => {
            upcomingList.appendChild(createProjectListItem(project, 'upcoming'));
        });
        
        // Set first project as active in each section
        if (projectsData.completed.length > 0) {
            showProjectDetails(projectsData.completed[0].id, 'completed');
            document.querySelector('.completed-projects .project-list-item').classList.add('active');
        }
        
        if (projectsData.ongoing.length > 0) {
            showProjectDetails(projectsData.ongoing[0].id, 'ongoing');
            document.querySelector('.ongoing-projects .project-list-item').classList.add('active');
        }
        
        if (projectsData.upcoming.length > 0) {
            showProjectDetails(projectsData.upcoming[0].id, 'upcoming');
            document.querySelector('.upcoming-projects .project-list-item').classList.add('active');
        }
    }
    
    // Create project list item
    function createProjectListItem(project, type) {
        const item = document.createElement('div');
        item.className = 'project-list-item';
        item.dataset.projectId = project.id;
        item.dataset.projectType = type;
        
        item.innerHTML = `
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>
            <div class="project-info">
                <h4>${project.title}</h4>
                <p>${project.category}</p>
            </div>
        `;
        
        return item;
    }
    
    // Show project details
    function showProjectDetails(projectId, type) {
        const project = projectsData[type].find(p => p.id == projectId);
        
        if (project) {
            if (type === 'completed') {
                document.getElementById('completed-detail-title').textContent = project.title;
                document.getElementById('completed-detail-date').textContent = project.completionDate;
                document.getElementById('completed-detail-category').textContent = project.category;
                document.getElementById('completed-detail-description').textContent = project.description;
                
                const highlightsContainer = document.getElementById('completed-detail-highlights');
                highlightsContainer.innerHTML = '';
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    highlightsContainer.appendChild(li);
                });
            }
            else if (type === 'ongoing') {
                document.getElementById('ongoing-detail-title').textContent = project.title;
                document.getElementById('ongoing-detail-progress').textContent = project.progress;
                document.getElementById('ongoing-detail-category').textContent = project.category;
                document.getElementById('ongoing-detail-description').textContent = project.description;
                
                const highlightsContainer = document.getElementById('ongoing-detail-highlights');
                highlightsContainer.innerHTML = '';
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    highlightsContainer.appendChild(li);
                });
            }
            else if (type === 'upcoming') {
                document.getElementById('upcoming-detail-title').textContent = project.title;
                document.getElementById('upcoming-detail-stage').textContent = project.stage;
                document.getElementById('upcoming-detail-category').textContent = project.category;
                document.getElementById('upcoming-detail-description').textContent = project.description;
                
                const highlightsContainer = document.getElementById('upcoming-detail-highlights');
                highlightsContainer.innerHTML = '';
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    highlightsContainer.appendChild(li);
                });
                
                // Store current project ID for notification
                document.querySelector('.upcoming-projects .notify-btn').setAttribute('data-project-id', project.id);
            }
        }
    }
    
    // Show notify modal
    function showNotifyModal() {
        const modal = document.querySelector('.notify-modal');
        const projectId = document.querySelector('.upcoming-projects .notify-btn').getAttribute('data-project-id');
        const project = projectsData.upcoming.find(p => p.id == projectId);
        
        if (project) {
            document.getElementById('notify-project-title').textContent = project.title;
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
        const projectId = document.querySelector('.upcoming-projects .notify-btn').getAttribute('data-project-id');
        const project = projectsData.upcoming.find(p => p.id == projectId);
        
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
        console.log('Notification request:', { name, email, project: project.title });
        
        // Show success message
        alert(`Thank you, ${name}! We'll notify you about "${project.title}"`);
        
        // Close modal and reset form
        closeNotifyModal();
        e.target.reset();
    }
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Highlight current page in navigation
    function highlightCurrentPage() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Remove 'active' class first
            link.classList.remove('active');
            
            // Check if current path includes the link path
            if (currentPath.includes(linkPath) || 
                (linkPath === 'index.html' && currentPath.endsWith('/')) ||
                (linkPath === 'projects.html' && currentPath.includes('projects'))) {
                link.classList.add('active');
            }
        });
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Project list item clicks
        document.querySelectorAll('.project-list-item').forEach(item => {
            item.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project-id');
                const projectType = this.getAttribute('data-project-type');
                
                // Remove active class from all items in this section
                const parentSection = this.closest('.projects-section');
                parentSection.querySelectorAll('.project-list-item').forEach(i => {
                    i.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Show project details
                showProjectDetails(projectId, projectType);
            });
        });
        
        // Notify button click
        document.querySelector('.upcoming-projects .notify-btn').addEventListener('click', showNotifyModal);
        
        // Close notify modal
        document.querySelector('.notify-modal-close').addEventListener('click', closeNotifyModal);
        document.querySelector('.notify-modal-overlay').addEventListener('click', closeNotifyModal);
        
        // Notify form submission
        document.querySelector('.notify-form').addEventListener('submit', handleNotifySubmit);
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.notify-modal.active')) {
                closeNotifyModal();
            }
        });
    }
    
    // Initialize everything
    function initEverything() {
        highlightCurrentPage();
        initProjects();
        setupEventListeners();
    }
    
    // Call the initialization
    initEverything();
});