Router.configure({
  layoutTemplate: "masterlayout",
  routeControllerNameConverter: "camelCase"
})


Router.route('/', function () {      
  this.render('index');  
  this.layout('indexlayout');            
},
 {
  name: 'index'                       
});


Router.route('/user-profile', function () {      
  this.render('setupprofile');            
}, {
  name: 'setupprofile'
});


Router.route('/user-homepage', function () {      
  this.render('userhome'); 
              
}, {
  name: 'userhome',
  data: function(){
    return{
      menus: Menus.find().fetch()
    }
  }

});



Router.route('recipes/new-recipe', function () {      
  this.render('newrecipe'); 
            
}, {
  name: 'newrecipe',


});

Router.route('/recipes', function () {      
  this.render('recipehome'); 
               
}, {
  name: 'recipehome',
  data:function(){
  	return {
  		recipes: Recipes.find(Meteor.userId)
  	}
  }   

});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'signIn',
    layoutTemplate: 'indexlayout',
    redirect: '/user-homepage',
});


Router.route('/recipes/:_id/details', function () {     
  this.render('recipeDetails');               
}, {
  name: 'recipeDetails',

  data: function(){
    var _id = this.params._id
    return {  
     recipe: Recipes.findOne(_id)
   }
 }                      
});

// Router.route('/comments', function(){
//   this.render('comments');
// },{
//   name: 'comments'
// })

Router.route('/newmenu', function(){
  this.render('newmenu')
},{
  name: 'newmenu'
})


Router.route('/menu/:_id/details', function () {     
 this.render('menuDetail');               
}, {
 name: 'menuDetail',

 data: function(){
   var _id = this.params._id
   return {  
    menu: Menus.findOne(_id),
    comments:Comments.find({menuId:_id}).fetch()
  }
}                      
});
