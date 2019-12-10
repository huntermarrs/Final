// from week 12
function addIdlePhotos(){
	var d = new Date();
	d.getSeconds();
	var screenSaveContainer = document.getElementById('screenSaver');
	if (screenSaveContainer.childElementCount < 50) {
		var newPhoto = document.createElement('img');
		newPhoto.src = "logo.png",
        newPhoto.style.maxWidth = "200px";
        newPhoto.style.maxHeight = "200px";
        newPhoto.style.height = 200 * Math.random() + "px";
        newPhoto.style.width = 200 * Math.random() + "px";
		newPhoto.style.left = 100 * Math.random() + "%";
		newPhoto.style.top = 100 * Math.random() + "%";

		newPhoto.classList.add('idle');
		screenSaveContainer.appendChild(newPhoto);
	}
}

setInterval(addIdlePhotos, 5000);
