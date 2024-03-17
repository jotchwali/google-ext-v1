// Save data to local storage
function saveData(key, value) {
  chrome.storage.local.set({ [key]: value }, function() {
    console.log('Data saved:', key, value);
  });
}

// Example usage:
saveData('myKey', 'myValue');
