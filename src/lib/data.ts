
import { Award, BookUser, Code, Code2, CodeXml, Cog, Cpu, Database, FileText, Github, Library, Linkedin, Monitor, Users } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { CodechefIcon } from '@/components/icons/codechef-icon';
import { HackerRankIcon } from '@/components/icons/hackerrank-icon';
import { LeetCodeIcon } from '@/components/icons/leetcode-icon';

export const personalData = {
  name: 'Archit Sharma',
  title: 'Building Robust Software Solutions with Clean Code and Innovative Design.',
  about: "As a recent B.Tech graduate in Computer Science Engineering, my passion lies in building impactful and innovative software. With a specialization in AI/ML, I have a strong foundation in developing intelligent solutions, from a deep learning-based stock market estimator to a resourceful code snippet manager with an intelligent tagging system.\n\nMy expertise spans the full stack, with a robust skill set in Java, Spring Boot, React, and Python. I am driven to tackle complex problems and committed to writing clean, efficient, and well-debugged code. I am eager to contribute my problem-solving skills to a team that is dedicated to pushing the boundaries of technology and creating solutions that make a real difference.",
  graduationYear: 'June 2025',
  cgpa: '8.74',
  email: 'architsharma5950@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1fCDXbQOkW9FggWuy4oY_ypw9VSXythvP/view?usp=sharing',
  profileImageUrl: 'https://drive.google.com/uc?id=1NHSTfFHI1FSY6fHdlaVhR4RDi6WGnFVX',
};

export const educationData = [
  {
    degree: 'B.Tech. in Computer Science and Engineering with specialization in AI/ML',
    institution: 'SRM Institute of Science and Technology, Chennai',
    period: 'September 2021 - June 2025',
    score: '8.74 CGPA',
    details: [
      'Gained a strong foundation in core computer science and artificial intelligence concepts.',
      'Completed advanced coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, Software Engineering, and Machine Learning.',
      'Delivered major academic projects, including a deep learning-based stock market estimator and a full-stack application to organize and manage reusable code snippets.',
      'Achieved industry-recognized certifications, such as Oracle Generative AI Certified and Alteryx Designer Core Certified.',
      'Developed expertise in Full-Stack Development, Machine Learning, and Software Engineering, preparing for a career as a Software Development Engineer (SDE).'
    ]
  },
  {
    degree: '12th Grade',
    institution: 'S.D Public Senior Secondary School, Una (HPBSE)',
    period: 'March 2020 - April 2021',
    score: '87.2%',
  },
  {
    degree: '10th Grade',
    institution: 'Mount Carmel Senior Secondary School, Una (CISCE)',
    period: 'March 2018 - May 2019',
    score: '85.6%',
  },
];

export type SkillCategory = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  skills: string[] | Record<string, string[]>;
};

