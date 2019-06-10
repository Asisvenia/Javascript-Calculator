var fix = '';
var last = '';
var none = '';

var admin = (function() {

 ///////////// NUMBERS BEGIN HERE
document.querySelector('#one').addEventListener('click', function() {
	
	var x = document.querySelector('#one').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

document.querySelector('#two').addEventListener('click', function() {

	var x = document.querySelector('#two').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

document.querySelector('#three').addEventListener('click', function() {

	var x = document.querySelector('#three').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

document.querySelector('#four').addEventListener('click', function() {

	var x = document.querySelector('#four').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

document.querySelector('#five').addEventListener('click', function() {

	var x = document.querySelector('#five').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

 document.querySelector('#six').addEventListener('click', function() {

	var x = document.querySelector('#six').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

 document.querySelector('#seven').addEventListener('click', function() {

	var x = document.querySelector('#seven').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

 document.querySelector('#eight').addEventListener('click', function() {

	var x = document.querySelector('#eight').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

 document.querySelector('#nine').addEventListener('click', function() {

	var x = document.querySelector('#nine').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

  document.querySelector('#zero').addEventListener('click', function() {

	var x = document.querySelector('#zero').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
	});

 ///////////// NUMBERS END HERE

  ///////////// SIGNS

document.querySelector('#plus').addEventListener('click', function() {
	var x = document.querySelector('#plus').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
})

document.querySelector('#minus').addEventListener('click', function() {
	var x = document.querySelector('#minus').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
})

document.querySelector('#divide').addEventListener('click', function() {
	var x = document.querySelector('#divide').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
})

document.querySelector('#multiple').addEventListener('click', function() {
	var x = document.querySelector('#multiple').value;
	fix = fix + x;
	document.querySelector('#out').textContent = fix;
})

// RESET
document.querySelector('#c').addEventListener('click', function() {
	fix = '';
	document.querySelector('#out').textContent = 0;
});

// DELETE NUMBER
document.querySelector('#arrow').addEventListener('click', function() {

	var del = fix.substr(0, fix.length-1);

	if(fix.length >= 1) {
		fix = del;
	} else {
		fix = '';
	}

	document.querySelector('#out').textContent = del;

});

// COMPUTE
document.querySelector('#eq').addEventListener('click', function(){
	
	last = document.querySelector('#out').textContent = eval(fix);
	fix = last + none;

});

})();