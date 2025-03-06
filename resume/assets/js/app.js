fetch("data.json") // Replace with your JSON file path
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;
    document.getElementById("image").src = data.image;

    const itemList = document.getElementById("items");
    data.items.forEach(item => {
      const listItem = document.createElement("div");
      listItem.classList.add("item");
      listItem.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
      itemList.appendChild(listItem);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));