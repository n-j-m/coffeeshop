import component from "./component";

require("./css/main.css");

var app = document.createElement("div");

document.body.appendChild(app);

app.appendChild(component());

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/reviewers")
    .then(res => res.json())
    .then(console.log.bind(console))
    .catch(::console.error);
});