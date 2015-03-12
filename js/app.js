var vibrate = function vibrate(){
	'use strict'

	var startVibrate = function startVibrate(duration) {
		navigator.vibrate(duration);
	}

	var stopVibrate = function stopVibrate() { 
		navigator.vibrate(0);
	}

	if ('vibrate' in navigator) {
   // Shake that device!
   		startVibrate(100);
	} else {
	   // Not supported
	   alert("Vibration API not supported!");
	}

	$('#vibrate-start').click(function(){startVibrate(600)});
	$('#vibrate-multiple').click(function(){startVibrate([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000])});
	$('#vibrate-stop').click(function(){stopVibrate()});
};

vibrate();