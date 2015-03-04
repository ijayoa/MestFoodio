// // Template.ml.helpers({
// // 	profile: function(){
// // 		return 
// // 	}
// // });
Template.masterlayout.helpers({
  profile: function(){
    return Profiles.findOne({owner:Meteor.userId()});
}
});
Template.masterlayout.events({
 "click #logout": function(event){
     Meteor.logout(function() {
     // Redirect to login
     Router.go('/login');
   });
}
});
Template.masterlayout.helpers({
 loggedinAs: function(){
   var user = Meteor.user();
   return user.emails[0].address;
 }
});
//     // $("#menu-toggle").click(function(e) {
//     //     e.preventDefault();
//     //     $("#wrapper").toggleClass("toggled");
//     // });
//     