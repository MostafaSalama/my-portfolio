
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCcYoCqEoeKY_ABOYwcR7_Y4seopQ158o",
  authDomain: "portfolio-70ac9.firebaseapp.com",
  projectId: "portfolio-70ac9",
  storageBucket: "portfolio-70ac9.appspot.com",
  messagingSenderId: "615886247472",
  appId: "1:615886247472:web:ca0d8b3e7bbdbfacffbff5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

console.log('app is initialized', app);



// Reference to the form
const contactForm = document.getElementById('contactForm');
const successNotification = document.getElementById('successNotification');

// Add an event listener to the form submission
contactForm.addEventListener('submit', submitForm);

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();

  // Get values from the form
  const name = getInputVal('name');
  const email = getInputVal('email');
  const message = getInputVal('message');

  // Save the message to Firestore
  saveMessage(name, email, message);

  // Show a success message or reset the form
  contactForm.reset();
  alert('Thank you for your message!');
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Function to save the message to Firestore
function saveMessage(name, email, message) {
  db.collection('messages').add({
    name: name,
    email: email,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    showSuccessNotification();
  }).catch((error) => {
    console.error('Error saving message: ', error);
  });
}


// Function to show the success notification
function showSuccessNotification() {
  successNotification.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    successNotification.classList.remove('show');
  }, 3000);
}
