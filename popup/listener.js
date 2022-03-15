document.addEventListener("click", function(e) {
  
    chrome.tabs.executeScript( {
      file: "/content_scripts/imprimir.js"
    });
  
  });
  