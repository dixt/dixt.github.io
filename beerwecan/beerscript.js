
var beers = [
"amsterdam.jpg"
,"aster.jpg"
,"axt.jpg"
,"beckerspils.jpg"
,"bestbrau.jpg"
,"birradana.jpg"
,"birraitalia.jpg"
,"birrajoder.jpg"
,"birramoretti.jpg"
,"birramorettichampions.jpg"
,"brewdogkingpin.jpg"
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
];

function setRandomBackground(){
	var path = "images/common/";
	var image = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
	document.body.style.backgroundImage= "url('"+path+image+"')";
}

var topImages = [
"beer_top.png"
,"beer_top2.jpg"
,"beer_top4.jpg"

,"beer_top6.jpg"
,"beer_top7.jpg"
,"beer_top8.jpg"

,"beer_top9.png"
,"beer_top10.png"
,"beer_top13.png"
,"beer_top14.png"
,"beer_top15.png"
,"beer_top16.png"
,"beer_top17.png"
,"beer_top18.png"
,"beer_top19.png"
,"beer_top20.png"
];

function setRandomTopImage(){
	var path = "images/common/";
	var image = topImages[Math.floor(Math.random() * topImages.length)];
	document.getElementById("header").style.backgroundImage= "url('"+path+image+"')";
}
