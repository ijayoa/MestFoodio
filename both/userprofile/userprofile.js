Profiles = new Mongo.Collection('profiles');

Profiles.attachSchema(new SimpleSchema({
    username: {
        type: String,
        label: "Foodio Name:",
        max: 200
    },
    picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        },
        label: 'Choose Picture'
    },
    allergies: {
        type: String,
        label: "Your Allergies:",
        optional: true,
        max: 200,
        autoform: {
            rows: 3
        }
    },
    favourite: {
        type: String,
        label: "Your Best Meal:",
        optional: true,
        max: 200,
        autoform: {
            rows: 3
        }
    },
    notfavourite: {
        type: String,
        label: "Meal Dislikes:",
        optional: true,
        max: 200,
        autoform: {
            rows: 3
        }
    },

    specialDiet: {
        type: String,
        autoform: {
            options: function(){
                return [
                    {value: 'Vegetarian', label: 'Vegetarian'},
                    {value: 'None', label: 'None'}
                ]
            }
    }
    },
    createdAt: {
    type: Date,
    autoform:{
      omit:true
    },
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpdate) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      }
  },
  updatedAt: {
    type: Date,
    autoform: {
      omit:true
        },
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  owner: {
    type:String,
    autoform:{
      omit:true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  }
}));
