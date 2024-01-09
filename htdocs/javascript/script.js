// $(document).ready(function () {
//   setMainContentMarginTop();
// });

// window.onresize = setMainContentMarginTop;

// function setMainContentMarginTop() {
//   let headerHeight = document.getElementById("Header").offsetHeight;
//   let mainMarginTopPx = document.getElementById("Main");
//   mainMarginTopPx.style.marginTop = headerHeight + "px";
//   // console.log(headerHeight)
// }

//Show header name anchor when exceeding scrollPoint
window.addEventListener("scroll", function () {
  let scrollPoint = document.getElementById("My_Name");
  let anchor_My_Name_Header = document.getElementById("anchor_My_Name_Header");
  if (window.scrollY > scrollPoint.offsetHeight + scrollPoint.offsetTop) {
    anchor_My_Name_Header.style.opacity = "1";
  }
  if (window.scrollY < scrollPoint.offsetHeight + scrollPoint.offsetTop) {
    anchor_My_Name_Header.style.opacity = "0";
  }
});

//Adds a top spacing to anchor jumps
$("#btn_About_Me").click(function () {
  let headerHeight = document.getElementById("Header").offsetHeight;
  var divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});

//Slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3500);
}
