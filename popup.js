// Function to save data to Chrome storage
function saveData(key, value) {
  chrome.storage.local.set({ [key]: value }, function() {
    console.log('Data saved:', key, value);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the input field value
  const inputValue = document.getElementById('inputData').value.trim();

  // Call saveData function to save the input value
  saveData('myKey', inputValue);
}

// Add event listener to the form for form submission
document.getElementById('dataForm').addEventListener('submit', handleSubmit);
