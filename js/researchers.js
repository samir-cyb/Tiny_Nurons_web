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
            ],
            skills: [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "IoT"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/fazlayrabbyofficial/",
                github: "https://github.com/fazlayrabby",
                orcid: "https://orcid.org/0000-0000-0000-0000",
                researchgate: "https://researchgate.net/profile/Fazlay-Rabby",
                googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                website: "https://personal-website.com" // Add this
            }
        },
        2: {
            name: "Md. Sajid Hasan",
            image: "images/sajid.jpg",
            expertise: "Renewable Energy | Artificial Intelligence | Machine Learning | Semiconductors | Energy Management",
            about: "",
            publications: [
                "A. Jawad, Md. S. Hasan, Md. F. I. Faruqui, and N.-A.- Masood, 'Small-scale floating photovoltaic systems in university campus: A pathway to achieving SDG 7 goals in Bangladesh,' Energy Conversion and Management, vol. 297, p. 117722, Dec. 2023, doi: 10.1016/j.enconman.2023.117722. [IF: 10.4, Q1]",
                "M. A. I. Rafi, Md. S. Hassan, I.-U. Rashid, M. M. Hasan, J. A. Chowdhury, M. R. Sohan, N. A. Jahan, and M. M. Hossain, 'Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: a Comprehensive Case Study,' IEEE Access, vol. 13, pp. 52658–52682, 2025, doi: https://doi.org/10.1109/access.2025.3553636 [IF:3.4, Q1]",
                "Md. S. Hasan and A. Jawad, 'Clean Hydrogen Production from Floating Photovoltaics: A Case Study in Dhanmondi Lake, Dhaka,' in 2023 10th IEEE International Conference on Power Systems (ICPS), pp. 1–6, Dec. 2023, doi: https://doi.org/10.1109/icps60393.2023.10428710."
            ],
            education: [
                "BSc in Electrical and Electronic Engineering, University of Liberal Arts Bangladesh",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/md-sajid-hasan-469919280/ ",
                //github: "https://github.com/sajidhasan",
                //orcid: "https://orcid.org/0000-0000-0000-0001",
                //researchgate: "https://researchgate.net/profile/Sajid-Hasan",
                googlescholar: "https://scholar.google.com/citations?user=6Aine5dr21kC&hl=en", // Add this
                website: "https://sites.google.com/view/mdsajidhasan" // Add this
            }
        },
        3: {
            name: "Mahbuba Habib",
            image: "images/mahbuba.jpg",
            expertise: "Operating System | Machine Learning | Computer operation and Application ",
            about: "CSE professional with hands-on experience in teaching, research, and development. Committed to impactful learning and tech solutions through collaboration and adaptability.",
            publications: [
                "M. Habib and H. B. Kibria, 'Feature Selection-Based Machine Learning Approaches for Detecting Android Malware with Explainable AI,' 2024 3rd International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), Gazipur, Bangladesh, 2024, pp. 1-6, doi: 10.1109/ICAEEE62219.2024.10561751."
            ],
            education: [
                "MSc in Computer Science and Engineering Bangladesh University of Engineering and Technology CGPA: 3.25/4.00",
                "BSc in Electrical and Computer Engineering Rajshahi University of Engineering and Technology CGPA: 3.78/4.00 ( Position: 5th )"
            ],
            socialLinks: {
                linkedin: "linkedin.com/in/mahbuba",
                github: "mahbuba26.github.io/b",
                googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                website: "https://personal-website.com" // Add this
            }
        },
        4: {
            name: "Md. Hridoy Hossain",
            image: "images/Md._Hridoy_Hossain.png",
            expertise: "AI | ML | LLM",
            about: "",
            publications: [
                "A Parameter-Efficient Deep Learning Model for Preeclampsia Prediction Using Diverse Datasets in Low-Resource Settings (QPAIN 2025)",
                "Scalable Hand Gesture Recognition from SEMG Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset (ICEEIE 2025)",
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/hossain-hridoy/",
                github: "https://github.com/md-hridoy-hossain",
                //orcid: "https://orcid.org/0000-0000-0000-0002",
                //researchgate: "https://researchgate.net/profile/Hridoy-Hossain",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },
        5: {
            name: "Shaikh Radwan Ahmed Ratul",
            image: "images/ratul.png",
            expertise: "Computer Vision | Robotics",
            about: "",
            publications: [
                "An Improved Interpretable Transformer Based Approach for Identifying Kidney Abnormalities (2024 5th International Conference on Sustainable Technologies for Industry 5.0, IEEE)",
                "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                linkedin: "https://linkedin.com/in/radwan-ratul",
                github: "https://github.com/radwanratul",
                orcid: "https://orcid.org/0000-0000-0000-0003",
                researchgate: "https://researchgate.net/profile/Radwan-Ratul",
                googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                website: "https://personal-website.com" // Add this
            }
        },
        6: {
            name: "Redwan Ahamad Samir",
            image: "images/samir.png",
            expertise: "ML | Computer Vision",
            about: "Motivated and curious Computer Science And Engineering undergraduate with a deep interest in AI and computer vision. Adept in a wide range of programming languages and frameworks. Eager to apply and grow technical and analytical skills in a challenging, growth-oriented role within a tech-forward company.",
            publications: [
                "Early-Stage Coronary Artery Disease Prediction Using Coronary Angiogram for Stenosis Detection in Low-Resource Settings (Submitted)",
                "Scalable SEMG-Based User-Independent Deep Learning Framework for Assistive Wheelchair Control (Submitted)",
            ],
            skills: [
                "Languages: C, C++, C#, Python, Java, Dart, JavaScript",
                "Frameworks: OpenCV, Flutter, Django",
                "Machine Learning: Regression, Classification",
                "Tools & Technologies: Git, Jupyter Notebook, VS Code, Android Studio, RoboFLow",
                "Databases: MySQL, MongoDB, Firebase, supabase, Railway",
                "Operating Systems: Windows, Linux, MacOS",
                "Other Skills: Problem Solving, Data Structures and Algorithms, Agile Methodologies, Team Collaboration"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/redwan-ahamad-samir-701508312/",
                github: "https://github.com/samir-cyb",
                orcid: "https://orcid.org/my-orcid?orcid=0009-0008-3446-0845",
                researchgate: "https://www.researchgate.net/profile/Redwan-Samir?ev=hdr_xprf",
                googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                website: "https://samir-cyb.github.io/my_portfolio/" // Add this
            }
        },
        7: {
            name: "Bahadur Zaman Shezan",
            image: "images/bahadur.png",
            expertise: "AI | ML",
            about: " I am a Computer Science Engineering student at ULAB with strong skills in JAVA, C, and C++. Alongside coding, I bring creativity as a graphic designer. A passionate learner and avid gamer, I enjoy solving problems and continuously seek opportunities to grow and apply my knowledge.",
            publications: [
                "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML"
            ],
            skills: [
                "Languages: C, Python, Java, javaScript",
                "Tools & Technologies: Jupyter Notebook, VS Code, RoboFLow",
                "Databases: MySQL",
                "Operating Systems: Windows, Linux, MacOS",
                "Other Skills: Problem Solving, Data Structures and Algorithms"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/bahadur-zamn-shezan-633141261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com/BzShezan",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },
        8: {
            name: "Md. Rifat Aknda",
            image: "images/rifat.jpg",
            expertise: "ML | Computer Vision",
            about: "I am a CSE Engineer with a B.Sc. in CSE from ULAB with specializations in Data Science. Currently, I work as an AI Engineer in the Research and Development team at EVOMED Technology. My research focuses on deep learning, computer vision, biomedical signal processing, and AI-driven diagnostics with projects such as Interpretable enhanced transfer learning model and feature fusion model for binary skin cancer classification, brain tumor localization and classification, hand gesture recognition from surface electromyography, and mechanical arm control using TinyML. I also served as Vice President of the ULAB Computer Programming Club (UCPC) in 2023.",
            publications: [
                "Fazlay Rabby, Rajdeep Das, MD. Musfiqur Rahman, Md. Hridoy Hossain, Md. Rifat Aknda, 'Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset', 9th International Conference on Electrical, Electronics and Information Engineering (ICEEIE, 2025) [Accepted]"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/rifatmilon/",
                github: "https://github.com/rifatmilon",
                orcid: "https://orcid.org/0009-0003-8483-0668",
                //researchgate: "https://researchgate.net/profile",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },
        9: {
            name: "MD: MUSFIQUR RAHMAN",
            image: "images/musfiq.jpg",
            expertise: "IoT | Signal Processing",
            about: "",
            publications: [
                "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset",
                "Early-Stage Coronary Artery Disease Prediction Using Coronary Angiogram for Stenosis Detection in Low-Resource Settings",
                "Rice Leaf Disease Detection System Using the Convolutional Neural Network (ResNet)"
            ],
            skills: [
                "Languages: C, Python",
                "Operating Systems: Windows, Linux, MacOS",
                "Other Skills: Problem Solving, Team Collaboration",
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/musfiqur-rahman-82b2241ab/",
                github: "https://github.com/rifatmilon",
                orcid: "https://orcid.org/0000-0000-0000-0003",
                researchgate: "https://researchgate.net/profile",
                googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                website: "https://personal-website.com" // Add this
            }
        },
        10: {
            name: "Kaniz Fatema Antora",
            image: "images/Kaniz.png",
            expertise: "Iot | AI | Blockchain",
            about: "Completed Bachelor's degree in Computer Science and Engineering from the University of Liberal Arts Bangladesh. She has has distinguished herself both academically and professionally. Her research interests are prominently featured in high-impact publications. She is a co-author of a paper in the prestigious Q1 journal IEEE Access, which presents a comprehensive review of blockchain approaches for enhancing the Know Your Customer (KYC) process. Her research portfolio also includes co-authoring papers on an AI platform for phishing email detection published in Computers and Electrical Engineering and a novel framework named Alblocknet that combines blockchain and machine learning for fake image detection, showcasing her interdisciplinary expertise at the intersection of cybersecurity and decentralized technology.",
            publications: [
                "Novel interpretable and robust web-based AI platform for phishing email detection",
                "Development of a Blockchain-Based On-Demand Lightweight Commodity Delivery System",
                "A Review of Blockchain Approaches for KYC"
            ],
            skills: [
                "Blockchain, DDS, Security, Blockchain Network, KYC",
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/kaniz-fatema-antora/",
                researchgate: "https://www.researchgate.net/profile/Kaniz_Antora",
                googlescholar: "https://scholar.google.com/citations?user=MSiWacUAAAAJ&hl=en", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },
        11: {
            name: "Ehasan Ahmed",
            image: "images/Ehasan.png",
            expertise: "Blockchain | Cryptography | IoT | Web Technology",
            about: "",
            publications: [
                "A Robust Routing Protocol in Cognitive Unmanned Aerial Vehicular Networks",
            ],
            skills: [
                "Blockchain Systems, Distributed Ledger Technologies, Privacy-Preserving Data Sharing, Cryptography, IoT Integration, Artificial Intelligence, Machine Learning, Data Analysis, Smart Contract Design, System Architecture, Research Methodology, Experiment Design, Academic Writing, Data Modeling",
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ehasan-ahmed-7a1b591b5/",
                orcid: "https://orcid.org/0009-0002-6481-070X",
                googlescholar: "https://scholar.google.com/citations?hl=en&authuser=2&user=lX7bhJAAAAAJ", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },
        12: {
            name: "Mumtahina Tasnim Mahi",
            image: "images/Mumtahina.png",
            expertise: "Iot | Tiny ML | LLM",
            about: "",
            publications: [
                "Design and Implementation of a Low-Cost Weather Monitoring System using ESP-NOW (ICECE 2024)",
                "JailBreakLLM: An Eff ective LLaMa Model Designed Specifi cally to Jailbreak OpenAI GPT (QPAIN 2025)",
            ],
            education: [
                "BSc in Electrical and Electronic Engineering, University of Liberal Arts Bangladesh",
            ],
            skills: {
                Tools: "Proteus, PSpice, MATLAB, TinkerCAD, AutoCAD, Cadence, Arduino IDE",
                Programming: "C/C++, Python (Basic), Verilog (Basic)",
                Hardware: "ESP32, ESP8266, Atmega32A, NRF24L01, various sensors & modules",
                Concepts: "IoT, Embedded Systems, PCB Design, Wireless Communication, Data Acquisition",
            },
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/mumtahina-tasnim-4bb837236/",
            }
        },
        13: {
            name: "Saniida Salwa Mou",
            image: "images/mou.png",
            expertise: "AI | ML",
            about: "",
            publications: [
                "Real-Time Brain Tumor Localization and Classification Using YOLOv11 and MONAI MedNeXt (Submitted on COMPAS 2025)",
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
                "CGPA: 3.92/4.00"
            ],
            skills: {
                Programming: "C, C++, Web Design,HTML,CSS",
                Database: "MySQL",
                Other: "Content Writing, Data Analysis,Canva and Visualization",
                Languages: "Native Bangla, Advanced English, Learning French",
            },
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/sanjida-salwa-mou-67a35437a",
            }
        },




        // new

        14: {
            name: "Ishrak Maisha Muskan",
            image: "images/maisha.jpg",
            expertise: "Programming",
            about: "My enthusiasm lies in working towards the amelioration of the community through the use of technology. I am always excited to adapt to new technologies and engage in critical thinking. In addition, I have a love for learning and teaching young minds. As an undergraduate student pursuing my bachelor's degree in computer science and engineering, I am eager to continue expanding my knowledge and skills and to make a positive impact in the world.",
            publications: [
                
            ],
            skills: [
                "Languages: C, C++, Python, Java"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, University of Liberal Arts Bangladesh (ULAB)",
            ],
            socialLinks: {
                //linkedin: "https://www.linkedin.com/in/bahadur-zamn-shezan-633141261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                //github: "https://github.com/BzShezan",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },

        15: {
            name: "Shuvo Ronjon Das",
            image: "images/ronjon.jpg",
            expertise: "Biomedical Signal Processing, IoT in Healthcare",
            about: "To apply my technical knowledge and passion for innovation in the field of Electrical and Electronics Engineering, Artificial Intellige nce(ML+DL), Signal Processing with a strong focus on research and development. Seeking opportunities that allow me to contribute to cutting-edge projects.",
            publications: [
            ],
            skills: [
                "Languages: Python , ML, DL,",
                "MatLab"
            ],
            education: [
                "B.Sc(Engg) in Electrical and Electronic Engineering, Jashore University of Science and Technology, Jashore, Bangladesh with CGPA: 3.48 (Till 6th semester)",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/shuvoronjon/",
                github: "https://github.com/iamsrdas",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },


        16: {
            name: "Ahmar khan",
            image: "images/khan.jpg",
            expertise: "Pcb Hardware designer",
            about: "",
            publications: [
            ],
            skills: [
                "Languages: C, C++",
                "MatLab",
                "Pcb Designing: Altium Designer, Eagle, KiCad"
            ],
            education: [
                "University of Engineering and Technology, Peshawar, Pakistan",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ahmar-khan/",
                github: "https://github.com/ahmar-caan",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },

        17: {
            name: "Nafisa Binte Ghulam Kibria",
            image: "images/khibria.png",
            expertise: "Programmer",
            about: "",
            publications: [
                "Optimized Voting Classifier for Loan Approval Prediction: An Explainable AI Approach",
                "OptimizingWasteClassificationUsingTransferLearningandOneCyclePolicy",
                "OptimizedCreditCardFraudDetectionUsingSoftVotingClassifierwithTomekLinks",
                "ExplainableStacking-BasedRegressionModel forConcreteStrengthPrediction"
            ],
            skills: [
                "Languages: C, C++, Python, Java, JavaScript, Html, Css, React",
                "Frameworks: Node.js, Next.js",
                "Tools: Github, Jira, Trello",
                "Databases: Oracle, MySQL, MongoDB, Neo4j"
            ],
            education: [
                "B.Sc. in Software Engineering, Islamic University of Technology, CGPA: 3.74 / 4.00",
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/nafisa-kibria-6a7117366",
                github: "https://github.com/N-Kibria",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },

        18: {
            name: "SOUROV DEY",
            image: "images/sourov.jpg",
            expertise: "Programmer",
            about: "This is Sourov Dey. I am a curious individual who enjoys exploring a variety of fields and topics, from Science and Technology to Philosophy and Psychology. My projects, including Emoji Prediction and Toxic Comment Classification, have enhanced my foundational knowledge in Machine Learning. Through volunteering, I have gained leadership and communication experience and learned how to tackle real-world problem-solving. I aim to apply my expertise as a Data Scientist in the sports industry, supporting strategic decision-making and performance improvement.",
            publications: [
            ],
            skills: [
                "Languages: Python , JS, C, R, Html, CSS",
                "Frameworks: Node.js, Next.js",
                "Tools: Github, Jira, Trello",
                "Databases: SQL, MySQL"
            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, North East University Bangladesh, CGPA: 3.48 out of 4.00"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/sourov-bd71/",
                github: "https://github.com/sourovdeybd71/",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },


        19: {
            name: "Ishrat Shefa Noor",
            image: "images/Ishrat - Ishrat Shefa Noor.jpg",
            expertise: "Programmer",
            about: "To contribute my fresh perspective, dedication, and strong work ethic to a dynamic team. I aspire to apply my knowledge and develop practical skills while continuously learning and growing. I am committed to embracing challenges, adapting to new environments, and contributing positively for the betterment of the organization and personal growth.",
            publications: [
            ],
            skills: [

            ],
            education: [
                "Bachelor of Science, Computer Science and Engineering, Khulna University of Engineering & Technology (KUET), 3.15 out of 4.00 CGPA"
            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ishratshefa/",
                //github: "https://github.com/sourovdeybd71/",
                //orcid: "https://orcid.org/0000-0000-0000-0005",
                //researchgate: "https://researchgate.net/profile/Bahadur-Shezan",
                //googlescholar: "https://scholar.google.com/citations?user=USER_ID", // Add this
                //website: "https://personal-website.com" // Add this
            }
        },







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
            
            // Populate skills
            const skillsList = document.getElementById('modal-researcher-skills');
            skillsList.innerHTML = '';
            if (researcher.skills && researcher.skills.length > 0) {
                researcher.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
                skillsList.parentElement.style.display = 'block';
            } else {
                skillsList.parentElement.style.display = 'none';
            }
            
            // Populate social links - THIS IS THE CORRECTED SECTION
            const socialLinksContainer = document.getElementById('researcher-social-links');
            socialLinksContainer.innerHTML = '';
            
            if (researcher.socialLinks) {
                if (researcher.socialLinks.linkedin) {
                    const linkedinLink = createSocialLink('linkedin', researcher.socialLinks.linkedin);
                    socialLinksContainer.appendChild(linkedinLink);
                }
                if (researcher.socialLinks.github) {
                    const githubLink = createSocialLink('github', researcher.socialLinks.github);
                    socialLinksContainer.appendChild(githubLink);
                }
                if (researcher.socialLinks.orcid) {
                    const orcidLink = createSocialLink('orcid', researcher.socialLinks.orcid);
                    socialLinksContainer.appendChild(orcidLink);
                }
                if (researcher.socialLinks.researchgate) {
                    const researchgateLink = createSocialLink('researchgate', researcher.socialLinks.researchgate);
                    socialLinksContainer.appendChild(researchgateLink);
                }
                // Add these new conditions for Google Scholar and Website
                if (researcher.socialLinks.googlescholar) {
                    const scholarLink = createSocialLink('googlescholar', researcher.socialLinks.googlescholar);
                    socialLinksContainer.appendChild(scholarLink);
                }
                if (researcher.socialLinks.website) {
                    const websiteLink = createSocialLink('website', researcher.socialLinks.website);
                    socialLinksContainer.appendChild(websiteLink);
                }
            }
            
            // Show modal
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    // Helper function to create social links
    function createSocialLink(platform, url) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link-icon';
        link.title = platform.charAt(0).toUpperCase() + platform.slice(1);
        
        const icon = document.createElement('i');
        switch(platform) {
            case 'linkedin':
                icon.className = 'fab fa-linkedin-in';
                break;
            case 'github':
                icon.className = 'fab fa-github';
                break;
            case 'orcid':
                icon.className = 'fab fa-orcid';
                break;
            case 'researchgate':
                icon.className = 'fab fa-researchgate';
                break;
            case 'googlescholar':  // Add this case
                icon.className = 'fas fa-graduation-cap'; // Google Scholar icon
                break;
            case 'website':  // Add this case
                icon.className = 'fas fa-globe'; // Website icon
                break;
            default:
                icon.className = 'fas fa-external-link-alt';
        }
        
        link.appendChild(icon);
        return link;
    }

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