export const skillsData: SkillCategory[] = [
  { title: 'Programming Languages', icon: CodeXml, skills: ['Java', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'] },
  { 
    title: 'Frameworks & Libraries', 
    icon: Library, 
    skills: {
      'Full-Stack': ['Spring Boot', 'React.js', 'Tailwind CSS'],
      'Data & AI': ['Pandas', 'NumPy', 'Scikit-learn'],
      'Web': ['Streamlit']
    }
  },
  { 
    title: 'AI & Machine Learning',
    icon: Cpu,
    skills: {
      'Deep Learning': ['TensorFlow', 'Keras', 'LSTM', 'CNN'],
      'Computer Vision': ['OpenCV'],
      'Concepts': ['Generative AI', 'Natural Language Processing (NLP)']
    }
  },
  { title: 'Development Tools & Methodologies', icon: Cog, skills: ['GitHub', 'VS Code', 'IntelliJ IDEA', 'Agile', 'SDLC', 'Scrum'] },
  { title: 'Databases', icon: Database, skills: ['MySQL'] },
  { title: 'Operating Systems', icon: Monitor, skills: ['Windows'] },
  { title: 'Soft Skills', icon: Users, skills: ['Problem-solving', 'Decision-making', 'Adaptability', 'Teamwork', 'Communication'] },
];

export type ProjectVisual = {
  src: string | ComponentType<SVGProps<SVGSVGElement>>;
  hint: string;
};

export type Project = {
  title: string;
  objective: string;
  role: string;
  tech: string[];
  features: string[];
  impact: string;
  learnings: string;
  visuals: ProjectVisual[];
};

export const projectsData: Project[] = [
  {
    title: 'Leveraging AI and Deep Learning for Stock Market Estimation',
    objective: 'Developed a deep learning-based stock market estimation model using LSTM and CNN for accurate trend prediction.',
    role: 'Implemented the project using Python and Streamlit, integrating financial indicators with predictive analytics for an interactive web interface. This research enhances stock trend forecasting and supports informed decision-decision-making.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'CNN', 'Yahoo Finance API', 'Streamlit', 'NumPy', 'Matplotlib'],
    features: [
      'Predictive Modeling: A hybrid deep learning model using both LSTM for time-series analysis and CNN for feature extraction to predict stock trends.',
      'Live Data Integration: Fetches and processes real-time stock data from the Yahoo Finance API.',
      'Data Pipeline: A streamlined pipeline for data preprocessing, model training, and performance evaluation.',
      'Interactive Interface: A web interface built with Streamlit for users to visualize predictions and model performance.',
    ],
    impact: 'This project demonstrates my ability to apply cutting-edge deep learning techniques to complex financial data. It showcases my skills in building an end-to-end predictive analytics system that can be used to inform decision-making in a data-driven environment.',
    learnings: 'I gained hands-on experience in building, training, and optimizing deep learning models for a real-world application. The project deepened my understanding of handling and cleaning time-series data, integrating with external APIs, and deploying a functional application with a user-friendly interface.',
    visuals: [
      { src: 'https://drive.google.com/uc?id=11WCG1dL7F5OTtLyUqZWaTFmxhYEC9NdZ', hint: 'stock chart' },
    ],
  },
  {
    title: 'Online Banking System',
    objective: 'Built a Java-based banking application using Spring Boot and MySQL to handle user registration, account management, fund transfers, and transaction tracking.',
    role: 'As the sole developer on this project, I was responsible for the entire end-to-end development of this secure banking application. My key contributions included designing and implementing a robust user authentication and role-based access control (RBAC) system. I also developed and managed core banking operations, including fund transfers, deposits, and withdrawals, while ensuring smooth and secure database operations with a Spring Boot backend and MySQL.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'REST APIs', 'Git', 'GitHub'],
    features: [
      'User Authentication: Secure user registration and login with role-based access control (RBAC).',
      'Account Management: Functionality for creating accounts and managing user profiles.',
      'Transactions: Core banking operations including fund transfers, deposits, and withdrawals.',
      'Full-Stack Integration: Seamless connection between the React frontend, the Spring Boot backend, and the MySQL database.'
    ],
    impact: 'This project demonstrates a strong command of full-stack development by integrating a secure backend with a dynamic frontend. It proves my ability to build secure, scalable applications that handle sensitive data, which is a critical skill for any software development role.',
    learnings: 'I gained hands-on experience in building a secure RESTful API with Java and Spring Boot. I learned to implement features like authentication and access control, which are essential for enterprise-level applications. The project reinforced my. understanding of full-stack integration and best practices in connecting the frontend and backend to a relational database.',
    visuals: [
        { src: 'https://drive.google.com/uc?id=11WCG1dL7F5OTtLyUqZWaTFmxhYEC9NdZ', hint: 'banking app' },
    ],
  },
  {
    title: 'Traffic Light Detection and Recognition System',
    objective: 'Developed a Traffic Light Detection and Recognition system using deep learning and computer vision techniques.',
    role: 'Implemented a real-time computer vision system for traffic signal recognition using YOLO, OpenCV, and TensorFlow. I was responsible for the end-to-end development, including the design of a robust deep learning model to accurately detect and classify traffic light states from live video streams. The model was optimized to handle various lighting conditions and integrated with a camera for efficient processing and real-time inference.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Matplotlib'],
    features: [
      'Real-time traffic light detection from live video streams.',
      'Classification of traffic light state (red, yellow, green) using a deep learning model.',
      'Integration with a camera to process video frames efficiently.',
      'A robust system capable of handling various lighting conditions and angles.'
    ],
    impact: 'This project demonstrates the practical application of computer vision and deep learning in creating intelligent systems. By accurately identifying traffic light states in real time, it lays the groundwork for developing more advanced features in autonomous vehicles and smart city infrastructure.',
    learnings: 'Through this project, I gained a deep understanding of the end-to-end machine learning pipeline, from data preprocessing and model training to real-time inference. I learned to leverage libraries like OpenCV for image processing and TensorFlow for building and training neural networks. I also developed crucial skills in debugging complex systems and optimizing models for performance in a real-world application.',
    visuals: [
        { src: 'https://drive.google.com/uc?id=1nfxa8BgVUoS3pVvXX8vBOzqbzvwVOwhg', hint: 'traffic light' },
    ],
  },
  {
    title: 'Integrated Code Snippet Manager',
    objective: 'An application to efficiently create, store, and manage code snippets, featuring an intelligent auto-tagging system.',
    role: 'As a full-stack developer, I was responsible for the entire end-to-end development of this application. My key contributions included designing and implementing the full CRUD (Create, Read, Update, Delete) functionality for managing snippets, building a robust backend API, and creating a dynamic, responsive user interface.',
    tech: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Git', 'GitHub'],
    features: [
        'Full CRUD (Create, Read, Update, Delete) functionality for managing snippets.',
        'A custom-built, rule-based tagging system that analyzes snippets and automatically assigns tags.',
        'A responsive user interface that works on both desktop and mobile devices.'
    ],
    impact: 'Streamlined the process of saving and retrieving reusable code, improving developer productivity and code consistency across projects.',
    learnings: 'Gained extensive hands-on experience in full-stack development, from API design with Spring Boot to building a dynamic frontend with React, and learned to implement complex features like automated tagging.',
    visuals: [
        { src: 'https://drive.google.com/uc?id=1g8BELHQ5TH4zx0vuUNzX7d7FzOhhT8Yy', hint: 'code editor' },
    ],
  },
  {
    title: 'AI and IoT-Based Monitoring System for Increasing the Sugarcane Yield',
    objective: 'An IoT and AI-based system to monitor sugarcane fields and provide insights to increase yield.',
    role: 'Implemented an end-to-end system combining IoT sensors and machine learning to provide real-time monitoring and actionable insights for sugarcane farming. I was responsible for developing a system for real-time data collection from fields, building a machine learning model to analyze the data and provide data-driven insights to help increase crop yield, and creating a dashboard for farmers to remotely monitor field conditions.',
    tech: ['Python', 'Machine Learning', 'IoT Sensors'],
    features: [
      'Data Collection: Uses IoT sensors to collect real-time data from the field.',
      'AI-Powered Insights: Analyzes collected data with a machine learning model to provide insights for increasing yield.',
      'Real-time Monitoring: Provides a dashboard for farmers to remotely monitor field conditions remotely.'
    ],
    impact: 'This project demonstrates the practical application of AI and IoT to solve real-world agricultural problems. It showcases how technology can lead to increased efficiency, reduced waste, and better crop management.',
    learnings: 'I gained hands-on experience in building a complete system that combines hardware (IoT sensors) and software (data analysis). This project deepened my understanding of data acquisition and the process of using machine learning to derive actionable insights from environmental data.',
    visuals: [
        { src: 'https://drive.google.com/uc?id=11WCG1dL7F5OTtLyUqZWaTFmxhYEC9NdZ', hint: 'sugarcane field' },
    ],
  },
];

export type Certification = {
  title: string;
  license: string;
  image?: string;
  description?: string;
};

export const certificationsData: Certification[] = [
    { 
      title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional', 
      license: 'License: Oracle 1007088910C12024GAIOCP',
      image: 'https://drive.google.com/uc?id=1ek5fvjMhhiQn4fR6R6Wpe--gy6zu9Y4M',
      description: 'This certification validates my expertise in applying Generative AI on Oracle Cloud Infrastructure.'
    },
    { 
      title: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate', 
      license: 'License: Oracle 1007088910CI23AIFCA',
      image: 'https://drive.google.com/uc?id=1nasJb-wFGiORV4OntNl5NseoV10R_W2r',
      description: 'This certification demonstrates a foundational knowledge of key AI concepts and services on the Oracle Cloud platform.'
    },
    {
      title: 'Alteryx Designer Core Certified',
      license: 'License: ADC-12345',
      image: 'https://drive.google.com/uc?id=1dY2O-rTgfgXIAjR9frBA9rIVjc9Jt1ZQ',
      description: 'This certification validates my fundamental knowledge in using Alteryx Designer for data preparation, analysis, and manipulation.'
    },
    {
      title: 'Alteryx Machine Learning Fundamentals',
      license: 'License: AMLF-12345',
      image: 'https://drive.google.com/uc?id=1cwQjIsUG5_rxwsDDVIb6JkQRRNrJFNAp',
      description: 'This certification confirms my foundational understanding of machine learning principles within the Alteryx platform.'
    }
];

export const linksData = [
  { name: 'GitHub', url: 'https://github.com/ARCHIT-SHARMAA', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/archit-sharma-ai-ml/', icon: Linkedin },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/architsharma20', icon: CodechefIcon },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/RA2111026010175', icon: HackerRankIcon },
  { name: 'LeetCode', url: 'https://leetcode.com/u/av0550/', icon: LeetCodeIcon },
  { name: 'Resume', url: personalData.resumeUrl, icon: FileText },
];

  
