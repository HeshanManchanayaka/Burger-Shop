loadCustomer();


function loadCustomer() {
    fetch("http://localhost:8080/item/getAll")
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let tableRow = `
                <tr>
                    <th>code</th>
                    <th>Name</th>
                    <th>category</th>
                    <th>stock</th>
                    <th>price</th>
                    <th>discount</th>
                </tr>
        `;

            data.forEach(item => {
                tableRow += `    
                <tr>
                    <td>${item.code}</td>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.stock}</td>
                     <td>${item.price}</td>
                    <td>${item.discount}</td>
                    <td>
                        <button onclick="placeOrder(${item.id})">Add</button>
                    </td>
                </tr>
            `;
            });


            tblItem.innerHTML = tableRow;
        })
}


function searchItem() {
    const category = document.getElementById('category').value;

    if (!category) {
        alert("Please enter a category");
        return;
    }
    const url = `http://localhost:8080/item/search-by-category/${category}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data);

            let tableRow = `
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
            `;

            data.forEach(item => {
                tableRow += `    
                    <tr>
                        <td>${item.code}</td>
                        <td>${item.name}</td>
                        <td>${item.category}</td>
                        <td>${item.stock}</td>
                        <td>${item.price}</td>
                        <td>${item.discount}</td>
                        <td>
                            <button onclick="placeOrder('${item.code}')">Add</button>
                        </td>
                    </tr>
                `;
            });

            document.getElementById('tblItem').innerHTML = tableRow;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Error fetching data. Please try again.");
        });
}

function placeOrder(itemCode) {
    console.log(`Order placed for item with code: ${itemCode}`);
}