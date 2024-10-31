export const techData = [
  {
    "id": 1,
    "title": "React",
    "description": "A JavaScript library for building user interfaces, primarily used for creating single-page applications.",
    "category": "Frontend"
  },
  {
    "id": 2,
    "title": "Vue.js",
    "description": "A progressive JavaScript framework for building user interfaces, known for its simplicity and flexibility.",
    "category": "Frontend"
  },
  {
    "id": 3,
    "title": "Angular",
    "description": "A TypeScript-based open-source web application framework led by the Angular Team at Google.",
    "category": "Frontend"
  },
  {
    "id": 4,
    "title": "Node.js & Express",
    "description": "An open-source, cross-platform runtime environment for server-side and networking applications.",
    "category": "Backend"
  },
  // {
  //   "id": 5,
  //   "title": "Express",
  //   "description": "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  //   "category": "Backend"
  // },
  {
    "id": 6,
    "title": "Django",
    "description": "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    "category": "Backend"
  },
  {
    "id": 7,
    "title": "Next.js",
    "description": "A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
    "category": "Fullstack"
  },
  // {
  //   "id": 8,
  //   "title": "React Native",
  //   "description": "An open-source UI software framework created by Meta Platforms, Inc., used to develop applications for Android, iOS, and the web.",
  //   "category": "Mobile Development"
  // },
  // {
  //   "id": 9,
  //   "title": "JavaScript",
  //   "description": "A versatile, high-level programming language commonly used in web development for both client-side and server-side logic.",
  //   "category": "Frontend, Fullstack"
  // },
  // {
  //   "id": 10,
  //   "title": "TypeScript",
  //   "description": "A strongly typed programming language that builds on JavaScript, adding static types for scalable development.",
  //   "category": "Frontend, Fullstack"
  // },
  {
    "id": 11,
    "title": "Electron",
    "description": "An open-source framework that enables developers to build cross-platform desktop applications with JavaScript, HTML, and CSS.",
    "category": "Desktop Development"
  },
  // {
  //   "id": 12,
  //   "title": "DSA",
  //   "description": "Refers to Data Structures and Algorithms, fundamental concepts essential for problem-solving and optimized coding.",
  //   "category": "General Programming"
  // },
  {
    "id": 13,
    "title": "Python",
    "description": "A high-level, interpreted programming language known for its readability, versatility, and ease of use, widely used in web development, data science, AI, and more.",
    "category": "General Programming"
  }
];

export const nextjsProjects = [
  {
    "id": "7",
    "projectName": "Personal Blog",
    "description": "A blog where users can create, read, update, and delete posts. This project will also use static generation and dynamic routing for each blog post.",
    "learnt": [
      "Setting up pages with static generation (SSG) in Next.js",
      "Dynamic routing and generating paths for individual posts",
      "Using Markdown or a CMS (like Contentful or Sanity) for content management",
      "Basic styling with CSS modules or styled-components"
    ]
  },
  {
    "id": "7",
    "projectName": "Portfolio Website",
    "description": "A personal portfolio to showcase projects and skills with a contact form. This project demonstrates static and server-side rendering.",
    "learnt": [
      "Using static and server-side rendering for performance optimization",
      "Creating reusable components for layout and content sections",
      "Implementing form handling with serverless functions",
      "Deploying a Next.js project on platforms like Vercel"
    ]
  },
  {
    "id": "7",
    "projectName": "E-Commerce Storefront",
    "description": "A basic e-commerce site where users can browse products, view details, and add items to a shopping cart.",
    "learnt": [
      "Setting up an e-commerce API or using a mock data source",
      "Using dynamic routes and pre-rendering product pages",
      "Building shopping cart functionality with React state management",
      "Integrating payments (optional) with Stripe or a similar service"
    ]
  },
  {
    "id": "7",
    "projectName": "Weather Dashboard",
    "description": "A weather dashboard that fetches data from an API based on a user's location or input city.",
    "learnt": [
      "Fetching data from external APIs using getServerSideProps and getStaticProps",
      "Conditional rendering based on fetched data",
      "Building an interactive UI with dynamic content",
      "Using environment variables for API keys"
    ]
  },
  {
    "id": "7",
    "projectName": "Authentication System with NextAuth",
    "description": "An app that includes user login, registration, and session management with NextAuth for authentication.",
    "learnt": [
      "Integrating NextAuth.js for authentication with providers like Google or GitHub",
      "Creating protected pages and handling sessions",
      "Managing user authentication states",
      "Using middleware for route protection"
    ]
  }
]


