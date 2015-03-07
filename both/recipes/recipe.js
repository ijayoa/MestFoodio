Recipes = new Mongo.Collection('recipes');

Recipes.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Recipe Title:",
        max: 200
    },
    description: {
        type: String,
        label: "Description:",
        optional: true,
        max: 2000,
        autoform: {
            rows: 10
        }
    },
    recipepicture: {
      type: String,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Images'
        }
      },
      label: 'Choose Profile Image'
    },
    link: {
        type: String,
        label: "Add External Links:",
        optional: true,
        max: 200
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
