document.addEventListener('DOMContentLoaded', function() {
    const disclaimerModal = document.getElementById('disclaimerModal');
    const agreeBtn = document.getElementById('agreeBtn');
    const reportForm = document.getElementById('reportForm');
    const reportList = document.getElementById('reportList');

    // Show the disclaimer modal when the page loads
    disclaimerModal.style.display = 'block';

    // Handle user agreement
    agreeBtn.addEventListener('click', function() {
        disclaimerModal.style.display = 'none'; // Hide the modal
    });

    document.getElementById('reportForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const reportData = Object.fromEntries(formData);
    
        // Convert the data to URL-encoded query parameters
        const queryParams = new URLSearchParams(reportData).toString();
    
        try {
            // const response = await fetch(`http://127.0.0.1:8000/reports?${queryParams}`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            // });
    
            // const responseData = await response.json();
    
            // if (!response.ok) {
            //     throw new Error(`HTTP error status: ${response.status}, message: ${JSON.stringify(responseData)}`);
            // }
    
            console.log('Success: Report submitted successfully!');
            alert('Report submitted successfully!');
            // Optionally reset the form
            e.target.reset();
        } catch (error) {
            console.error('Error:', error.message);
            alert('Error submitting report: ' + error.message);
        }
    });
});
