function toggleMenu() {
	const menu = document.getElementById('tabs');
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'flex';
	}
}

let slider = tns({
	container: '.my-slider',
	slideBy: 1,
	speed: 400,
	// The dots showing which slide you're on.
	nav: false,
	// Change the default controls to the div id #controls.
	controlsContainer: '#controls',
	prevButton: '.previous',
	nextButton: '.next',
	responsive: {
		// How many items to display contingent on the amount of pixels.
		850: {
			items: 4,
			gutter: 20,
		},
	},
});
