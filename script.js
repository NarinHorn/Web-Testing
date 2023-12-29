function submitReport() {
    // Get form values
    const date = document.getElementById('date').value;
    const tasksCompleted = document.getElementById('tasksCompleted').value;
    const issuesChallenges = document.getElementById('issuesChallenges').value;
    const nextSteps = document.getElementById('nextSteps').value;
    const notesComments = document.getElementById('notesComments').value;

    // Do something with the data (e.g., send it to a server, log it, etc.)
    console.log("Date:", date);
    console.log("Tasks Completed:", tasksCompleted);
    console.log("Issues/Challenges:", issuesChallenges);
    console.log("Next Steps:", nextSteps);
    console.log("Notes/Comments:", notesComments);

    // Optionally, you can reset the form after submission
    document.getElementById('reportForm').reset();
}
