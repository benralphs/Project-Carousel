;(function(sliding){
    sliding(jQuery);
})(function($){


    var slider = (function(element, settings){
        var instanceId = 0;
        function _sliding(element, settings){
            this.default = {};
            this.settings = $.extend({},this.this.default,settings);
            this.initials = {};
            $.extend(this,this.initials);
            this.$el = (element);
            this.changeSlide = $.proxy(this.changeSlide,this);
            this.init();
            this.instanceId = instanceId++;
            return _sliding;

        }
    })
})();
slider.prototype.init =function(){};
slider.prototype.cssTrans =function(){};
slider.prototype.build = function(){};
slider.prototype.activate = function(){};
slider.prototype.events = function(){};
slider.prototype.clearTimer = function(){};
slider.prototype.initTimer = function(){};
slider.prototype.startTimer = function(){};
slider.prototype.changeSlide = function(event){
    slider.prototype.cssAnim = function(nextSlide, direction){};
    slider.prototype.jsAnim = function(nextSlide, direction){};
    slider.prototype.updateIndi = function(){};


    $.fn.slider = function(options){
        return this.each(function(index, el){
            el.slider = new slider(el, options);
        });
    };
};
var args = {
    arrowRight: '.nextIndicator',
    arrowLeft: '.previousIndicatoe',
    speed : 1000, 
}
$('.carousel-out').slider(args);