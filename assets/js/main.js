// var app = new Vue({
//     el: "app",
//     data:{
    //   products: [
    //     {id:1, title:"Product 1", short_text:"Short text 1", image:"", desc:"Full decs"},
    //     {id:2, title:"Product 2", short_text:"Short text 2", image:"", desc:"Full decs"}
    //   ]
//     },
//     mounted: function() {
//       console.log(Window.localStorage.getItem('product'));
//     },
//     methods: {
//       addItem: function(id){
//         Window.localStorage.setItem('product', id);
//       }
//     }
//   });

new Vue ({
    el:"#app",
    data:{
        products: [
            {id:1, title:"Bordeaux 237", short_text:"Varieties and hybrids of beets, in all their diversity, allow you to get vegetables of different shapes and sizes, the desired ripening period", image:"1.jpg"},
            {id:2, title:"Modana", short_text:"Varieties and hybrids of beets, in all their diversity, allow you to get vegetables of different shapes and sizes, the desired ripening period", image:"2.jpg"},
            {id:3, title:"Pablo F1", short_text:"Varieties and hybrids of beets, in all their diversity, allow you to get vegetables of different shapes and sizes, the desired ripening period", image:"3.jpg"},
            {id:4, title:"Bohemia", short_text:"Varieties and hybrids of beets, in all their diversity, allow you to get vegetables of different shapes and sizes, the desired ripening period", image:"4.jpg"},
            {id:5, title:"Detroit", short_text:"Varieties and hybrids of beets, in all their diversity, allow you to get vegetables of different shapes and sizes, the desired ripening period", image:"5.jpg"},
          ]
    }
});