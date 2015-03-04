AutoForm.hooks({
	insertProfileForm: {
		onSuccess: function(operation, result, template) {
			Router.go('userhome');
		}
	},
	insertRecipeForm: {
		onSuccess: function(operation, result, template) {
			Router.go('recipehome');
		}
	},
});
