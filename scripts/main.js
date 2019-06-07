document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('kabinet').addEventListener('click', () => {
        document.getElementById('signin').removeAttribute('hidden');
        document.getElementById('search').style.display = "none";
        document.getElementById('signup').setAttribute('hidden', 'true');
    });
    document.getElementById('logo').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('search').style.display = "block";
        document.getElementById('signup').setAttribute('hidden', 'true');
    });
    document.getElementById('signUp').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('search').style.display = "none";
        document.getElementById('signup').removeAttribute('hidden');
    });
    document.getElementById('search').addEventListener('click', () => {
        window.location.href = 'shops.html';
    });
});