console.log('hello');
// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.

//* Milestone 1: 
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//* Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

//! BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

//! BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

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
        title: "Marvel\'s Spiderman Miles Morales",
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
        text: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const carouselContainerDocument = document.querySelector('.carousel-container');

carouselContainerDocument.innerHTML = `
    <!-- Button left  -->
    <button type="button" class="btn btn-light my_button-left"><i class="fa-solid fa-chevron-left"></i></button>    

    <!-- Button right  -->
    <button type="button" class="btn btn-light my_button-right"><i class="fa-solid fa-chevron-right"></i></button>  
`;

images.forEach((element, index) => {
    carouselContainerDocument.innerHTML += `
    <!-- Carousel imgs  -->
    <img id="my-carousel-img-${index + 1}" class="carousel-img" src="${element.image}" alt="">
    `;
})

const carouselImgsDocument = document.getElementById('my-carousel-img-1');
carouselImgsDocument.classList.add('active');