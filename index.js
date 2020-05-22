const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const outputDiv = document.getElementById("output");

button1.addEventListener("click", getFileData);
button2.addEventListener("click", getJsonData);
button3.addEventListener("click", getApiData);

function getFileData() {
  fetch("data.txt")
    .then((data) => data.text())
    .then((res) => (outputDiv.innerHTML = res))
    .catch((error) => (outputDiv.innerHTML = "Something went wrong"));
}

function getJsonData() {
  let output = "";
  fetch("data.json")
    .then((data) => data.json())
    .then((res) => {
      res.forEach((item) => {
        output += `<li>${item.color} - ${item.value} </li>`;
      });
    })
    .then(() => (outputDiv.innerHTML = output))
    .catch((error) => (outputDiv.innerHTML = "Something went wrong"));
}

function getApiData() {
  let output = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((response) => {
      response.forEach((item) => {
        output += `<li>${item.name}</li>`;
      });
    })
    .then(() => (outputDiv.innerHTML = output))
    .catch((error) => (outputDiv.innerHTML = "Something went wrong"));
}
