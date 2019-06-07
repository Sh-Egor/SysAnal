document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '/'; //main page
        var food = document.getElementById('foods');
        var food1 = document.getElementById('foods1');
        var kabinet = document.getElementById('kabinet');
        var kabinet1 = document.getElementById('kabinet1');
        food.removeAttribute('hidden');
        food.style.display = "flex";
        food1.setAttribute('hidden', 'true');
        food1.style.display = "none";
        //food - unhidden
        //food.style display = flex
        //food1 - hidden
        //food1.style display = none
        kabinet1.setAttribute('hidden', 'true');
        kabinet1.style.display = "none";
        kabinet.removeAttribute('hidden');
        kabinet.style.display = "flex";
        //kabinet1 - hidden
        //kabinet1.style display - none
        //kabinet - unhidden
        //kabinet.style display - flex
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
    document.getElementById('kabinet1').addEventListener('click', () => {
        var food = document.getElementById('foods');
        var food1 = document.getElementById('foods1');
        var kabinet = document.getElementById('kabinet');
        var kabinet1 = document.getElementById('kabinet1');
        food.removeAttribute('hidden');
        food.style.display = "flex";
        food1.setAttribute('hidden', 'true');
        food1.style.display = "none";
        //food - unhidden
        //food.style display = flex
        //food1 - hidden
        //food1.style display = none
        kabinet1.setAttribute('hidden', 'true');
        kabinet1.style.display = "none";
        kabinet.removeAttribute('hidden');
        kabinet.style.display = "flex";
        //kabinet1 - hidden
        //kabinet1.style display - none
        //kabinet - unhidden
        //kabinet.style display - flex
    });
    document.getElementById('foods').addEventListener('click', e => {
        var id = e.target.id;
        $.ajax({
            data: { 'id': id },
            url: '/findUrls',
            success: data => {
                var food = document.getElementById('foods');
                var food1 = document.getElementById('foods1');
                var kabinet = document.getElementById('kabinet');
                var kabinet1 = document.getElementById('kabinet1');
                food1.removeAttribute('hidden');
                food1.style.display = "flex";
                food.setAttribute('hidden', 'true');
                food.style.display = "none";
                //food - unhidden
                //food.style display = flex
                //food1 - hidden
                //food1.style display = none
                kabinet.setAttribute('hidden', 'true');
                kabinet.style.display = "none";
                kabinet1.removeAttribute('hidden');
                kabinet1.style.display = "flex";
                //kabinet1 - hidden
                //kabinet1.style display - none
                //kabinet - unhidden
                //kabinet.style display - flex
                document.getElementById('fastfood').getElementsByTagName('h1')[0].textContent = data.h1;
            }
        });
    });
});