document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

    // Publications data
    const publicationsData = [
        {
            id: 1,
            title: "Attention Mechanisms in Transformer Networks for Medical Image Analysis",
            authors: "Smith, J., Chen, S., Johnson, M., Rodriguez, E., Kim, D.",
            venue: "Nature Machine Intelligence",
            year: 2023,
            type: "journal",
            citations: 142,
            abstract: "We present a novel attention mechanism specifically designed for medical image analysis, demonstrating significant improvements in diagnostic accuracy across multiple imaging modalities including MRI, CT, and X-ray datasets. Our approach leverages domain-specific knowledge to enhance feature representation and spatial attention mechanisms.",
            contributions: [
                "Novel attention mechanism for medical imaging",
                "Cross-modal learning framework",
                "Benchmark improvements on 5 medical datasets",
                "Open-source implementation and pretrained models"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "dataset", link: "#", label: "Dataset" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: true
        },
        {
            id: 2,
            title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
            authors: "Rodriguez, E., Kim, D., Patel, P., Zhang, L., Wilson, R.",
            venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
            year: 2023,
            type: "journal",
            citations: 89,
            abstract: "A comprehensive framework for federated learning in healthcare that preserves patient privacy while enabling collaborative model training across multiple institutions. We address key challenges in medical federated learning including data heterogeneity and security.",
            contributions: [
                "Privacy-preserving federated learning framework",
                "Differential privacy integration",
                "Multi-institutional validation",
                "HIPAA-compliant implementation"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: true
        },
        {
            id: 3,
            title: "Neural Architecture Search for Efficient Computer Vision Models",
            authors: "Johnson, M., Chen, S., Williams, A., Brown, K.",
            venue: "International Conference on Machine Learning (ICML)",
            year: 2023,
            type: "conference",
            citations: 67,
            abstract: "We propose a novel neural architecture search method that automatically discovers efficient architectures for computer vision tasks while maintaining high accuracy. Our approach reduces computational costs by 40% compared to traditional methods.",
            contributions: [
                "Efficient NAS algorithm",
                "Mobile-optimized architectures",
                "Automated model compression",
                "Cross-platform deployment tools"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "slides", link: "#", label: "Slides" }
            ],
            featured: false
        },
        {
            id: 4,
            title: "Large Language Models for Scientific Literature Analysis",
            authors: "Chen, S., Davis, J., Thompson, L., Martinez, C.",
            venue: "Nature Communications",
            year: 2023,
            type: "journal",
            citations: 134,
            abstract: "We develop specialized large language models for analyzing scientific literature, enabling automated knowledge extraction and synthesis across multiple domains. Our models achieve state-of-the-art performance on scientific text understanding tasks.",
            contributions: [
                "Domain-specific language model architecture",
                "Scientific text understanding benchmarks",
                "Knowledge graph construction",
                "Multi-domain evaluation framework"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "model", link: "#", label: "Model" },
                { type: "dataset", link: "#", label: "Dataset" }
            ],
            featured: false
        },
        {
            id: 5,
            title: "Interpretable Machine Learning for Clinical Decision Support",
            authors: "Patel, P., Rodriguez, E., Lee, S., Kumar, R.",
            venue: "Conference on Neural Information Processing Systems (NeurIPS)",
            year: 2023,
            type: "conference",
            citations: 98,
            abstract: "We introduce interpretable ML methods specifically designed for clinical applications, providing explanations that are meaningful to healthcare professionals while maintaining predictive accuracy.",
            contributions: [
                "Clinical interpretation framework",
                "Explanation quality metrics",
                "Healthcare professional validation study",
                "Real-world deployment case studies"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },
        {
            id: 6,
            title: "Multimodal Learning for Autonomous Systems",
            authors: "Kim, D., Wilson, R., Zhang, L., Adams, M.",
            venue: "International Conference on Computer Vision (ICCV)",
            year: 2022,
            type: "conference",
            citations: 76,
            abstract: "A comprehensive multimodal learning framework for autonomous systems that combines vision, audio, and sensor data to improve decision-making in complex environments.",
            contributions: [
                "Multimodal fusion architecture",
                "Sensor integration protocols",
                "Real-time processing optimization",
                "Safety-critical system validation"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "video", link: "#", label: "Video" }
            ],
            featured: false
        },
        {
            id: 7,
            title: "Quantum-Classical Hybrid Algorithms for Optimization",
            authors: "Zhang, L., Johnson, M., Taylor, B., Clark, N.",
            venue: "Workshop on Quantum Machine Learning",
            year: 2023,
            type: "workshop",
            citations: 23,
            abstract: "We explore hybrid quantum-classical algorithms for solving complex optimization problems, demonstrating quantum advantage in specific problem domains.",
            contributions: [
                "Hybrid quantum-classical framework",
                "Optimization problem benchmarks",
                "Quantum advantage analysis",
                "Simulator integration"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" }
            ],
            featured: false
        },
        {
            id: 8,
            title: "Self-Supervised Learning for Medical Image Segmentation",
            authors: "Wilson, R., Smith, J., Garcia, A., Evans, D.",
            venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI)",
            year: 2022,
            type: "conference",
            citations: 112,
            abstract: "We propose self-supervised learning methods for medical image segmentation that reduce dependence on labeled data while maintaining high segmentation accuracy.",
            contributions: [
                "Self-supervised segmentation framework",
                "Label efficiency analysis",
                "Multi-organ segmentation validation",
                "Transfer learning protocols"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "dataset", link: "#", label: "Dataset" }
            ],
            featured: false
        },
        {
            id: 9,
            title: "Reinforcement Learning for Drug Discovery",
            authors: "Davis, J., Chen, S., Kumar, R., White, S.",
            venue: "arXiv preprint",
            year: 2023,
            type: "preprint",
            citations: 15,
            abstract: "We apply reinforcement learning techniques to accelerate drug discovery, focusing on molecular design and optimization for specific therapeutic targets.",
            contributions: [
                "RL-based molecular design",
                "Target-specific optimization",
                "Property prediction integration",
                "Synthetic accessibility scoring"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" }
            ],
            featured: false
        },
        {
            id: 10,
            title: "Adversarial Robustness in Deep Learning Systems",
            authors: "Martinez, C., Kim, D., Thompson, L., Hall, J.",
            venue: "International Conference on Learning Representations (ICLR)",
            year: 2022,
            type: "conference",
            citations: 156,
            abstract: "We investigate adversarial robustness in deep learning systems and propose novel defense mechanisms that maintain model performance while improving security.",
            contributions: [
                "Robust training methodologies",
                "Adversarial detection algorithms",
                "Security evaluation frameworks",
                "Industry deployment guidelines"
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        }
    ];

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 5;
    let filteredPublications = [...publicationsData];
    let currentFilter = 'all';
    let currentSort = 'year-desc';

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications
            currentFilter = filter;
            applyFilters();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('publication-search');
    searchInput.addEventListener('input', function() {
        applyFilters();
    });

    // Sort functionality
    const sortSelect = document.getElementById('sort-publications');
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        applyFilters();
    });

    // Apply filters and sorting
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Filter by type
        let filtered = publicationsData.filter(pub => {
            if (currentFilter === 'all') return true;
            return pub.type === currentFilter;
        });
        
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(pub => 
                pub.title.toLowerCase().includes(searchTerm) ||
                pub.authors.toLowerCase().includes(searchTerm) ||
                pub.venue.toLowerCase().includes(searchTerm) ||
                pub.abstract.toLowerCase().includes(searchTerm)
            );
        }
        
        // Sort publications
        filtered.sort((a, b) => {
            switch(currentSort) {
                case 'year-asc':
                    return a.year - b.year;
                case 'year-desc':
                    return b.year - a.year;
                case 'citations-desc':
                    return b.citations - a.citations;
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                default:
                    return b.year - a.year;
            }
        });
        
        filteredPublications = filtered;
        currentPage = 1;
        renderPublications();
        updatePagination();
    }

    // Render publications
    function renderPublications() {
        const container = document.getElementById('publications-container');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pagePublications = filteredPublications.slice(startIndex, endIndex);
        
        container.innerHTML = '';
        
        if (pagePublications.length === 0) {
            container.innerHTML = `
                <div class="no-publications">
                    <i class="fas fa-search"></i>
                    <h3>No publications found</h3>
                    <p>Try adjusting your search terms or filters</p>
                </div>
            `;
            return;
        }
        
        pagePublications.forEach((pub, index) => {
            const publicationCard = createPublicationCard(pub, index);
            container.appendChild(publicationCard);
        });
    }

    // Create publication card
    function createPublicationCard(pub, index) {
        const card = document.createElement('div');
        card.className = 'publication-item glass-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString());
        
        // Resource links HTML
        const resourcesHTML = pub.resources.map(resource => {
            const iconMap = {
                pdf: 'fa-file-pdf',
                code: 'fa-code',
                dataset: 'fa-database',
                demo: 'fa-play-circle',
                slides: 'fa-presentation',
                video: 'fa-video',
                model: 'fa-brain'
            };
            
            return `
                <a href="${resource.link}" class="btn btn-outline btn-small">
                    <i class="fas ${iconMap[resource.type] || 'fa-link'}"></i>
                    ${resource.label}
                </a>
            `;
        }).join('');
        
        const typeLabels = {
            journal: 'Journal Article',
            conference: 'Conference Paper',
            workshop: 'Workshop Paper',
            preprint: 'Preprint'
        };
        
        card.innerHTML = `
            <div class="publication-header">
                <div class="publication-badge ${pub.type}">
                    <i class="fas ${pub.type === 'journal' ? 'fa-book' : pub.type === 'conference' ? 'fa-users' : pub.type === 'workshop' ? 'fa-chalkboard-teacher' : 'fa-file-alt'}"></i>
                    <span>${typeLabels[pub.type]}</span>
                </div>
                <h3 class="publication-title">${pub.title}</h3>
                <p class="publication-authors">${pub.authors}</p>
                <div class="publication-meta">
                    <span class="venue">${pub.venue}</span>
                    <span class="year">${pub.year}</span>
                    <span class="citations">
                        <i class="fas fa-quote-right"></i>
                        ${pub.citations} citations
                    </span>
                </div>
            </div>
            <div class="publication-abstract">
                <p>${pub.abstract}</p>
            </div>
            <div class="publication-actions">
                ${resourcesHTML}
                <button class="btn btn-primary view-details-btn" data-publication-id="${pub.id}">
                    <span>View Details</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        return card;
    }

    // Update pagination
    function updatePagination() {
        const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
        const pageInfo = document.getElementById('page-info');
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Pagination event listeners
    document.getElementById('prev-page').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderPublications();
            updatePagination();
            window.scrollTo({
                top: document.getElementById('publications-container').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });

    document.getElementById('next-page').addEventListener('click', function() {
        const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderPublications();
            updatePagination();
            window.scrollTo({
                top: document.getElementById('publications-container').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });

    // Publication detail modal
    const modal = document.getElementById('publication-modal');
    const modalClose = document.querySelector('.modal-close');

    // View details functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.view-details-btn')) {
            const publicationId = parseInt(e.target.closest('.view-details-btn').getAttribute('data-publication-id'));
            const publication = publicationsData.find(pub => pub.id === publicationId);
            if (publication) {
                showPublicationModal(publication);
            }
        }
    });

    // Show publication modal
    function showPublicationModal(pub) {
        // Populate modal content
        document.getElementById('modal-publication-type').textContent = {
            journal: 'Journal Article',
            conference: 'Conference Paper',
            workshop: 'Workshop Paper',
            preprint: 'Preprint'
        }[pub.type];

        document.getElementById('modal-publication-title').textContent = pub.title;
        document.getElementById('modal-publication-authors').textContent = pub.authors;
        document.getElementById('modal-publication-venue').textContent = pub.venue;
        document.getElementById('modal-publication-year').textContent = pub.year;
        document.getElementById('modal-citation-count').textContent = pub.citations;
        document.getElementById('modal-publication-abstract').textContent = pub.abstract;

        // Populate contributions
        const contributionsList = document.getElementById('modal-publication-contributions');
        contributionsList.innerHTML = '';
        pub.contributions.forEach(contribution => {
            const li = document.createElement('li');
            li.textContent = contribution;
            contributionsList.appendChild(li);
        });

        // Populate resources
        const resourcesContainer = document.getElementById('modal-publication-resources');
        resourcesContainer.innerHTML = '';
        pub.resources.forEach(resource => {
            const iconMap = {
                pdf: 'fa-file-pdf',
                code: 'fa-code',
                dataset: 'fa-database',
                demo: 'fa-play-circle',
                slides: 'fa-presentation',
                video: 'fa-video',
                model: 'fa-brain'
            };

            const link = document.createElement('a');
            link.href = resource.link;
            link.className = 'btn btn-outline';
            link.innerHTML = `
                <i class="fas ${iconMap[resource.type] || 'fa-link'}"></i>
                <span>${resource.label}</span>
            `;
            resourcesContainer.appendChild(link);
        });

        // Show modal
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    // Close modal functionality
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

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

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

    // Count up animation for stats
    const statNumbers = document.querySelectorAll('.stat-number, .metric-value');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCount = () => {
                    current += step;
                    if (current < target) {
                        statNumber.textContent = Math.floor(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        statNumber.textContent = target;
                    }
                };
                
                updateCount();
                observer.unobserve(statNumber);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
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

    // Featured publications hover effect
    const featuredPublications = document.querySelectorAll('.featured-publication');
    featuredPublications.forEach(pub => {
        pub.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        pub.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
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

    // Initialize the page
    applyFilters();
    
    // Auto-refresh AOS on dynamic content
    const publicationsContainer = document.getElementById('publications-container');
    const publicationObserver = new MutationObserver(() => {
        AOS.refresh();
    });
    
    publicationObserver.observe(publicationsContainer, {
        childList: true,
        subtree: true
    });

    // Keyboard navigation for filters
    filterTabs.forEach((tab, index) => {
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && index > 0) {
                filterTabs[index - 1].focus();
                filterTabs[index - 1].click();
            } else if (e.key === 'ArrowRight' && index < filterTabs.length - 1) {
                filterTabs[index + 1].focus();
                filterTabs[index + 1].click();
            }
        });
        
        tab.setAttribute('tabindex', '0');
        tab.setAttribute('role', 'button');
    });

    // Publication card animations
    const publicationCards = document.querySelectorAll('.publication-item, .featured-publication');
    const cardObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, cardObserverOptions);

    // Observe existing cards
    publicationCards.forEach(card => {
        cardObserver.observe(card);
    });

    // CTA section interactions
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});