export const electonProjects = [
  {


    "id": "11",
    "projectName": "Markdown Editor",
    "description": "A simple markdown editor where users can write, preview, and save markdown files.",
    "learnt": [
      "Setting up an Electron project with basic HTML/CSS/JavaScript",
      "Using Electron's file system module to read and write files",
      "Creating a preview pane with a markdown parser",
      "Handling window events and managing app lifecycle"
    ]
  },
  {


    "id": "11",
    "projectName": "Task Manager",
    "description": "A desktop app to manage tasks, allowing users to add, edit, delete, and mark tasks as completed.",
    "learnt": [
      "Managing state with JavaScript or a library like Redux",
      "Storing data locally using Electron's local storage or a simple database like SQLite",
      "Using Electron's IPC (Inter-Process Communication) to manage tasks",
      "Creating a tray icon for the app with quick actions"
    ]
  },
  {


    "id": "11",
    "projectName": "Weather App",
    "description": "A desktop app that fetches and displays weather information for the user's location.",
    "learnt": [
      "Making HTTP requests in Electron using Axios or Fetch",
      "Working with Electron’s main and renderer processes",
      "Using environment variables for sensitive information like API keys",
      "Creating a responsive, desktop-friendly layout"
    ]
  },
  {


    "id": "11",
    "projectName": "Screenshot Tool",
    "description": "A tool that allows users to take screenshots of their screen and save them locally.",
    "learnt": [
      "Using Electron's screen capture capabilities",
      "Working with Electron’s file system and dialog modules to save files",
      "Adding keyboard shortcuts and handling global hotkeys",
      "Managing system resources and performance optimization"
    ]
  },
  {


    "id": "11",
    "projectName": "Notes App",
    "description": "A desktop notes application that allows users to create, edit, save, and delete notes.",
    "learnt": [
      "Creating and managing multiple windows in Electron",
      "Storing user data locally with file storage or a small database",
      "Implementing Electron's context menu for note management",
      "Using Electron’s native menu system for custom menus"
    ]
  }
]


export const nodejsProject = [
  {

    "id": "4",
    "projectName": "Simple REST API for a To-Do List",
    "description": "A RESTful API for managing a to-do list where users can create, read, update, and delete tasks.",
    "learnt": [
      "Setting up a basic Express server",
      "Creating RESTful routes (GET, POST, PUT, DELETE)",
      "Using MongoDB or an in-memory store for data persistence",
      "Testing API endpoints with tools like Postman"
    ]
  },
  {

    "id": "4",
    "projectName": "User Authentication System",
    "description": "A basic authentication system that handles user registration, login, and JWT-based session management.",
    "learnt": [
      "Setting up user authentication with JWT",
      "Storing and hashing passwords with bcrypt",
      "Implementing middleware to protect routes",
      "Setting up a MongoDB schema for user data"
    ]
  },
  {

    "id": "4",
    "projectName": "Weather App Backend",
    "description": "A backend API that fetches weather data from a public API based on a user’s location input.",
    "learnt": [
      "Making external API calls with Node.js using Axios or Fetch",
      "Handling asynchronous data and promises",
      "Implementing query parameters in API endpoints",
      "Creating an organized file structure for controllers and routes"
    ]
  },
  {

    "id": "4",
    "projectName": "Basic E-Commerce API",
    "description": "A backend API for a simple e-commerce site, supporting CRUD operations for products and a shopping cart.",
    "learnt": [
      "Setting up product and user schemas in MongoDB",
      "Building relationships between models (e.g., cart and products)",
      "Handling API requests and responses with Express",
      "Implementing session management for cart functionality"
    ]
  },
  {

    "id": "4",
    "projectName": "Chat Application Backend",
    "description": "The backend of a real-time chat application that supports multiple users in different chat rooms.",
    "learnt": [
      "Using WebSockets with Socket.io for real-time communication",
      "Implementing room-based chat functionality",
      "Managing connected clients and broadcasting messages",
      "Structuring an Express app to handle both HTTP and WebSocket connections"
    ]
  }
]


