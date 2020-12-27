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
