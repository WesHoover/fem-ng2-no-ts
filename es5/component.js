// IIFE for encapsulation
;(function(app) {
  var MyService = app.MyService;
  // ng global namespace
  app.RootComponent = ng.core.Component({
    selector: 'app',
    template: '<div class="app"></div>',
    // inject services
    // make sure that js file is loaded 1st!
    viewProviders: [MyService]
  })
  .Class({ /* capital C here on Class */
    // injectable services are available here
    // like Angular 1, we use the array to annotate
    // our dependencies
    constructor: [MyService, function(myService) {

    }]
  });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.RootComponent);
  });
}(window.app || (window.app = {})));
