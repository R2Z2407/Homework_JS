let images = [
  "../Assets/Image/1.jpeg",
  "../Assets/Image/2.jpg",
  "../Assets/Image/3.jpg",
  "../Assets/Image/4.jpeg",
  "../Assets/Image/5.jpeg",
  "../Assets/Image/6.jpg",
  "../Assets/Image/7.jpeg",
  "../Assets/Image/8.jpg",
  "../Assets/Image/9.jpg"
];

const ImageList = document.getElementById('Image_scroller');
const HoverGallery = document.getElementById('Hover_gallery'); // Mendapatkan referensi ke Hover_gallery  

function displayImages() {
  ImageList.innerHTML = ''; // Menghapus gambar sebelumnya  

  images.forEach(imageSrc => {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = "Gambar";
    imgElement.onclick = () => showImage(imageSrc); // Event untuk menampilkan gambar di Hover_gallery  
    ImageList.appendChild(imgElement); // Memasukkan gambar ke ImageList  
  });
}

function showImage(src) {
  // Menghapus gambar sebelumnya di Hover_gallery  
  HoverGallery.innerHTML = '';

  const imgElement = document.createElement('img');
  imgElement.src = src;
  imgElement.alt = "Gambar besar";
  imgElement.style.width = '100%';  // Mengatur lebar gambar yang tampil  
  imgElement.style.maxWidth = '400px'; // Mengatur lebar maksimal gambar  
  imgElement.style.borderRadius = '5px'; // Menambahkan border-radius  

  HoverGallery.appendChild(imgElement); // Menambahkan gambar yang dipilih ke Hover_gallery  
}

// Panggil fungsi displayImages untuk menampilkan gambar saat halaman dimuat  
displayImages();  