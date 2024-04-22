document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var issueDescription = document.getElementById('issueDescription').value;
    
    if (issueDescription.trim() === '') {
        setStatusMessage('Please describe the issue before sending.', 'error');
        return;
    }

    // Simulate sending email request
    // For demonstration purposes, we'll just show a success message
    setStatusMessage('Help request sent successfully!', 'success');
    document.getElementById('issueDescription').value = ''; // Clear the textarea
});

function setStatusMessage(message, type = 'error') {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = type;
}
