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
            title: " Preeclampsia Prediction Using Machine Learning with Electronic Medical Records in Low-Resource Settings",
            authors: "Fazlay Rabby, A. B. M. S. U. Doulah",
            venue: "2025 2nd International Conference on Next-Generation Computing, IoT and Machine Learning (NCIM)",
            year: 2025,
            type: "Journal Article",
            citations: 7,
            abstract: "Preeclampsia is a serious pregnancy complication characterized by hypertension and proteinuria that can result in severe maternal and fetal morbidity. Early prediction and timely intervention are essential to improve outcomes. The purpose of this study was to evaluate the effectiveness of several machine learning models in predicting preeclampsia by focusing on their ability to minimize false negatives and enhance clinical decision making. A publicly available dataset comprising patient records was used for model evaluation. Several machine learning models, including Logistic Regression (LR), Passive Aggressive Classifier (PAC), Extra Trees Classifier (ETC), Support Vector Machines (SVM), and CatBoost, were implemented. F1-score, precision, recall, sensitivity and specificity were calculated to measure the performance. Among the models tested, CatBoost outperformed the others, achieving the highest AUC of 0.9992 and an F1 score of 0.9812, demonstrating its strong predictive capability. SVM,LR, ETC, and PAC also showed competitive performance, while Random Forest exhibited the weakest classification ability. These findings highlight the potential of machine learning models, particularly CatBoost, in predicting preeclampsia conditions. The integration of such models into clinical practice could enhance early prediction and intervention, ultimately enhancing maternal and fetal health outcomes. Future studies should concentrate on integrating these models into clinical decision support systems and validating them using diverse datasets to further optimize their applicability in real-world settings.",
            contributions: [
                "Comprehensive Model Comparison – The study evaluated multiple machine learning models (LR, PAC, ETC, SVM, CatBoost, and Random Forest) on preeclampsia prediction, providing a systematic performance comparison using clinically relevant metrics",
                "Identification of CatBoost as the Best Predictor – CatBoost demonstrated superior predictive capability with an AUC of 0.9992 and F1-score of 0.9812, highlighting its effectiveness in minimizing false negatives and improving prediction reliability.",
                "Focus on Clinical Decision Support – By prioritizing sensitivity and false negative reduction, the study emphasized the clinical importance of early detection, aligning model development with real-world healthcare needs.",
                "uidance for Future Research – The work suggested validating models with diverse datasets and integrating them into clinical decision support systems, paving the way for practical implementation in maternal healthcare."
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
            title: "A Parameter-Efficient Deep Learning Model for Preeclampsia Prediction Using Diverse Datasets in Low-Resource Settings.",
            authors: "Rodriguez, E., Kim, D., Patel, P., Zhang, L., Wilson, R.",
            venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
            year: 2025,
            type: "journal",
            citations: 89,
            abstract: "Preeclampsia prediction is a critical aspect of maternal health which enables early diagnosis and intervention for better maternal and fetal outcomes. However, preeclampsia prediction remains a challenging task due to diverse patient demographics, varying clinical practices, and limited resources. Traditional diagnostic methods often rely on clinical measurements like blood pressure and proteinuria, which can be expensive and time-consuming. This study proposes TabM, a parameter-efficient and interpretable deep learning-based model uniquely tailored for real-time preeclampsia prediction in low resource settings. The model was trained on datasets from both online and local hospital sources which include features such as maternal age, blood pressure levels and protein-to-creatinine ratios. Despite one dataset being small, the model incorporates domain adaptation strategies and external testing to enhance generalizability. Even in low-resource environments, TabM operates effectively using its ensemble learning mechanism and compact architecture, making it suitable for edge deployment. TabM outperformed traditional machine learning models including XGBoost, Random Forest, and Logistic Regression, achieving an AUCof 0.975. Furthermore, SHAP-based error analysis and confusion matrix breakdowns ensure transparency decision-making in clinical environments. This study highlights the potential of TabM to enhance preeclampsia prediction, making it an ideal solution for real-time clinical application in resource-constraints and diverse-healthcare environments.",
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
            title: "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset",
            authors: "Johnson, M., Chen, S., Williams, A., Brown, K.",
            venue: "International Conference on Machine Learning (ICML)",
            year: 2023,
            type: "conference",
            citations: 67,
            abstract: "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset ICEEIE 2025ICEEIE 2025 Surface electromyography (sEMG) provides a non invasive and effective way to interpret hand gestures. It plays a crucial role in areas such as prosthetics, human-computer interaction (HCI), and rehabilitation systems. In this study, a hybrid approach was proposed that combines multi-scale one dimensional convolutional neural networks (1D CNNs), bidirectional long short-term memory (BiLSTM) layers and an attention mechanism. The hybrid approach is lightweight but can easily captures the complex spatiotemporal patterns of sEMG signals. The study also focuses on collecting a novel dataset which was recorded from 26 individuals of different age and gender group. The basic five hand gestures samples were collected by using a user-friendly and customed application. The proposed model achieves an impressive test accuracy of 97% while maintaining a compact of 616K parameters. This lightweight model becomes more suitable for real-time deployment on low-power edge devices. The study further validated through experiments on the publicly available Ninapro dataset DB1 for its robustness and generalizability. By using a hybrid feature extraction techniques with deep neural modeling, the proposed method improves both interpretability and performance which offers a practical solution for real-time applications. This study contributes a scalable data collection framework, a novel benchmark dataset and a hybrid model advancing in sEMG-based gesture recognition.",
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
            title: "A review of blockchain approaches for kyc",
            authors: "Nafees Mansoor, Kaniz Fatema Antora, Priyata Deb, Tarek Ahammed Arman, Azizah Abdul Manaf, Mahdi Zareei",
            venue: "",
            year: 2023,
            type: "journal",
            citations: 34,
            abstract: "The traditional Know Your Customer (KYC) procedure used by banks is deemed unreliable and costly. Therefore, the adoption of emerging technologies is essential for banking firms' future prospects. One such technology that has gained widespread acceptance is Blockchain, which is known for its reliability and security across various fields. This study aims to investigate how the implementation of Blockchain technology can modify the existing banking business, particularly the KYC document verification process, by storing and monitoring of information. The current need for an optimized KYC system is paramount; one that is coupled with a secure and trustworthy technology like Blockchain that can withstand fraudulent activities while also overcoming scalability and privacy challenges. The article analyzes previous relevant works, which highlight how the implementation of Blockchain technology eliminates the need for intermediaries, thereby reducing the possibility of malicious activities and errors that may occur when there are multiple manual tasks involved. ",
            contributions: [
                "Domain-specific language model architecture",
                "Scientific text understanding benchmarks",
                "Knowledge graph construction",
                "Multi-domain evaluation framework"
            ],
            resources: [
                { type: "pdf", link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10299643", label: "PDF" },
                //{ type: "code", link: "#", label: "Code" },
                { type: "model", link: "#", label: "Model" },
                { type: "dataset", link: "#", label: "Dataset" }
            ],
            featured: false
        },
        {
            id: 5,
            title: "Novel interpretable and robust web-based AI platform for phishing email detection",
            authors: "Abdulla Al-Subaiey, Mohammed Al-Thani, Naser Abdullah Alam, Kaniz Fatema Antora, Amith Khandakar, SM Ashfaq Uz Zaman",
            venue: "",
            year: 2024,
            type: "Journal",
            citations: 28,
            abstract: "Phishing emails continue to pose a significant threat, causing financial losses and security breaches. This study addresses limitations in existing research, such as reliance on proprietary datasets and lack of real-world application, by proposing a high-performance machine learning model for email classification. Utilizing a comprehensive and largest available public dataset, the model achieves a f1 score of 0.99 and is designed for deployment within relevant applications. Additionally, Explainable AI (XAI) is integrated to enhance user trust. This research offers a practical and highly accurate solution, contributing to the fight against phishing by empowering users with a real-time web-based application for phishing email detection.",
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
            title: "Development of a blockchain-based on-demand lightweight commodity delivery system",
            authors: "Bayezid Al Hossain Onee, Kaniz Fatema Antora, Omar Sharif Rajme, Nafees Mansoor",
            venue: "",
            year: 2023,
            type: "conference",
            citations: 8,
            abstract: "The COVID-19 pandemic has caused a surge in the use of online delivery services, which rely on user-generated content to promote collaborative consumption. Although Online Food Delivery (OFD) is a popular delivery system in Bangladesh, it has yet to ensure item authenticity, especially with the increasing demand for lightweight commodity delivery services across the country. The authenticity of products, involvement of multiple parties, and fair exchange are all challenging aspects of coast-to-coast services. Therefore, it is necessary for the three entities involved in the supply chain transaction - Seller, Carrier, and Buyer - to establish at least two peer-to-peer operations to ensure reliability and efficiency. To address these limitations and meet consumer expectations, the study proposes a framework for a nationwide on-demand marketplace for lightweight commodity items and a delivery system. Furthermore, transaction details are stored in a Blockchain to ensure the transparency and reliability of the proposed system.",
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
            title: "Aiblocknet-Novel Framework for Authenticity Validation Using Blockchain and Machine Learning for Fake Image Detection",
            authors: "Kaniz Fatema Antora, Naser Abdullah Alam, Mohammed Al-Thani, Abdulla Al-Subaiey, Ahasanur Rahman, Kevin Kunjukutty Thomas, SM Zaman, Amith Khandakar",
            venue: "",
            year: 2023,
            type: "workshop",
            citations: 23,
            abstract: "The proliferation of fake images online poses a significant challenge. According to a 2022 RAND Corporation study, this issue is estimated to cost businesses $10 billion annually. Fake images erode trust and can have detrimental effects, as highlighted by a 2020 Pew Research Center survey revealing that 64% of Americans are concerned about the spread of disinformation. This work introduces a novel blockchain-based system for image authentication. The system leverages the secure and transparent ledger offered by Sepholia Testnet to create an immutable record of an image's authenticity. This is achieved by capturing and storing a cryptographic hash of the image, alongside relevant metadata, on the blockchain. Users can verify image originality by comparing a calculated hash with the one stored on the blockchain. This approach provides enhanced security, transparency, and decentralization compared to traditional methods. Furthermore, the potential integration of a deep learning model for image analysis offers additional benefits. This could significantly reduce the time spent verifying image authenticity, potentially by as much as 50% according to a 2019 Poynter Institute study focusing on journalists grappling with the vast volume of online content.",
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
            title: "Small-scale floating photovoltaic systems in university campus: A pathway to achieving SDG 7 goals in Bangladesh",
            authors: "Atik Jawad, Md Sajid Hasan, Md Fatin Ishraq Faruqui",
            venue: "Energy Conversion and Management",
            year: 2023,
            type: "Journal Article",
            citations: 15,
            abstract: "Floating photovoltaic systems (FPVs) are gaining popularity in the Asian subcontinent, particularly in densely populated countries like Bangladesh. Small-scale FPV plants, especially on university campuses, can be crucial to fulfilling SDG7 objectives by providing clean energy and addressing economic concerns, which are currently unexplored in the context of Bangladesh. To this end, this paper proposes a systematic methodology to comprehensively assess the potential of small-scale FPV in achieving SDG 7 goals, covering technical, economic, environmental, and social aspects. This study is the first to present an assessment of water evaporation deduction analysis (environmental aspect) and a systematic survey to evaluate the social aspects of the small-scale FPV plant in Bangladesh. To demonstrate the proposed approach, a simulation case study is conducted for a test FPV plant with a capacity of 116.5 kW in a small water reservoir (pond) located within the University of Liberal Arts Bangladesh (ULAB) campus in Dhaka. The results demonstrate that the proposed FPV plant can generate approximately 169.5 MWh yearly with a levelized cost of energy (LCOE) of 0.032 $. Additionally, the plant can prevent 3,715.32 m3 of water from evaporating and reduce 61 tons of GHG emissions annually, saving 93,025 $ of social cost of carbon (SCC) during its entire lifespan. In addition, the conducted survey shows a positive attitude towards FPV installation in the chosen area. Furthermore, a comparison with a rooftop solar plant in the same region highlights FPV's potential as an alternative solar-based energy source in techno-economic evaluations. Implementing the proposed FPV can significantly decrease the yearly total generating cost to meet the university's demand while ensuring clean energy in alignment with SDG7. This study can aid in the integration of renewable energy into the grid and assist policymakers in facilitating future small-scale FPV installations in Bangladesh.",
            contributions: [
                "First Comprehensive FPV Assessment in Bangladesh – The paper presents the first systematic evaluation of small-scale floating photovoltaic systems in Bangladesh, addressing technical, economic, environmental, and social aspects together.",
                "Novel Environmental and Social Analysis – It introduces water evaporation reduction analysis (environmental benefit) and a structured social survey (community acceptance), which had not been studied before in this context.",
                "Case Study Demonstration – Through a 116.5 kW FPV simulation on the ULAB campus pond, the study quantifies annual energy generation (169.5 MWh), cost-effectiveness (LCOE of $0.032), water savings (3,715.32 m³), and emission reduction (61 tons CO₂/year).",
                "Techno-Economic Comparison and Policy Guidance – By comparing FPV with rooftop solar plants, the research highlights FPV’s potential as a viable alternative and provides insights for integrating FPVs into the national renewable energy strategy aligned with SDG7."
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
            title: "Exploring classification of vehicles using horn sound analysis: a deep learning-based approach",
            authors: "Mohammad Ariful Islam Rafi, Moshiur Rahman Sohan, Md Sajid Hasan, Tammim Shahara Rafa, Atik Jawad",
            venue: "2024 23rd International Symposium INFOTEH-JAHORINA (INFOTEH)",
            year: 2024,
            type: "Conference Paper",
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
            citations: 2,
            abstract: "Vehicle classification in real-life traffic scenarios is crucial for road safety and traffic management. However, it is a complex task due to the diverse vehicle types, uncontrolled environments, and limitations of computational resources. Although visual-based models are highly accurate, they require high computational resources and have limitations. On the other hand, audio-based vehicle classification has unique strengths, making it ideal for continuous, real-time monitoring and minimizing computational load. This study proposes a new approach to vehicle classification using a 1D Convolutional Neural Network (CNN1D) by analyzing the sound of vehicle horns. It involved collecting 200 horn sounds from various vehicles and analyzing, scaling, and labeling them through Audacity. The Mel-Frequency Cepstral Coefficients (MFCCs) were used for preprocessing and feature extraction. The CNN1D model, trained on this data, accurately classifies vehicles like bikes, buses, cars, and CNG autos. The proposed model was compared to other models, including Long Short-Term Memory (LSTM), Support Vector Machines (SVM), and Artificial Neural Networks (ANN), for validation purposes. It demonstrates a well-balanced and precise vehicle classification, resulting in high precision, recall, F1-score, and accuracy of 95.12%. Moreover, the model performs better than other assessments in terms of recall, accuracy, and precision, further validating the usage of the model. This study's proposed model can be a potential solution for real-world vehicle classification and detection applications, providing a viable path for real-world applications. It may also help identify which vehicle is responsible for continuous sound pollution, leading to better traffic management and environmental protection.",
            contributions: [
                "Novel Audio-Based Classification Approach – The study proposes a CNN1D model that classifies vehicles based on horn sounds, reducing reliance on computationally expensive vision-based methods",
                "Custom Dataset Creation – A dataset of 200 horn sounds from multiple vehicle types (bikes, buses, cars, and CNG autos) was collected, labeled, and preprocessed using MFCCs, enabling efficient audio-based classification.",
                "Superior Performance Over Baseline Models – The CNN1D model achieved 95.12% accuracy and outperformed benchmark models such as LSTM, SVM, and ANN across precision, recall, and F1-score.",
                "Real-World Applicability – Beyond classification, the model can aid in traffic monitoring, sound pollution management, and vehicle accountability, making it suitable for smart city and environmental protection applications."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },



        {
            id: 11,
            title: "Clean hydrogen production from floating photovoltaics: a case study in dhanmondi Lake, Dhaka",
            authors: "Md Sajid Hasan, Atik Jawad",
            venue: "2023 10th IEEE International Conference on Power Systems (ICPS)",
            year: 2023,
            type: "conference",
            citations: 2,
            abstract: "Clean hydrogen is pivotal for reducing natural gas usage and advancing decarbonization. In this context, solar-based photovoltaic (PV) plants present a viable and eco-friendly approach to generating clean hydrogen energy. However, in densely populated countries like Bangladesh, the scarcity of available land necessitates the utilization of water bodies for PV installations, referred to as Floating PV systems (FPV). To this end, this paper proposes a novel methodology for assessing hydrogen generation through FPV systems in water bodies, taking into consideration technical, economic, and environmental concerns. The proposed methodology is implemented through the simulation of an FPV plant on Dhanmondi Lake, Dhaka, utilizing 1% of the total water body area as a conservative approach. The necessary simulations using PVsyst software demonstrate that the proposed FPV system with a capacity of 634 kWp, achieves a performance ratio (PR) of 77%. It generates an annual output of 925 MWh/year at a levelized cost of energy (LCOE) of 0.028 USD per kWh. Interestingly, this system can produce 149.6 tons of clean hydrogen annually through the PEM electrolyzation process. Furthermore, it significantly reduces greenhouse gas (GHG) emissions by 12,900.88 tons and curtails water evaporation by 14,424 m³ per year. Over the lifespan of the project, the estimated social cost of carbon for the system amounts to 786,953.68 USD. The findings of this study highlight the promising potential of FPV-based hydrogen production, offering a cleaner and more cost-effective method of energy generation. This research can aid the researchers in developing models for future large-scale FPV-based hydrogen production endeavors in Bangladesh.",
            contributions: [
                "Novel Methodology for FPV-Based Hydrogen Generation – The paper introduces a systematic framework for assessing hydrogen production from FPV systems, incorporating technical, economic, and environmental dimensions in the context of Bangladesh.",
                "Case Study on Dhanmondi Lake – A simulation of a 634 kWp FPV plant (covering only 1% of the lake area) demonstrates its feasibility, achieving 925 MWh/year generation, a 77% performance ratio, and an LCOE of 0.028 USD/kWh.",
                "Integration with PEM Electrolyzation – The study showcases the potential of producing 149.6 tons of clean hydrogen annually, highlighting the synergy between FPV power and green hydrogen production.",
                "Significant Environmental Benefits – Beyond energy, the proposed system reduces GHG emissions by 12,900.88 tons, prevents 14,424 m³ of water evaporation, and saves ~786,954 USD in social carbon cost over its lifespan."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },


        {
            id: 12,
            title: "Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: A Comprehensive Case Study",
            authors: "Mohammad Ariful Islam Rafi, Md Sajid Hasan, Md Manzurul Hasan, Jawadul Alam Chowdhury, Moshiur Rahman Sohan, Nahid A Jahan, M Mofazzal Hossain",
            venue: "IEEE Access",
            year: 2023,
            type: "Journal Article",
            citations: 1,
            abstract: "The proposed rooftop solar photovoltaic (PV) system at the Sher-e-Bangla National Cricket Stadium (SBNCS) demonstrates a sustainable energy solution addressing Bangladesh’s energy challenges. The system has a capacity of 83.2 kWp and is estimated to generate 129.5 MWh of energy annually. This deployment reduces reliance on fossil fuels and contributes to global Sustainable Development Goal 7 (SDG7). The performance evaluation reveals a Performance Ratio (PR) of 79.4%, ensuring efficient solar resource utilization. Economically, the project involves a total investment of $ 101,031, achieving annual energy cost savings of $ 5,370. Financial feasibility metrics include a Net Present Value (NPV) of $ 99,131.5, an Internal Rate of Return (IRR) of 6%, and a Payback Period (PBP) of 13 years. Furthermore, the system reduces 50 tons of CO2 emissions annually, resulting in a Social Cost of Carbon (SCC) savings of $ 77,064 over its 25-year lifespan. The project’s Levelized Cost of Energy (LCOE) is calculated as $ 0.03/kWh, reflecting its long-term cost-effectiveness. This analysis highlights the economic, environmental, and performance benefits of implementing a rooftop solar PV system at SBNCS, offering a scalable model for integrating renewable energy into and other stadiums and large infrastructure. This study can aid in the integration of renewable energy into the grid and assist policymakers in facilitating the future energy storage systems and expanding grid-tied operations for enhanced sustainability.",
            contributions: [
                "First-Ever Rooftop PV Assessment at a National Stadium in Bangladesh – The study provides a detailed techno-economic and environmental evaluation of an 83.2 kWp rooftop solar PV system at Sher-e-Bangla National Cricket Stadium, serving as a pioneering case study for large-scale sports infrastructure",
                "Comprehensive Performance and Financial Analysis – The system demonstrates strong performance (PR of 79.4%) and economic viability, with a Net Present Value (NPV) of $99,131.5, IRR of 6%, Payback Period of 13 years, and LCOE of $0.03/kWh, ensuring long-term cost-effectiveness.",
                "Environmental Sustainability and Carbon Savings – The proposed system reduces 50 tons of CO₂ emissions annually, saving $77,064 in Social Cost of Carbon (SCC) over 25 years, directly contributing to Bangladesh’s SDG7 and climate commitments.",
                "Scalable Model for Future Applications – Beyond SBNCS, the findings establish a replicable framework for deploying rooftop solar PV in other stadiums and large infrastructure, supporting policymakers in integrating renewable energy and future grid-tied storage systems."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },




        {
            id: 13,
            title: "Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: A Comprehensive Case Study",
            authors: "Mohammad Ariful Islam Rafi, Md Sajid Hasan, Md Manzurul Hasan, Jawadul Alam Chowdhury, Moshiur Rahman Sohan, Nahid A Jahan, M Mofazzal Hossain",
            venue: "IEEE Access",
            year: 2023,
            type: "Journal Article",
            citations: 1,
            abstract: "The proposed rooftop solar photovoltaic (PV) system at the Sher-e-Bangla National Cricket Stadium (SBNCS) demonstrates a sustainable energy solution addressing Bangladesh’s energy challenges. The system has a capacity of 83.2 kWp and is estimated to generate 129.5 MWh of energy annually. This deployment reduces reliance on fossil fuels and contributes to global Sustainable Development Goal 7 (SDG7). The performance evaluation reveals a Performance Ratio (PR) of 79.4%, ensuring efficient solar resource utilization. Economically, the project involves a total investment of $ 101,031, achieving annual energy cost savings of $ 5,370. Financial feasibility metrics include a Net Present Value (NPV) of $ 99,131.5, an Internal Rate of Return (IRR) of 6%, and a Payback Period (PBP) of 13 years. Furthermore, the system reduces 50 tons of CO2 emissions annually, resulting in a Social Cost of Carbon (SCC) savings of $ 77,064 over its 25-year lifespan. The project’s Levelized Cost of Energy (LCOE) is calculated as $ 0.03/kWh, reflecting its long-term cost-effectiveness. This analysis highlights the economic, environmental, and performance benefits of implementing a rooftop solar PV system at SBNCS, offering a scalable model for integrating renewable energy into and other stadiums and large infrastructure. This study can aid in the integration of renewable energy into the grid and assist policymakers in facilitating the future energy storage systems and expanding grid-tied operations for enhanced sustainability.",
            contributions: [
                "First-Ever Rooftop PV Assessment at a National Stadium in Bangladesh – The study provides a detailed techno-economic and environmental evaluation of an 83.2 kWp rooftop solar PV system at Sher-e-Bangla National Cricket Stadium, serving as a pioneering case study for large-scale sports infrastructure",
                "Comprehensive Performance and Financial Analysis – The system demonstrates strong performance (PR of 79.4%) and economic viability, with a Net Present Value (NPV) of $99,131.5, IRR of 6%, Payback Period of 13 years, and LCOE of $0.03/kWh, ensuring long-term cost-effectiveness.",
                "Environmental Sustainability and Carbon Savings – The proposed system reduces 50 tons of CO₂ emissions annually, saving $77,064 in Social Cost of Carbon (SCC) over 25 years, directly contributing to Bangladesh’s SDG7 and climate commitments.",
                "Scalable Model for Future Applications – Beyond SBNCS, the findings establish a replicable framework for deploying rooftop solar PV in other stadiums and large infrastructure, supporting policymakers in integrating renewable energy and future grid-tied storage systems."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },



        







    ];

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 5;
    let filteredPublications = [...publicationsData];
    let currentFilter = 'all';
    let currentSort = 'year-desc';
    let currentRequestedResource = '';

    // Modal elements
    const publicationModal = document.getElementById('publication-modal');
    const datasetModal = document.getElementById('dataset-modal');
    const successModal = document.getElementById('success-modal');

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
                <a href="${resource.link}" class="btn btn-outline btn-small resource-btn" data-resource-type="${resource.type}" data-resource-label="${resource.label}">
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
            link.className = 'btn btn-outline resource-btn';
            link.setAttribute('data-resource-type', resource.type);
            link.setAttribute('data-resource-label', resource.label);
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

    // Dataset/Model Request Modal Functionality
    function setupDatasetModal() {
        const datasetRequestForm = document.getElementById('dataset-request-form');
        const cancelRequestBtn = document.getElementById('cancel-request');
        const successOkBtn = document.getElementById('success-ok');

        // Handle resource button clicks
        document.addEventListener('click', function(e) {
            if (e.target.closest('.resource-btn')) {
                e.preventDefault();
                const resourceBtn = e.target.closest('.resource-btn');
                const resourceType = resourceBtn.getAttribute('data-resource-type');
                const resourceLabel = resourceBtn.getAttribute('data-resource-label');
                
                // Only show modal for dataset and model resources
                if (resourceType === 'dataset' || resourceType === 'model') {
                    currentRequestedResource = resourceLabel;
                    document.getElementById('requested-resource').value = resourceLabel;
                    showDatasetModal();
                }
            }
        });

        // Show dataset modal
        function showDatasetModal() {
            datasetModal.classList.add('active');
            document.body.classList.add('no-scroll');
        }

        // Close dataset modal
        function closeDatasetModal() {
            datasetModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
            datasetRequestForm.reset();
        }

        // Show success modal
        function showSuccessModal() {
            datasetModal.classList.remove('active');
            successModal.classList.add('active');
        }

        // Close success modal
        function closeSuccessModal() {
            successModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }

        // Form submission
        datasetRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, we'll just show the success message
            showSuccessModal();
        });

        // Cancel request
        cancelRequestBtn.addEventListener('click', closeDatasetModal);

        // Success modal OK button
        successOkBtn.addEventListener('click', closeSuccessModal);

        // Close modals when clicking outside
        datasetModal.addEventListener('click', function(e) {
            if (e.target === datasetModal) {
                closeDatasetModal();
            }
        });

        successModal.addEventListener('click', function(e) {
            if (e.target === successModal) {
                closeSuccessModal();
            }
        });

        // Escape key to close modals
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (datasetModal.classList.contains('active')) {
                    closeDatasetModal();
                } else if (successModal.classList.contains('active')) {
                    closeSuccessModal();
                }
            }
        });
    }

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
    setupDatasetModal();
    
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