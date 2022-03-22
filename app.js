const logo = document.querySelectorAll('.logo');
const slider = document.querySelector('.txt');
const sliderDiv = document.querySelector('.divider');
const slider2 = document.querySelector('.rdv');
const img = document.querySelector('.img');

const tl = new TimelineMax();
tl
.from(logo,5, {opacity:0}, {opacity:1, ease: Power2.easeInOut})
.from(sliderDiv,2, {opacity:0, x: "300%", width:"0%"}, {opacity:1, x: '0%', ease: Power2.easeInOut})
 .from(img,4, {opacity:0, x: "100%"}, {opacity:1, x: '0%', ease: Power2.easeInOut})
/* .from(img,4, {opacity:0, x: "50%"}, {opacity:1, x: '0%', ease: Power2.easeInOut})
 */.from(slider,2, {opacity:0, y: "-25%"}, {opacity:1, y: '0%', ease: Power2.easeInOut},)
.from(slider2,2, {opacity:0, y: "350%"}, {opacity:1, y: '0%', ease: Power2.easeInOut});





const slindingTxtIntro = document.querySelector('.txtIntro')

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = slindingTxtIntro.getBoundingClientRect().top;

   if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight){
       slindingTxtIntro.classList.add('active');
   }
});

const slindingBadges = document.querySelector('.badges')

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport3 = slindingBadges.getBoundingClientRect().top;

   if(scrollTop > (scrollTop + topElementToTopViewport3).toFixed() - clientHeight){
       slindingBadges.classList.add('active');
   }
});

const slindingTxt2 = document.querySelector('.txt2')

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport2 = slindingTxt2.getBoundingClientRect().top;

   if(scrollTop > (scrollTop + topElementToTopViewport2).toFixed() - clientHeight){
       slindingTxt2.classList.add('active');
   }
});






