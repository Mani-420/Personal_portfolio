import { Project } from '../types';

export const projects: Project[] = [
  // Enterprise & Featured Work
  {
    id: 'studiloom',
    title: 'Studiloom — Enterprise Learning Platform',
    description: 'An enterprise-level platform that brings academic workflows, communication, and student services into one secure system.',
    longDescription: 'Studiloom is a modular full-stack product designed for complex education workflows. The platform centralizes role-based experiences, secure authentication, operational modules, and consistent APIs so new capabilities can be added without turning the codebase into a monolith.',
    images: ['/projects/studiloom.svg?v=2'],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'RBAC'],
    category: 'fullstack',
    status: 'Enterprise project',
    featured: true,
    linkedinUrl: 'https://www.linkedin.com/in/abdul-rehman-tahir-7068aa315/',
    features: [
      'Role-based experiences for different platform users',
      'Secure authentication and authorization flows',
      'Modular architecture for maintainable feature growth',
      'Consistent API contracts and validation',
      'Centralized academic and communication workflows',
      'Production-minded error handling and security'
    ]
  },
  {
    id: 'dealeriq',
    title: 'DealerIQ — Scalable Dealer Operations',
    description: 'A scalable product system for organizing dealer workflows, operational data, and connected services.',
    longDescription: 'DealerIQ represents my experience contributing to a larger product codebase where reliability, maintainability, and integration boundaries matter. My focus includes backend-oriented feature work, API design, product integrations, and collaboration across a shared engineering workflow.',
    images: ['/projects/dealeriq.svg'],
    technologies: ['TypeScript', 'Node.js', 'React.js', 'RESTful APIs', 'System Design', 'Integrations'],
    category: 'fullstack',
    status: 'Featured work',
    featured: true,
    linkedinUrl: 'https://www.linkedin.com/in/abdul-rehman-tahir-7068aa315/',
    features: [
      'Scalable, modular product architecture',
      'Backend APIs for operational workflows',
      'Structured data and service boundaries',
      'Integration-ready application design',
      'Collaborative delivery in a shared codebase',
      'Maintainability and production reliability focus'
    ]
  },
  {
    id: 'befer-ai',
    title: 'Befer AI — Collaborative AI Product',
    description: 'A large-scale team project combining modern web engineering with AI-enabled product experiences.',
    longDescription: 'Befer AI is a collaborative product project at Hatzs Dimensions. The work strengthened my experience with shared engineering standards, backend services, database-backed features, integrations, and the practical demands of building an AI-enabled application with a team.',
    images: ['/projects/befer-ai.svg?v=2'],
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MySQL', 'AI Integration', 'Team Delivery'],
    category: 'ai',
    status: 'Featured work',
    featured: true,
    linkedinUrl: 'https://www.linkedin.com/in/abdul-rehman-tahir-7068aa315/',
    features: [
      'AI-enabled application workflows',
      'Backend service and API development',
      'Relational data modeling and persistence',
      'Team-based planning and code review',
      'Integration-focused feature delivery',
      'Scalable product engineering practices'
    ]
  },

  // Applied AI Engineering Projects
  {
    id: 'conversational-ai-agents',
    title: 'Conversational AI Agent Platform',
    description: 'A reusable chat-agent architecture for customer support, lead qualification, and grounded business answers.',
    longDescription: 'An applied AI engineering project focused on building reliable business chat agents. The architecture combines tool use, retrieval-augmented generation, conversation memory, guardrails, and human handoff so the same foundation can be adapted to different business domains.',
    images: ['/projects/conversational-ai.svg'],
    technologies: ['Python', 'FastAPI', 'LLM APIs', 'RAG', 'Vector Search', 'Webhooks'],
    category: 'ai',
    status: 'In development',
    featured: true,
    features: [
      'Grounded answers from business knowledge bases',
      'Tool calling for real business actions',
      'Lead capture and qualification workflows',
      'Conversation memory with privacy boundaries',
      'Guardrails, fallbacks, and human handoff',
      'Reusable multi-business architecture'
    ]
  },
  {
    id: 'voice-receptionist-agents',
    title: 'AI Voice Receptionists — Restaurants & Dental Clinics',
    description: 'Voice agents that handle common calls, bookings, FAQs, and escalation for appointment-driven businesses.',
    longDescription: 'A voice-agent project for restaurant and dental reception workflows. The system is designed to understand callers, answer domain-specific questions, check structured availability, create or modify bookings, and transfer sensitive or uncertain requests to a person.',
    images: ['/projects/voice-agents.svg?v=2'],
    technologies: ['Python', 'FastAPI', 'Voice AI', 'Speech-to-Text', 'Text-to-Speech', 'Scheduling APIs'],
    category: 'ai',
    status: 'In development',
    featured: true,
    features: [
      'Natural inbound call handling',
      'Restaurant reservations and dental appointment flows',
      'Frequently asked question automation',
      'Availability checks and scheduling integration',
      'Call summaries, transcripts, and analytics',
      'Safe escalation to human staff'
    ]
  },

  // Full Stack Projects
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'A modern real-time chat application built with MERN stack and Socket.io for instant messaging.',
    longDescription: 'A comprehensive real-time chat application featuring user authentication, real-time messaging, AI chat integration, user profiles, and responsive design. Built with modern web technologies for optimal performance and user experience.',
    images: [
      '/ChatApp/HomePage.jpg',
      '/ChatApp/Login Page.jpg',
      '/ChatApp/Register Page.jpg',
      '/ChatApp/Chatting with AI.jpg',
      '/ChatApp/Chatting_Side.jpg',
      '/ChatApp/Setting Page.jpg',
      '/ChatApp/Profile.jpg'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Mani-420/Chat_app',
    linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_webdevelopment-mern-react-activity-7351285315296223233-g6DC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'Real-time messaging with Socket.io',
      'User authentication and authorization',
      'AI chat integration',
      'User profile management',
      'Responsive design',
      'Dark/Light theme toggle',
      'Message history and search'
    ]
  },
  {
    id: 'blog-platform',
    title: 'Blog Sharing Platform',
    description: 'A full-stack MERN blogging system with user authentication, CRUD operations, and modern UI.',
    longDescription: 'A complete blogging platform that allows users to create, edit, and share blog posts. Features include user authentication, rich text editing, search functionality, and a modern responsive interface.',
    images: [
      '/BlogApp/Home p.jpg',
      '/BlogApp/Dashboard p.jpg',
      '/BlogApp/Create p.jpg',
      '/BlogApp/Edit p.jpg',
      '/BlogApp/View p.jpg',
      '/BlogApp/Search p.jpg',
      '/BlogApp/Review p.jpg',
      '/BlogApp/Login p.jpg',
      '/BlogApp/Register p.jpg'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap', 'RESTful APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Mani-420/Blog_post',
    linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_mernstack-webdevelopment-javascript-activity-7341883989835640836-Weiq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'User authentication and authorization',
      'Create, read, update, delete blog posts',
      'Search and filter functionality',
      'User dashboard',
      'Responsive design',
      'Rich text editing',
      'Comment system'
    ]
  },
  {
    id: 'notes-app',
    title: 'Secure Notes Manager',
    description: 'A secure, full-stack MERN notes application with user authentication and CRUD operations.',
    longDescription: 'A comprehensive notes management application that provides users with a secure platform to create, organize, and manage their notes. Features include user authentication, note categorization, and a clean, intuitive interface.',
    images: [
      '/NotesAPp/Notes_showNotes.jpg',
      '/NotesAPp/Notes_edit.jpg',
      '/NotesAPp/Notes_view.jpg',
      '/NotesAPp/Notes_Empty.jpg',
      '/NotesAPp/Notes_Login.jpg',
      '/NotesAPp/Notes_Register.jpg',
      '/NotesAPp/notes1.png'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS3', 'RESTful APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Mani-420/Notes_app',
    linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_mernstack-webdevelopment-javascript-activity-7335698738729930752-cI8U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'User authentication and authorization',
      'Create, edit, delete notes',
      'Secure data storage',
      'User-specific notes',
      'Clean and intuitive UI',
      'Responsive design',
      'Real-time updates'
    ]
  },

  // Backend Projects
  {
    id: 'movie-review',
    title: 'Movie Review Platform Backend',
    description: 'A comprehensive RESTful API for a movie review platform with role-based access control.',
    longDescription: 'A robust backend API service for a movie review platform featuring JWT authentication, OTP verification, role-based access control, and comprehensive movie and review management systems.',
    images: [
      '/BlogApp/Dashboard p.jpg',
      '/BlogApp/Login p.jpg',
      '/BlogApp/Register p.jpg',
      '/BlogApp/Create p.jpg'
    ],
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Zod validation', 'RESTful APIs'],
    category: 'backend',
    githubUrl: 'https://github.com/Mani-420/Movie_review2',
    features: [
      'JWT-based authentication',
      'OTP verification (email/SMS)',
      'Role-based access control (Admin/User)',
      'Movie management (CRUD)',
      'Review system with ratings',
      'Secure password hashing',
      'Request validation with Zod',
      'Comprehensive API documentation'
    ]
  },

  // Frontend Projects
  {
    id: 'landing-page',
    title: 'Modern Landing Page',
    description: 'A responsive and modern landing page built with React and Tailwind CSS.',
    longDescription: 'A beautifully designed, responsive landing page showcasing modern web design principles. Features smooth animations, mobile-first design, and optimized performance for the best user experience.',
    images: [
      '/LandingPag/Landing1.jpg',
      '/LandingPag/Landing2.jpg',
      '/LandingPag/Landing3.jpg',
      '/LandingPag/Landing4.jpg',
      '/LandingPag/land1.jpg',
      '/LandingPag/land2.jpg',
      '/LandingPag/landing5.jpg'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    category: 'frontend',
    githubUrl: 'https://github.com/Mani-420/Landing_page',
    linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_reactjs-frontenddevelopment-webdevelopment-activity-7328442348260974593-muyL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Smooth animations',
      'Mobile-first approach',
      'Optimized performance',
      'Cross-browser compatibility',
      'SEO optimized'
    ]
  },
  {
    id: 'recipe-sharing',
    title: 'Recipe Sharing Platform',
    description: 'A recipe sharing platform with user authentication and content management.',
    longDescription: 'A full-featured recipe sharing platform that allows users to discover, create, and share recipes. Features include user authentication, recipe management, and a community-driven approach to culinary content.',
    images: [
      '/RecipeShatring/Blog.jpg'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'RESTful APIs'],
    category: 'frontend',
    githubUrl: 'https://github.com/Mani-420/Recipe-Blog',
    linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_nodejs-expressjs-mongodb-activity-7301114877266350080-Kz7V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'User authentication',
      'Recipe creation and management',
      'Search and filter functionality',
      'User profiles',
      'Responsive design',
      'Community features',
      'Content moderation'
    ]
  }
];
