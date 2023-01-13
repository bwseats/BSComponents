// function sendNewEmail() {
//     alert("One message sent");
// }

// function sendEmailToAddress() {
//     let emailAddressInput = document.getElementById('recipient');
//     let emailAddress = emailAddressInput.value;
//     alert(`One message sent to ${emailAddress}`)
// }

// function sendEmailWithSubject() {
//     let emailSubjectInput = document.getElementById('subject');
//     let emailSubject = emailSubjectInput.value;
//     let inboxEmailSubject = document.getElementById('inboxSubject');
//     inboxEmailSubject.textContent = emailSubject;
// }

function sendEmailToModal() {
    // get current email address in modal
    let modalEmailAddress = document.getElementById('modalEmail');

    // get current email subject in modal
    let modalEmailSubject = document.getElementById('modalSubject');

    // get current email message in modal
    let modalEmailMessage = document.getElementById('modalMessage');
    
    // get current email address in modal
    let inboxEmail = document.getElementById('inboxEmail');

    // get current email subject in modal
    let inboxSubject = document.getElementById('inboxSubject');

    // get current email message in modal
    let inboxMessage = document.getElementById('inboxMessage');

    // get new email address input value
    let emailAddress = document.getElementById('recipient');
    let newEmailAddress = emailAddress.value;

    // get new email subject input value
    let emailSubject = document.getElementById('subject');
    let newEmailSubject = emailSubject.value;

    // get new email message input value
    let emailMessage = document.getElementById('message');
    let newEmailMessage = emailMessage.value;

    // replace email modal text
    modalEmailAddress.textContent = `To: ${newEmailAddress}`;
    modalEmailSubject.textContent = `Subject: ${newEmailSubject}`;
    modalEmailMessage.textContent = newEmailMessage;
    inboxEmail.textContent = newEmailAddress;
    inboxSubject.textContent = newEmailSubject;
    inboxMessage.textContent = newEmailMessage;
}
