const bod = $('.insert'),
  sidebar = $('.side-bar'),
  arr = ["img/kitty1.jpg", "img/kitty2.jpg", "img/kitty3.jpg", "img/kitty4.jpg", "img/kitty5.jpg", "img/kitty6.jpg"],
  names = ["Garf", "Walt", "Tim & Tom", "Boo", "Herbert", "Kitties"];

let fun = function(img, elm, num) {
  img.click(function() {
    num++;
    elm.text(num);
  });
};

let show = function(img, elm) {
  img.click(function() {
    let hide = $('.hide');
    hide.attr('style', 'display: none'); //display none on all cats
    elm.css('display', 'block');
  });
};

let hover = function(text, index) {
  $(`.side-bar .cont${index}`).hover(function() {
    text.show();
  }, function() {
    text.hide();
  });
};

$(function() {
  arr.forEach(function(element, index) {
    sidebar.prepend(`<div class="cont${index}">
    <span class="title${index}">${names[index]}</span>
    <img class="kit${index}" src="${element}" alt="Cutest kitty you've ever seen">

        <div id="text" class="count${index} text${index}">
        0
        </div>
    </div>`);

    bod.append(`<div class="hide hello${index}"><h1>Touch ${names[index]}!</h1>
    <img class="kitty${index}" src=${element} alt="Cutest kitty you've ever seen">
    <div>
      <p>This kitty has been touched <span class="count${index}">0</span> times!</p>
    </div></div>`);

    this[`cat${index}`] = $(`.kitty${index}`);
    this[`count${index}`] = $(`.count${index}`);
    this[`add${index}`] = 0;
    this[`sideCat${index}`] = $(`.kit${index}`);
    this[`hello${index}`] = $(`.hello${index}`);
    this[`title${index}`] = $(`.title${index}`);
    this[`text${index}`] = $(`.text${index}`);


    fun(this[`cat${index}`], this[`count${index}`], this[`add${index}`], this[`title${index}`]);
    show(this[`sideCat${index}`], this[`hello${index}`]);
    hover(this[`text${index}`], index);
  });
});