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

//     // $("#menu-toggle").click(function(e) {
//     //     e.preventDefault();
//     //     $("#wrapper").toggleClass("toggled");
//     // });
//     