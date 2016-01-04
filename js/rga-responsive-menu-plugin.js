

/*---------------rga-responsive-menu-plugin.js------------------*/

;(function($, doc, win){
	"use strict";

	var name = 'rga-responsive-menu-plugin';

	function App(el, opts){

		this.$el      = $(el);
		this.$el.data(name, this);

		this.defaults = {

			activationWidth: '768',
			iconURL: 'img/menu-alt-512.png'

		};

		var meta  = this.$el.data('widget-plugin-opts');
		this.opts = $.extend(this.defaults, opts, meta);
		
		this.$plugin = this.$el.find('.'+name);
		
		this.init();
	}

	App.prototype.init = function() {
		
		var self = this;
		
		//Event handler for Viewport width
		$(win).resize(function() {
			if(self.hasReachedActivationWidth($(win).width())){
				self.addMenuIcon();
			}else{
				self.removeMenuIcon();
			}
		});
		
	};
	
	App.prototype.addMenuIcon = function(){
	
		var $menuOptions = this.$plugin.find('li');
		
		console.log($menuOptions);
		
		$menuOptions.each(function(){
			console.log("here");
			
		});
		
	};
	
	App.prototype.removeMenuIcon = function(){
		
		
	};

	
	
	App.prototype.hasReachedActivationWidth = function(windowWidth){
		
		return (windowWidth<this.defaults.activationWidth) ? true : false;
		
	};
	
	$.fn.activate = function(opts) {
		return this.each(function() {
			new App(this, opts);
		});
	};

})(jQuery, document, window);