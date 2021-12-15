const requestLinks = "json/main.json";

fetch(requestLinks)
.then(function (response) {
  return response.json();
})
.then(function (jsObject){
  const consoles = jsObject['gallery'];
  console.log(consoles);
  
  let block = document.createElement('div');
  let img = document.createElement('img');
  
  consoles.forEach( week => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', consoles.url);
    a.textContent = consoles.label;
    li.append(a);
    ulList.append(li);
  })
  block.append(img)
  document.querySelector('#gallery').append(block);
})