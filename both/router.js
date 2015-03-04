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
  name: 'userhome'
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


Router.route('/menus', function(){
  this.render('menus');
},{
  name: 'menus',
  data: function(){
    return{
      menus: Menus.find().fetch()
    }
  }
})

Router.route('/menus/newmenu', function(){
  this.render('newmenu')
},{
  name: 'newmenu'
})