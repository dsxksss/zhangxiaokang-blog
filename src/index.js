import navContent from "./data.js";

let navs = document.querySelector("#nav");

navContent.forEach((item, index) => {
  let nav = document.createElement("span");
  nav.textContent = item;
  navs.appendChild(nav);
});
