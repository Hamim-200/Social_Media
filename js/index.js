// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGE
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customized-theme ');


// ========SIDEBAR========

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

// NOTIFICATION POPUP
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').
                style.display = 'none';
        }
    })
})


// ========MESSAGE========

// SEARCHES CHAT
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

// SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage);

// MESSAGE BOX
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// =======Theme Customization=======

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThememodal = (e) => {
    if (e.target.classList.contains('customized-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThememodal);
theme.addEventListener('click', openThemeModal);