//fetch data from the server 
fetch('https://fakestoreapi.com/products').then((data)=>{
  //console.log(data);
  return data.json();
}).then((completedata)=>{
  //console.log(completedata);

  let data1="";
  completedata.map((values)=>{
    data1+=` <div class="products">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image} alt="img" class="images">
    <p class="description">${values.description}</p>
    <p class="price">${values.price}</p>
    <p class="rating">${values.rating.rate}/10</p>
    <p class="stock">${values.rating.count}</p>
    <p class="category">${values.category}</p>
   </div>` 
  })

  document.getElementById("shopping-products").innerHTML=data1

}).catch((err)=>{
  console.log(err)
})


// Function to fetch data and generate product cards
function fetchAndDisplayProducts() {
  fetch('https://fakestoreapi.com/products')
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
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
        </div>`;
      });

      // Create a temporary element to hold the product cards
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data1;

      // Get the parent container element where you want to append the product cards
      const shoppingProductsContainer = document.getElementById("shopping-products-container");

      // Append the product cards to the parent container
      while (tempElement.firstChild) {
        shoppingProductsContainer.appendChild(tempElement.firstChild);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Call the function to fetch and display products
fetchAndDisplayProducts();



