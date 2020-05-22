const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const outputDiv = document.getElementById("output");

button1.addEventListener("click", getFileData);
button2.addEventListener("click", getJsonData);
button3.addEventListener("click", getApiData);

function getFileData() {
  fetch("data.txt")
    .then(data => data.text())
    .then(res => (outputDiv.innerHTML = res));
}

function getJsonData() {
  let output = "";
  fetch("data.json")
    .then(data => data.json())
    .then(res =>{
        console.log(res)
         res.forEach(item => {
        output += `<li>${item.color}-${item.value}</li>`;
      })
    }
     
      
    )
    
    .then((output.innerHTML = output));
  
}

function getApiData() {}
