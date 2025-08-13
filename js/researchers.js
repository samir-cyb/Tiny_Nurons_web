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
            about: "Fazlay Rabby leads our AI research initiatives with over 3 years of experience in machine learning algorithms.",
            publications: [
                "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Datasets (2025 9th International Conference on Electrical, Electronics, and Information Engineering).",
                "A Parameter-Efficient Deep Learning Model for Preeclampsia Prediction Using Diverse Datasets in Low-Resource Settings.(Qpain 2025)",
            ],
            education: [
                "BSc in Electrical and Electronic Engineering, University of Liberal Arts Bangladesh",
            ]
        },
        2: {
            name: "Md. Sajid Hasan",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            expertise: "Renewable Energy | Artificial Intelligence | Machine Learning | Semiconductors | Energy Management",
            about: "",
            publications: [
                "A. Jawad, Md. S. Hasan, Md. F. I. Faruqui, and N.-A.- Masood, “Small-scale floating photovoltaic systems in university campus: A pathway to achieving SDG 7 goals in Bangladesh,” Energy Conversion and Management, vol. 297, p. 117722, Dec. 2023, doi: 10.1016/j.enconman.2023.117722. [IF: 10.4, Q1]",
                "M. A. I. Rafi, Md. S. Hassan, I.-U. Rashid, M. M. Hasan, J. A. Chowdhury, M. R. Sohan, N. A. Jahan, and M. M. Hossain, “Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: a Comprehensive Case Study,” IEEE Access, vol. 13, pp. 52658–52682, 2025, doi: https://doi.org/10.1109/access.2025.3553636 [IF:3.4, Q1]",
                "Md. S. Hasan and A. Jawad, “Clean Hydrogen Production from Floating Photovoltaics: A Case Study in Dhanmondi Lake, Dhaka,” in 2023 10th IEEE International Conference on Power Systems (ICPS), pp. 1–6, Dec. 2023, doi: https://doi.org/10.1109/icps60393.2023.10428710."
            ],
            education: [
                "BSc in Electrical and Electronic Engineering, University of Liberal Arts Bangladesh",
            ]
        },
        3: {
            name: "Md. Hridoy Hossain",
            image: "images/Md._Hridoy_Hossain.png",
            expertise: "AI | ML | LLM",
            about: "",
            publications: [
                "A Parameter-Efficient Deep Learning Model for Preeclampsia Prediction Using Diverse Datasets in Low-Resource Settings (Accepted in IEEE QPAIN 2025)",
                "Scalable Hand Gesture Recognition from SEMG Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset (Submitted)",
                "Scalable SEMG-Based User-Independent Deep Learning Framework for Assistive Wheelchair Control (Submitted)",
                "Early-Stage Coronary Artery Disease Prediction Using Coronary Angiogram for Stenosis Detection in Low-Resource Settings (Submitted)",
                "Real-Time Brain Tumor Localization and Classification Using YOLOv1l and MONAI MedNeXt (Submitted)",
            ],
            education: [
                "BSc in Science in Computer Science & Engineering, University of Liberal Arts Bangladesh",
            ]
        },
        4: {
            name: "Shaikh Radwan Ahmed Ratul",
            image: "images/ratul.png",
            expertise: "Computer Vision | Robotics",
            about: "",
            publications: [
                "An Improved Interpretable Transformer Based Approach for Identifying Kidney Abnormalities (2024 5th International Conference on Sustainable Technologies for Industry 5.0, IEEE)",
                "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML"
            ],
            education: [
                "BSc in Science in Computer Science & Engineering, University of Liberal Arts Bangladesh",
            ]
        },
        5: {
            name: "Redwan Ahamad Samir",
            image: "images/samir.png",
            expertise: "AI/ML Engineer | Computer Vision",
            about: "",
            publications: [
                "Early-Stage Coronary Artery Disease Prediction Using Coronary Angiogram for Stenosis Detection in Low-Resource Settings (Submitted)",
                "Scalable SEMG-Based User-Independent Deep Learning Framework for Assistive Wheelchair Control (Submitted)",
            ],
            education: [
                "BSc in Science in Computer Science & Engineering, University of Liberal Arts Bangladesh",
            ]
        },
        6: {
            name: "Bahadur Zaman Shezan",
            image: "images/bahadur.png",
            expertise: "AI | ML",
            about: "",
            publications: [
                "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML"
            ],
            education: [
                "BSc in Science in Computer Science & Engineering, University of Liberal Arts Bangladesh",
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
            // const projectsList = document.getElementById('modal-researcher-projects');
            // projectsList.innerHTML = '';
            // researcher.projects.forEach(project => {
            //     const li = document.createElement('li');
            //     li.textContent = project;
            //     projectsList.appendChild(li);
            // });
            
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