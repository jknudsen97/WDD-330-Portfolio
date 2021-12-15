const requestLinks = "json/main.json";

fetch(requestLinks)
.then(function (response) {
  return response.json();
})
.then(function (jsObject){
  const consoles = jsObject['gallery'];
  console.log(consoles);
  
  let block = document.createElement('div');
  let ulList = document.createElement('ul');
  
  consoles.forEach( week => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', consoles.url);
    a.textContent = consoles.label;
    li.append(a);
    ulList.append(li);
  })
  block.append(ulList)
  document.querySelector('#gallery').append(block);
})