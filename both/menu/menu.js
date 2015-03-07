Menus = new Mongo.Collection('menus');

Menus.attachSchema(new SimpleSchema({
	days:{
		type:String,
		autoform: {
            options: function(){
                return [
                    {value: 'Monday', label: 'Monday'},
                    {value: 'Tuesday', label: 'Tuesday'},
                    {value: 'Wednesday', label: 'Wednesday'},
                    {value: 'Thursday', label: 'Thursday' },
                    {value: 'Friday', label: 'Friday'}
                ]
            }
    	}
	}, 
	lunch1:{
		type: String,
		label: "Lunch Option 1",
		max: 100,
		autoform: {
            rows: 3
        }
	},
	picturelunch1: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose Picture for Lunch Option 1'
	},
	lunch2:{
		type: String,
		label: "Lunch Option 2",
		max: 100,
		autoform: {
            rows: 3
        },
       optional: true
	},
	picturelunch2: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose Picture for Lunch Option 2'
	},
	desert:{
		type: String,
		label: "DESERT",
		max: 100,
		optional:true
	}, 

	dinner1:{
		type: String,
		label: "Dinner Option 1",
		max: 100,
		autoform: {
            rows: 3
        }
	},
	picturedinner1: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose Picture for Dinner Option 1'
	},
	dinner2:{
		type: String,
		label: "Dinner Option 2",
		max: 100,
		autoform: {
            rows: 3
        },
        optional: true
	},
	picturedinner2: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose Picture for Dinner Option 1'
	}
	
}))