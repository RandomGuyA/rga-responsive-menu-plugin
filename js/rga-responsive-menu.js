

/*---------------rga-responsive-menu-plugin.js------------------*/

;(function($, doc, win){
  "use strict";

  var name = 'rga-responsive-menu-plugin';

  function App(el, opts){
    
	this.$el      = $(el);
    this.$el.data(name, this);

    this.defaults = {};

    var meta      = this.$el.data(name + '-opts');
    this.opts     = $.extend(this.defaults, opts, meta);

    this.init();
  }

  App.prototype.init = function() {
	  
	  
  };


  $.fn.app = function(opts) {
    return this.each(function() {
      new Widget(this, opts);
    });
  };
  
})(jQuery, document, window);