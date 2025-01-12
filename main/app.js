let product = JSON.parse(localStorage.getItem("products"));

function displayProducts() {
  const carouselInner = document.getElementById("carouselInner");

  let slides = "";
  for (let i = 0; i < product.length; i += 3) {
    const chunk = product.slice(i, i + 3);
    const cards = chunk
      .map(
        (p) =>
          `<div class="col">
             <div class="card h-100">
               <img src="${p.image}" class="card-img-top" alt="${p.name}" style="max-height: 300px; object-fit: cover;">
               <div class="card-body">
               <div class="carousel-overlay">
                  <button class="btn btn-primary">Add to Cart</button>
                  <a href="../Oreder/pay.html?image=${encodeURIComponent(p.image)}&name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}" class="btn btn-success">Buy Now</a>    
                  </div>
                 <h5 class="card-title">${p.name}</h5>  
                 <p class="card-text">RS : ${p.price} /=</p>
               </div>
             </div>
           </div>`

      )
      .join("");
    slides += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="row row-cols-1 row-cols-md-3 g-4">${cards}</div>
      </div>`;
  }

  carouselInner.innerHTML = slides;
}
window.onload = function () {
  displayProducts();
};
