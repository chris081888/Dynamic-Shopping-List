// index.js

function addItem() {
    var itemInput = document.getElementById("item");
    var listItemText = itemInput.value;
  
    if (listItemText.trim() === "") {
      return; // Don't add empty items
    }
  
    // Create a list item element
    var listItem = document.createElement("li");
  
    // Create a span element to wrap the text content
    var span = document.createElement("span");
    span.textContent = listItemText;
  
    // Create a button element for removing the item
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      listItem.parentNode.removeChild(listItem);
    };
  
    // Append the span and the "Remove" button to the list item
    listItem.appendChild(span);
    listItem.appendChild(removeButton);
  
    // Append the list item to the list
    document.getElementById("list").appendChild(listItem);
  
    itemInput.value = "";
    item.focus();
  }