function openImageModalLarge(imageSrc) {
    var modalImg = document.getElementById("modalImageLarge");
    modalImg.src = imageSrc;
    var modal = document.getElementById("myModalImg");
    modal.style.display = "block";
}

function closeImageModal() {
    var modal = document.getElementById("myModalImg");
    modal.style.display = "none";
}
