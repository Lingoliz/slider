let slider = document.querySelector('.slider');
let right = document.querySelector('.fa-angle-right');
let left = document.querySelector('.fa-angle-left');
let dots = document.querySelectorAll('.dots span');


let i = -1;
let j=0;


function active() {
    dots.forEach((e)=> {
        e.classList.remove('active')
    })
    if (j >= 0) {
        dots[j%2].classList.add('active');
    }
    if (j<0) {
        dots[-j%2].classList.add('active')
    }
}

dots[1].addEventListener('click',()=> {
    slider.style.transform=`translateX(-200vw)`;
    j=1;
    active()
})

dots[0].addEventListener('click',()=> {
    slider.style.transform=`translateX(-100vw)`;
    j=0;
    active()
})



right.addEventListener('click',()=> {
    --i;
    ++j;
    slider.style.transform=`translateX(${i*100}vw)`;
    slider.style.transition = '0.8s';
    active();
})

left.addEventListener('click',()=> {
    ++i;
    --j;
    slider.style.transform=`translateX(${i*100}vw)`;
    slider.style.transition = '0.8s';
    active();
})

document.ontransitionend = function() {
    

    if ( slider.style.transform == 'translateX(-300vw)' ) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(-100vw)'
        i=-1;
        
    }

    if (slider.style.transform == 'translateX(0vw)') {
        slider.style.transform = 'translateX(-200vw)';
        slider.style.transition = 'none';
        i=-2;
    }
    
}

setInterval(()=>{
    --i;
    ++j;
    slider.style.transform=`translateX(${i*100}vw)`;
    slider.style.transition = '0.8s';
    active();
} ,6000)