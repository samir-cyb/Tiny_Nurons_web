document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('Nmby0hkvoQYVrKDZv'); //YOUR_PUBLIC_KEY replace
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
                title: "TinyML-Based Automated Wheelchair",
                category: "Hardware AI",
                progress: "Phase 2 Testing",
                description: "This project introduces a hybrid deep learning framework deployed on TinyML to control a smart wheelchair using sEMG and IMU signals, eliminating dependency on external computers. The lightweight model is optimized for embedded devices, enabling real-time processing directly on low-power microcontrollers. The approach ensures portability, low latency, and accessibility for daily use in diverse environments.",
                highlights: [
                    "Empowering mobility-impaired users to operate a wheelchair through personalized gestures without reliance on bulky computing devices",
                    "Integrating into compact, low-power assistive devices that adapt to individual user patterns with minimal data requirements.",
                    "Extending personalized rehabilitation robotics and smart mobility solutions to resource-constrained or portable settings."
                ],
                icon: "fas fa-cogs"
            },
            {
                id: 7,
                title: "Diabetic Condition Prediction and Monitoring System",
                category: "Health care AI",
                progress: "Prototype Development",
                description: "This project introduces a hybrid user-independent model for predicting and monitoring diabetic conditions. The model integrates advanced preprocessing and multimodal feature extraction with a hybrid architecture, ensuring accurate and user-independent predictions across diverse populations. To maximize accessibility, the system is planned for deployment on a smartwatch, enabling continuous and non-invasive monitoring directly from the user’s wrist without dependence on external devices.",
                highlights: [
                    "Providing continuous, non-invasive, and personalized monitoring of diabetic conditions through wearable technology.",
                    "Supporting early detection of abnormal patterns, enabling timely medical interventions.",
                    "Facilitating integration into medical and digital health platforms, expanding accessibility for remote and underserved populations.",
                    "Assisting healthcare providers in improving patient management, reducing complications, and enhancing overall treatment outcomes."
                ],
                icon: "fas fa-stethoscope"
            },
        ],
        upcoming: [
            {
                id: 9,
                title: "Colorectal Cancer Detection from Bowel Sounds",
                category: "Health care",
                stage: "Planning Phase",
                description: "This project introduces a novel deep learning pipeline for analyzing bowel sound signals to support early detection of colorectal cancer. Bowel sounds were captured using a custom-designed device specifically developed for accurate bowel sound acquisition. The pipeline applies advanced signal preprocessing and feature extraction techniques, followed by classification through a hybrid deep learning model. A web-based interface enables real-time analysis and user-friendly interaction.",
                highlights: [
                    "Offering a non-invasive, cost-effective, and accessible screening tool for colorectal cancer detection.",
                    "Enabling continuous health monitoring and early warning systems outside clinical environments.",
                    "Supporting integration into digital health and clinical platforms, enhancing access to cancer screening in remote and underserved regions.",
                    "Assisting healthcare providers in early diagnosis, lowering treatment costs, and improving patient survival outcomes."
                ],
                icon: "fa-heartbeat"
            },
            {
                id: 10,
                title: "Vehicle Type Classification from a Self-Collected Horn Sound Dataset",
                category: "Industrial AI",
                stage: "Concept Development",
                description: "This project introduces a deep learning pipeline for classifying vehicle types based on self-collected horn sounds. The system applies advanced preprocessing and feature extraction techniques to capture local, global, and spectrogram characteristics of horn signals. A hybrid dual-CNN model then performs robust classification, enabling accurate recognition across diverse vehicle categories.",
                highlights: [
                    "Enhancing intelligent transportation systems with acoustic-based vehicle detection.",
                    "Supporting traffic monitoring in low-visibility or camera-restricted environments.",
                    "Assisting smart city infrastructure in identifying and prioritizing emergency or heavy vehicles.",
                    "Enabling low-cost, sensor-based vehicle classification without relying solely on visual data."
                ],
                icon: "fas fa-gamepad"
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
            document.getElementById('notify-project').value = project.title;
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
            
            // Reset form and messages
            document.querySelector('.notify-form').style.display = 'block';
            document.getElementById('notify-success-message').style.display = 'none';
            document.getElementById('notify-error-message').style.display = 'none';
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
        
        const submitBtn = document.getElementById('notify-submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const successMessage = document.getElementById('notify-success-message');
        const errorMessage = document.getElementById('notify-error-message');
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message') || 'No additional message';
        const projectId = document.querySelector('.upcoming-projects .notify-btn').getAttribute('data-project-id');
        const project = projectsData.upcoming.find(p => p.id == projectId);
        
        // Simple validation
        if (!name || !email) {
            showErrorMessage(errorMessage, 'Please fill in all required fields');
            return;
        }
        
        if (!validateEmail(email)) {
            showErrorMessage(errorMessage, 'Please enter a valid email address');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        
        // Hide previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Prepare email data
        const emailData = {
            name: name,
            email: email,
            project: project.title,
            message: message,
            to_email: 'ratul.tnrg214@gmail.com' // Replace with YOUR_EMAIL@gmail.com
        };
        
        // Send email using EmailJS
        emailjs.send('service_m456ivu', 'template_e5y0zt8', emailData)  // Replace with YOUR_SERVICE_ID, YOUR_TEMPLATE_ID
            .then(function(response) {
                console.log('Email sent successfully:', response);
                
                // Show success message
                successMessage.style.display = 'block';
                e.target.style.display = 'none';
                
                // Reset form and close modal after 2 seconds
                setTimeout(() => {
                    closeNotifyModal();
                    e.target.reset();
                    e.target.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 2000);
                
            }, function(error) {
                console.error('Email sending failed:', error);
                showErrorMessage(errorMessage, 'Failed to send notification. Please try again.');
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'block';
                btnLoading.style.display = 'none';
            });
    }
    
    // Helper function to show error messages
    function showErrorMessage(errorElement, message) {
        errorElement.querySelector('p').textContent = message;
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000);
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