document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('kabinet').addEventListener('click', () => {
        document.getElementById('signin').removeAttribute('hidden');
        document.getElementById('search').style.display = "none";
        document.getElementById('signup').setAttribute('hidden', 'true');
        vis(0, 1);
    });
    document.getElementById('signin').addEventListener('click', () => {
        window.location.href = '/in';
    });
    document.getElementById('logo').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('search').style.display = "block";
        document.getElementById('signup').setAttribute('hidden', 'true');
        vis(1, 0);
    });
    document.getElementById('signUp').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('search').style.display = "none";
        document.getElementById('signup').removeAttribute('hidden');
    });
    document.getElementById('kabinet1').addEventListener('click', () => {
        document.getElementById('search').style.display = "block";
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('signup').setAttribute('hidden', 'true');

        vis(1, 0);

    });
    document.getElementById('search').addEventListener('click', () => {
        window.location.href = '/shops';
    });
});

function vis(k, k1) {
    var kabinet = document.getElementById('kabinet');
    var kabinet1 = document.getElementById('kabinet1');
    if (k === 0) {
        kabinet.setAttribute('hidden', 'true');
        kabinet.style.display = "none";
    }
    if (k === 1) {
        kabinet.removeAttribute('hidden');
        kabinet.style.display = "flex";
    }
    if (k1 === 0) {
        kabinet1.setAttribute('hidden', 'true');
        kabinet1.style.display = "none";
    }
    if (k1 === 1) {
        kabinet1.removeAttribute('hidden');
        kabinet1.style.display = "flex";
    }
}