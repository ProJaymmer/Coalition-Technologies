function toggleMenu() {
	const menu = document.getElementById('tabs');
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'flex';
	}
}
