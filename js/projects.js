document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projectsData = {
        completed: [
            {
                id: 1,
                title: "AI Medical Diagnostics",
                description: "Developed a deep learning system that detects early signs of diseases from medical imaging with 95% accuracy. The system integrates with existing hospital infrastructure and provides real-time analysis for faster diagnosis.",
                link: "#"
            },
            {
                id: 2,
                title: "Quantum ML Algorithms",
                description: "Created hybrid quantum-classical machine learning models that solve optimization problems 100x faster than classical approaches. This breakthrough has applications in logistics, finance, and materials science.",
                link: "#"
            },
            {
                id: 3,
                title: "Autonomous Drone Navigation",
                description: "Implemented computer vision algorithms enabling drones to navigate complex environments without GPS. The system uses SLAM techniques and neural networks for real-time obstacle avoidance.",
                link: "#"
            },
            {
                id: 4,
                title: "Climate Prediction Models",
                description: "Developed AI-powered climate models that improve prediction accuracy by 40%. These models help governments and organizations better plan for climate change impacts.",
                link: "#"
            },
            {
                id: 5,
                title: "Neuromorphic Chips",
                description: "Designed brain-inspired computing architectures that reduce energy consumption by 90% for edge AI applications. This technology enables AI to run on low-power devices.",
                link: "#"
            }
        ],
        upcoming: [
            {
                id: 6,
                title: "AI Drug Discovery",
                description: "Developing generative AI models to accelerate pharmaceutical research. The system will predict molecular interactions and suggest promising drug candidates.",
                link: "#"
            },
            {
                id: 7,
                title: "Robot-Human Collaboration",
                description: "Creating adaptive AI systems that enable seamless collaboration between humans and robots in manufacturing environments. Focus on intuitive interfaces and safety protocols.",
                link: "#"
            },
            {
                id: 8,
                title: "Emotion Recognition",
                description: "Building multi-modal systems that understand human emotions through voice, facial expressions, and physiological signals. Applications in mental health and education.",
                link: "#"
            },
            {
                id: 9,
                title: "AI Ethics Framework",
                description: "Developing tools to detect and mitigate bias in AI systems across different domains. Includes fairness metrics and explainability dashboards.",
                link: "#"
            },
            {
                id: 10,
                title: "Space Exploration AI",
                description: "Creating autonomous systems for planetary exploration that can make independent decisions while navigating unknown environments with limited communication.",
                link: "#"
            }
        ]
    };

    // Initialize projects
    function initProjects() {
        const completedTrack = document.querySelector('.completed-projects .projects-track');
        const upcomingTrack = document.querySelector('.upcoming-projects .projects-track');
        
        // Add completed projects
        projectsData.completed.forEach(project => {
            completedTrack.appendChild(createProjectCard(project));
        });
        
        // Add upcoming projects
        projectsData.upcoming.forEach(project => {
            upcomingTrack.appendChild(createProjectCard(project));
        });
    }
    
    // Create project card element
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.projectId = project.id;
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description.substring(0, 120)}...</p>
            <button class="btn btn-primary view-project" data-project-id="${project.id}">
                <span>View Details</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        `;
        
        return card;
    }
    
    // Show project modal
    function showProjectModal(projectId) {
        const modal = document.getElementById('project-modal');
        const projects = [...projectsData.completed, ...projectsData.upcoming];
        const project = projects.find(p => p.id == projectId);
        
        if (project) {
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-description').textContent = project.description;
            document.querySelector('.modal-footer .btn').href = project.link;
            
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }
    
    // Close project modal
    function closeProjectModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
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
    
    // Event listeners
    function setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-project') || e.target.closest('.view-project')) {
                const button = e.target.classList.contains('view-project') ? e.target : e.target.closest('.view-project');
                const projectId = button.dataset.projectId;
                showProjectModal(projectId);
            }
            
            if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
                closeProjectModal();
            }
            
            if (e.target.classList.contains('modal-overlay')) {
                closeProjectModal();
            }
        });
    }
    
    // Initialize everything
    initProjects();
    highlightCurrentPage();
    setupEventListeners();
});