// IIFE for encapsulation
;(function(app) {
  // ng global namespace
  app.RootComponent = ng.core.Component({
    selector: 'app',
    template: '<div class="app"></div>'
  })
  .Class({ /* capital C here on Class */
    constructor: function() {}
  });

}(window.app || (window.app = {})));
