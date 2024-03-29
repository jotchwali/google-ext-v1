// save-data.js

// Function to save edited content
function saveContent() {
  // Loop through each editable cell
  document.querySelectorAll('.day-cell').forEach(cell => {
    const cellId = cell.id;
    const content = cell.innerText.trim(); // Get the trimmed content
    if (content !== '') {
      // Save content to Chrome storage
      chrome.storage.local.set({ [cellId]: content });
    }
  });
}

// Listen for changes in editable cells and save content
document.addEventListener('input', saveContent);

// Retrieve saved content when needed
chrome.storage.local.get(null, function(items) {
  for (let key in items) {
    const cell = document.getElementById(key);
    if (cell) {
      cell.innerText = items[key];
    }
  }
});
