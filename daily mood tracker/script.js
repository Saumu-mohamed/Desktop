document.addEventListener('DOMContentLoaded', function() {
    const moodButtons = document.querySelectorAll('.mood-button');
    const responseElement = document.getElementById('response');
    const moodHistoryList = document.getElementById('mood-history');
    
    const moodResponses = {
        happy: ["Great choice! Happiness looks good on you!", 
                "Your happiness brightens the day!",
                "Keep spreading those good vibes!"],
        sad: ["It's okay to feel this way. Tomorrow is a new day.", 
              "Sending you a virtual hug. 💙",
              "This feeling is temporary. You've got this!"],
        angry: ["Take a deep breath. You're stronger than this feeling.", 
                "Try to find a calm moment for yourself.",
                "Anger is valid, but don't let it control you."],
        neutral: ["Every day can't be extraordinary, and that's okay.", 
                  "Neutral is a perfectly valid way to feel.",
                  "Sometimes steady is just what we need."]
    };
    
    const moodEmojis = {
        happy: '😊',
        sad: '😢',
        angry: '😠',
        neutral: '😐'
    };
    
    const moodColors = {
        happy: '#FFDE7D',
        sad: '#A5D8FF',
        angry: '#FF9A8B',
        neutral: '#D8D8D8'
    };
    let moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
    
    updateMoodHistoryDisplay();
    
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mood = this.id;
            logMood(mood);
        });
    });

    function logMood(mood) {
        const moodEntry = {
            mood: mood,
            date: new Date().toISOString(),
            timestamp: new Date().getTime()
        };
        
        moodHistory.unshift(moodEntry);
        
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
        
        updateMoodHistoryDisplay();
        
        // Show response
        showMoodResponse(mood);
    }
    
    // Function to show mood response
    function showMoodResponse(mood) {
        const responses = moodResponses[mood];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        responseElement.textContent = randomResponse;
        responseElement.style.backgroundColor = moodColors[mood];
        responseElement.style.color = getContrastColor(moodColors[mood]);
        
        // Clear response after 5 seconds
        setTimeout(() => {
            responseElement.textContent = '';
            responseElement.style.backgroundColor = '';
            responseElement.style.color = '';
        }, 5000);
    }
    
    // Function to update mood history display
    function updateMoodHistoryDisplay() {
        // Clear current history
        moodHistoryList.innerHTML = '';
        
        // Add each mood entry
        moodHistory.forEach(entry => {
            const li = document.createElement('li');
            
            // Format date
            const date = new Date(entry.date);
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            li.innerHTML = `
                <span class="mood-emoji">${moodEmojis[entry.mood]}</span>
                <span class="mood-name">${capitalizeFirstLetter(entry.mood)}</span>
                <span class="mood-date">${formattedDate}</span>
            `;
            
            li.style.backgroundColor = moodColors[entry.mood];
            li.style.color = getContrastColor(moodColors[entry.mood]);
            
            moodHistoryList.appendChild(li);
        });
    }
    
    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Helper function to get contrasting text color
    function getContrastColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        
        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Return black or white depending on luminance
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }
    
    // Bonus: Add a clear history button
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear History';
    clearButton.id = 'clear-history';
    clearButton.style.marginTop = '20px';
    clearButton.style.padding = '8px 16px';
    clearButton.style.backgroundColor = '#ff6b6b';
    clearButton.style.color = 'white';
    clearButton.style.border = 'none';
    clearButton.style.borderRadius = '4px';
    clearButton.style.cursor = 'pointer';
    
    clearButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your mood history?')) {
            moodHistory = [];
            localStorage.removeItem('moodHistory');
            updateMoodHistoryDisplay();
        }
    });
    
    document.body.appendChild(clearButton);
});