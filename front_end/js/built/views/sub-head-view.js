define("sub-head-view",["jquery","underscore","backbone","regs-dispatch"],function(e,t,n,r){var i=n.View.extend({initialize:function(){r.on("activeSection:change",this.changeTitle,this)},changeTitle:function(e){return this.$el.html("§"+e),this}});return i});