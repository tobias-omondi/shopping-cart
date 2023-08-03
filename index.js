//fetch data from the server 
fetch('https://fakestoreapi.com/products').
    then((data) => {
        //console.log(data);
        return data.json();
    }).then((completedata) => {
        //console.log(completedata);

        let data1 = "";
        completedata.map((values) => {
            data1 += ` <div class="products">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image} alt="img" class="images">
    <p class="description">${values.description}</p>
    <p class="price">${values.price}</p>
    <p class="rating">${values.rating.rate}/10</p>
    <p class="stock">${values.rating.count}</p>
    <p class="category">${values.category}</p>
   </div>`
        })

        document.getElementById("shopping-products").innerHTML = data1

    }).catch((err) => {
        console.log(err)
    })

    document.addEventListener("DOMContentLoaded", function () {
        // Add event listeners to product items
        const productItems = document.querySelectorAll(".products");
    
        productItems.forEach((product) => {
            product.addEventListener("click", function () {
                // Code to be executed when a product is clicked
                const title = product.querySelector(".title").textContent;
                const description = product.querySelector(".description").textContent;
                const price = product.querySelector(".price").textContent;
                const rating = product.querySelector(".rating").textContent;
                const stock = product.querySelector(".stock").textContent;
                const category = product.querySelector(".category").textContent;
    
                // Example action: Show the product details in the console
                console.log("Product clicked:");
                console.log("Title:", title);
                console.log("Description:", description);
                console.log("Price:", price);
                console.log("Rating:", rating);
                console.log("Stock:", stock);
                console.log("Category:", category);
            });
        });
    })
    .catch((err) => {
        console.log(err)})
    
    
    
    
    
    