document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '/';
        vis(1, 0, 1, 0);
    });
    document.getElementById('kabinet').addEventListener('click', () => {
        document.getElementById('signin').removeAttribute('hidden');
        document.getElementById('foods').style.display = "none";
        document.getElementById('signup').setAttribute('hidden', 'true');
        vis(-1, -1, 0, 1);
    });
    document.getElementById('signUp').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('foods').style.display = "none";
        document.getElementById('signup').removeAttribute('hidden');
    });
    document.getElementById('kabinet1').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('signup').setAttribute('hidden', 'true');
        vis(1, 0, 1, 0);
    });
    document.getElementById('foods').addEventListener('click', e => {
        var id = e.target.id;
        $.ajax({
            data: { 'id': id },
            url: '/findUrls',
            success: data => {
                vis(0, 1, 0, 1);
                document.getElementById('fastfood1').getElementsByTagName('h1')[0].textContent = data.h1;
            }
        });
    });
});

function vis(f, f1, k, k1) {
    var food = document.getElementById('foods');
    var food1 = document.getElementById('foods1');
    var kabinet = document.getElementById('kabinet');
    var kabinet1 = document.getElementById('kabinet1');
    if (f === 0) {
        food.setAttribute('hidden', 'true');
        food.style.display = "none";
    }
    if (f === 1) {
        food.removeAttribute('hidden');
        food.style.display = "flex";
    }
    if (f1 === 0) {
        food1.setAttribute('hidden', 'true');
        food1.style.display = "none";
    }
    if (f1 === 1) {
        food1.removeAttribute('hidden');
        food1.style.display = "flex";
    }
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