// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6pq3bEdCUwRwDA98yLsZd8iII8KjDnC0",
    authDomain: "contactform-6ddc4.firebaseapp.com",
    databaseURL: "https://contactform-6ddc4-default-rtdb.firebaseio.com",
    projectId: "contactform-6ddc4",
    storageBucket: "contactform-6ddc4.appspot.com",
    messagingSenderId: "643759761471",
    appId: "1:643759761471:web:7c1d62a2f1be3ccd39708a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to your database
var contactFormDB = firebase.database().ref('contactForm');

function submitEntry() {
    const name = document.getElementById('name').value;
    const score = parseInt(document.getElementById('score').value, 10);
    const team = document.getElementById('team').value;

    if (name && !isNaN(score) && (team === 'red' || team === 'blue')) {
        saveEntry(name, score, team);
        alert('Entry added successfully.');
    } else {
        alert('Please fill in all fields correctly.');
    }

    // Optionally, clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    document.getElementById('team').value = 'red'; // Reset to default value
}

// Function to save entry to Firebase
function saveEntry(name, score, team) {
    contactFormDB.push().set({
        name: name,
        score: score,
        team: team
    });
}

