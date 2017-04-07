/* Sidebar Menu*/
$(document).ready(function () {
  $('.gn-menu > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('.gn-menu li ul').slideUp();
      $(this).next().slideToggle();
      $('.gn-menu li a').removeClass('active');
      $(this).addClass('active');
    }
  });
});

/* Top Stats Show Hide */
$(document).ready(function(){
    $("#topstats").click(function(){
        $(".topstats").slideToggle(100);
    });
});

/* Sidepanel Show-Hide */
$(document).ready(function(){
    $(".sidepanel-open-button").click(function(){
        $(".sidepanel").toggle(100);
    });
});

$(document).ready(function(){
    $(".sidebar-open-button-mobile").click(function(){
        //$(".gn-menu").toggle(250);
		//$(".gn-menu-wrapper").addClass('gn-open-all');
		//$
    });
});
/* Sidebar Show-Hide On Mobile */
$(document).ready(function(){
	
	/*$(".sidebar-open-button").click(function(){
		if($('.sidebar-open-button').hasClass('gn-selected')){
			$('#theGrid').css({
                'paddingLeft' : 250
		   }); 
		   $('.content').css({
                'marginLeft' : 250
		   });			   
		}else{
			$('#theGrid').css({
                'paddingLeft' : 60
		   });		
		   $('.content').css({
                'marginLeft' : 60
		   });	

		}
	}); 
	
	$(".sidebar-open-button").on('mouseleave',function(){
            $('.gn-menu-wrapper').addClass('gn-open-part');
			$('.gn-menu-wrapper').removeClass('gn-open-all');	
			$('.content').css({
                'marginLeft' : 60
			});		
			$('#theGrid').css({
                'paddingLeft' : 60
			});		 
			$('.sidebar-open-button').removeClass('gn-selected');
	});
	
    $(".gn-menu li").hover(function(){
       
			$('.grid').css({
                'paddingLeft' : 190
		   });   
			$('.content').css({
                'marginLeft' : 250
		   });	
		   $('.gn-menu-wrapper').addClass('gn-open-all');
   }); 

	$(".gn-menu li").on('mouseleave', function() {
    	   $('.grid').css({
                'paddingLeft' : 0
			});  
			$('.content').css({
                'marginLeft' : 60
		   });	
		$('.gn-menu-wrapper').removeClass('gn-open-all');
	});*/
	
	$(".mobilemenu").on('mouseleave', function() {
		$('#theContent').css({'marginLeft': 0});
		$('#theGrid').css({'marginLeft': 0});
	});
});

/* Sidebar Show-Hide */
$(document).ready(function(){

   /* $('.sidebar-open-button').on('click', function(){
        if($('.gn-menu-wrapper ').hasClass('gn-open-all')){
				$('.gn-menu-wrapper').removeClass('gn-open-part');
				$('.content').css({
					'marginLeft' : 250
				});   
        }else{
            $('.gn-menu-wrapper').addClass('gn-open-part');
			$('.gn-menu-wrapper').removeClass('gn-open-all');
            $('.content').css({
                'marginLeft' : 60
		    });    
        }
    }); 
   */
});

/*===========================================================
PANEL TOOLS
===========================================================*/
/* Minimize */
$(document).ready(function(){
  $(".panel-tools .minimise-tool").click(function(event){
  $(this).parents(".panel").find(".panel-body").slideToggle(100);

  return false;
}); 

 }); 

/* Close */
$(document).ready(function(){
  $(".panel-tools .closed-tool").click(function(event){
  $(this).parents(".panel").fadeToggle(400);

  return false;
}); 

 }); 

 /* Search */
$(document).ready(function(){
  $(".panel-tools .search-tool").click(function(event){
  $(this).parents(".panel").find(".panel-search").toggle(100);

  return false;
}); 

 }); 




/* expand */
$(document).ready(function(){

    $('.panel-tools .expand-tool').on('click', function(){
        if($(this).parents(".panel").hasClass('panel-fullsize'))
        {
            $(this).parents(".panel").removeClass('panel-fullsize');
        }
        else
        {
            $(this).parents(".panel").addClass('panel-fullsize');
 
        }
    });

});


/* ===========================================================
Widget Tools
===========================================================*/


/* Close */
$(document).ready(function(){
  $(".widget-tools .closed-tool").click(function(event){
  $(this).parents(".widget").fadeToggle(400);

  return false;
}); 

 }); 


/* expand */
$(document).ready(function(){

    $('.widget-tools .expand-tool').on('click', function(){
        if($(this).parents(".widget").hasClass('widget-fullsize'))
        {
            $(this).parents(".widget").removeClass('widget-fullsize');
        }
        else
        {
            $(this).parents(".widget").addClass('widget-fullsize');
 
        }
    });

});

/* EMR Alerts */
/* Default */
$(document).ready(function(){
  $(".emr-alert .closed").click(function(event){
  $(this).parents(".emr-alert").fadeToggle(350);

  return false;
}); 

 }); 


/* Click to close */
$(document).ready(function(){
  $(".emr-alert-click").click(function(event){
  $(this).fadeToggle(350);

  return false;
}); 

 }); 



/* Tooltips */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Popover */
$(function () {
  $('[data-toggle="popover"]').popover()
})


/* Page Loading */
$(window).load(function() {
  $(".loading").fadeOut(750);
})