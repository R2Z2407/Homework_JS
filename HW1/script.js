function upDate(previewPic) {  
  const imageDiv = document.getElementById("image");  
  imageDiv.innerHTML = previewPic.alt;  

  const largeImageUrl = previewPic.getAttribute('data-large');  
  if (largeImageUrl) {  
      imageDiv.style.backgroundImage = 'url("' + largeImageUrl + '")';  
  } else {  
      imageDiv.style.backgroundImage = 'none';
  }  
  imageDiv.style.backgroundSize = 'cover';   
}  

function unDo() {  
  const imageDiv = document.getElementById("image");  
  imageDiv.innerHTML = "Hover over an image below to display here.";  
  imageDiv.style.backgroundImage = 'none';  
}  
