Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
	comments: {
	type: String,
	label: "Comments",
	max: 140
	},

	owner: {
		type: String,
		autoform: {
			omit:true
		},
			autoValue: function(){
				return Meteor.userId();
			}
	},

	menuId: {
		type: String, 
			autoform: {
				omit:true
			}
	}
}));