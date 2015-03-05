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
	insertComments:{
		formToDoc: function(doc, ss, formId){
			doc.menuId = Router.current().params._id
			return doc;
		}
	}
});
// AutoForm.addHooks(null, {
//    onError: function (operation, error, template) {
//      console.log('Error: ' + error);
//    }
//  });
	