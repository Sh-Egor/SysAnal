document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '/';
    });
    document.getElementById('kabinet').addEventListener('click', () => {
        document.getElementById('signin').removeAttribute('hidden');
        document.getElementById('foods').style.display = "none";
        document.getElementById('signup').setAttribute('hidden', 'true');
    });
    document.getElementById('signUp').addEventListener('click', () => {
        document.getElementById('signin').setAttribute('hidden', 'true');
        document.getElementById('foods').style.display = "none";
        document.getElementById('signup').removeAttribute('hidden');
    });
    document.getElementById('foods').addEventListener('click', e => {
        var id = e.target.id;
        $.ajax({
            data: { 'id': id },
            url: '/findUrls',
            success: data => {
                
            }
        });
    });
});