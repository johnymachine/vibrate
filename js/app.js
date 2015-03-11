var vibrate = function vibrate(){
	'use strict'

	var vibrateInterval;
	// Starts vibration at passed in level
	var startVibrate = function startVibrate(duration) {
		navigator.vibrate(duration);
	}

	// Stops vibration
	var stopVibrate = function stopVibrate() {
	// Clear interval and stop persistent vibrating 
	if(vibrateInterval) clearInterval(vibrateInterval);
	navigator.vibrate(0);
	}

	// Start persistent vibration at given duration and interval
	var startPeristentVibrate = function startPeristentVibrate(duration, interval) {
		vibrateInterval = setInterval(function() {
			startVibrate(duration);
		}, interval);
	}

	if ('vibrate' in navigator) {
   // Shake that device!
   		startVibrate(100);
	} else {
	   // Not supported
	   alert("Vibration API not supported!");
	}
	$('#vibrate-start').click(function(){startVibrate(1000)});
	$('#vibrate-persistent').click(function(){startPeristentVibrate(1000, 1500)});
	$('#vibrate-stop').click(function(){stopVibrate()});
};

vibrate();