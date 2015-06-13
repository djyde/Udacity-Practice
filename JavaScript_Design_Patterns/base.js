;(function(){

  var cats = [
    {
      name: 'alan',
      count: 0
    },
    {
      name: 'bunny',
      count: 0
    },
    {
      name: 'candy',
      count: 0
    }
  ]

  var model = {

    el: '#cats',

    all: function(){
      return cats;
    },

    add: function(cat){
      cats.push(cat);
    }
  }

  var view = {
    render: function(){
      for (var i = 0; i < cats.length; i++) {
        var li = document.createElement('li');
        
        li.textContent = cats[i].name;
        li.addEventListener('click',function(){
          // console.log(this)
        })
        document.querySelector(model.el).appendChild(li);
      };
    }
  }

  var controller = {
    getAllCats: function(){
      return model.all();
    }
  }

  view.render()


})()