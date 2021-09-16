let data = ["Week 01", "Week 02", "Week 03", "Week 04"];
  
      let list = document.getElementById("myList");
  
      data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });