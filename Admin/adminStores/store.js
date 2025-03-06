// let product = JSON.parse(localStorage.getItem("products")) || [];

// function addArray(event) {
//   event.preventDefault();
//   const code = document.getElementById("code").value;
//   const category = document.querySelectorAll('input[name="category"]:checked').value;
//   const name = document.getElementById("name").value;
//   const price = document.getElementById("price").value;
//   const discount = document.getElementById("discount").value;
//   const qty = document.getElementById("qty").value;
//   const imageFile = document.getElementById("image").files[0];

//   // const reader = new FileReader();
//   // reader.onload = function () {
//   //   const imageBase64 = reader.result;

//   //   product.push({ code,name, price, qty, image: imageBase64 });
//   //   localStorage.setItem("products",JSON.stringify(product));

//   //   console.log(product);
//   //   document.getElementById("code").value="";
//   //   document.getElementById("name").value = "";
//   //   document.getElementById("price").value = "";
//   //   document.getElementById("qty").value = "";
//   //   document.getElementById("image").value = "";

//   //   displayProducts();
//   // };

//   // reader.readAsDataURL(imageFile);

//   const requestBody = {
//     code: code,
//     name: name,
//     stock: parseInt(qty),
//     category: category,
//     price: parseFloat(price),
//     discount: parseFloat(discount),
//   };
//   fetch("http://localhost:8080/item/add", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json", // Set content type to JSON
//     },
//     body: JSON.stringify(requestBody), // Convert the body to JSON
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json(); // Parse the JSON response
//     })
//     .then((data) => {
//       console.log("Success:", data);
//       alert("Item added successfully!");

//       // Add the new item to the local storage (optional)
//       const reader = new FileReader();
//       reader.onload = function () {
//         const imageBase64 = reader.result;

//         // Add the new item to the product array
//         product.push({ code, name, price, qty, image: imageBase64 });
//         localStorage.setItem("products", JSON.stringify(product));

//         // Clear the form fields
//         document.getElementById("code").value = "";
//         document.getElementById("name").value = "";
//         document.getElementById("price").value = "";
//         document.getElementById("qty").value = "";
//         document.getElementById("discount").value = "";
//         document.getElementById("image").value = "";

//         // Refresh the displayed products
//         displayProducts();
//       };

//       // Read the image file as base64
//       if (imageFile) {
//         reader.readAsDataURL(imageFile);
//       } else {
//         // If no image is selected, proceed without it
//         product.push({ code, name, price, qty, image: null });
//         localStorage.setItem("products", JSON.stringify(product));

//         // Clear the form fields
//         document.getElementById("code").value = "";
//         document.getElementById("name").value = "";
//         document.getElementById("price").value = "";
//         document.getElementById("qty").value = "";
//         document.getElementById("discount").value = "";
//         document.getElementById("image").value = "";

//         // Refresh the displayed products
//         displayProducts();
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Failed to add item. Please try again.");
//     });
// }

// // function displayProducts() {
// //   const productList = document.getElementById("productList");
// //   productList.innerHTML = product
// //     .map(
// //       (p, index) =>
// //         `<li>
// //           <strong>Product ${index + 1}:</strong>
// //            Code - ${p.code},
// //           Name - ${p.name},
// //           Price - ${p.price},
// //           Quantity - ${p.qty}
// //           <br>
// //           <img src="${p.image}" alt="${p.name}" width="100" height="100">
// //         </li>`
// //     )
// //     .join("");
// // }
// // window.onload = function () {
// //   displayProducts();
// // };


function addItem() {
  const code = document.getElementById("code").value;
  const category = document.querySelector('input[name="category"]:checked').value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;
  const qty = document.getElementById("qty").value;

  const requestBody = {
      code: code,
      name: name,
      stock: parseInt(qty),
      category: category,
      price: parseFloat(price),
      discount: parseFloat(discount),
  };

  fetch("http://localhost:8080/item/add", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
  })
      .then((data) => {
          console.log("Success:", data);
          alert("Item added successfully!");

          document.getElementById("code").value = "";
          document.getElementById("name").value = "";
          document.getElementById("price").value = "";
          document.getElementById("qty").value = "";
          document.getElementById("discount").value = "";
          document.getElementById("image").value = "";
      })
 
}