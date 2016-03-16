(function(app) {
  function MyService() {}

  MyService.prototype.getStuff = function() {}

  app.MyService = MyService;

}(window.app || (window.app = {})))
