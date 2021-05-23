// Clear flashes after 3sec
setTimeout(function () {
  $('#flashes').fadeOut('fast');
}, 3000);


// Add/remove icon to recipes side bar on hover
$(".spirit-list").hover(function () {
  $(this).children().removeClass("hide")
})
$(".spirit-list").mouseleave(function () {
  $(this).children().addClass("hide")
})


// add/remove ingredients line in recipe form
$("#add-ingredient").click(function () {
  $(".ingredients-list").append(
    `
    <div class="col s10 m8 input-field">
        <i class="prefix fas fa-wine-bottle"></i>
        <input name="ingredients" type="text">
        <label for="ingredients">Add Quantity/Ingredient</label>
    </div>`
  );
})

// Carousel photos
function carousel() {
  var carouselImages = ["old-fashioned.jpg", "friends.jpg", "large-cocktail.jpg", "serving-drinks.jpg"]

  for (i = 0; i < carouselImages.length; i++) {
    $("#home-carousel").append(
      `<a class="carousel-item" href="#"><img src="/static/images/${carouselImages[i]}"></a>`
    );
  }
}


$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('select').formSelect();
  M.textareaAutoResize($('#textarea1'));


  // set up carousel and interval
  carousel()
  $('.carousel').carousel();
  setInterval(function () {
    $('.carousel').carousel('next');
  }, 5000);

  $('.slider').slider();



  // change recipe difficulty to icons
  $(".easy").append(
    `<span><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>`
  )
  $(".medium").append(
    `<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span>`
  )
  $(".difficult").append(
    `<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>`
  )
});