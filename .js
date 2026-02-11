setTimeout(() => resolve("..."), 2000);
then(result => { return nextResult; })
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
