import "./header.html";
import "./header.scss";

Template.header.events({
  "click .main-header": function() {
    $("#header-notification-menu").addClass("menu-hidden");
    $("#header-profile-menu").addClass("menu-hidden");
  },
  "click #header-profile-button": function(e) {
    e.stopPropagation();
    $("#header-notification-menu").addClass("menu-hidden");
    $("#header-profile-menu").toggleClass("menu-hidden");
  },
  "click #header-notification-button": function(e) {
    e.stopPropagation();
    $("#header-profile-menu").addClass("menu-hidden");
    $("#header-notification-menu").toggleClass("menu-hidden");
  },
  "click #log-out": function(e, t) {
    Meteor.logout(function() {
      sAlert.info("Bye!, See you back soon");
      Router.go("/");
    });
    return false;
  }
});
