document.addEventListener('DOMContentLoaded', function () {
	var markers = document.querySelectorAll('.image');
	if (markers) {
	    markers.forEach(function(marker) {
	        marker.addEventListener('click', function(e) {
	            var previousMarker = marker.querySelector('.newmarker');
	            if (previousMarker) {
	                previousMarker.remove();
	            }
	            var imageWidth = marker.offsetWidth;
	            var imageHeight = marker.offsetHeight;
	            var newMarker = document.createElement('div');
	            newMarker.classList.add('marker');
	            newMarker.classList.add('newmarker');
	            var span = document.createElement('span');
	            newMarker.appendChild(span);
	            var offsetX = (e.offsetX / imageWidth) * 100;
	            var offsetY = (e.offsetY / imageHeight) * 100;
	            newMarker.style.left = offsetX + '%';
	            newMarker.style.top = offsetY + '%';
	            var imageInputs = marker.nextElementSibling;
	            if (imageInputs) {
	                var imageInputX = imageInputs.querySelector('.input-x');
	                var imageInputY = imageInputs.querySelector('.input-y');
	                var imageInputName = imageInputs.querySelector('.input-name');
	                if(imageInputName){
	                	if(imageInputName.value == ''){
	                		span.textContent = 'Без название';
	                	}else{
	                		span.textContent = imageInputName.value;
	                	}
	                  imageInputName.addEventListener('input', function() {
		                	if(imageInputName.value == ''){
		                		span.textContent = 'Без название';
		                	}else{
		                		span.textContent = imageInputName.value;
		                	}
	                  });
	                }
	                if (imageInputX) {
	                    imageInputX.value = offsetX + '%';
	                }
	                if (imageInputY) {
	                    imageInputY.value = offsetY + '%';
	                }
	            }
	            marker.appendChild(newMarker);
	        });
	    });
	}




});
