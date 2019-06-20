/* HTML Template */
var slide = document.getElementById('slide').innerHTML; // zaznaczamy nasz slide
Mustache.parse(slide); // optymalizujemy bo bedziemy kozystac ze slide kilka razy (petla)
var slides = 
  {   
    class: 'cell1',
    id: '1',
    image: "background-image: url(images/slide-1.jpg)",
    title: 'photo1',
  };

var generateSlide = Mustache.render(slide, slides); // generujemy nasz template

result = document.getElementById('main'); // zazanaczamy miejsce gdzie trafia wygenerowane slajdy
result.insertAdjacentHTML('beforeend', generateSlide); // dodajemy slidy do diva o id main



/* Slides */
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  hash: true,
  pageDots: false,
  draggable: false,
  cellAlign: 'left',
  contain: true
});


var restart = document.querySelector('.btn-restart'); //select restart button
var cell = function(event){flkty.selectCell( '.cell1')} // select first cell in carousel
restart.addEventListener('click',cell ); // after clicking restart button select first cell

var progressBar = document.querySelector('.progress-bar'); //select div with class progress bar
flkty.on( 'scroll', function( progress ) { // function to animate progress bar
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });