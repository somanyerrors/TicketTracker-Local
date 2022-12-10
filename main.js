document.getElementById('issueInputForm').addEventListener('submit', saveIssue)

function fetchIssues() {
    let issues = JSON.parse(localStorage.getItem('issues'))
    let issuesList = document.getElementById('issuesList')

    issuesList.innerHTML = '';

    // Loop the list of tickets
    for (let i = 0; i < issues.length; i++) {
        let id = issues[i].id
        let subject = issues[i].subject
        let description = issues[i].description
        let severity = issues[i].severity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status
        let statusColor = status == "Closed" ? 'label-success' : 'label-info'

        // issuesList.innerHTML +=
    }
}

function saveIssue(e) {
    let issueId = chance.guid()
    let issueSubject = document.getElementById('issueSubjectInput').value
    let issueDesc = document.getElementById('issueDescInput').value
    let issueSeverity= document.getElementById('issueSeverityInput').value
    let issueAssignedTo = document.getElementById('issueAssignedToInput').value
    let issueStatus = 'Open'
    
    // Object to store in localstorage
    let issue = {
        id: issueId,
        subject: issueSubject,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }
}