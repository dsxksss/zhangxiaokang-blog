let navContent = [
  "zhangxiaokang的个人博客",
  "我的github",
];

let navs = document.querySelector("#nav");

navContent.forEach((item, index) => {
  let nav = document.createElement("span");
  nav.textContent = item;
  navs.appendChild(nav);
});
