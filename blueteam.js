// Replace the placeholders with your Firebase project's actual configuration details
firebase.initializeApp({
    apiKey: "AIzaSyB6pq3bEdCUwRwDA98yLsZd8iII8KjDnC0",
    authDomain: "contactform-6ddc4.firebaseapp.com",
    databaseURL: "https://contactform-6ddc4-default-rtdb.firebaseio.com",
    projectId: "contactform-6ddc4",
    storageBucket: "contactform-6ddc4.appspot.com",
    messagingSenderId: "643759761471",
    appId: "1:643759761471:web:7c1d62a2f1be3ccd39708a"
});

const dbRef = firebase.database().ref('contactForm');
dbRef.orderByChild('team').equalTo('blue').on('value', snapshot => {
    const entries = [];
    snapshot.forEach(childSnapshot => {
        entries.push(childSnapshot.val());
    });
    
    // Sort entries by score in descending order
    entries.sort((a, b) => b.score - a.score);

    // Update Top Three Positions
    if(entries.length > 0) {
        updateTopThree(entries.slice(0, 3));
    }

    // Populate Leaderboard Table
    const leaderboardTable = document.getElementById('leaderboard');
    leaderboardTable.innerHTML = ''; // Clear existing table rows

    entries.forEach((entry, index) => {
        const row = leaderboardTable.insertRow(-1); // Append row at the end of the table
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);
        rankCell.innerHTML = index + 1;
        nameCell.innerHTML = entry.name;
        scoreCell.innerHTML = entry.score;
    });
});

function updateTopThree(topThreeEntries) {
    // Assuming the placeholders have IDs: first-name, first-score, second-name, second-score, third-name, third-score
    if(topThreeEntries[0]) { // First Place
        document.getElementById('first-name').textContent = topThreeEntries[0].name;
        document.getElementById('first-score').textContent = topThreeEntries[0].score;
    }
    if(topThreeEntries[1]) { // Second Place
        document.getElementById('second-name').textContent = topThreeEntries[1].name;
        document.getElementById('second-score').textContent = topThreeEntries[1].score;
    }
    if(topThreeEntries[2]) { // Third Place
        document.getElementById('third-name').textContent = topThreeEntries[2].name;
        document.getElementById('third-score').textContent = topThreeEntries[2].score;
    }
}