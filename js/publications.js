document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120
    });

const publicationsData = [
        
        {
            id: 1,
            title: "Preeclampsia Prediction Using Machine Learning with Electronic Medical Records in Low-Resource Settings",
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
            authors: "Fazlay Rabby, MD. Musfiqur Rahman, and Rajdeep Das, ",
            venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
            year: 2025,
            type: "journal",
            citations: 1,
            abstract: "Preeclampsia prediction is a critical aspect of maternal health which enables early diagnosis and intervention for better maternal and fetal outcomes. However, preeclampsia prediction remains a challenging task due to diverse patient demographics, varying clinical practices, and limited resources. Traditional diagnostic methods often rely on clinical measurements like blood pressure and proteinuria, which can be expensive and time-consuming. This study proposes TabM, a parameter-efficient and interpretable deep learning-based model uniquely tailored for real-time preeclampsia prediction in low resource settings. The model was trained on datasets from both online and local hospital sources which include features such as maternal age, blood pressure levels and protein-to-creatinine ratios. Despite one dataset being small, the model incorporates domain adaptation strategies and external testing to enhance generalizability. Even in low-resource environments, TabM operates effectively using its ensemble learning mechanism and compact architecture, making it suitable for edge deployment. TabM outperformed traditional machine learning models including XGBoost, Random Forest, and Logistic Regression, achieving an AUCof 0.975. Furthermore, SHAP-based error analysis and confusion matrix breakdowns ensure transparency decision-making in clinical environments. This study highlights the potential of TabM to enhance preeclampsia prediction, making it an ideal solution for real-time clinical application in resource-constraints and diverse-healthcare environments.",
            contributions: [
                "Novel Parameter-Efficient Deep Learning Model – The study introduces TabM, a compact and interpretable deep learning model specifically designed for real-time preeclampsia prediction in low-resource healthcare settings.",
                "Robust Multi-Source Training and Domain Adaptation – TabM is trained on both online and local hospital datasets, incorporating domain adaptation strategies to enhance generalizability even with small datasets.",
                "Superior Performance Compared to Traditional Models – The model outperforms XGBoost, Random Forest, and Logistic Regression, achieving an AUC of 0.975, demonstrating high predictive capability.",
                "Transparency and Clinical Interpretability – SHAP-based error analysis and confusion matrix insights ensure explainability, supporting reliable and interpretable clinical decision-making."
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
            authors: "Fazlay Rabby, Rajdeep Das,Musfiqur Rahman, Rifat Aknda.",
            venue: "ICEEIE 2025",
            year: 2025,
            type: "conference",
            citations: 1,
            abstract: "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Dataset ICEEIE 2025ICEEIE 2025 Surface electromyography (sEMG) provides a non invasive and effective way to interpret hand gestures. It plays a crucial role in areas such as prosthetics, human-computer interaction (HCI), and rehabilitation systems. In this study, a hybrid approach was proposed that combines multi-scale one dimensional convolutional neural networks (1D CNNs), bidirectional long short-term memory (BiLSTM) layers and an attention mechanism. The hybrid approach is lightweight but can easily captures the complex spatiotemporal patterns of sEMG signals. The study also focuses on collecting a novel dataset which was recorded from 26 individuals of different age and gender group. The basic five hand gestures samples were collected by using a user-friendly and customed application. The proposed model achieves an impressive test accuracy of 97% while maintaining a compact of 616K parameters. This lightweight model becomes more suitable for real-time deployment on low-power edge devices. The study further validated through experiments on the publicly available Ninapro dataset DB1 for its robustness and generalizability. By using a hybrid feature extraction techniques with deep neural modeling, the proposed method improves both interpretability and performance which offers a practical solution for real-time applications. This study contributes a scalable data collection framework, a novel benchmark dataset and a hybrid model advancing in sEMG-based gesture recognition.",
            contributions: [
                "Hybrid Lightweight Deep Learning Model – The study proposes a novel model combining multi-scale 1D CNNs, BiLSTM layers, and an attention mechanism, effectively capturing complex spatiotemporal patterns in sEMG signals with only 616K parameters.",
                "New Diverse Dataset and Scalable Data Collection Framework – A dataset of five hand gestures was collected from 26 participants of different ages and genders using a custom, user-friendly application, providing a benchmark for future research.",
                "High Accuracy and Real-Time Suitability – The model achieved 97% test accuracy and is compact enough for real-time deployment on low-power edge devices, enabling practical applications in prosthetics, HCI, and rehabilitation systems.",
                "Robustness and Generalizability Validation – The proposed method was further validated on the publicly available Ninapro DB1 dataset, demonstrating scalability and strong generalization across diverse subjects."
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
                "Critical Analysis of Traditional KYC Limitations – The study identifies the inefficiencies, high costs, and unreliability of conventional KYC procedures in banking.",
                "Proposing Blockchain for KYC Optimization – It highlights how Blockchain can enhance KYC by providing secure, tamper-proof storage and monitoring of customer information, reducing dependency on intermediaries.",
                "Addressing Scalability and Privacy Challenges – The research highlights how blockchain implementation can overcome critical issues related to scalability and data privacy in banking KYC processes.",
                "Comprehensive Analysis of Existing Solutions – The study synthesizes previous work on blockchain-enabled KYC systems, providing insights into best practices and technological improvements for secure and efficient customer verification."
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
                "High-Performance Machine Learning Model – The study proposes a robust model for phishing email classification, achieving an F1-score of 0.99 using the largest available public dataset.",
                "Integration of Explainable AI (XAI) – By incorporating XAI, the model enhances transparency and user trust, making predictions interpretable for real-world applications.",
                "Practical Real-World Deployment – The approach is designed for implementation in web-based platforms, providing real-time phishing detection for end-users.",
                "Addressing Gaps in Previous Research – The study overcomes limitations of prior works, including reliance on proprietary datasets and lack of practical applicability, offering a scalable and actionable solution for cybersecurity."
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
                "Blockchain-Based Nationwide Delivery Framework – The study proposes a secure and transparent system for lightweight commodity delivery in Bangladesh, leveraging blockchain to ensure transaction reliability among sellers, carriers, and buyers.",
                "Enhancing Supply Chain Authenticity – By implementing peer-to-peer operations between the three entities, the framework addresses challenges of product authenticity, multi-party involvement, and fair exchanges.",
                "Support for On-Demand Marketplaces – The proposed system enables a scalable nationwide on-demand marketplace, catering to the growing demand for lightweight delivery services in a post-pandemic context.",
                "Improved Transparency and Efficiency – Blockchain integration ensures tamper-proof record-keeping and trust in supply chain transactions, enhancing overall efficiency and consumer confidence."
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
                "Blockchain-Enabled Image Authentication – The study introduces a system that uses the Sepholia Testnet blockchain to store cryptographic hashes and metadata, creating an immutable record of image authenticity.",
                "Enhanced Security, Transparency, and Decentralization – By leveraging blockchain, the proposed system improves upon traditional image verification methods, reducing risks of tampering and fostering trust.",
                "User-Friendly Verification Process – Users can easily verify image originality by comparing computed hashes with the blockchain record, streamlining authenticity checks.",
                "Potential Integration with Deep Learning – The framework allows for the future integration of deep learning-based image analysis, potentially reducing verification time by up to 50% and improving scalability for high-volume content."
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




        {
            id: 14,
            title: "Assessment of Greenhouse Gas Emissions and Mitigation Strategies for a University in Bangladesh",
            authors: "Mirza Rasheduzzaman, Md Sajid Hasan, Nayma Akther Jahan, Atik Jawad, M Mofazzal Hossain",
            venue: "IEEE Access",
            year: 2025,
            type: "Journal Article",
            citations: 1,
            abstract: "Climate change is an urgent global challenge. Higher education institutions (HEIs) have a crucial role in addressing this issue by reducing their environmental impact. This study presents the first comprehensive assessment of greenhouse gas (GHG) emissions at a university in Bangladesh using the GHG Protocol Corporate Standard to categorize emissions into scopes 1, 2, and 3. The total GHG emissions amount to 2498.80 tons of carbon dioxide equivalent (tCO2e) annually, with a per capita carbon footprint of 0.4671 tCO2e. Scope 1 emissions, primarily from university vehicles, generators, cafeterias, and air conditioners, account for 29.73% (742.55 tCO2e). Scope 2 emissions, related to purchased electricity from power grid, are at 18.18% (454.14 tCO2e). The largest contributor is the indirect emissions from commuting in scope 3, accounting for 52.10% (1302.14 tCO2e) of the total. Major emission sources include air conditioners, purchased electricity and commuting of university personnel by cars. To reduce these emissions, the study presents a scenario based mitigation framework consisting of Conventional, Incremental, and Comprehensive Scenarios with targeted interventions for each scope. These include addressing high fugitive emissions from airconditioner by replacing current coolant gases with more efficient alternatives such as R32, transitioning to hybrid or solar-powered electric vehicles, expanding shared transport options, and integrating rooftop and floating solar systems. Although the study is based on one university, the proposed strategies are designed to be broadly applicable to universities across Bangladesh. The study also emphasizes energy efficiency, eco-friendly mobility, and integrating sustainability into the curriculum. This study underscores the need for localized assessments and tailored strategies to effectively address the unique challenges of reducing GHG emissions in HEIs, providing a robust framework for creating a more sustainable university community.",
            contributions: [
                "First Comprehensive GHG Assessment in a Bangladeshi University – The study applies the GHG Protocol Corporate Standard to quantify emissions across scopes 1, 2, and 3, establishing a baseline carbon footprint of 2498.80 tCO₂e annually.",
                "Identification of Major Emission Sources – It highlights the dominant contributors, including air conditioners, purchased electricity, and commuting, with scope 3 commuting emissions accounting for the largest share (52.10%).",
                "Scenario-Based Mitigation Framework – The research introduces Conventional, Incremental, and Comprehensive mitigation pathways, offering targeted interventions such as refrigerant replacement, electric/solar vehicle adoption, shared transport, and solar integration.",
                "Scalable Policy and Practical Insights – While focused on one university, the proposed strategies are designed to be replicable across higher education institutions in Bangladesh, providing actionable guidance for policymakers and administrators to reduce HEI emissions."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },



        {
            id: 15,
            title: "The Potential of Agrophotovoltaics in Sustainable Energy Generation: A Case Study in Bangladesh",
            authors: "Md. Sajid Hasan, Atik Jawad",
            venue: "2024 5th International Conference on Communications, Information, Electronic and Energy Systems (CIEES)",
            year: 2024,
            type: "Conference",
            citations: 1,
            abstract: "Bangladesh, with its extensive agricultural landscape, faces considerable energy shortages. Adopting a dual-use strategy for agricultural land, which combines solar technology for energy generation and agricultural practices, could be highly advantageous in the future. To this end, this paper proposes a systematic approach to evaluate the feasibility of APV through proper modeling, design and analysis in a fertile land. The proposed methodology focuses on Naogaon in Bangladesh's Rajshahi division, assessing the viability of Agrophotovoltaic (APV) systems. AquaCrop is used for crop yield analysis, and HelioScope for solar plant design and power generation. Results show the Levelized Cost of Electricity (LCOE) for the APV system to be economically favorable at 0.0358,withanannualelectricityoutputof57.33MWh.Furthermore,theAPVsystemenablesagriculturalproductivity,yielding3.73tonsofcropsperhectare.Environmentalbenefitsaresubstantial,includinga30−tonannualreductioningreenhousegasemissions.ThestudyalsocalculatesasignificantSocialCostofCarbon(SCC)at45,750, demonstrating the system's effectiveness in carbon emission reduction. This research offers a critical framework for future APV system implementations, especially in countries where agriculture is a key economic and environmental element, representing an important stride towards sustainable and renewable energy solutions.",
            contributions: [
                "First Systematic APV Feasibility Assessment in Bangladesh – The study develops a structured methodology combining crop yield modeling (AquaCrop) and solar energy design (HelioScope) to evaluate APV systems in fertile agricultural land.",
                "Dual Productivity Demonstration – The proposed APV system simultaneously generates 57.33 MWh of clean electricity annually (LCOE: 0.0358) while sustaining agricultural output of 3.73 tons of crops per hectare.",
                "Significant Environmental and Economic Benefits – The system achieves a 30-ton annual reduction in GHG emissions and avoids $45,750 in Social Cost of Carbon (SCC), highlighting its sustainability and cost-effectiveness.",
                "Scalable Framework for Future Adoption – The findings provide a replicable approach for integrating APV systems into Bangladesh’s agricultural landscape, offering policymakers and researchers a pathway to balance food security with renewable energy expansion."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },




        {
            id: 16,
            title: "Superconductors Application in Power Sector: A Review",
            authors: "Md Sajid Hasan, Jannatun Nayeem Anjuman, Jayed Ali, Atik Jawad",
            venue: "2024 International BIT Conference (BITCON)",
            year: 2024,
            type: "Conference",
            citations: 1,
            abstract: "This study investigates the use of high-temperature superconductors (HTS) in the power industry, starting with the historical discovery of superconductors. It highlights the distinct features of HTS, including zero electrical resistance and perfect diamagnetism. The focus is on Yttrium Barium Copper Oxide (YBCO), Bismuth-Strontium-CalciumCopper-Oxide (Bi-2223), and Magnesium Diboride (MgB2), exploring their impact on power transmission efficiency, transformer innovations, and Superconducting Magnetic Energy Storage (SMES) systems. The paper also examines the economic viability and environmental sustainability of these materials in transforming the power sector, addressing challenges and future opportunities for widespread adoption.",
            contributions: [
                "Comprehensive Review of HTS Materials – The study explores the properties and applications of key superconductors such as YBCO, Bi-2223, and MgB₂, emphasizing their unique features of zero resistance and perfect diamagnetism.",
                "Application in Power Sector Innovations – It assesses the role of HTS in advancing power transmission, transformer design, and Superconducting Magnetic Energy Storage (SMES), demonstrating their potential to enhance efficiency.",
                "Economic and Environmental Evaluation – The research analyzes the cost-effectiveness and sustainability of HTS adoption, linking technological innovation with long-term viability in the power industry.",
                "Future Challenges and Opportunities – By addressing barriers to scalability and deployment, the study provides a roadmap for advancing HTS integration in energy systems worldwide."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },


        {
            id: 17,
            title: "Early-Stage Coronary Artery Disease Prediction Using Coronary Angiogram for Stenosis Detection in Low-Resource Settings",
            authors: "Fazlay Rabbi, Rajdeep, Musfiqur rahman, hridoy hossin, Redwan Ahamad Samir",
            venue: "BIM2025",
            year: 2025,
            type: "Conference",
            citations: 1,
            abstract: "Coronary Artery Disease (CAD) is a leading cause of death worldwide, emphasizing the need for early and accurate detection. This study proposes a dual-branch deep learning model using Coronary Angiography (CAG) images, integrating EfficientNet-B0 for feature extraction, CBAM for attention to stenotic regions, and Grad-CAM for visual interpretability. A Bayesian layer refines predictions by incorporating prior medical knowledge by improving diagnostic reliability. Trained on the CADICA dataset, the model achieved 99.75\% accuracy, with high precision, recall and F1-scores across both CAD-positive and negative cases. Compared to state-of-the-art methods, the proposed structure offers superior performance and a lightweight architecture suitable for low-resource settings. The strong accuracy and interpretability of the model make it a practical tool for early CAD diagnosis in clinical environments.",
            contributions: [
                "Novel Dual-Branch Deep Learning Architecture – The study introduces a dual-branch model combining EfficientNet-B0 for robust feature extraction, CBAM for focusing on stenotic regions, and Grad-CAM for visual interpretability.",
                "Integration of Bayesian Learning – By incorporating a Bayesian layer, the model enhances diagnostic reliability through the inclusion of prior medical knowledge.",
                "High Performance on Real Dataset – Trained on the CADICA dataset, the model achieved 99.75% accuracy with consistently high precision, recall, and F1-scores, outperforming state-of-the-art CAD detection methods.",
                "Lightweight and Clinically Applicable – The architecture is computationally efficient, making it suitable for deployment in low-resource clinical settings, with strong interpretability to support medical decision-making."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },

        {
            id: 18,
            title: "Scalable sEMG-Based User-Independent Deep Learning Framework for Assistive Wheelchair Control",
            authors: "Fazlay Rabbi, Rajdeep, Musfiqur rahman, hridoy hossin, Redwan Ahamad Samir",
            venue: "BIM2025",
            year: 2025,
            type: "Conference",
            citations: 1,
            abstract: "Surface electromyography (sEMG) based wheelchair control improve the life of people with severe disabilities. This study presents a low-cost real-time and user-independent wearable system for omnidirectional wheelchair control using sEMG signals. The proposed framework leverages a Myo Armband to acquire data from six gestures. The collected signals later processed through a hybrid deep learning model combining 1D Convolutional Neural Networks (CNN) with a Bidirectional LSTM (BiLSTM) and attention mechanism. Data from 26 participants were collected and validated using a Leave-One-User-Out cross-validation strategy which achieves an average classification accuracy of 97%. The system is integrated with an ESP32 microcontroller and tested on a custom-built electric wheelchair, enabling gesture-based mobility. Real-time responsiveness and optimized power consumption (average 30.5W) ensure practical usability. This study demonstrates the feasibility of deploying affordable, accurate and user-independent sEMG-based assistive wheelchair in low-resource settings.",
            contributions: [
                "User-Independent Low-Cost Assistive Framework – The study proposes a real-time, affordable, and user-independent wearable system for omnidirectional wheelchair control using sEMG signals from a Myo Armband.",
                "Hybrid Deep Learning Architecture – A novel CNN–BiLSTM with attention mechanism is developed to classify six distinct gestures, achieving an average accuracy of 97% using Leave-One-User-Out cross-validation across 26 participants.",
                "Hardware Integration and Real-World Testing – The system is embedded into an ESP32 microcontroller and successfully implemented on a custom-built electric wheelchair, validating real-time performance.",
                "Practicality for Low-Resource Settings – With optimized power consumption (30.5W) and high responsiveness, the system demonstrates strong potential for deployment in assistive technologies for people with severe disabilities."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },

        {
            id: 19,
            title: "TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML for Mechanical Arm Control in Low-Resource Settings",
            authors: "Fazlay Rabby and Md. Rifat Aknda and Mumtahina Tasnim Mahi and Shaikh Radwan Ahmed Ratul and Bahadur Zaman Shezan",
            venue: "2nd IEEE Conference on Computing Applications and Systems (COMPAS)",
            year: 2025,
            type: "Conference",
            citations: 1,
            abstract: "This study introduces TinySenseNet, a lightweight, memory-efficient deep learning model for real-time control of robotic arms through surface electromyography (sEMG) and inertial measurement unit (IMU) signal fusion, optimized for deployment on low-power embedded systems. The system leverages a 1D convolutional pipeline with an attention mechanism to extract and fuse multimodal features within a 150ms time window, enabling low-latency gesture recognition using TinyML. A custom hardware setup combining an ESP32 MCU, MyoArmband, and PCA9685-controlled MG996R servos delivers precise 6-DoF articulation with power-aware safety mechanisms. Extensive evaluation across controlled lab settings, real-world noisy environments, and clinical trials with transradial amputees demonstrates superior robustness and generalizability. TinysenseNet achieves 95.7% accuracy for amputees, 93.3% in real-world settings, and 97.2% for able-bodied users, outperforming CNN, SVM, and LSTM baselines by a significant margin. The model occupies only 1.46KB, with 23.8ms latency. The key features of this study are cross-modal delay features, confidence-based actuation with haptic feedback, and a culturally adapted gesture set. This work presents an affordable, scalable, clinically viable solution for intelligent mechanical control in low-resource environments.",
            contributions: [
                "Lightweight Multimodal Deep Learning Model – TinySenseNet fuses sEMG and IMU signals using a 1D CNN with attention, achieving low-latency gesture recognition (150ms) and optimized for deployment on low-power embedded systems (TinyML).",
                "Hardware-Integrated Real-Time Robotic Arm Control – The system uses ESP32, Myo Armband, and PCA9685-controlled MG996R servos to deliver precise 6-DoF articulation with power-aware safety mechanisms.",
                "High Accuracy and Robustness Across Users and Environments – Achieves 95.7% accuracy for amputees, 93.3% in real-world noisy settings, and 97.2% for able-bodied users, outperforming CNN, SVM, and LSTM baselines.",
                "Ultra-Compact and Clinically Viable Solution – The model occupies only 1.46KB with 23.8ms latency, incorporates cross-modal delay features, confidence-based actuation with haptic feedback, and culturally adapted gestures, making it scalable and practical for low-resource environments."
            ],
            resources: [
                { type: "pdf", link: "#", label: "PDF" },
                { type: "code", link: "#", label: "Code" },
                { type: "demo", link: "#", label: "Demo" }
            ],
            featured: false
        },


        {
            id: 20,
            title: "Real-Time Brain Tumor Localization and Classification Using YOLOv11 and MONAI MedNeXt",
            authors: "Fazlay Rabby and Mohammad Hridoy Hossain and Md. Rifat Aknda and Bahadur Zaman Shezan and Sanjida Salwa Mou",
            venue: "2nd IEEE Conference on Computing Applications and Systems (COMPAS)",
            year: 2025,
            type: "Conference",
            citations: 1,
            abstract: "Early and precise detection of brain tumors remains a major challenge in clinical radiology, particularly in real time applications. This study introduces a novel hybrid deep learning framework that combines YOLOv11 for rapid tumor localization with MONAI’s MedNeXt for advanced 3D classification and grading. Leveraging a clinically annotated, locally sourced dataset of 3,500 MRI scans along with two benchmark datasets, the system addresses key challenges of accuracy, interpretability, and deployment readiness. YOLOv11 integrates a hybrid CSPDarknet–Swin Transformer backbone with anchor-free detection and Soft-NMS refinement for precise localization across diverse tumor morphologies. MedNeXt, enhanced with SimCLR-based contrastive pretraining, attention mechanisms, and multi-head classification, accurately distinguishes tumor type and severity. The pipeline incorporates Grad-CAM++ for explainability and Monte Carlo Dropout for uncertainty estimation, ensuring clinical transparency and decision support. Optimized using ONNX and TensorRT, the system supports PACS/DICOM and EMR integration for real-time inference in hospital environments. The model achieves state-of-the-art results—99.60% accuracy, 99.76% precision, 99.52% recall, and 99.64% F1-score—outperforming leading architectures like InceptionNetv4 and EfficientNetB0. Designed with a focus on deployment in resource-constrained settings, this framework advances AI-assisted radiology by offering a robust, interpretable, and scalable solution for brain tumor diagnostics.",
            contributions: [
                "Hybrid Deep Learning Framework – The study introduces a novel pipeline combining YOLOv11 for rapid tumor localization with MONAI’s MedNeXt for advanced 3D tumor classification and grading.",
                "High Accuracy and State-of-the-Art Performance – Evaluated on 3,500 locally sourced MRI scans and benchmark datasets, the system achieves 99.60% accuracy, outperforming leading architectures like InceptionNetv4 and EfficientNetB0.",
                "Clinical Interpretability and Decision Support – Grad-CAM++ and Monte Carlo Dropout provide explainability and uncertainty estimation, supporting transparent and reliable clinical decision-making.",
                "Deployment-Ready for Real-Time Settings – Optimized with ONNX and TensorRT, the framework integrates with PACS/DICOM and EMR systems, enabling scalable, resource-efficient, real-time AI-assisted radiology solutions."
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

    // Create publication card (UPDATED - removed abstract and resource buttons)
    function createPublicationCard(pub, index) {
        const card = document.createElement('div');
        card.className = 'publication-item glass-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString());
        
        // Helper function to get display type name
        const getDisplayType = (pubType) => {
            const typeLabels = {
                'journal': 'Journal Article',
                'journal article': 'Journal Article',
                'conference': 'Conference Paper',
                'workshop': 'Workshop Paper',
                'preprint': 'Preprint'
            };
            const normalizedType = pubType.toLowerCase().trim();
            return typeLabels[normalizedType] || pubType;
        };

        // Helper function to get icon
        const getTypeIcon = (pubType) => {
            const normalizedType = pubType.toLowerCase().trim();
            switch(normalizedType) {
                case 'journal':
                case 'journal article':
                    return 'fa-book';
                case 'conference':
                    return 'fa-users';
                case 'workshop':
                    return 'fa-chalkboard-teacher';
                case 'preprint':
                    return 'fa-file-alt';
                default:
                    return 'fa-file-alt';
            }
        };
        
        card.innerHTML = `
            <div class="publication-header">
                <div class="publication-badge ${pub.type}">
                    <i class="fas ${getTypeIcon(pub.type)}"></i>
                    <span>${getDisplayType(pub.type)}</span>
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
            <div class="publication-actions">
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

    // Updated showPublicationModal function
function showPublicationModal(pub) {
    // Populate modal content with proper structure
    document.getElementById('modal-publication-title').textContent = pub.title;
    document.getElementById('modal-publication-authors').textContent = pub.authors;
    document.getElementById('modal-publication-venue').textContent = pub.venue;
    document.getElementById('modal-publication-year').textContent = pub.year;
    document.getElementById('modal-citation-count').textContent = pub.citations;
    document.getElementById('modal-publication-abstract').textContent = pub.abstract;

    // Add publication type to meta info
    const publicationType = {
        journal: 'Journal Article',
        conference: 'Conference Paper', 
        workshop: 'Workshop Paper',
        preprint: 'Preprint'
    }[pub.type] || pub.type;

    // Update the meta container to include type
    const metaContainer = document.querySelector('.modal-meta');
    metaContainer.innerHTML = `
        <span id="modal-publication-type">
            <i class="fas fa-file-alt"></i>
            ${publicationType}
        </span>
        <span id="modal-publication-year">
            <i class="fas fa-calendar"></i>
            ${pub.year}
        </span>
        <span id="modal-publication-citations">
            <i class="fas fa-quote-right"></i>
            <span id="modal-citation-count">${pub.citations}</span> citations
        </span>
    `;

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

        // Handle resource button clicks (now only in modal)
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