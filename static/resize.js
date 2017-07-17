function resize(obj) {
	if(window.innerWidth <= 960) {
		obj.menushow = false;
	} else {
		obj.menushow = true;
	}
	if(window.innerWidth < 768) {
		obj.height = "2650px"

	} else if(window.innerWidth < 992) {
		obj.height = "1350px"

	} else if(window.innerWidth > 1200) {
		obj.height = "700px"

	} else if(window.innerWidth < 1200) {
		obj.height = "1000px"
	}
}

function load(obj) {
	$(function() {
		console.log(123)
		resize(obj);
		$(window).resize(function(){
			resize(obj);
		})
	});
}

function test(o) {
	console.log(o);
}

export {
	load
}