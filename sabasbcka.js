fetch("https://generativelanguage.googleapis.com/v1/models?key=AIzaSyBP7oR41NW4QMCTxIvhY4W3LxKzBWprFHE")
  .then(res => res.json())
  .then(data => console.log(data));