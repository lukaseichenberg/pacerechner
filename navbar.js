document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('show-sidebar-button');
    const hideButton = document.getElementById('hide-sidebar-button');
    const sidebar = document.querySelector('.sidebar');

    showButton.addEventListener('click', (event) => {
        event.preventDefault();
        sidebar.style.display = 'flex';
        sidebar.style.visibility = 'visible';
        showButton.classList.add('hidden');
    });

    hideButton.addEventListener('click', (event) => {
        event.preventDefault();
        sidebar.style.display = 'none';
        showButton.classList.remove('hidden');
    });
});