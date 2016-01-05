

/*---------------rga-responsive-menu-plugin.js------------------*/

;(function($, doc, win){
	"use strict";

	var name = 'rga-responsive-menu-plugin';

	function App(el, opts){
		
		this.$el = $(el);
		this.$el.data(name, this);
		this.$active = false;
		this.$dropDownListItems = this.$el.find('li');
		this.$menuListItems = this.$dropDownListItems.clone();
		
		this.defaults = {

			activationWidth: '768',
			iconURL: 'img/menu-alt-512.png',
			listHeight:'40'

		};
		
		//set the menu height if it exists
		if(this.$el.height()!=0){
			this.defaults.listHeight = this.$el.height();
		}
		
		var meta  = this.$el.data('widget-plugin-opts');
		this.opts = $.extend(this.defaults, opts, meta);
		
		this.init();
	}

	App.prototype.init = function() {
		
		var self = this;
		var $list = self.$el;
		
		var hamburgerCss = {
			width: self.defaults.listHeight+"px",
			height: self.defaults.listHeight+"px",
			'float': "right",
			
		};
		
		var hamburgerMenuCss = {
			top:self.defaults.listHeight+"px",
		};
		
		var innerListWrapper = $('<li>').addClass("hamburger-menu").append($('<ul>'));		
		var $menuIconWrapper = self.$dropDownListItems.wrapAll(innerListWrapper);		
		
		
		$list.prepend(self.$menuListItems);
		$list.find(".hamburger-menu").prepend(
			$('<a>').addClass("hamburger").css(hamburgerCss).append(
				$('<img>').attr("src", self.defaults.iconURL)
			)
		);
		var $innerList = $list.find(".hamburger-menu ul");
		$innerList.css(hamburgerMenuCss);		
		
		
		//Event handler for Viewport width
		$(win).resize(function() {
			
			var activateMenucompression = ($(win).width()<self.defaults.activationWidth) ? true : false;
			
			if(activateMenucompression!=self.$active){
				
				self.$active = (self.$active)?false:true;
				
				if(activateMenucompression){
					console.log("activate");
					self.addMenuIcon();
				}else{
					console.log("de-activate");
					self.removeMenuIcon();
				}
			}
		});
		
		//Event Handler for Click to Expand Menu
		
		$list.find(".hamburger").click(function(){
			
			if($innerList.hasClass("open")){
				self.collapseMenu($innerList);
			}else{
				$innerList.css(hamburgerMenuCss);
				self.expandMenu($innerList);
			}
		});
		
		$list.find(".hamburger-menu").hover(function(){
			//hover over menu
		},function(){
			//leave menu
			self.collapseMenu($innerList);
		});
		
	};
	
	App.prototype.expandMenu = function($list){
		
		$list.css("display", "block").addClass("open");
		var menuHeight = $list.height();
		$list.css("height","0px");
		
		$list.animate({
			height:menuHeight+"px"
			
			}, 1000, function() {
				
			}
		);
	}
	
	App.prototype.collapseMenu = function($list){
		
		$list.animate({
			height:"0px"
			}, 1000, function() {
				$list.css("display", "none");
				$list.removeAttr("style");
				$list.removeClass("open");
			}
		);
	};
	
	App.prototype.addMenuIcon = function(){
		
		this.$el.find(".hamburger-menu").css("display", "block");
		this.$menuListItems.css("display", "none");
	};
	
	App.prototype.removeMenuIcon = function(){
		
		this.$el.find(".hamburger-menu").css("display", "none");
		this.$menuListItems.css("display", "block");
		
	};

	App.prototype.revertBoolean = function(bool){
		bool = (bool)?false:true;
	}
	
	App.prototype.hasPassedOverActivationWidth = function(windowWidth){
		
		(windowWidth<this.defaults.activationWidth) ? true : false;
		
	};
	
	$.fn.activate = function(opts) {
		return this.each(function() {
			new App(this, opts);
		});
	};

})(jQuery, document, window);