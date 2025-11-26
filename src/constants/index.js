import project1 from "../assets/projects/hostinger.png";
import project2 from "../assets/projects/adventureclues.png";
import project3 from "../assets/projects/data.worldbank.org.png";
import project4 from "../assets/projects/fao.org.png";
import project5 from "../assets/projects/firstrade.png";
import project6 from "../assets/projects/hsbc.png";
import project7 from "../assets/projects/matsuyama.co.png";
import project8 from "../assets/projects/tradingeconomics.com.png";
import project9 from "../assets/projects/us.betway.png";
import project10 from "../assets/projects/vaave.png";
import project11 from "../assets/projects/webullcorp.png";
import project12 from "../assets/projects/wns.png";
import project13 from "../assets/projects/loveawake.png";
import project14 from "../assets/projects/sofi.png";
import project15 from "../assets/projects/pokerrankings.eu.png";

export const HERO_CONTENT =
  `With 10+ years of experience in startups and enterprises, I am a versatile Full-Stack & AI Developer specializing in building scalable systems, automation, and data-driven applications. My expertise spans front-end, back-end, DevOps, AI/NLP, and blockchain development, delivering high-quality, user-focused software solutions..
`;

export const ABOUT_TEXT =
  `Hi there! I'm Takahiro Hiroshi, a passionate Full-Stack & AI Developer with over 10 years of experience designing and delivering scalable digital solutions. Based in Tokyo, Japan, I focus on building high-performance applications that seamlessly integrate front-end and back-end systems.

  Over my career, I've specialized in backend engineering with Python (Django, Flask, FastAPI) and Node.js, while also enjoying frontend development with React, Vue.js, Angular, and Next.js. I architect robust APIs (REST & GraphQL), design data pipelines (ETL, SQL optimization), and work with modern databases like PostgreSQL, MySQL, MongoDB, and Redis. 

  My expertise extends to AI/NLP (spaCy, transformers, PyTorch, TensorFlow, GPT APIs), blockchain (Solidity, web3.js), and DevOps/cloud infrastructure (AWS, Kubernetes, Docker, Terraform, Jenkins). I enjoy creating solutions that not only function efficiently but also scale for long-term success.

  What drives me is solving complex problems—whether it's fine-tuning large language models, streamlining data workflows, or automating deployments to the cloud. I believe in clean, maintainable code, Test-Driven Development (TDD), and building tools that empower teams.

  Outside of coding, I’m passionate about exploring the latest in AI, cloud technologies, and automation. I'm always learning, improving, and eager to take on new challenges. Let’s collaborate and build impactful software together!`;

  export const EXPERIENCES = [
    {
      year: "Aug 2024 – Jun 2025",
      role: "Data Engineer",
      company: "Gravitate (Contract)",
      description:
        `Designed and maintained ETL pipelines for aggregating and analyzing off-market real estate data. Integrated data scraping, APIs, and cloud storage for real-time updates. Built scalable pipelines powering GPT-3 driven real estate assistants, and developed deal calculators with React.js interfaces. Created analytics dashboards to assess agent performance and optimize investment strategies.`,
      technologies: [
        "Python",
        "SQL",
        "ETL",
        "APIs",
        "Data Modeling",
        "React.js",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      year: "Sep 2023 – Dec 2024",
      role: "Senior Backend Engineer & AI Developer (Part-time)",
      company: "Prosa.ai",
      description:
        `Developed and deployed AI-powered systems including NLP pipelines, conversational chatbots, and text recognition models. Built microservices in Python and Node.js, containerized with Docker/Kubernetes. Designed APIs to support real-time dashboards, fine-tuned LLMs, and collaborated with product/UX teams to deliver business-aligned AI features.`,
      technologies: [
        "Python",
        "Node.js",
        "NLP",
        "LLMs",
        "Docker",
        "Kubernetes",
        "RESTful APIs",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      year: "Oct 2022 – Aug 2023",
      role: "Senior Backend Developer",
      company: "TechSolutions Inc.",
      description:
        `Led migration of internal services to a Python-based backend stack (FastAPI), improving scalability and maintainability. Built reusable service templates with OAuth2/JWT authentication. Designed CI/CD pipelines using Jenkins and GitHub Actions with deployments to AWS ECS, RDS, and Lambda. Improved development quality with TDD practices and collaborated with frontend and DevOps teams on real-time dashboards.`,
      technologies: [
        "Python",
        "FastAPI",
        "OAuth2/JWT",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
        "AWS ECS",
        "RDS",
        "Lambda",
        "PostgreSQL",
        "MySQL",
        "DynamoDB",
      ],
    },
    {
      year: "Apr 2020 – Aug 2022",
      role: "Senior Software Engineer",
      company: "DevX Innovations",
      description:
        `Led development and optimization of full-stack applications using Python, Django, Flask, and React. Streamlined complex data workflows, optimized React and Vue.js components for performance, and resolved synchronization issues between NoSQL databases and REST APIs. Advocated TDD practices to ensure code robustness.`,
      technologies: [
        "Python",
        "Django",
        "Flask",
        "React.js",
        "Vue.js",
        "NoSQL",
        "RESTful APIs",
        "TDD",
      ],
    },
    {
      year: "Apr 2019 – Jan 2020",
      role: "Full-Stack Developer",
      company: "FinTech Solutions Ltd.",
      description:
        `Engineered real-time dashboards for performance metrics and sentiment analysis using NLP and data visualization. Developed WebSocket-based real-time chat features, streamlined data pipelines, and delivered scalable full-stack solutions for internal teams.`,
      technologies: [
        "Python",
        "NLP",
        "React.js",
        "WebSocket",
        "Node.js",
        "Data Visualization",
        "PostgreSQL",
      ],
    },
    {
      year: "Mar 2017 – Jan 2019",
      role: "Backend Developer",
      company: "CloudTech Systems",
      description:
        `Developed scalable backend systems with PHP (Laravel, CodeIgniter). Architected real-time communication features with WebSocket. Optimized SQL and NoSQL databases for high-volume transactions, and collaborated with frontend teams to design APIs.`,
      technologies: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "WebSocket",
        "MySQL",
        "NoSQL",
        "API Development",
      ],
    },
    {
      year: "Aug 2015 – Jan 2017",
      role: "Frontend Developer",
      company: "Digital Innovations",
      description:
        `Built responsive and interactive web pages with HTML5, CSS3, JavaScript, and Bootstrap. Converted high-fidelity designs into pixel-perfect components, integrated APIs with backend teams, and optimized performance with lazy loading and async scripts.`,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "API Integration",
        "Performance Optimization",
      ],
    },
  ];

  export const CONTACT = {
    address: "Kanda Awajicho, Chiyoda City, Tokyo, Japan",
    email: "takahiro.hiroshi.swe92@gmail.com",
  };

  export const PROJECTS = [
    {
      name: "Hostinger",
      description: `
        - Architected and developed scalable web hosting platform using React and Node.js.
        - Designed microservices architecture deployed on AWS using Docker and Kubernetes.
        - Implemented CI/CD pipelines with Jenkins and automated deployment workflows.
        - Built RESTful APIs using Node.js and Express.js for backend services.
        - Optimized application performance and implemented caching strategies with Redis.
      `,
      image: project1,
      link: "https://hostinger.com/",
    },
    {
      name: "Adventureclues",
      description: `
        - Refactored large-scale React application, migrating from Reflux to Redux for improved state management.
        - Developed custom React hooks and reusable component library using JavaScript and TypeScript.
        - Implemented responsive UI components from Figma designs using React and modern CSS.
        - Optimized webpack configuration and implemented code splitting for better performance.
        - Established code quality standards using ESLint and automated testing workflows.
      `,
      image: project2,
      link: "https://adventureclues.com/",
    },
    {
      name: "World Bank",
      description: `- Developed data visualization platform using Python with Django framework and MongoDB.
        - Built responsive editor application with real-time collaboration features using Vue.js and WebSocket.
        - Created RESTful APIs using Django REST framework for data processing and retrieval.
        - Implemented data processing pipelines using Python with Pandas and NumPy for large datasets.
        - Developed comprehensive test suites using PyTest for backend and Mocha/Chai for frontend components.
        - Refactored Vue.js components into modular, reusable architecture for better maintainability.
      `,
      image: project3,
      link: "https://data.worldbank.org/",
    },
    {
      name: "FAO",
      description: `- Built enterprise admin dashboard using React, GraphQL, and Apollo Client.
        - Developed data visualization components using D3.js for agricultural analytics.
        - Integrated AWS services including DynamoDB, AppSync, Cognito, and S3 for scalable infrastructure.
        - Implemented GraphQL schema and resolver functions for efficient data fetching.
        - Created responsive layouts using React and Material-UI for cross-device compatibility.
        - Established automated testing workflows using Jest and React Testing Library.
      `,
      image: project4,
      link: "https://fao.org/",
    },
    {
      name: "Firstrade",
      description: `- Developed financial trading platform SPA using React, Redux, and TypeScript.
        - Built responsive, mobile-first UI components from Figma designs using React and modern CSS.
        - Integrated OpenTok API and WebSocket for real-time video conferencing and market data.
        - Implemented state management using Redux-Thunk for async operations and API calls.
        - Developed form validation and error handling systems using JavaScript and React.
        - Optimized application bundle size using code splitting and lazy loading techniques.
      `,
      image: project5,
      link: "https://www.firstrade.com/",
    },
    {
      name: "HSBC",
      description: `- Built enterprise banking web application using React, Redux, and TypeScript.
        - Developed cross-platform mobile applications using React Native for iOS and Android.
        - Integrated third-party services including Google Maps API, Stripe payment gateway, and SendBird messaging.
        - Implemented push notification system using Firebase Cloud Messaging for real-time updates.
        - Optimized React components using performance best practices and React optimization techniques.
        - Established CI/CD pipelines for mobile app deployments using Jenkins and automated testing.
      `,
      image: project6,
      link: "https://www.hsbc.com/",
    },
    {
      name: "Matsuyama",
      description: `- Developed responsive e-commerce website using Webflow CMS and JavaScript.
        - Implemented custom UI animations and interactions using JavaScript and CSS3.
        - Integrated third-party marketing tools including Marketo forms and Greenhouse ATS.
        - Optimized website performance using lazy loading and image optimization techniques.
        - Collaborated with design team to implement pixel-perfect Figma designs.
        - Implemented A/B testing framework for landing pages and user engagement optimization.
      `,
      image: project7,
      link: "https://matsuyama.co/",
    },
    {
      name: "Tradingeconomics",
      description: `- Built advanced analytics dashboard using React, GraphQL, and Apollo Client.
        - Developed interactive charts and data visualizations using D3.js for financial data analysis.
        - Implemented GraphQL API layer with optimized queries and mutations for efficient data transfer.
        - Created responsive design system using SCSS and CSS modules for consistent UI components.
        - Integrated real-time data streaming using WebSocket connections for live market updates.
        - Implemented data caching strategies using Redis for improved performance.
      `,
      image: project8,
      link: "https://tradingeconomics.com/",
    },
    {
      name: "Betway",
      description: `
        - Developed sports betting platform using Webflow CMS and JavaScript.
        - Implemented responsive, mobile-optimized layouts from Figma designs.
        - Integrated third-party APIs including YouTube for video content and Google Calendar for events.
        - Optimized website performance using CDN integration and image compression.
        - Implemented SEO best practices and structured data markup for better search visibility.
        - Developed custom JavaScript modules for real-time odds updates and live betting features.
      `,
      image: project9,
      link: "https://us.betway.com/",
    },
    {
      name: "Vaave",
      description: `- Migrated legacy infrastructure to AWS EC2 instances with improved scalability and reliability.
        - Designed and implemented CI/CD pipelines using Jenkins for automated deployments.
        - Configured Nginx reverse proxy and load balancing for high-traffic handling.
        - Implemented OAuth2 authentication system for secure access control and SSO integration.
        - Refactored frontend codebase using React and TypeScript for improved maintainability.
        - Integrated marketing automation tools including Marketo, Greenhouse, and Lob API.
        - Implemented monitoring and alerting using Prometheus for system observability.
      `,
      image: project10,
      link: "https://vaave.com/",
    },
    {
      name: "Webullcorp",
      description: `- Built financial trading platform using Vue.js, Laravel, and AWS services.
        - Developed responsive frontend using TypeScript, Vue.js, and modern CSS frameworks.
        - Integrated Google Maps API for location-based features and user interactions.
        - Implemented social engagement features including comments, voting, and collaboration tools.
        - Integrated Stripe payment gateway for secure transaction processing.
        - Set up analytics tracking using Firebase Analytics and Google Analytics for user insights.
        - Implemented real-time notifications using Firebase Cloud Messaging for user engagement.
      `,
      image: project11,
      link: "https://webullcorp.com/",
    },
    {
      name: "WNS",
      description: `- Migrated legacy Angular application to React without business disruption.
        - Built responsive web application using React, Redux, and TypeScript.
        - Implemented Redux-Saga for complex async workflows and side effects management.
        - Developed cross-platform iOS application using React Native with shared codebase.
        - Implemented offline-first architecture with data synchronization capabilities.
        - Integrated third-party services via RESTful APIs including Greenhouse, Zendesk, and Marketo.
        - Established comprehensive testing framework using Jest and Cypress for quality assurance.
      `,
      image: project12,
      link: "https://wns.com/",
    },
    {
      name: "Love Awake",
      description: `- Developed dating mobile application using React Native and Eva Design System.
        - Refactored legacy codebase following TDD principles for improved code quality.
        - Implemented Firebase backend services including Cloud Functions, Firestore, and Authentication.
        - Built push notification system using FCM for iOS and Android platforms.
        - Optimized app performance using React Native best practices and optimization techniques.
        - Implemented real-time chat features using WebSocket for instant messaging.
        - Integrated payment processing using Stripe for subscription management and in-app purchases.
      `,
      image: project13,
      link: "https://loveawake.com",
    },
    {
      name: "Sofi",
      description: `- Developed fintech mobile application using React Native and Eva Design System.
        - Implemented comprehensive TDD workflow using Jest and React Native Testing Library.
        - Built scalable backend services using Firebase Cloud Functions and Firestore.
        - Implemented push notification system using FCM for user engagement and retention.
        - Optimized app performance and bundle size for improved load times and user experience.
        - Integrated biometric authentication and secure keychain storage for enhanced security.
        - Implemented real-time data synchronization for up-to-date financial information.
      `,
      image: project14,
      link: "https://sofi.com",
    },
    {
      name: "Poker Rankings",
      description: `- Refactored monolithic codebase into microservices architecture using Python with FastAPI framework.
        - Implemented Redis caching layer for frequently accessed data and improved response times.
        - Developed optimized algorithms using Python for processing high-volume poker tournament data.
        - Integrated monitoring and observability using Prometheus for system health tracking.
        - Implemented data pipeline using ETL processes and Apache Airflow for automated workflows.
        - Optimized SQL queries and database indexes for improved query performance.
        - Collaborated with frontend team to build Vue.js components for seamless user experience.
      `,
      image: project15,
      link: "https://pokerrankings.eu",
    },
  ];
