import React from 'react';
import FadeIn from './FadeIn';
import ProjectLinks from './LiveProjectButton';

const PROJECTS = [
  // Original 2 Projects
  {
    id: '01',
    category: 'Award Focus · Battery Tech',
    title: 'AI-Based Smart Battery Regulator',
    subtitle: 'Shortlisted — Dubai Global Summit 2026',
    description: 'Intelligent battery management using machine learning and real-time monitoring to predict health, prevent sulfation, extend lifespan, and reduce operational costs.',
    tags: ['Machine Learning', 'IoT', 'Predictive Analytics', 'Battery Tech'],
    demoHref: 'battery.mp4',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '02',
    category: 'Healthcare Innovation',
    title: 'Blood Group Detection System',
    subtitle: 'Biometric Deep Learning Engine',
    description: 'Non-invasive blood group prediction using fingerprint biometrics and deep learning models, combining biometric authentication with healthcare innovation.',
    tags: ['Deep Learning', 'Biometrics', 'Healthcare', 'Computer Vision'],
    demoHref: 'https://your-vercel-link-here.vercel.app',
    githubHref: 'https://github.com/elumalai72',
  },

  // IoT & Embedded Projects
  {
    id: '03',
    category: 'AI & Infrastructure',
    title: 'Smart Traffic Analytics System',
    subtitle: 'Real-Time Congestion Control',
    description: 'Uses image processing to monitor vehicle congestion in real-time and dynamically control traffic lights for optimized traffic flow.',
    tags: ['Image Processing', 'Computer Vision', 'Automation', 'Smart City'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '04',
    category: 'Healthcare & IoT',
    title: 'IoT Health Monitoring System',
    subtitle: 'Wearable Vitals Tracker',
    description: 'A wearable device that continuously tracks vital signs like heart rate, temperature, and SpO2, transmitting data to doctors via the cloud.',
    tags: ['IoT', 'Wearable Tech', 'Cloud Computing', 'Sensors'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '05',
    category: 'Smart Agriculture',
    title: 'Smart Irrigation & Crop Monitoring',
    subtitle: 'Automated Water Management',
    description: 'Integrates soil moisture sensors, a microcontroller, and IoT modules to automate water pumps and prevent crop damage.',
    tags: ['Microcontrollers', 'IoT', 'Sensors', 'Agriculture'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '06',
    category: 'Wireless Communication',
    title: 'Li-Fi Data Transfer System',
    subtitle: 'Light-Based Data Transmission',
    description: 'A communication system that transmits audio or text wirelessly using LED light flashes and an LDR sensor.',
    tags: ['Li-Fi', 'Optics', 'Networking', 'Hardware'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '07',
    category: 'Environmental Tech',
    title: 'AI Vision-Based Waste Segregator',
    subtitle: 'Automated Recycling Classifier',
    description: 'Employs computer vision to detect and automatically separate different waste materials for efficient recycling processes.',
    tags: ['Computer Vision', 'Automation', 'Hardware', 'ML'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '08',
    category: 'Renewable Energy',
    title: 'Solar EV Charging & Monitoring',
    subtitle: 'EV Infrastructure Grid',
    description: 'Tracks parameters like charging current, battery status, and voltage levels in an Electric Vehicle (EV) charging setup powered by solar energy.',
    tags: ['Solar Tech', 'EV Infrastructure', 'Power Systems', 'Sensors'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '09',
    category: 'Environmental IoT',
    title: 'IoT-Based Weather Station',
    subtitle: 'Remote Climate Dashboard',
    description: 'Collects real-time environmental data including temperature, humidity, and air quality, uploading it to a web dashboard for remote access.',
    tags: ['IoT', 'Data Logging', 'Cloud Dashboard', 'Sensors'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '10',
    category: 'Automotive Safety',
    title: 'Automated Anti-Sleep Alarm',
    subtitle: 'Fatigue Detection ML Model',
    description: 'Uses a camera and machine learning to detect eye-blinking patterns and facial fatigue to alert drivers and prevent road accidents.',
    tags: ['Machine Learning', 'Computer Vision', 'Edge AI', 'Safety'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },

  // AI & Machine Learning Core Projects
  {
    id: '11',
    category: 'Predictive Analytics · Beginner',
    title: 'House Price Prediction',
    subtitle: 'Demonstrates regression & feature engineering',
    description: 'A predictive modeling tool using Linear Regression and Random Forest algorithms to estimate real estate prices based on property features.',
    tags: ['Linear Regression', 'Random Forest', 'Data Engineering'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '12',
    category: 'Business Intelligence · Beginner',
    title: 'Customer Segmentation',
    subtitle: 'Shows unsupervised learning for business ROI',
    description: 'Analyzes customer data using K-Means Clustering and PCA to group users by purchasing behavior for targeted marketing.',
    tags: ['K-Means Clustering', 'PCA', 'Unsupervised ML'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '13',
    category: 'NLP & Text Processing · Beginner',
    title: 'Email/SMS Spam Classifier',
    subtitle: 'Introduces fundamental text preprocessing',
    description: 'A text classification model using Naive Bayes and TF-IDF to accurately filter and flag spam communications.',
    tags: ['Naive Bayes', 'TF-IDF', 'Scikit-learn', 'NLP'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '14',
    category: 'Financial Security · Intermediate',
    title: 'Credit Card Fraud Detection',
    subtitle: 'Proves ability to handle highly imbalanced data',
    description: 'An advanced ensemble model leveraging XGBoost and SMOTE to detect fraudulent transactions in massively imbalanced datasets.',
    tags: ['XGBoost', 'SMOTE', 'Ensemble Methods', 'Finance Tech'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '15',
    category: 'Corporate AI · Intermediate',
    title: 'E-commerce Customer Churn',
    subtitle: 'Directly translates to real-world corporate needs',
    description: 'Predictive analytics pipeline using Logistic Regression and LightGBM to identify at-risk customers and improve retention.',
    tags: ['Logistic Regression', 'LightGBM', 'Predictive AI'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '16',
    category: 'Personalization AI · Intermediate',
    title: 'Movie Recommender System',
    subtitle: 'Teaches matrix factorization and personalizations',
    description: 'A robust recommendation engine utilizing Collaborative Filtering and SVD to suggest content based on user interaction histories.',
    tags: ['Collaborative Filtering', 'SVD', 'Recommendation Engine'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '17',
    category: 'Agricultural AI · Intermediate',
    title: 'Plant Disease Classification',
    subtitle: 'Great entry into Computer Vision',
    description: 'A deep learning vision model built with PyTorch and TensorFlow that analyzes leaf images to diagnose crop diseases accurately.',
    tags: ['CNNs', 'PyTorch', 'TensorFlow', 'Computer Vision'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '18',
    category: 'Financial Time-Series · Advanced',
    title: 'Stock Price Forecasting',
    subtitle: 'Showcases sequential deep learning capabilities',
    description: 'Advanced sequential modeling utilizing LSTMs to analyze historical market data and forecast future price movements.',
    tags: ['LSTM', 'Time-Series Analysis', 'Deep Learning'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  },
  {
    id: '19',
    category: 'Generative AI · Advanced',
    title: 'RAG-Powered Q&A System',
    subtitle: 'Highlights modern Generative AI engineering',
    description: 'A sophisticated enterprise Q&A bot utilizing Retrieval-Augmented Generation, LangChain, and Vector Databases for highly contextual answers.',
    tags: ['LangChain', 'Vector DBs', 'LLM Fine-tuning', 'GenAI'],
    demoHref: '#',
    githubHref: 'https://github.com/elumalai72',
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-[#060608] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      
      {/* Section Header */}
      <div className="mx-auto max-w-5xl mb-16 sm:mb-20 md:mb-28">
        <FadeIn y={40}>
          <p className="text-[#ff7a00] font-medium uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
            Project Archive
          </p>
        </FadeIn>
        <FadeIn delay={0.1} y={40}>
          <h2
            className="font-black uppercase text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Featured Builds
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <p className="font-light text-[#D7E2EA]/60 max-w-xl text-sm sm:text-base leading-relaxed">
            A comprehensive overview of 19+ intelligent systems spanning IoT hardware, predictive modeling, and Generative AI.
          </p>
        </FadeIn>
      </div>

      {/* Stacked Scroll Container */}
      <div className="mx-auto max-w-5xl relative pb-32">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="sticky flex items-center justify-center w-full mb-12 sm:mb-16 last:mb-0 transition-all duration-500"
            style={{ 
              // Perfect stacking logic: cards stick near the top, overlapping the previous ones cleanly
              top: `calc(10vh + ${Math.min(index * 6, 60)}px)`,
              zIndex: index + 1
            }}
          >
            <div className="w-full bg-[#0d0d10] p-8 sm:p-12 rounded-3xl border border-[#D7E2EA]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6 sm:gap-10">
                
                {/* ID Container */}
                <div className="hidden lg:block font-black text-[#D7E2EA]/10 text-7xl xl:text-8xl leading-none select-none">
                  {project.id}
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#ff7a00]">
                      {project.category}
                    </span>
                    <h3 
                      className="font-bold text-white uppercase tracking-tight leading-tight"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium tracking-wide text-[#ff7a00]/80 italic">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="font-light leading-relaxed text-[#D7E2EA]/70 text-base sm:text-lg max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] px-3 py-1 text-xs font-medium text-[#D7E2EA]/60 select-none">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2">
                    <ProjectLinks 
                      demoHref={project.demoHref} 
                      githubHref={project.githubHref} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;