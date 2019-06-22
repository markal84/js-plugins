
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
var cell = function(event){flkty.selectCell(0)} // select first cell in carousel
restart.addEventListener('click',cell ); // after clicking restart button select first cell

var progressBar = document.querySelector('.progress-bar'); //select div with class progress bar
flkty.on( 'scroll', function( progress ) { // function to animate progress bar
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });

/* Maps */
window.initMap = function(){ // funkcja inicjujaca mape google
  //var infos = document.getElementById('infos'); // tutaj wyswietlaja sie informacje o kliknietym markerze
  //var uluru = {lat: -25.363, lng: 131.044}; // sposob definiowania wspolrzednych na mapie
  var startMarker = slides[0].coords; // marker startowy na ktorym centruje sie mapa
  
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 3, 
    center: startMarker});

    for (let i = 0; i < slides.length; i++) { // petla ktora dodaje markery na mapie z wartosci coords 
    var marker = new google.maps.Marker({ //stworz marker
			position: slides[i].coords, // pozycja markera
      map: map // mapa na ktorej ma byc marker
      });
      marker.addListener('click', function(event){ // mamy 8 markerow 
        //infos.innerHTML += 'You clicked marker'+i;
        flkty.selectCell(i); // teraz to definiuje jako ostatni slide,jak zrobic zeby parametr i mial wartosc 1,2,3 itd w zaleznosci od klinkiniecia w marker1, marker2
        console.log(slides[i].coords);
      });
    };
    
};	

   /*  document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      map.panTo(uluru);
      map.setZoom(10);
    }); */
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

