function openModal(title, content, imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var modalTitle = document.getElementById("modalTitle");
    var modalContent = document.getElementById("modalContent");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function openModalImg(imageUrl) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImage").src = imageUrl;
    document.body.style.overflow = "hidden";
}

window.onscroll = function () {
    var modal = document.getElementById("myModal");
    modal.style.top = window.pageYOffset + "px";
};
