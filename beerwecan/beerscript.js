
var beers = [
"amsterdam.jpg"
,"aster.jpg"
,"beckerspils.jpg"
,"bestbrau.jpg"
,"birradana.jpg"
,"birraitalia.jpg"
,"birrajoder.jpg"
,"birramoretti.jpg"
,"birramorettichampions.jpg"
,"brewdogpunkipa.jpg"
,"budwiser.jpg"
,"castellodiudine.jpg"
,"cronenbourg.jpg"
,"dab.jpg"
,"danabrau.jpg"
,"duff.jpg"
,"favorit.jpg"
,"forst.jpg"
,"forstwhite.jpg"
,"gammaray.jpg"
,"germania.jpg"
,"gosser.jpg"
,"heineken.jpg"
,"heinekenjemfest.jpg"
,"henninger.jpg"
,"hofferbrau.jpg"
,"kaiserdompilsener.jpg"
,"karlovacko.jpg"
,"landerbrau.jpg"
,"nastroazzurro.jpg"
,"nastroazzurrowhite.jpg"
,"neckoil.jpg"
,"oettinger.jpg"
,"ozujusko.jpg"
,"peroni.jpg"
,"peroniblue.jpg"
,"printz.jpg"
,"royaldutch.jpg"
,"sanmiguel.jpg"
,"splugen.jpg"
,"splugenwhite.jpg"
,"stellaartois.jpg"
,"stubenbrau.jpg"
,"tuborg.jpg"
,"vikinger.jpg"
,"vonwunster.jpg"
,"waidbauer.jpg"
,"wersteiner.jpg"
];



function populateCanGrid() {
	$('.canCell').each(function(index) {
		//var beer = beers[Math.floor(Math.random()*beers.length)];
		if(index<beers.length){
			//Beers images
			var beer = beers[index];
			$(this).html('<img class="canImg" src="images/can/' + beer + '" ><div class="canName">' + beer + '</div>');
		} else {
			//Empty placeholder
			$(this).text('');
		}
	});
}

function changeBackgroundColor() {
	document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var backgroundImages = [
"beer_background.png"
,"beer_background2.png"
,"beer_background3.png"
,"beer_background4.png"
,"beer_background5.png"
];

function setRandomBackground(){
	var path = "images/common/";
	var image = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
	document.body.style.backgroundImage= "url('"+path+image+"')";
}
