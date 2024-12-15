document.addEventListener('DOMContentLoaded', () => {
    // Fetch Projects
    fetch('http://localhost:5000/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">View Project</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(err => console.error('Error fetching projects:', err));

    // Fetch Blogs
    fetch('http://localhost:5000/api/blogs')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(blog => {
                const blogItem = document.createElement('div');
                blogItem.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.content.substring(0, 100)}...</p>
                    <a href="#">Read More</a>
                `;
                blogList.appendChild(blogItem);
            });
        })
        .catch(err => console.error('Error fetching blogs:', err));
});
