const opendiv = document.querySelector(".navbar-item");
const boxstatus = document.querySelector(".navsidebar");
const closediv = document.querySelector(".closemenu");

opendiv.addEventListener("click", function () {
  boxstatus.style.display = "block";
});
closediv.addEventListener("click", function () {
  boxstatus.style.display = "none";
});
