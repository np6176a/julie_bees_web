jQuery.fn.autobox=function(s){var l=$.extend({defaultClass:"default",filledClass:"filled"},s);return this.each(function(){var s=$(this),a=s.val();if(s.addClass(l.defaultClass),"password"==s.attr("type")){var t=$('<input type="text" class="'+l.defaultClass+'"value="'+s.val()+'" />');t.css({position:"absolute","z-index":10,top:s.position().top+"px",left:s.position().left+"px"}),$(window).resize(function(){t.css({top:s.position().top+"px",left:s.position().left+"px"})}),t.bind("focus",function(){var l=$(this);l.hide(),s.show(),s.css({visibility:"visible"}),s.focus()}),s.before(t)}s.bind("focus",function(){var s=$(this);s.removeClass(l.defaultClass),s.addClass(l.filledClass),s.val()==a&&s.val("")}),s.bind("blur",function(){var s=$(this);""==s.val()?(s.val(a),s.addClass(l.defaultClass),s.removeClass(l.filledClass),"password"==s.attr("type")&&t.show()):s.addClass(l.filledClass)})})};