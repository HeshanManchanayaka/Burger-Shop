let product = [];

function addArray(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("qty").value;
  const imageFile = document.getElementById("image").files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageBase64 = reader.result;

    product.push({ name, price, qty, image: imageBase64 });

    console.log(product);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("image").value = "";

    displayProducts();
  };

  reader.readAsDataURL(imageFile);
}

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = product
    .map(
      (p, index) =>
        `<li>
          <strong>Product ${index + 1}:</strong> 
          Name - ${p.name}, 
          Price - ${p.price}, 
          Quantity - ${p.qty}
          <br>
          <img src="${p.image}" alt="${p.name}" width="100" height="100">
        </li>`
    )
    .join("");
}