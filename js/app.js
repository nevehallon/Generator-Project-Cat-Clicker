const bod = $('body'),
  arr = ["img/kitty.jpg", "img/kitty2.jpg"];

let fun = function(img, elm, num) {
  img.click(function() {
    num++;
    elm.text(num);
  });
};

$(function() {
  arr.forEach(function(element, index) {
    bod.append(`<h1>Touch this Kitty!</h1>
    <img class="kitty${index}" src=${element} alt="Cutest kitty you've ever seen">
    <div>
      <p>This kitty has been touched <span class="count${index}">0</span> times!</p>
    </div>`);

    this[`cat${index}`] = $(`.kitty${index}`);
    this[`count${index}`] = $(`.count${index}`);
    this[`add${index}`] = 0;

    fun(this[`cat${index}`], this[`count${index}`], this[`add${index}`]);
  });
});