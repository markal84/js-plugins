
/* HTML Template */
var slide = document.getElementById('slide').innerHTML; // zaznaczamy nasz slide
//console.log(slide);
Mustache.parse(slide); // optymalizujemy bo bedziemy kozystac ze slide kilka razy (petla)


//var generateSlide = Mustache.render(slide, slides); // generujemy nasz template ( test - generowanie slide bez petli)

var slidesMultiple = '' //zmienna w ktorej przechowujemy kod wszystkich slajdow

for (var i = 0; i < slides.length; i++) {
  //console.log(slides);
  slidesMultiple += Mustache.render(slide, slides[i]); // dodajemy do zmiennej slidesMultiple wygenerowane za pomoca petli templaty w ilosci = ilosci obiektow
  //console.log(slidesMultiple);
};

result = document.getElementById('main'); // zazanaczamy miejsce gdzie trafia wygenerowane slajdy
result.insertAdjacentHTML('beforeend', slidesMultiple); // dodajemy slidy wygenerowane za pomoca petli do diva o id main


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

/* Maps */
window.initMap = function(){
  var uluru = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 4, 
    center: uluru});
  var marker = new google.maps.Marker({
    position: uluru, 
    map: map});
}
