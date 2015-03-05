// Template.registerHelper({
//  user: function(owner){
//    var us = Meteor.user().findOne({_id:owner});
//    return us.emails[0].address;
//  }
// });


Template.registerHelper('user', function(owner){
	console.log(owner);
	 var user = Meteor.users.findOne({_id:owner});
	// console.log(us);
	console.log(user.emails[0].address);
   return user.emails[0].address;
})