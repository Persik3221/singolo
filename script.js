document.querySelector(".link").classList.add("active_link");
document.querySelector('.switcher_item').classList.add('active_item');
document.querySelector('.switcher_link').classList.add('act_link');
document.querySelectorAll(".link").forEach((item) => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll(".link").forEach((item) => {
            item.classList.remove("active_link");
        })
        e.target.classList.add("active_link");
    })
})
document.querySelectorAll(".portfolio_image_block").forEach((item) => {
    item.addEventListener('click', (e) => {
        let flag = 0;
        if (e.target.parentElement.classList[1] == 'active_img') flag = 1;
        document.querySelectorAll('.portfolio_image_block').forEach((item) => {
            item.classList.remove("active_img");
        })
        if (e.target.classList[0] == 'portfolio_image' && flag == 0) e.target.parentElement.classList.add('active_img');
    })
})
document.querySelectorAll('.switcher_item').forEach((item) => {
    item.addEventListener('click', (e) => {
        let flag = 0;
        if (e.target.parentElement.classList[1] == 'active_item' || e.target.classList[1] == 'active_item') {} else {
            document.querySelectorAll('.switcher_item').forEach((item) => {
                item.classList.remove('active_item');
            })
            document.querySelectorAll('.switcher_link').forEach((item) => {
                item.classList.remove('act_link');
            })
            if (e.target.parentElement.classList[0] == 'switcher_item') {
                e.target.classList.add('act_link');
                e.target.parentElement.classList.add('active_item');
            } else {
                e.target.classList.add('active_item');
                e.target.children[0].classList.add('act_link');
            }
            switch_pictures();
        }
    })
})

document.querySelector('.home_button1-circle').addEventListener('click',screen1_switch);
document.querySelector('.screen1').addEventListener('click',screen1_switch);
document.querySelector('#second_button').addEventListener('click',screen2_switch);
document.querySelector('.screen').addEventListener('click',screen2_switch);
function screen1_switch(){
    if (document.querySelector('.black_screen_1')) {
        document.querySelector('.black_screen_1').remove();
    }
    else{
        let black_screen = document.createElement('div');
        black_screen.className = 'black_screen_1';
        black_screen.addEventListener('click',screen1_switch);
        document.querySelector('.screen1_box').append(black_screen);
    }
}
function screen2_switch(){
    if (document.querySelector('.black_screen_2')) {
        document.querySelector('.black_screen_2').remove();
    }
    else{
        let black_screen = document.createElement('div');
        black_screen.className = 'black_screen_2';
        black_screen.addEventListener('click',screen2_switch);
        document.querySelector('.screen_box').append(black_screen);
    }
}

function send() {
    let form = document.querySelector('.form_block');
    let theme = document.querySelector('#theme');
    let description = document.querySelector('#description');
    let ok = document.querySelector('#ok');
    ok.addEventListener('click', () => {
        document.querySelector('.modal').classList.add('off');
    })
    form.subject.value ? theme.innerHTML = 'Theme: ' + form.subject.value : theme.innerHTML = 'Theme: ' + 'No theme';
    form.details.value ? description.innerHTML = 'Description: ' + form.details.value : description.innerHTML = 'Description: ' + 'No Description';
    document.querySelector('.modal').classList.remove('off');
}


function switch_pictures() {
    let pictures = document.querySelectorAll('.portfolio_image_block');
    pictures.forEach((item) => {
        item.remove();
    });
    pictures = shuffle(pictures);
    pictures.forEach((item) => {
        document.querySelector('.portfolio_images_grid').append(item);
    });
}

function shuffle(array) {
    let res = [0];
    for (let i = 0; i < array.length; i++) {
        if (i == 11) res[i] = array[0];
        else res[i] = array[i + 1];
    }
    return res;
}



let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrSlide(n){
    currentSlide = (n+slides.length) % slides.length;
}
function hideSlide(direction){
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('active_slide', direction);
    })
}
function showSlide(direction){
    slides[currentSlide].classList.add('next_slide', direction);
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('next_slide', direction);
        this.classList.add('active_slide');
        isEnabled = true;
    })
}
function prevSlide(n){
    hideSlide('to_right');
    changeCurrSlide(n-1);
    showSlide('from_left');
}
function nextSlide(n){
    hideSlide('to_left');
    changeCurrSlide(n+1);
    showSlide('from_right');
}

document.querySelector('.pointer.pleft').addEventListener('click',function(){
    if (isEnabled){
        prevSlide(currentSlide);
    }
});

document.querySelector('.pointer.pright').addEventListener('click',function(){
    if (isEnabled){
        nextSlide(currentSlide);
    }
});

