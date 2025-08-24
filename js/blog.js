// Data for blog posts
const blogPosts = [
  {
    title: 'My Journey to Full Stack Development',
    summary: 'A look back at my experience in learning full stack development, from mastering frontend frameworks to building scalable backend systems.',
    content: 'Full blog content for "My Journey to Full Stack Development". In this post, I dive deep into the process I followed, the challenges I faced, and the technologies I mastered along the way...'
  },
  {
    title: 'The Power of JavaScript',
    summary: 'Discover why JavaScript is one of the most powerful and versatile programming languages in modern web development.',
    content: 'Full blog content for "The Power of JavaScript". JavaScript has transformed the web with its versatility, allowing developers to build everything from interactive frontends to powerful server-side applications...'
  },
  {
    title: 'Building Scalable Web Applications',
    summary: 'In this post, I share tips on how to build scalable web applications that can handle growth without sacrificing performance.',
    content: 'Full blog content for "Building Scalable Web Applications". Building a scalable application is about balancing efficiency, performance, and future growth, all while keeping your code maintainable...'
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    summary: 'CSS Grid and Flexbox are powerful layout systems. In this blog, I explain when and how to use each one effectively.',
    content: 'Full blog content for "Mastering CSS Grid and Flexbox". Understanding when to use Grid and Flexbox can simplify complex layouts, making your code more readable and flexible...'
  },
  {
    title: 'Introduction to Docker for Developers',
    summary: 'A beginner’s guide to Docker, explaining how it helps in containerizing applications and improving development workflows.',
    content: 'Full blog content for "Introduction to Docker for Developers". Docker is a vital tool for modern development, providing an isolated environment for testing, development, and production deployment...'
  },
  {
    title: 'How to Optimize Web Performance',
    summary: 'Explore practical tips to optimize web performance, including code splitting, lazy loading, and server-side rendering.',
    content: 'Full blog content for "How to Optimize Web Performance". Optimizing your web applications is critical for improving user experience and ensuring fast load times...'
  },
  {
    title: 'Using MongoDB for Real-Time Applications',
    summary: 'Learn how MongoDB can power real-time applications with flexible schema design and efficient querying.',
    content: 'Full blog content for "Using MongoDB for Real-Time Applications". MongoDB provides the flexibility needed to manage real-time data effectively, making it perfect for modern web applications...'
  },
  {
    title: 'Best Practices for API Design',
    summary: 'An overview of API design principles, including REST, versioning, and security best practices.',
    content: 'Full blog content for "Best Practices for API Design". APIs are the backbone of web applications, and designing them with scalability and security in mind is crucial for long-term success...'
  },
  {
    title: 'Getting Started with TypeScript',
    summary: 'A beginner’s guide to TypeScript, explaining why and how to add static types to your JavaScript code.',
    content: 'Full blog content for "Getting Started with TypeScript". TypeScript enhances JavaScript by adding static types, allowing for more maintainable and scalable code...'
  }
];

// Function to generate blog posts
function generateBlogPosts() {
  const blogContainer = document.getElementById('blog-container');
  blogPosts.forEach((post, index) => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.setAttribute('data-index', index);

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postSummary = document.createElement('p');
    postSummary.textContent = post.summary;

    blogPost.appendChild(postTitle);
    blogPost.appendChild(postSummary);

    blogContainer.appendChild(blogPost);

    blogPost.addEventListener('click', () => openBlogDialog(index));
  });
}

// Function to open the blog post in a dialog
function openBlogDialog(index) {
  const dialog = document.getElementById('blog-dialog');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogContent = document.getElementById('dialog-content');

  dialogTitle.textContent = blogPosts[index].title;
  dialogContent.textContent = blogPosts[index].content;

  dialog.style.display = 'flex';
}

// Function to close the dialog
function closeBlogDialog() {
  const dialog = document.getElementById('blog-dialog');
  dialog.style.display = 'none';
}

// Event listener for closing the dialog
document.getElementById('close-dialog').addEventListener('click', closeBlogDialog);

// Generate blog posts on page load
window.onload = generateBlogPosts;
