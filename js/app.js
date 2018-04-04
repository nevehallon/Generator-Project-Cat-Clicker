let count = $(".touched"),
  add = 0;

$('.kitty').click(function() {
  //the element has been clicked... do stuff here
  add++;
  count.text(add);
});