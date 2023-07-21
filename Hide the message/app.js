const messages = document.getElementById('messages');
messages.addEventListener('click', (e) => {
    const target = e.target.getAttribute('id');
    if (target === 'hide') {
        const message = e.target.parentElement;
        message.style.display = 'none';  
     }
});
