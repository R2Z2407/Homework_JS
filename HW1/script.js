function upDate(previewPic) {  
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = 'url("' + previewPic.src +'")';
  imageDiv.style.backgroundSize = 'cover'; 
}  

function unDo() {  
  const imageDiv = document.getElementById("image");  
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = 'none';
}  