export const angularProjects = [
  {
    "id": "3",
    "projectName": "Simple Calculator",
    "description": "A calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
    "learnt": [
      "Two-way data binding with ngModel",
      "Component interaction and state management",
      "Using Angular templates for dynamic updates",
      "Building interactive UIs with Angular components"
    ]
  },
  {
    "id": "3",
    "projectName": "Recipe Book",
    "description": "A recipe book application where users can add, view, edit, and delete recipes.",
    "learnt": [
      "Creating Angular services for managing data",
      "Using the Angular form module to capture user input",
      "Implementing CRUD operations in Angular",
      "Component-driven architecture and data passing between components"
    ]
  },
  {
    "id": "3",
    "projectName": "Weather Dashboard",
    "description": "A dashboard that fetches and displays weather information from a public API based on the user's location.",
    "learnt": [
      "HTTPClient module for API requests",
      "Reactive programming with RxJS observables",
      "Using environment variables for sensitive data like API keys",
      "Handling and displaying asynchronous data in the UI"
    ]
  },
  {
    "id": "3",
    "projectName": "Task Tracker",
    "description": "A task management application where users can add, edit, delete, and mark tasks as completed.",
    "learnt": [
      "Implementing Angular directives like *ngIf and *ngFor",
      "Using services for state management",
      "Two-way data binding to update UI dynamically",
      "Form handling with Angular reactive forms"
    ]
  },
  {
    "id": "3",
    "projectName": "Portfolio Website",
    "description": "A personal portfolio site to showcase projects, skills, and contact information.",
    "learnt": [
      "Creating reusable components and a multi-page layout",
      "Routing and navigation using Angular Router",
      "Basic animation using Angular animations",
      "Responsive design with CSS and media queries"
    ]
  }
]

export const vueProjects = [
  {
    "id": "2",
    "projectName": "To-Do List",
    "description": "A simple to-do list where users can add, delete, and mark tasks as completed.",
    "learnt": [
      "Vue data properties and reactivity",
      "Event handling and two-way binding with v-model",
      "Using v-for and v-if directives for rendering lists and conditional display",
      "Basic Vue component structure and styling"
    ]
  },
  {
    "id": "2",
    "projectName": "Weather App",
    "description": "A weather application that fetches data from a weather API based on user input.",
    "learnt": [
      "Making API calls using Axios in Vue",
      "Handling asynchronous data and updating the DOM",
      "Conditional rendering based on API data",
      "Using environment variables to store sensitive information"
    ]
  },
  {
    "id": "2",
    "projectName": "Counter App",
    "description": "A basic counter app that allows users to increment and decrement a counter value.",
    "learnt": [
      "Vue reactivity and state management",
      "Handling user input and events with Vue",
      "Creating custom methods and computed properties",
      "Dynamic styling and class binding"
    ]
  },
  {
    "id": "2",
    "projectName": "Movie Search App",
    "description": "An app that allows users to search for movies and displays information such as title, rating, and poster.",
    "learnt": [
      "Using Vue CLI to set up a project",
      "Data fetching from APIs and displaying results",
      "Debouncing search input for performance optimization",
      "Creating and using multiple components to display API data"
    ]
  },
  {
    "id": "2",
    "projectName": "Personal Portfolio",
    "description": "A portfolio site to showcase projects, skills, and contact information.",
    "learnt": [
      "Component-based architecture with reusable Vue components",
      "Routing in Vue with Vue Router",
      "Responsive design using CSS and media queries",
      "Deploying a Vue app (optional)"
    ]
  }
]

export const pythonProjects = [
  {
    "id": "13",
    "projectName": "Simple Calculator",
    "description": "A basic calculator that performs addition, subtraction, multiplication, and division based on user input.",
    "learnt": [
      "Creating functions in Python",
      "Using control flow statements (if-else)",
      "Taking user input and handling errors",
      "Basic mathematical operations in Python"
    ]
  },
  {
    "id": "13",
    "projectName": "Password Generator",
    "description": "A program that generates random passwords based on user-specified criteria (length, characters, etc.).",
    "learnt": [
      "Using the random library to generate random data",
      "String manipulation and list comprehension",
      "Implementing loops and conditional statements",
      "Building simple command-line interfaces"
    ]
  },
  {
    "id": "13",
    "projectName": "To-Do List (CLI)",
    "description": "A command-line to-do list application where users can add, view, delete, and mark tasks as completed.",
    "learnt": [
      "Reading and writing to files for data persistence",
      "Basic CRUD operations in Python",
      "Organizing code using functions and modularity",
      "Handling user input and managing program flow"
    ]
  },
  {
    "id": "13",
    "projectName": "Number Guessing Game",
    "description": "A game where the program randomly selects a number, and the user tries to guess it within a certain range.",
    "learnt": [
      "Using loops for iterative guessing",
      "Generating random numbers with the random module",
      "Implementing feedback loops and conditional logic",
      "Building a simple game structure in Python"
    ]
  },
  {
    "id": "13",
    "projectName": "Currency Converter",
    "description": "A tool that converts amounts from one currency to another using exchange rates from an API.",
    "learnt": [
      "Making HTTP requests with the requests library",
      "Parsing JSON data and handling API responses",
      "Performing mathematical calculations with user input",
      "Error handling for invalid input or API issues"
    ]
  }
]

