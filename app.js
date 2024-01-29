// Get references to HTML elements
const selectedTitle = document.getElementById("selected-title");
const selectedDesc = document.getElementById("selected-desc");
const selectedImg = document.getElementById("selected-img");
const rightWrap = document.getElementById("right-wrap");

// function for initailly selected item
const initialSelectedItem = () => {
  selectedTitle.textContent = dataArr[0].title;
  selectedImg.src = dataArr[0].imgSrc;
  selectedDesc.textContent = dataArr[0].desc;
};

initialSelectedItem();

// Function to update the selected item
const updateSelectedItem = (item) => {
  selectedTitle.textContent = item.title;
  selectedImg.src = item.imgSrc;
  selectedDesc.textContent = item.desc;
};

// Function to update the right items
const updateRightItems = (startIndex) => {
  rightWrap.innerHTML = ""; 

  const numItems = 3; 

  // Determine the indices of the items to display on the right
  let indicesToShow = [];
  for (let i = 1; i <= numItems; i++) {
    let index = startIndex + i;
    if (index >= dataArr.length) {
      index -= dataArr.length; // Handle wrapping around if index exceeds array length
    }
    indicesToShow.push(index);
  }

  // Display the items on the right based on the determined indices
  indicesToShow.forEach((index) => {
    if (index !== startIndex) {
      // Exclude the selected item from being displayed
      const item = dataArr[index];
      const itemBox = document.createElement("div");
      itemBox.classList.add("item-box");
      itemBox.addEventListener("click", () => {
        updateSelectedItem(item);
        updateRightItems(index);
      });
      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.title;
      const title = document.createElement("h3");
      title.textContent = item.title;
      itemBox.appendChild(img);
      itemBox.appendChild(title);
      rightWrap.appendChild(itemBox);
    }
  });
};

// Initialize with the first 3 items
updateRightItems(0);
