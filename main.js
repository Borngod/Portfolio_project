document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

   
});
// count down clock
const countDownClock = (number = 100, format = 'seconds') => {
  
    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
    
    
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);             
      }
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
  countDownClock(20, 'days');

  var swiper = new Swiper('.swiper-container-1', {
    speed: 500,
   
    effect:'cards',
    grabCursor:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const scrollingNav = document.getElementById('scrolling-nav');
  let lastScrollPosition = 0;
  
  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
  
    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      scrollingNav.classList.add('hidden');
    } else {
      // Scrolling up
      scrollingNav.classList.add('hidden');
    }
  
    // Reset nav position when scrolled back to the absolute top
    if (currentScrollPosition === 0) {
      scrollingNav.classList.remove('hidden');
    }
  
    lastScrollPosition = currentScrollPosition;
  });

  // for a page 

  var swiper = new Swiper('.swiper-container-3', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination-3',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-cube1',
      prevEl: '.swiper-cube2',
    }
   });

//  writting code rotating images in container

// creating array conataining objects for images 
let carouselImg = [{img:'<img src="public/memes3.png">'},{img:'<img src="public/memes4.png">'},{img:'<img src="public/memes5.png">'},{img:'<img src="public/memes6.png">'},
{img:'<img src="public/memes7.png">'},{img:'<img src="public/memes_1.png">'},{img:' <img src="public/memes_23.png">'},{img:' <img src="public/memes_4.png">'},{img:' <img src="public/memes_7.png">'},{img:'<img src="public/memes_pluck.png">'},{img:'<img src="public/memes_plug.png">'}
];

// creating variables for rotating classes 
let rotateBox1 = document.querySelector('.rotate-box-1');
let rotateBox2 = document.querySelector('.rotate-box-2');
let rotateBox3 = document.querySelector('.rotate-box-3');
let sliderHand1 = document.querySelector('.arrow-left');
let sliderHand2 = document.querySelector('.arrow-right');

// creating a count variable to keep record of no_of times looped
var count = 0;
console.log(count,'outside event')
// adding event slider for the slider hand 1
sliderHand1.addEventListener('click', function(){
// creating an if to to validate the count the coun to always be less than the length of array
if (count < carouselImg.length){
rotateBox1.innerHTML = rotateBox2.innerHTML;
rotateBox2.innerHTML = rotateBox3.innerHTML;
rotateBox3.innerHTML = carouselImg[count].img;
// increasing count 
count = count +  1;

}

// this runs the count reaches the last index
else if(count == carouselImg.length){
  console.log(count,'when its zero')
  count = 0;
}
})

// creating same for sliderhand2
sliderHand2.addEventListener('click', function(){
  // creating an if to to validate the count the coun to always be less than the length of array
  if (count < carouselImg.length){
  rotateBox1.innerHTML = rotateBox2.innerHTML;
  rotateBox2.innerHTML = rotateBox3.innerHTML;
  rotateBox3.innerHTML = carouselImg[count].img;
  // increasing count 
  count = count +  1;
  
  }
  
  // this runs the count reaches the last index
  else if(count == carouselImg.length){
    console.log(count,'when its zero')
    count = 0;
  }
  })

  // rotating image on mouse scroll
  const rotatingImage = document.querySelector(".emo-laugh");

  let animationPaused = false;
  
  function toggleAnimation() {
      if (animationPaused) {
          rotatingImage.style.animationPlayState = "running";
      } else {
          rotatingImage.style.animationPlayState = "paused";
      }
      animationPaused = !animationPaused;
  }
  
  // Pause animation when page loses focus
  // window.addEventListener("blur", toggleAnimation);
  
  // Resume animation when page gains focus
  window.addEventListener("focus", toggleAnimation);
// creating the handburger 
  let handBurger = document.querySelector('.handbugger-nav');
  let handBurgerInfo= document.querySelector('#sub-menu');

  handBurger.addEventListener('click',function (){

    handBurgerInfo.classList.toggle('hidden-nav')
   

  })

 
