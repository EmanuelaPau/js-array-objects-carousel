console.log('hello');

//! BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

//? CAROUSEL ELEMENTS 
// <!-- Carousel imgs  -->
// <img class="carousel-img" src="img/01.webp" alt="">

// <!-- Button left  -->
// <button type="button" class="btn btn-light my_button-left"><i class="fa-solid fa-chevron-left"></i></button>    

// <!-- Button right  -->
// <button type="button" class="btn btn-light my_button-right"><i class="fa-solid fa-chevron-right"></i></button>   

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morales",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const carouselContainerDocument = document.querySelector('.carousel-container');
const carouselMiniatureContainerDom = document.querySelector('.carousel-miniatures-container')

carouselContainerDocument.innerHTML = `

    <!-- Button play -->
    <button type="button" class="btn btn-light my_button-play"><i class="fa-solid fa-play"></i></button> 
    
    <!-- Button stop -->
    <button type="button" class="btn btn-light my_button-stop"><i class="fa-solid fa-pause"></i></button>   

    <!-- Button left  -->
    <button type="button" class="btn btn-light my_button-left"><i class="fa-solid fa-chevron-left"></i></button>    

    <!-- Button right  -->
    <button type="button" class="btn btn-light my_button-right"><i class="fa-solid fa-chevron-right"></i></button>  
`;

let activeIndex = 0;

images.forEach((element, index) => {
    carouselContainerDocument.innerHTML += `
    <!-- Text info   -->
    <div class="carouselmodule">
        <div class="my_image-infos-container" id="my_carousel-info-${index + 1}">
            <h2 class="my_image-title" id="my_carousel-title-${index + 1}">
                ${element.title}
            </h2>
            <p class="my_image-text" id="my_carousel-text-${index + 1}">
                ${element.text}
            </p>
        </div>

        <div class="carousel-black-multiplyer"></div>
        <!-- Carousel imgs  -->
        <img id="my-carousel-img-${index + 1}" class="carousel-img" src="${element.image}" alt="${element.title}">
    </div>
    `;

    carouselMiniatureContainerDom.innerHTML += `
    <div class="miniaturebox card-link">
        <img src="${element.image}" alt="${element.title}">
    </div>
    `
})

const carouselImgsContainerDocument = document.querySelectorAll('.carouselmodule')[activeIndex].classList.add('active');

document.querySelectorAll('.miniaturebox')[activeIndex].classList.add('color');

const rightCarouselButton = document.querySelector('.my_button-right');
const leftCarouselButton = document.querySelector('.my_button-left');

rightCarouselButton.addEventListener('click', function () {
    if (activeIndex === images.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }
    // alert('ciao destro');
    swithcElementInCarousel('carouselmodule', 'miniaturebox', 'active', 'color', activeIndex)
})

leftCarouselButton.addEventListener('click', function () {
    if (activeIndex === 0) {
        activeIndex = images.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }
    // alert('ciao sinistro');
    swithcElementInCarousel('carouselmodule', 'miniaturebox', 'active', 'color', activeIndex)
})


const miniature = document.querySelectorAll('.miniaturebox');

images.forEach((element, i) => {
    changeImageByMiniature(i)
})

function changeImageByMiniature(index) {
    miniature[index].addEventListener('click', function () {
        // alert('ciao');
        activeIndex = index;

        swithcElementInCarousel('carouselmodule', 'miniaturebox', 'active', 'color', activeIndex)
    })
}


function swithcElementInCarousel(elementClass, miniatureClass, activeClass, colorClass, Index) {
    document.querySelector(`.${elementClass}.${activeClass}`).classList.remove(activeClass);
    document.querySelectorAll(`.${elementClass}`)[Index].classList.add(activeClass)

    document.querySelector(`.${miniatureClass}.${colorClass}`).classList.remove(colorClass);
    document.querySelectorAll(`.${miniatureClass}`)[Index].classList.add(colorClass)

}

let isTimerOn = true;

setInterval(myTimer, 3000);

function myTimer() {
    if (isTimerOn) {
        if (activeIndex === images.length - 1) {
            activeIndex = 0;
        } else {
            activeIndex = activeIndex + 1;
        }
        swithcElementInCarousel('carouselmodule', 'miniaturebox', 'active', 'color', activeIndex)
    }
}

const playButton = document.querySelector('.my_button-play');
const pauseButton = document.querySelector('.my_button-stop');

playButton.addEventListener('click', function () {
    isTimerOn = true;
})

pauseButton.addEventListener('click', function () {
    isTimerOn = false;
})