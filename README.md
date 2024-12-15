NAME- ESHIKA KULHADE
COMPANY- CODTECH IT SOLUTIONS
ID- CT08DS10360
DOMAIN- FULL STACK WEB DEVELOPMENT
DURATION- NOVEMBER TO DECEMBER 2024

PROJECT OVERVIEW-
Personal Portfolio Website with Backend Content Management
This project is a Personal Portfolio Website that showcases your projects and blogs, while allowing easy management of content through a backend. It uses modern web technologies like HTML, CSS, JavaScript for the frontend, and Node.js with Express.js for the backend. The backend connects to a MongoDB database to store and retrieve project and blog data, making the site dynamic and content easily manageable.



Frontend:
The frontend is a static website built using:
HTML: Provides the structure and layout of the website, including sections for projects, blogs, and contact information.
CSS: Styles the website with a responsive design, ensuring it works on both desktop and mobile devices. Techniques like CSS Grid and Flexbox are used for layout, and media queries ensure compatibility with various screen sizes.
JavaScript: Adds interactivity by fetching data dynamically from the backend using the fetch() API. This enables the display of projects and blogs from the database without refreshing the page.

Key Sections:
Home: A brief introduction and navigation links to other sections.
Projects: A section displaying a list of projects, including titles, descriptions, and links to live demos or repositories.
Blogs: A blog section where titles, excerpts, and links to the full posts are displayed.
Contact: A footer with basic contact information.

Backend:
The backend is powered by Node.js and Express.js, which handle API requests to retrieve, add, update, or delete projects and blog posts. It connects to a MongoDB database using Mongoose to store the data.

API Endpoints:
GET /api/projects: Fetches all project data from the database.
GET /api/blogs: Fetches all blog data from the database.
POST /api/projects: Allows the creation of new projects (admin functionality).
POST /api/blogs: Allows the creation of new blog posts (admin functionality).
Authentication (optional): You could add JSON Web Tokens (JWT) to secure the creation and management of projects and blogs.

Database Structure:
The data is stored in MongoDB with two main collections:
Projects: Each project includes a title, description, link, and an optional image URL.
Blogs: Each blog post contains a title, content, and the date of creation.

Deployment:
Frontend: The frontend is deployed to platforms like Netlify or Vercel, which provide easy deployment for static websites.
Backend: The backend can be deployed on platforms like Heroku or Render, which support Node.js applications and offer easy integration with MongoDB.

Learning Outcomes:
Frontend Skills: Improve your ability to create responsive web pages using HTML, CSS, and JavaScript. Learn how to interact with APIs to fetch and display dynamic data.
Backend Skills: Gain experience with backend development using Node.js, Express.js, and MongoDB. Learn to handle CRUD operations (Create, Read, Update, Delete) for managing content.
Full-Stack Integration: Learn how to connect a frontend with a backend API, making your website dynamic and scalable.
Deployment: Understand the deployment process for both frontend and backend applications.
