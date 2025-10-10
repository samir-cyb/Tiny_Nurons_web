document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

    // Hardcoded admin credentials
    const ADMIN_CREDENTIALS = {
        username: "samir",
        password: "samir12"
    };

    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const adminPanelSection = document.getElementById('admin-panel');
    const blogPostsSection = document.getElementById('blog-posts');
    const addPostBtn = document.getElementById('add-post-btn');
    const postModal = document.getElementById('post-modal');
    const loginModal = document.getElementById('login-modal');
    const postViewModal = document.getElementById('post-view-modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    const cancelBtn = document.getElementById('cancel-btn');
    const postForm = document.getElementById('post-form');
    const blogGrid = document.getElementById('blog-grid');
    const adminPosts = document.getElementById('admin-posts');
    const noPosts = document.getElementById('no-posts');
    const floatingAdminBtn = document.getElementById('floating-admin-btn');
    const blogSearch = document.getElementById('blog-search');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const pagination = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const postImageInput = document.getElementById('post-image');
    const imagePreview = document.getElementById('image-preview');

    // Blog posts storage (using localStorage)
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    // Current image data for editing
    let currentImageData = null;
    
    // Pagination variables
    let currentPage = 1;
    const postsPerPage = 4;
    let filteredPosts = [];
    
    // Initialize with sample posts if empty
    if (blogPosts.length === 0) {
        initializeSamplePosts();
    }

    // Check if admin is already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        showAdminPanel();
    } else {
        showPublicView();
    }

    // Floating admin button handler
    floatingAdminBtn.addEventListener('click', function() {
        openLoginModal();
    });

    // Login form handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            localStorage.setItem('adminLoggedIn', 'true');
            showAdminPanel();
            loginForm.reset();
            closeLoginModal();
        } else {
            alert('Invalid credentials!');
        }
    });

    // Logout handler
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        showPublicView();
    });

    // Add post button handler
    addPostBtn.addEventListener('click', function() {
        openPostModal('add');
    });

    // Modal handlers
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    cancelBtn.addEventListener('click', function() {
        closePostModal();
    });

    // Image file input handler
    postImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Check if file is an image
            if (!file.type.match('image.*')) {
                alert('Please select an image file (JPEG, PNG, GIF, etc.)');
                this.value = '';
                return;
            }
            
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB');
                this.value = '';
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                currentImageData = e.target.result;
                imagePreview.innerHTML = `<img src="${currentImageData}" alt="Image Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            currentImageData = null;
            imagePreview.innerHTML = '<p>No image selected</p>';
        }
    });

    // Post form handler
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const postId = document.getElementById('post-id').value;
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const excerpt = document.getElementById('post-excerpt').value;
        const category = document.getElementById('post-category').value;
        
        if (postId) {
            // Update existing post
            updatePost(postId, { 
                title, 
                content, 
                image: currentImageData || getPostImage(postId), 
                excerpt, 
                category 
            });
        } else {
            // Add new post
            addPost({ 
                title, 
                content, 
                image: currentImageData, 
                excerpt, 
                category 
            });
        }
        
        closePostModal();
        renderBlogPosts();
        renderAdminPosts();
    });

    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Search and filter handlers
    blogSearch.addEventListener('input', function() {
        filterAndRenderPosts();
    });

    categoryFilter.addEventListener('change', function() {
        filterAndRenderPosts();
    });

    sortFilter.addEventListener('change', function() {
        filterAndRenderPosts();
    });

    // Pagination handlers
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderBlogPosts();
        }
    });

    nextPageBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderBlogPosts();
        }
    });

    // Functions
    function showAdminPanel() {
        adminPanelSection.style.display = 'block';
        blogPostsSection.style.display = 'none';
        floatingAdminBtn.style.display = 'none';
        renderAdminPosts();
    }

    function showPublicView() {
        adminPanelSection.style.display = 'none';
        blogPostsSection.style.display = 'block';
        floatingAdminBtn.style.display = 'flex';
        filterAndRenderPosts();
    }

    function openLoginModal() {
        loginModal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closeLoginModal() {
        loginModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        loginForm.reset();
    }

    function openPostModal(mode, post = null) {
        const modalTitle = document.getElementById('modal-title');
        const saveBtn = document.getElementById('save-btn');
        
        // Reset image data and preview
        currentImageData = null;
        postImageInput.value = '';
        imagePreview.innerHTML = '<p>No image selected</p>';
        
        if (mode === 'add') {
            modalTitle.textContent = 'Add New Post';
            saveBtn.textContent = 'Save Post';
            postForm.reset();
            document.getElementById('post-id').value = '';
        } else if (mode === 'edit') {
            modalTitle.textContent = 'Edit Post';
            saveBtn.textContent = 'Update Post';
            document.getElementById('post-id').value = post.id;
            document.getElementById('post-title').value = post.title;
            document.getElementById('post-content').value = post.content;
            document.getElementById('post-excerpt').value = post.excerpt;
            document.getElementById('post-category').value = post.category;
            
            // Set image preview if post has an image
            if (post.image) {
                currentImageData = post.image;
                imagePreview.innerHTML = `<img src="${post.image}" alt="Image Preview">`;
            }
        }
        
        postModal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closePostModal() {
        postModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        postForm.reset();
        currentImageData = null;
        postImageInput.value = '';
        imagePreview.innerHTML = '<p>No image selected</p>';
    }

    function openPostViewModal(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;
        
        // Set modal content
        document.getElementById('view-modal-title').textContent = post.title;
        document.getElementById('view-modal-category').textContent = post.category;
        document.getElementById('view-modal-date').textContent = new Date(post.date).toLocaleDateString();
        
        // Handle image display
        const postViewImage = document.getElementById('post-view-image');
        const viewModalImage = document.getElementById('view-modal-image');
        
        if (post.image) {
            viewModalImage.src = post.image;
            viewModalImage.alt = post.title;
            postViewImage.style.display = 'block';
        } else {
            postViewImage.style.display = 'none';
        }
        
        // Format and display content
        const contentElement = document.getElementById('view-modal-content');
        contentElement.innerHTML = formatBlogContent(post.content);
        
        postViewModal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closePostViewModal() {
        postViewModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    function formatBlogContent(content) {
        // Split content by paragraphs and wrap in <p> tags
        const paragraphs = content.split('\n').filter(p => p.trim() !== '');
        return paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    function getPostImage(postId) {
        const post = blogPosts.find(p => p.id === postId);
        return post ? post.image : null;
    }

    function addPost(postData) {
        const newPost = {
            id: Date.now().toString(),
            title: postData.title,
            content: postData.content,
            image: postData.image,
            excerpt: postData.excerpt,
            category: postData.category,
            date: new Date().toISOString(),
            published: true
        };
        
        blogPosts.unshift(newPost);
        savePosts();
    }

    function updatePost(postId, postData) {
        const postIndex = blogPosts.findIndex(post => post.id === postId);
        if (postIndex !== -1) {
            blogPosts[postIndex] = {
                ...blogPosts[postIndex],
                ...postData
            };
            savePosts();
        }
    }

    function deletePost(postId) {
        if (confirm('Are you sure you want to delete this post?')) {
            blogPosts = blogPosts.filter(post => post.id !== postId);
            savePosts();
            renderBlogPosts();
            renderAdminPosts();
        }
    }

    function savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

    function filterAndRenderPosts() {
        const searchTerm = blogSearch.value.toLowerCase();
        const category = categoryFilter.value;
        const sortBy = sortFilter.value;
        
        // Filter posts
        filteredPosts = blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm) || 
                                 post.content.toLowerCase().includes(searchTerm) ||
                                 post.excerpt.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || post.category === category;
            
            return post.published && matchesSearch && matchesCategory;
        });
        
        // Sort posts
        filteredPosts.sort((a, b) => {
            switch(sortBy) {
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'newest':
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });
        
        currentPage = 1;
        renderBlogPosts();
    }

    function renderBlogPosts() {
        const publishedPosts = filteredPosts;
        const totalPages = Math.ceil(publishedPosts.length / postsPerPage);
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const postsToShow = publishedPosts.slice(startIndex, endIndex);
        
        if (publishedPosts.length === 0) {
            noPosts.style.display = 'block';
            blogGrid.innerHTML = '';
            blogGrid.appendChild(noPosts);
            pagination.style.display = 'none';
            return;
        }
        
        noPosts.style.display = 'none';
        pagination.style.display = 'flex';
        
        blogGrid.innerHTML = postsToShow.map(post => `
            <div class="blog-card" data-aos="fade-up">
                ${post.image ? `
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                ` : ''}
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-category">${post.category}</span>
                        <span class="blog-date">
                            <i class="far fa-calendar"></i>
                            ${new Date(post.date).toLocaleDateString()}
                        </span>
                    </div>
                    <h3>${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more" onclick="viewPost('${post.id}')">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join('');
        
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        pageNumbers.innerHTML = '';
        
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('div');
            pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', function() {
                currentPage = i;
                renderBlogPosts();
            });
            pageNumbers.appendChild(pageBtn);
        }
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    function renderAdminPosts() {
        if (blogPosts.length === 0) {
            adminPosts.innerHTML = '<p>No posts yet. Create your first post!</p>';
            return;
        }
        
        adminPosts.innerHTML = blogPosts.map(post => `
            <div class="admin-post-item" data-aos="fade-up">
                <div class="post-info">
                    <h4>${post.title}</h4>
                    <p class="post-date">${new Date(post.date).toLocaleDateString()} | ${post.category}</p>
                </div>
                <div class="post-actions">
                    <button class="btn btn-edit" onclick="editPost('${post.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-delete" onclick="deletePost('${post.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    function initializeSamplePosts() {
        const samplePosts = [
            {
                id: '1',
                title: 'Introduction to TinyML',
                content: 'TinyML is a fast-growing field that brings machine learning to ultra-low-power microcontrollers. This allows for AI applications on edge devices with minimal power consumption.\n\nThese devices can perform tasks like voice recognition, gesture detection, and anomaly detection while consuming only milliwatts of power. The applications range from smart agriculture to healthcare monitoring and industrial IoT.\n\nThe key advantage of TinyML is its ability to run AI models directly on the device without needing constant cloud connectivity, which reduces latency, preserves bandwidth, and enhances privacy.',
                excerpt: 'Discover how TinyML is revolutionizing edge computing by bringing machine learning capabilities to resource-constrained devices.',
                category: 'research',
                image: null,
                date: new Date('2024-01-15').toISOString(),
                published: true
            },
            {
                id: '2',
                title: 'Getting Started with AI Research',
                content: 'Starting your journey in AI research can be challenging. This guide covers essential tools, resources, and methodologies to help you begin your research career.\n\nFirst, familiarize yourself with the fundamental concepts of machine learning, deep learning, and neural networks. Python is the primary programming language used in AI research, so proficiency in Python and libraries like TensorFlow, PyTorch, and scikit-learn is essential.\n\nNext, learn to read and understand research papers. Start with seminal papers in your area of interest and gradually work your way to current state-of-the-art research. Participate in online courses, attend workshops, and join research communities to stay updated with the latest developments.',
                excerpt: 'A comprehensive guide for beginners looking to start their journey in artificial intelligence research.',
                category: 'tutorial',
                image: null,
                date: new Date('2024-01-10').toISOString(),
                published: true
            },
            {
                id: '3',
                title: 'Latest Advances in Computer Vision',
                content: 'Computer vision has seen remarkable progress in recent years. This post explores the latest breakthroughs and their potential applications in various industries.\n\nRecent developments in transformer architectures have revolutionized computer vision, with models like Vision Transformer (ViT) achieving state-of-the-art performance on various benchmarks. These models can process images as sequences of patches, similar to how transformers handle text.\n\nAnother significant advancement is in few-shot learning, where models can learn to recognize new objects from just a few examples. This has important implications for applications where labeled data is scarce or expensive to obtain.\n\nReal-time object detection and segmentation have also improved dramatically, enabling applications in autonomous vehicles, surveillance, and medical imaging with unprecedented accuracy and speed.',
                excerpt: 'Explore the cutting-edge developments in computer vision technology and their real-world applications.',
                category: 'news',
                image: null,
                date: new Date('2024-01-05').toISOString(),
                published: true
            }
        ];
        
        blogPosts = samplePosts;
        savePosts();
    }

    // Global functions for inline event handlers
    window.viewPost = function(postId) {
        openPostViewModal(postId);
    };

    window.editPost = function(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            openPostModal('edit', post);
        }
    };

    window.deletePost = function(postId) {
        deletePost(postId);
    };

    window.closePostViewModal = function() {
        closePostViewModal();
    };

    // Highlight current page in navigation
    const currentPageNav = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPageNav || 
            (currentPageNav === 'index.html' && linkHref === '/') || 
            (currentPageNav === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Initial render
    filterAndRenderPosts();
});