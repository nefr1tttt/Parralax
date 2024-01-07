const clouds = [...document.querySelectorAll('.header__cloud')]
const boat = document.querySelector('.header__boat')



window.addEventListener('scroll', () => {
    console.log(this.scrollY)

    clouds.forEach((cloud) => {
        let speed = cloud.getAttribute("data-speed")
        cloud.style.transform = `translateX(${this.scrollY * speed}px)`


        speedBoat = boat.getAttribute('data-speed')
        boat.style.transform = `translateX(${this.scrollY * speedBoat}px)`

        console.log(speed)
    })
});

// Typing

const title = document.querySelector('.header__title')
//console.log(title)
const text = title.innerHTML;  //parallax effect 
console.log(text.length);

title.innerHTML = null;

function str(x = 0) {
    title.innerHTML = title.innerHTML + text[x];
    x++;

    if (x < text.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }

}

str();

// Parallax Box

const parallaxBox = document.querySelector('.parallax__box')
const parallaxBall = [...document.querySelectorAll('.parallax__ball')]

parallaxBox.addEventListener('mousemove', (event) => {

    parallaxBall.forEach(balls => {

        const x = (window.innerWidth - event.pageX) / 20;
        const y = (window.innerHeight - event.pageY) / 20;
        balls.style.transform = `translate(${x}px, ${y}px)`;
    });
});





const footer = document.querySelector('.footer');
const footerNum = [...document.querySelectorAll('.footer__num')];

window.addEventListener('scroll',function scrollTimer(){
    if(this.scrollY >= footer.offsetTop - footer.offsetHeight-100){
        footer.style.background = "rgb(180, 31, 56)"
        footerStop()
        this.removeEventListener('scroll',scrollTimer)
    }
})


function footerStop(){
    for (let i = 0; i < footerNum.length; i++) {
        const count = footerNum[i].getAttribute('data-num')
        function calcSum(k=0){
            footerNum[i].innerHTML = k
            k++
            if(k<=count){
                setTimeout(() => {
                    calcSum(k)
                }, 1);
            }
        }
        calcSum()
    }
}
footerStop()