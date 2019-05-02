var dropdownButton;
window.addEventListener('load', function () {
	dropdownButton = document.querySelector('div#header > button');
	dropdownList = document.querySelector('div#header > div.dropdown');
	
	dropdownButton.addEventListener('mouseover', function (e) {
		e.preventDefault();
		dropdownList.style.display = 'block';
	});
	dropdownButton.addEventListener('mouseout', function (e) {
		e.preventDefault();
		dropdownList.style.display = 'none';
	});
	dropdownList.addEventListener('mouseover', function (e) {
		e.preventDefault();
		dropdownList.style.display = 'block';
	});
	dropdownList.addEventListener('mouseout', function (e) {
		e.preventDefault();
		dropdownList.style.display = 'none';
	});
});