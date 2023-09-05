function openModal(title, content, imageUrl) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalContent").innerHTML = content;
    document.getElementById("modalImage").src = imageUrl;
    document.body.style.overflow = "hidden";
}

function openModalImg(imageUrl) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImage").src = imageUrl;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onscroll = function () {
    var modal = document.getElementById("myModal");
    modal.style.top = window.pageYOffset + "px";
};
