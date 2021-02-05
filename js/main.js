function toogleItem(index) {
    let itemDescription = document.querySelectorAll(".item__description")[index];
    let itemTitle = document.querySelectorAll(".item__title")[index];
    let image = document.querySelectorAll(".item__image")[index];
    if (itemDescription.style.display === "none") {
        itemDescription.style.display = "block";
        itemTitle.style.fontWeight = "700";
        image.style.transform = "rotate(180deg)";

    } else {
        itemDescription.style.display = "none";
        itemTitle.style.fontWeight = "400";
        image.style.transform = "rotate(0deg)";
    }
}