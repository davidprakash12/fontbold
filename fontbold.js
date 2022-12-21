//Get the button element
var btn = document.getElementById('button');

//Get paragraph element
var para = document.getElementById('content');

//Define an click event listener on button
btn.addEventListener('click', function() {
	//Change the font weight style to 700
	para.style.fontWeight = '700';
});
