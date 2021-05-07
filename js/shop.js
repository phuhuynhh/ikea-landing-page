$(document).ready(() => {
  $("#slide-show .slick").slick({
    autoplay: true,
    dots: true,
  });
});
var vimg;

var html = '<div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-3">';
html += '<div class="item-card card h-100">';
html += '<div class="card-img-top">';
html += "</div>";
html += '<div class="card-body">';
html += '<div class="row">';
html += '<div class="item-title col-8 item"> </div>';
html += '<div class="item-price col-4 item"> </div>';
html += "</div>";

html += '<div class="row">';
html += '<div class="col-12 detail">';
html += '<div class="row">';
html += '<div class="col-5">';
html += "<p>Material</p>";
html += "</div>";
html += '<div class="col-7 material-item">';
html += "</div>";
html += "</div>";
html += '<div class="row">';
html += '<div class="col-5">';
html += "<p>Diameter</p>";
html += "</div>";
html += '<div class="col-7 text-right">';
html += "<p>45 cm</p>";
html += "</div>";
html += "</div>";
html += '<div class="row">';
html += '<div class="col-5">';
html += "<p>Design</p>";
html += "</div>";
html += '<div class="col-7 text-right">';
html += "<p>Sissi Edholm / Lisa Ullenius</p>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "</div>";

html += "</div>";
html += "</div>";
html += "</div>";

$(document).ready(function () {
  $.getJSON("data/shop.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      $("#shop-data").append(html);
      uimg = data[i].image;
      title = data[i].title;
      price = data[i].price;
      material = data[i].material;

      //create image
      var $img = $("<img/>");
      $img.attr("src", uimg);
      $img.attr("onclick", "itemSeleted(this)");
      $(".card-img-top:eq(" + i + ")").append($img);

      //create title
      $(".item-title:eq(" + i + ")").append("<div><b>" + title + "</b></div>");
      //create price
      $(".item-price:eq(" + i + ")").append(
        '<div style="position: absolute; right : 10px; ">' + price + "</div>"
      );
      $(".material-item:eq(" + i + ")").append("<p>" + material + "</p>");
    }
  });
});
function itemSeleted(img) {
  console.log($(img).parent().parent().find(".detail").toggle("slow"));
}
