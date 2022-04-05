import "./layout.html";
import "./layout.scss";

Template.layout.events({
  "click #main": function() {
    $("#header-notification-menu").addClass("menu-hidden");
    $("#header-profile-menu").addClass("menu-hidden");
  }
});
