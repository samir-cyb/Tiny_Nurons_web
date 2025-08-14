document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

    // Course data
    const courses = {
        1: {
            title: "Machine Learning Fundamentals",
            category: "AI & ML",
            level: "Beginner",
            description: "This course provides a comprehensive introduction to machine learning concepts and techniques. You'll learn about supervised and unsupervised learning, model evaluation, and feature engineering. Through hands-on projects, you'll build and deploy your first machine learning models using Python and scikit-learn.",
            duration: "6 weeks (4-6 hours/week)",
            mode: "Online (Live + Recorded)",
            startDate: "October 15, 2023",
            instructor: "Dr. Jonathan Smith",
            instructorBio: "Professor of AI with 15+ years experience in machine learning research and applications.",
            prerequisites: "Basic Python programming knowledge. No prior ML experience required.",
            certificate: "Yes, upon completion of all assignments and final project",
            price: "$299",
            image: "images/course-ml.jpg",
            syllabus: [
                "Week 1: Introduction to ML Concepts",
                "Week 2: Supervised Learning - Regression",
                "Week 3: Supervised Learning - Classification",
                "Week 4: Unsupervised Learning & Dimensionality Reduction",
                "Week 5: Model Evaluation & Improvement",
                "Week 6: Final Project & Deployment"
            ],
            benefits: [
                "Understand core ML concepts and algorithms",
                "Build and evaluate predictive models",
                "Work with real-world datasets",
                "Deploy models using Flask",
                "Certificate of completion"
            ]
        },
        2: {
            title: "Natural Language Processing",
            category: "NLP",
            level: "Intermediate",
            description: "Dive into the world of text processing and language understanding with this hands-on NLP course. Covering everything from basic text preprocessing to advanced transformer models, you'll gain practical experience with state-of-the-art NLP techniques using Python and PyTorch.",
            duration: "8 weeks (5-7 hours/week)",
            mode: "Online (Live + Recorded)",
            startDate: "November 5, 2023",
            instructor: "Dr. Sarah Chen",
            instructorBio: "NLP specialist with expertise in multilingual models and low-resource languages.",
            prerequisites: "Python programming, basic ML knowledge recommended",
            certificate: "Yes, upon completion of all assignments and final project",
            price: "$399",
            image: "images/course-nlp.jpg",
            syllabus: [
                "Week 1: Text Preprocessing & Vectorization",
                "Week 2: Word Embeddings & Text Classification",
                "Week 3: Sequence Models & RNNs",
                "Week 4: Attention Mechanisms",
                "Week 5: Transformer Architectures",
                "Week 6: Fine-tuning Pretrained Models",
                "Week 7: NLP Applications (Sentiment, NER, QA)",
                "Week 8: Final Project"
            ],
            benefits: [
                "Implement NLP pipelines from scratch",
                "Work with transformer models (BERT, GPT)",
                "Build a chatbot and text classifier",
                "Hands-on experience with HuggingFace",
                "Certificate of completion"
            ]
        },
        3: {
            title: "Deep Learning for Computer Vision",
            category: "Computer Vision",
            level: "Intermediate",
            description: "Master computer vision techniques using deep learning in this project-based course. From image classification to object detection and segmentation, you'll implement cutting-edge CV models using PyTorch and OpenCV, working with real-world image datasets.",
            duration: "8 weeks (6-8 hours/week)",
            mode: "Online (Live + Recorded)",
            startDate: "November 12, 2023",
            instructor: "Dr. Michael Johnson",
            instructorBio: "Computer vision expert with research focus on medical imaging applications.",
            prerequisites: "Python programming, basic ML knowledge, linear algebra",
            certificate: "Yes, upon completion of all assignments and final project",
            price: "$399",
            image: "images/course-cv.jpg",
            syllabus: [
                "Week 1: Neural Networks Refresher & CNNs",
                "Week 2: Image Classification with ResNet",
                "Week 3: Data Augmentation & Transfer Learning",
                "Week 4: Object Detection (YOLO, Faster R-CNN)",
                "Week 5: Image Segmentation (U-Net, Mask R-CNN)",
                "Week 6: Video Processing & Action Recognition",
                "Week 7: Deployment & Optimization",
                "Week 8: Final Project"
            ],
            benefits: [
                "Implement state-of-the-art CV models",
                "Work with medical and satellite imagery",
                "Deploy models to edge devices",
                "Build a complete image analysis pipeline",
                "Certificate of completion"
            ]
        },
        4: {
            title: "Scientific Data Analysis",
            category: "Data Science",
            level: "Beginner",
            description: "Essential techniques for cleaning, analyzing, and visualizing research data. This course covers the complete data analysis workflow from raw data to publication-ready visualizations, with a focus on scientific applications using Python and Jupyter notebooks.",
            duration: "4 weeks (3-5 hours/week)",
            mode: "Online (Self-paced with weekly live Q&A)",
            startDate: "October 20, 2023",
            instructor: "Emily Rodriguez",
            instructorBio: "PhD Candidate specializing in data analysis for scientific research.",
            prerequisites: "Basic Python or R knowledge helpful but not required",
            certificate: "Yes, upon completion of all assignments",
            price: "$249",
            image: "images/course-data.jpg",
            syllabus: [
                "Week 1: Data Cleaning & Wrangling",
                "Week 2: Exploratory Data Analysis",
                "Week 3: Statistical Analysis & Hypothesis Testing",
                "Week 4: Data Visualization & Reporting"
            ],
            benefits: [
                "Clean and prepare messy research data",
                "Create publication-quality visualizations",
                "Apply statistical tests correctly",
                "Document reproducible analyses",
                "Certificate of completion"
            ]
        },
        5: {
            title: "Advanced Machine Learning",
            category: "AI & ML",
            level: "Advanced",
            description: "Take your ML skills to the next level with this deep dive into advanced topics. Covering ensemble methods, neural networks, Bayesian approaches, and model optimization, this course prepares you to tackle complex real-world problems with cutting-edge techniques.",
            duration: "10 weeks (6-8 hours/week)",
            mode: "Online (Live + Recorded)",
            startDate: "January 8, 2024",
            instructor: "Dr. Jonathan Smith",
            instructorBio: "Professor of AI with 15+ years experience in machine learning research and applications.",
            prerequisites: "Solid understanding of ML fundamentals, Python programming",
            certificate: "Yes, upon completion of all assignments and final project",
            price: "$499",
            image: "images/course-advanced.jpg",
            syllabus: [
                "Week 1-2: Advanced Model Evaluation",
                "Week 3-4: Ensemble Methods",
                "Week 5-6: Neural Networks & Deep Learning",
                "Week 7: Bayesian Approaches",
                "Week 8: Model Optimization",
                "Week 9-10: Final Project"
            ],
            benefits: [
                "Master advanced ML techniques",
                "Optimize model performance",
                "Implement custom neural architectures",
                "Work with large-scale datasets",
                "Certificate of completion"
            ]
        },
        6: {
            title: "Large Language Models",
            category: "NLP",
            level: "Advanced",
            description: "This cutting-edge course explores the architecture, training, and applications of large language models. You'll learn to fine-tune and deploy LLMs for various tasks, understand their limitations, and explore the latest research in the field.",
            duration: "6 weeks (7-9 hours/week)",
            mode: "Online (Live + Recorded)",
            startDate: "January 15, 2024",
            instructor: "Dr. Sarah Chen",
            instructorBio: "NLP specialist with expertise in multilingual models and low-resource languages.",
            prerequisites: "Strong Python, NLP fundamentals, PyTorch experience recommended",
            certificate: "Yes, upon completion of all assignments and final project",
            price: "$449",
            image: "images/course-llm.jpg",
            syllabus: [
                "Week 1: Transformer Architecture Deep Dive",
                "Week 2: Pretraining & Fine-tuning Strategies",
                "Week 3: Prompt Engineering & Few-shot Learning",
                "Week 4: Efficient Fine-tuning (LoRA, Adapters)",
                "Week 5: LLM Applications & Deployment",
                "Week 6: Ethics & Final Project"
            ],
            benefits: [
                "Fine-tune and deploy LLMs",
                "Optimize model performance",
                "Implement retrieval-augmented generation",
                "Understand ethical considerations",
                "Certificate of completion"
            ]
        }
    };

    // Modal functionality
    const modal = document.getElementById('course-modal');
    const modalClose = document.querySelector('.modal-close');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            const course = courses[courseId];
            
            // Populate modal
            document.getElementById('modal-course-title').textContent = course.title;
            document.getElementById('modal-course-image').src = course.image;
            document.getElementById('modal-course-image').alt = course.title;
            document.getElementById('modal-course-category').textContent = course.category;
            document.getElementById('modal-course-level').textContent = course.level;
            document.getElementById('modal-course-duration').textContent = course.duration;
            document.getElementById('modal-course-mode').textContent = course.mode;
            document.getElementById('modal-course-price').textContent = course.price;
            document.getElementById('modal-course-description').textContent = course.description;
            document.getElementById('modal-course-start-date').textContent = course.startDate;
            document.getElementById('modal-course-instructor').textContent = course.instructor;
            document.getElementById('modal-course-prerequisites').textContent = course.prerequisites;
            document.getElementById('modal-course-certificate').textContent = course.certificate;
            
            // Populate syllabus
            const syllabusList = document.getElementById('modal-course-syllabus');
            syllabusList.innerHTML = '';
            course.syllabus.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                syllabusList.appendChild(li);
            });
            
            // Populate benefits
            const benefitsList = document.getElementById('modal-course-benefits');
            benefitsList.innerHTML = '';
            course.benefits.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                benefitsList.appendChild(li);
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

    // Category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const courseCards = document.querySelectorAll('.course-card');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter courses
            courseCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category').includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Scroll to courses
    document.getElementById('explore-courses').addEventListener('click', function() {
        document.getElementById('courses').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
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

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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