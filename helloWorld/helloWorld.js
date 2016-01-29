if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  // counter starts at 10 to countdown
  Session.setDefault('counterDescending', 10)

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
	
  });
  
   Template.helloDescending.helpers({
  	
	counterDescending: function () {
      return Session.get('counterDescending');
    }
	
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
	
	
	
  });
  
  
  Template.helloDescending.events({
  
	
	'click button': function () {
      // decrement the counter when button is clicked
      Session.set('counterDescending', Session.get('counterDescending') -1);
    }
	
  });
  
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
