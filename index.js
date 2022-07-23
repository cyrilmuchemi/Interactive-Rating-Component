const circles = document.querySelectorAll('.number-circle');
const submit = document.getElementById('submit');
const rating = document.querySelector('.interactive__container');
const thanks = document.querySelector('.thanks__container');
const rate = document.getElementById('rate');


submit.addEventListener('click', () => {
    thanks.style.display = 'flex';
    rating.style.display= 'none';
});

circles.forEach( (circle)=> {
    circle.addEventListener('click', (e) => {
        e.target.style.background = 'orange';
        rate.innerHTML = circle.innerHTML;
    });

});