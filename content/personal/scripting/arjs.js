/** 
 * Tabbed code created by Abstract Reality.
 * Able to be used just about anywhere on the site as a whole.
**/
$(".tb-b").click(function(){
  if($(this).closest(".tb-a").hasClass("tb-t"))
  {
     $(".tb-t").children(".tb-c").css("display", "none").eq($(this).index()).css("display", "block");
  }
  else 
  {
       $(this).closest(".tb-a").siblings(".tb-a").children(".tb-c").css("display", "none").eq($(this).index()).css("display", "block");
  }
});

/** 
 * Credit to custom tooltip code from JQuery By Example
 * Code made by Virendra.
 * Code adapted for use on AR.
 **/ 
$(".tooltips div").hover(function(event){
  var toolTip = $(this).attr('Tooltip');
  $('<span class="c-tooltip"></span>').text(toolTip)
        .appendTo('body')
        .css('top', (event.pageY - 10) + 'px')
        .css('left', (event.pageX + 20) + 'px')
        .fadeIn('slow');
  }, function() {
    $('.c-tooltip').remove();
}).mousemove(function(event) {
    $('.c-tooltip')
    .css('top', (event.pageY - 5) + 'px')
    .css('left', (event.pageX + 20) + 'px');
}); 