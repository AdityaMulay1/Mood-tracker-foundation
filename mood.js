// Get references to HTML elements
const moodSelect = document.getElementById('mood-select');
const logMoodButton = document.getElementById('log-mood');
const deleteLogsButton = document.getElementById('delete-logs');
const moodLogDiv = document.getElementById('mood-log');

// Initialize mood log array
let moodLog = [];

// Log mood function
function logMood() {
    const selectedMood = moodSelect.value;
    const currentDate = new Date();
    const moodEntry = `${currentDate.toLocaleDateString()} - ${selectedMood}`;
    moodLog.push(moodEntry);
    saveMood();
    displayMoodLog();
}

// Save mood function
function saveMood() {
    localStorage.setItem('moodLog', JSON.stringify(moodLog));
}

// Display mood log function
function displayMoodLog() {
    const moodLogHTML = moodLog.map((entry, index) => {
        return `<p>${entry}</p>`;
    }).join('');
    moodLogDiv.innerHTML = moodLogHTML;
}

// Delete all logs function
function deleteLogs() {
    localStorage.removeItem('moodLog');
    moodLog = [];
    displayMoodLog();
}

// Add event listeners
logMoodButton.addEventListener('click', logMood);
deleteLogsButton.addEventListener('click', deleteLogs);

// Load mood log from local storage
const storedMoodLog = localStorage.getItem('moodLog');
if (storedMoodLog) {
    moodLog = JSON.parse(storedMoodLog);
    displayMoodLog();
}
