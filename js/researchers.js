document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

    // Researcher data
    const researchers = {
        1: {
            name: "Fazlay Rabby",
            image: "images/Fazlay_Rabby.png",
            expertise: "Iot | Tiny ML | Computer Vision",
            about: "Dr. Smith leads our AI research initiatives with over 15 years of experience in machine learning algorithms. His work focuses on developing novel approaches to deep learning that improve model interpretability.",
            projects: [
                "Interpretable AI Models for Healthcare",
                "Self-Learning Neural Networks",
                "Ethical AI Framework Development"
            ],
            publications: [
                "Smith, J. et al. (2022). 'Interpretable Deep Learning Models'. Nature AI.",
                "Smith, J. & Chen, S. (2021). 'Ethical Considerations in AI'. AI Ethics Journal.",
                "Smith, J. (2020). 'Advances in Neural Networks'. ML Quarterly."
            ],
            education: [
                "BSc in EEE, ULAB",
            ]
        },
        2: {
            name: "Dr. Sarah Chen",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            expertise: "Associate Professor of Neural Networks",
            about: "Dr. Chen specializes in neural network architectures and their applications in natural language processing. Her current research explores transformer models for low-resource languages.",
            projects: [
                "Multilingual NLP for Indigenous Languages",
                "Efficient Transformer Architectures",
                "AI for Language Preservation"
            ],
            publications: [
                "Chen, S. (2023). 'Transformers for Low-Resource Languages'. ACL.",
                "Chen, S. & Lee, M. (2022). 'Neural Approaches to Syntax'. Computational Linguistics.",
                "Chen, S. et al. (2021). 'Cross-Lingual Transfer Learning'. NAACL."
            ],
            education: [
                "PhD in Computational Linguistics, Carnegie Mellon",
                "MSc in Computer Science, University of Toronto",
                "BA in Linguistics, Harvard"
            ]
        },
        3: {
            name: "Dr. Michael Johnson",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            expertise: "Assistant Professor of Computer Vision",
            about: "Dr. Johnson's research focuses on computer vision applications in medical imaging and autonomous systems. He develops novel techniques for image segmentation and 3D reconstruction.",
            projects: [
                "AI-Assisted Medical Diagnosis",
                "Real-Time 3D Scene Understanding",
                "Robust Vision for Autonomous Vehicles"
            ],
            publications: [
                "Johnson, M. et al. (2023). 'Deep Learning for Medical Imaging'. Medical AI Journal.",
                "Johnson, M. (2022). '3D Reconstruction from Single Images'. CVPR.",
                "Johnson, M. & Patel, R. (2021). 'Vision for Autonomous Systems'. Robotics Today."
            ],
            education: [
                "PhD in Computer Vision, ETH Zurich",
                "MSc in Robotics, University of Pennsylvania",
                "BSc in Electrical Engineering, Georgia Tech"
            ]
        },
        4: {
            name: "Emily Rodriguez",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            expertise: "PhD Candidate - Natural Language Processing",
            about: "Emily's doctoral research investigates bias mitigation in large language models. She develops techniques to identify and reduce harmful biases in model outputs.",
            projects: [
                "Bias Detection in Language Models",
                "Fairness Metrics for NLP",
                "Debiasing Techniques Evaluation"
            ],
            publications: [
                "Rodriguez, E. & Smith, J. (2023). 'Measuring Bias in GPT Models'. ACL.",
                "Rodriguez, E. (2022). 'Approaches to Model Debiasing'. EMNLP.",
                "Rodriguez, E. et al. (2021). 'Bias in Pretrained Embeddings'. NAACL."
            ],
            education: [
                "PhD Candidate in Computer Science (Current)",
                "MSc in AI, University of Washington",
                "BA in Computer Science, UC Berkeley"
            ]
        },
        5: {
            name: "David Kim",
            image: "https://randomuser.me/api/portraits/men/28.jpg",
            expertise: "MSc Student - Robotics and AI",
            about: "David's research combines reinforcement learning with robotic control systems. He focuses on developing adaptive learning algorithms for dynamic environments.",
            projects: [
                "Reinforcement Learning for Robotic Manipulation",
                "Sim-to-Real Transfer Learning",
                "Multi-Agent Robotic Systems"
            ],
            publications: [
                "Kim, D. & Johnson, M. (2023). 'RL for Robotic Control'. ICRA.",
                "Kim, D. (2022). 'Adaptive Learning in Robotics'. Robotics and Automation Letters."
            ],
            education: [
                "MSc in Robotics (Current)",
                "BSc in Mechanical Engineering, MIT"
            ]
        },
        6: {
            name: "Priya Patel",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            expertise: "PhD Candidate - AI Ethics",
            about: "Priya's research examines the societal impacts of AI systems, with a focus on governance frameworks and policy recommendations for responsible AI development.",
            projects: [
                "AI Governance Models",
                "Ethical Impact Assessments",
                "Public Perception of AI"
            ],
            publications: [
                "Patel, P. & Chen, S. (2023). 'Governance for AI Systems'. AI & Society.",
                "Patel, P. (2022). 'Ethical Frameworks in Practice'. Ethics of Technology Journal.",
                "Patel, P. et al. (2021). 'Public Trust in AI'. Technology Policy Review."
            ],
            education: [
                "PhD Candidate in Ethics & Technology (Current)",
                "MA in Philosophy, Oxford",
                "BA in Political Science, Columbia"
            ]
        }
    };

    // Modal functionality
    const modal = document.getElementById('researcher-modal');
    const modalClose = document.querySelector('.modal-close');
    const viewProfileButtons = document.querySelectorAll('.view-profile');

    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function() {
            const researcherId = this.getAttribute('data-researcher');
            const researcher = researchers[researcherId];
            
            // Populate modal
            document.getElementById('modal-researcher-name').textContent = researcher.name;
            document.getElementById('modal-researcher-image').src = researcher.image;
            document.getElementById('modal-researcher-image').alt = researcher.name;
            document.getElementById('modal-researcher-expertise').textContent = researcher.expertise;
            document.getElementById('modal-researcher-about').textContent = researcher.about;
            
            // Populate projects
            const projectsList = document.getElementById('modal-researcher-projects');
            projectsList.innerHTML = '';
            researcher.projects.forEach(project => {
                const li = document.createElement('li');
                li.textContent = project;
                projectsList.appendChild(li);
            });
            
            // Populate publications
            const publicationsList = document.getElementById('modal-researcher-publications');
            publicationsList.innerHTML = '';
            researcher.publications.forEach(pub => {
                const li = document.createElement('li');
                li.textContent = pub;
                publicationsList.appendChild(li);
            });
            
            // Populate education
            const educationList = document.getElementById('modal-researcher-education');
            educationList.innerHTML = '';
            researcher.education.forEach(edu => {
                const li = document.createElement('li');
                li.textContent = edu;
                educationList.appendChild(li);
            });
            
            // Show modal
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Mobile menu toggle (same as main.js)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
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

    // Hide loader when page is loaded
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }, 500);
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