export const djangoProjects = [
  {
    "id": "6",
    "projectName": "Personal Blog",
    "description": "A simple blog where users can create, read, update, and delete blog posts.",
    "learnt": [
      "Setting up a Django project and app",
      "Creating models and working with the ORM",
      "Building CRUD views and templates",
      "Handling forms and user input"
    ]
  },
  {
    "id": "6",
    "projectName": "To-Do List App",
    "description": "A to-do list application where users can add, edit, and delete tasks and mark them as completed.",
    "learnt": [
      "Using Django views and templates to render dynamic content",
      "Understanding URL routing and mapping",
      "Working with Django models and database migrations",
      "Implementing basic authentication for user-specific to-do lists"
    ]
  },
  {
    "id": "6",
    "projectName": "Weather App",
    "description": "An app that displays weather information for a specified city using an external weather API.",
    "learnt": [
      "Integrating third-party APIs with Django (using requests)",
      "Handling external data and rendering it in templates",
      "Using Django forms to capture user input",
      "Creating custom views to manage data processing"
    ]
  },
  {
    "id": "6",
    "projectName": "Portfolio Website",
    "description": "A portfolio website to showcase projects, skills, and contact information with admin interface management.",
    "learnt": [
      "Creating a custom admin interface for content management",
      "Using static files and media files in Django",
      "Designing templates for multi-page layout",
      "Deploying a Django application (optional)"
    ]
  },
  {
    "id": "6",
    "projectName": "Simple E-Commerce Site",
    "description": "A basic e-commerce website where users can browse products, view details, and add items to a cart.",
    "learnt": [
      "Setting up product models and database relationships",
      "Implementing session-based cart functionality",
      "Working with Django forms for order processing",
      "Building a basic checkout and order summary page"
    ]
  }
]


export const reactProjects = [
  {
    "id": "1",
    "projectName": "To-Do List",
    "description": "A simple to-do list app where users can add, delete, and mark tasks as completed.",
    "learnt": [
      "React state management with useState",
      "Handling events and updating the UI",
      "Rendering lists dynamically",
      "Basic CSS styling in React"
    ]
  },
  {
    "id": "1",
    "projectName": "Weather App",
    "description": "An app that fetches and displays weather data for a user's location using a weather API.",
    "learnt": [
      "Using APIs and async operations in React with fetch",
      "Working with props and state",
      "Conditional rendering based on API data",
      "Environment variables for API keys"
    ]
  },
  {
    "id": "1",
    "projectName": "Calculator",
    "description": "A basic calculator app with functionality for addition, subtraction, multiplication, and division.",
    "learnt": [
      "React component structure and layout",
      "Handling complex state changes",
      "Implementing mathematical logic in JavaScript",
      "Designing an interactive UI with button elements"
    ]
  },
  {
    "id": "1",
    "projectName": "Movie Search App",
    "description": "An app to search for movies using an external API, displaying movie information like title, rating, and poster.",
    "learnt": [
      "React state and props usage",
      "Making API calls and handling JSON data",
      "Debouncing search input for API efficiency",
      "Displaying and styling data-rich components"
    ]
  },
  {
    "id": "1",
    "projectName": "Portfolio Website",
    "description": "A personal portfolio website showcasing projects, skills, and contact information.",
    "learnt": [
      "Structuring components for a multi-page layout",
      "Routing in React using react-router",
      "Responsive design with CSS and media queries",
      "Deploying a React app (optional)"
    ]
  }
]
