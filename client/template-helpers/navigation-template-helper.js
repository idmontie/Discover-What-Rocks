Template.navigation.helpers( {
  circles : function () {
    'use strict';

    return Circles.find()
  },
  meteor_loggedin : function () {
    'use strict';
    return !! Meteor.user()
  }
} );

Template.navigation.events( {
  /**
   * Close the navigation
   */
  'click .left-off-canvas-menu li a' : function ( e ) {
    'use strict';
    $('.off-canvas-wrap').removeClass('move-right')
  },
  'click .logout' : function ( e ) {
    'use strict';

    e.preventDefault()

    Meteor.logout()

    Router.go( '/' )
  }
} );