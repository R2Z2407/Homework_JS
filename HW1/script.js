function upDate(previewPic) {  
    const imageDiv = document.getElementById("image");  
    imageDiv.innerHTML = previewPic.alt;  

    // Ambil URL gambar besar dari data-large  
    const largeImageUrl = previewPic.getAttribute('data-large');  
    if (largeImageUrl) {  
        imageDiv.style.backgroundImage = 'url("' + largeImageUrl + '")';  
    } else {  
        imageDiv.style.backgroundImage = 'none';  
    }  
}  

function unDo() {  
    const imageDiv = document.getElementById("image");  
    imageDiv.innerHTML = "Hover over an image below to display here.";  
    imageDiv.style.backgroundImage = 'none';  
}
