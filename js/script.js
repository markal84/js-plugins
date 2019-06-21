
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
  var infos = document.getElementById('infos'); // tutaj wyswietlaja sie informacje o kliknietym markerze
  //var uluru = {lat: -25.363, lng: 131.044}; // sposob definiowania wspolrzednych na mapie
  var startMarker = slides[0].coords;
  
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 3, 
    center: startMarker});

    for (var i = 0; i < slides.length; i++) {
    var marker = new google.maps.Marker({
			position: slides[i].coords,
      map: map
      });
      console.log(slides[i].coords);
    };
    
    
    //console.log(slides[0].coords);
    //this.console.log(startMaker);
    
  /*  document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      map.panTo(uluru);
      map.setZoom(10);
    }); */
    
	}	

  
  /*var markerOne = new google.maps.Marker({ // tak dodajemy marker do mapy
    position: uluru, // pozycja markera
    map: map}); // mapa markera
  markerOne.addListener('click', function(){
    infos.innerHTML = 'You clicked markerOne';
  });
  var markerTwo = new google.maps.Marker({
    position: coords2,
    map: map
  });
  markerTwo.addListener('click', function(){
    infos.innerHTML = 'You clicked markerTwo';
  });		
  
  var markerThree = new google.maps.Marker({
    position: coords3,
    map: map
  });
  markerThree.addListener('click', function(){
    infos.innerHTML = 'You clicked markerThree';
  });	  */

