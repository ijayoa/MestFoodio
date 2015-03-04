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
	lunch2:{
		type: String,
		label: "Lunch Option 2",
		max: 100,
		autoform: {
            rows: 3
        },
       optional: true
	},
	desert:{
		type: String,
		label: "DESSERT",
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
	dinner2:{
		type: String,
		label: "Dinner Option 2",
		max: 100,
		autoform: {
            rows: 3
        },
        optional: true
	}
	
}))