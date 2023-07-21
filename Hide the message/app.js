const messages = document.getElementById('messages');
messages.addEventListener('click', (e) => {
    const target = e.target.getAttribute('id');
    if (target === 'hide') {
        const message = e.target.parentElement;
        message.style.display = 'none';  
     }
    // display "no messages" if all messages are hidden
    const allMessages = document.querySelectorAll('.message');
    const hiddenMessages = document.querySelectorAll('.message[style="display: none;"]');
    if (allMessages.length === hiddenMessages.length) {
        const noMessages = document.createElement('div');
        noMessages.innerText = 'No messages';
        messages.appendChild(noMessages);
    }
});
