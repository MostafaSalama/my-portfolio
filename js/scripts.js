
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


/**
 * register the service worker to make the app works offline
 */
if ('serviceWorker' in navigator) {
  const s = navigator.serviceWorker;
  window.addEventListener('load', () => {
    s.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registered with scope: ', registration.scope);
      }, (err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}


// Function to set a dynamic greeting message based on time of day
function setGreeting() {
  const greetingElement = document.getElementById('greeting');
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greetingElement.textContent = 'Good Morning!';
  } else if (currentHour < 18) {
    greetingElement.textContent = 'Good Afternoon!';
  } else {
    greetingElement.textContent = 'Good Evening!';
  }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Call the setGreeting function on page load
window.onload = setGreeting;


