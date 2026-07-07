const whatsapp = "https://wa.me/526631134150?text=Hola,%20quiero%20hacer%20un%20pedido%20de%20nieves%20y%20aguas%20frescas.";

const orderButton = document.getElementById("orderButton");

if (orderButton) {
    orderButton.addEventListener("click", function() {
        window.open(whatsapp, "_blank");
    });
}
