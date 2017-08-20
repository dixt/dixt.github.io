function populateCanGrid() {
	cans = cans.sort();
	$('.canCell').each(function(index) {
		//var beer = beers[Math.floor(Math.random()*beers.length)];
		if(index<cans.length){
			//Beers images
			var beer = cans[index];
			$(this).html('<img class="canImg" src="images/cans/' + beer + '.jpg" ><div class="canName">' + beer + '</div>');
		} else {
			//Empty placeholder
			$(this).text('');
		}
	});
}

function populateCapsGrid() {
	//caps = caps.sort();
	$('.canCell').each(function(index) {
		if(index<caps.length){
			//Beers images
			var beer = caps[index];
			$(this).html('<img class="capImg" src="images/caps/' + beer + '.jpg" ><div class="canName">' + beer + '</div>');
		} else {
			//Empty placeholder
			$(this).text('');
		}
	});
}

function populateGlassesGrid() {
	//glasses = glasses.sort();
	$('.canCell').each(function(index) {
		if(index<glasses.length){
			//Beers images
			var beer = glasses[index];
			$(this).html('<img class="canImg" src="images/glasses/' + beer + '.jpg" ><div class="canName">' + beer + '</div>');
		} else {
			//Empty placeholder
			$(this).text('');
		}
	});
}

function populateBottlesGrid() {
	//bottles = bottles.sort();
	$('.canCell').each(function(index) {
		if(index<bottles.length){
			//Beers images
			var beer = bottles[index];
			$(this).html('<img class="canImg" src="images/bottles/' + beer + '.jpg" ><div class="canName">' + beer + '</div>');
		} else {
			//Empty placeholder
			$(this).text('');
		}
	});
}

function populateCoastersGrid() {
	//coasters = coasters.sort();
	$('.canCell').each(function(index) {
		if(index<coasters.length){
			//Beers images
			var beer = coasters[index];
			$(this).html('<img class="canImg" src="images/coasters/' + beer + '.jpg" ><div class="canName">' + beer + '</div>');
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
,"beer_top3.jpg"
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
