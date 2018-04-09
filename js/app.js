// MODEL
const model = {
  bod: $('.insert'),
  sidebar: $('.side-bar'),
  arr: ["img/kitty1.jpg", "img/kitty2.jpg", "img/kitty3.jpg", "img/kitty4.jpg", "img/kitty5.jpg", "img/kitty6.jpg"],
  names: ["Garf", "Walt", "Tim & Tom", "Boo", "Herbert", "Kitties"],
  catClicks: [0, 0, 0, 0, 0, 0]
};

//OCTOPUS
const octopus = {
  int: function() {

    model.arr.forEach(function(element, index) {
      model.sidebar.prepend(`<div class="cont${index}">
      <span class="title${index}">${model.names[index]}</span>
      <img class="kit${index}" src="${element}" alt="Cutest kitty you've ever seen">
          <div id="text" class="count${index} text${index}">${model.catClicks[`${index}`]}</div>
      </div>`);

      model.bod.append(`<div class="hide hello${index}"><h1>Touch ${model.names[index]}!</h1>
      <img class="kitty${index}" src=${element} alt="Cutest kitty you've ever seen">

      <button class="admin${index}">
        Admin
      </button>
        <br>
      <form class="details${index}">
      <br>Name:
      <input name="Name" value="${model.names[index]}"><br>
      <br>ImgURL:
      <input name="ImgURL" value="${element}">
      <br>Clicks:
      <input name="Clicks" id="count${index}" value="${(octopus.newValues != undefined)?octopus.newValues.Clicks : 0}">
      <br>
      <button type="button" class="cancle${index}">
        Cancle
      </button>
      <button type="button" class="save${index}">
        Save
      </button>
      </form>

      <div>
        <p>This kitty has been touched <span class="count${index}">${model.catClicks[`${index}`]}</span> times!</p>
      </div></div>`);

      this[`cat${index}`] = $(`.kitty${index}`); // Big cat img elements
      this[`count${index}`] = $(`.count${index}`); //click count updated
      this[`add${index}`] = model.catClicks[`${index}`]; //initial number count
      this[`sideCat${index}`] = $(`.kit${index}`); // thumbnails img elements
      this[`hello${index}`] = $(`.hello${index}`); // botom half display div
      this[`title${index}`] = $(`.title${index}`); // thumbnail name
      this[`text${index}`] = $(`.text${index}`); //thumbnail count
      this[`details${index}`] = $(`.details${index}`); //form
      this[`clicks${index}`] = $(`#count${index}`); //Clicks count for admin
      this[`admin${index}`] = $(`.admin${index}`); //Admin button
      this[`cancle${index}`] = $(`.cancle${index}`); //Cancle button
      this[`save${index}`] = $(`.save${index}`); //Save button
      this.sideBar = $(`.side-bar`);
      this.insert = $(`.insert`);

      view.fun(this[`cat${index}`], this[`count${index}`], this[`add${index}`], this[`clicks${index}`], index);
      view.show(this.sideBar, this.insert, this[`sideCat${index}`], this[`hello${index}`], this[`details${index}`], this[`admin${index}`], this[`cancle${index}`], this[`save${index}`], index);
      view.hover(this[`text${index}`], index);
    });
  },

  forModel: function(index) {
    let img = octopus.newValues.ImgURL,
      name = octopus.newValues.Name,
      num = octopus.newValues.Clicks;
    model.arr.splice(index, 1, img);
    model.names.splice(index, 1, name);
    model.catClicks.splice(index, 1, num);
  }
};


//VIEW
const view = {

  fun: function(img, elm, num, adminCount, index) {
    img.click(function() {
      num++;
      elm.text(num);
      adminCount.val(num); // incrementing the form's Click value
      model.catClicks.splice(index, 1, num);
      //(octopus.newValues != undefined) ? num = parseInt(octopus.newValues.Clicks): num;
    });
  },

  show: function(div, div2, img, elm, forms, adminButton, cancleButton, saveButton, index) {
    img.click(function() {
      let hide = $('.hide');
      hide.attr('style', 'display: none'); //display none on all cats
      elm.css('display', 'block');
      forms.css('display', 'none');
    });

    adminButton.click(function() {
      forms.css('display', 'block');
    });

    cancleButton.click(function() {
      forms.css('display', 'none');
    });

    saveButton.click(function() {
      let values = {};
      $.each(forms.serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });
      octopus.newValues = values;
      octopus.forModel(index);
      div.empty();
      div2.empty();
      octopus.int();
    });
  },

  hover: function(text, index) {
    $(`.side-bar .cont${index}`).hover(function() {
      text.show();
    }, function() {
      text.hide();
    });
  }
};

octopus.int();