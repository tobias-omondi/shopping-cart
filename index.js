//fetch data from the server 
document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display products
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
              <p class="price">${values.price}</p>
              <p class="rating">${values.rating.rate}/10</p>
              <p class="stock">${values.rating.count}</p>
              <p class="category">${values.category}</p>
              <button class="like-btn" data-liked="false">Like</button>
              <p class="likes">Likes: 0</p>
              <input type="text" class="comment-input" placeholder="Add a comment">
              <ul class="comments-list"></ul>
            </div>`;
        });
  
        document.getElementById("shopping-products").innerHTML = data1;
  
        // Add event listeners to product items
        const productItems = document.querySelectorAll(".products");
        productItems.forEach((product) => {
          const likeBtn = product.querySelector(".like-btn");
          const likesCount = product.querySelector(".likes");
          const commentInput = product.querySelector(".comment-input");
          const commentsList = product.querySelector(".comments-list");
  
          let currentLikes = 0;
  
          likeBtn.addEventListener("click", function () {
            const isLiked = likeBtn.dataset.liked === "true";
  
            if (isLiked) {
              currentLikes--;
              likeBtn.innerText = "Like";
              likeBtn.dataset.liked = "false";
            } else {
              currentLikes++;
              likeBtn.innerText = "Liked";
              likeBtn.dataset.liked = "true";
            }
  
            likesCount.innerText = `Likes: ${currentLikes}`;
          });
  
          commentInput.addEventListener("change", function (event) {
            const comment = event.target.value.trim();
            if (comment !== "") {
              const newComment = document.createElement("li");
              newComment.innerText = comment;
              commentsList.appendChild(newComment);
              commentInput.value = "";
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  