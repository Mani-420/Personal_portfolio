import { Project } from '../types';

export const projects: Project[] = [
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
