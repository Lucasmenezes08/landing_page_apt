window.addEventListener('scroll', function(){
    let header = document.querySelector('#header');
    header.classList.toggle('roll_effect',window.scrollY > 0)
})

