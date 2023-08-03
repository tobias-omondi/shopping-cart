//fetch data from the server 

document.addEventListener("DOMContentLoaded", function () {
  fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((completedata) => {
      let data1 = "";
      completedata.map((values) => {
        data1 += `
          <div class="products">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image} alt="img" class="images">
            <p class="description">${values.description}</p>
            <p class="price">$${values.price}</p>
            <p class="rating">${values.rating.rate}/10</p>
            <p class="stock">${values.rating.count}</p>
            <p class="category">${values.category}</p>
            <button class="like-button" data-product-id="${values.id}">Like</button>
            <div>
              <input type="text" class="comment-input" data-product-id="${values.id}" placeholder="Leave a comment...">
              <button class="comment-button" data-product-id="${values.id}">Comment</button>
            </div>
            <div class="comments" data-product-id="${values.id}"></div>
          </div>`;
      });

      document.getElementById("shopping-products").innerHTML = data1;
      addInteractivity(completedata);
    })
    .catch((err) => {
      console.log(err);
    });
});

function addInteractivity(completedata) {
  // Like button click event
  const likeButtons = document.getElementsByClassName("like-button");
  for (const button of likeButtons) {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-product-id");
      alert(`You liked product with ID ${productId}`);
    });
  }

  // Comment button click event
  const commentButtons = document.getElementsByClassName("comment-button");
  for (const button of commentButtons) {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-product-id");
      const commentInput = document.querySelector(
        `input[data-product-id="${productId}"]`
      );
      const commentText = commentInput.value;
      const commentsContainer = document.querySelector(
        `div[data-product-id="${productId}"].comments`
      );
      const commentParagraph = document.createElement("p");
      commentParagraph.textContent = commentText;
      commentsContainer.appendChild(commentParagraph);
      commentInput.value = "";
    });
  }

  // Delete button click event for comments
  const deleteButtons = document.querySelectorAll(".delete-button");
  for (const button of deleteButtons) {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-product-id");
      const commentsContainer = document.querySelector(`div[data-product-id="${productId}"].comments`);
      const commentToDelete = button.parentElement; // Get the comment's parent element (the <p> tag)
      commentsContainer.removeChild(commentToDelete);
    });
  }

  // Search button click event
  document.getElementById("searchbutton").addEventListener("click", function () {
    const searchTerm = document.getElementById("search").value;
    conductSearch(searchTerm, completedata);
  });

  // Search input field keyup event
  document.getElementById("search").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchTerm = document.getElementById("search").value;
      conductSearch(searchTerm, completedata);
    }
  });
}

function conductSearch(searchTerm, completedata) {
  const itemsFiltered = completedata.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let searchdata = "";
  itemsFiltered.map((values) => {
    searchdata += `
      <div class="products">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p class="description">${values.description}</p>
        <p class="price">$${values.price}</p>
        <p class="rating">${values.rating.rate}/10</p>
        <p class="stock">${values.rating.count}</p>
        <p class="category">${values.category}</p>
        <button class="like-button" data-product-id="${values.id}">Like</button>
        <div>
          <input type="text" class="comment-input" data-product-id="${values.id}" placeholder="Leave a comment...">
          <button class="comment-button" data-product-id="${values.id}">Comment</button>
        </div>
        <div class="comments" data-product-id="${values.id}"></div>
      </div>`;
  });

  if (searchdata === "") {
    searchdata = "<p>No results</p>";
  }

  document.getElementById("shopping-products").innerHTML = searchdata;
  addInteractivity(completedata);
}
