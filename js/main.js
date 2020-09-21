alert("main.js is running!");

document.getElementById("view").addEventListener(
  "click",
  function () {
    document.getElementById("contentView").hidden = false;
  },
  false
);
