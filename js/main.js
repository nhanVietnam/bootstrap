var productImg = document.getElementById("ImgProduct");
var imgScroll = document.getElementsByClassName("img-scroll");
imgScroll[0].onclick = function () {
  productImg.src = imgScroll[0].src;
};
imgScroll[1].onclick = function () {
  productImg.src = imgScroll[1].src;
};
imgScroll[2].onclick = function () {
  productImg.src = imgScroll[2].src;
};
imgScroll[3].onclick = function () {
  productImg.src = imgScroll[3].src;
};

function fillProduct(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.border = "none";
  }
  element.style.border = "3px solid #000";
  document.getElementById(type).style.display = "block";
  switch (type) {
    case "all":
      document.getElementById("men").style.display = "none";
      document.getElementById("women").style.display = "none";
      break;
    case "men":
      document.getElementById("all").style.display = "none";
      document.getElementById("women").style.display = "none";
      break;
    case "women":
      document.getElementById("all").style.display = "none";
      document.getElementById("men").style.display = "none";
      break;
  }
}
