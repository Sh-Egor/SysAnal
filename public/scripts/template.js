document.addEventListener('DOMContentLoaded', () => {  
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '/';
    });
    document.getElementById('kabinet').addEventListener('click', () => {
        window.location.href = '/shops';
    });
});