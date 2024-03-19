$(function () {
  $("#loading").hide();
  $("#footer, #wrapper").hide()



  $("#navbar_about").click(function () {

  });
  $("#navbar_contact").click(function () {

  });

  $("#about").on("mouseenter",function () {
    $("#about").css({"transform":"scale(1.2)", "background-color":"rgba(20,30,250,0.5)"})
  }).on("mouseleave",function () {
    $("#about").css({"transform":"scale(1)", "background-color":"rgba(20,30,250,1)"})
  });


  $("a").on("click", function(event){
    if(this.hash !==""){
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top -100
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $("#jump_down").on("click", function (event){
    event.preventDefault();
    $("#wrapper, #footer").slideToggle("slow");
    $("#jump_down_img").animate({rotate:'+=180deg'})


  });






  var slider = $("#jquery-slideshow"),
            item_width = slider.parent().outerWidth(),
            timer = null;


        $( window ).on( "resize", adjust );
        adjust();


        if ( slider.children("li").length > 1 ) {

            // Add previous/next buttons
            slider.parent().append("<a href=\"#\" id=\"btn-prev\"><i class=\"fa fa-angle-left\"></i><span>Previous</span></a><a href=\"#\" id=\"btn-next\"><i class=\"fa fa-angle-right\"></i><span>Next</span></a>");

            // Handle clicks on the next button
            slider.parent().on("click", "a#btn-prev", function(e){
                e.preventDefault();

                slider.children("li:last").prependTo( slider );
                slider.css("left", -item_width);

                slider.animate({
                    left: 0
                }, 300, "swing");
            });

            // Handle clicks on the previous button
            slider.parent().on("click", "a#btn-next", function(e){
                e.preventDefault();

                slider.animate({
                    left: -item_width
                }, 300, "swing", function(){
                    slider.children("li:first").appendTo( slider );
                    slider.css("left", 0);
                });
            });
        }

        // Autoplay slider (but only when the window/tab is active
        // to save resources)
        document.addEventListener("visibilitychange", function() {
            if ( "undefined" !== typeof document.hidden && document.hidden ) {
                clearInterval(timer);
                timer = null;
            } else {
                autoplay();
            }
        }, false);

        // Pause/resume autoplay on hover in/out
        slider.hover(function(){
            if ( timer ) {
                clearInterval(timer);
                timer = null;
            }
        }, function(){
            autoplay();
        });

        // Helpers
        function autoplay(){
            if ( $("a#btn-next").length ) {
                timer = setInterval(function(){
                    $("a#btn-next").trigger("click");
                }, 5000);
            }
        }

        function adjust(){
            item_width = slider.parent().outerWidth();
            slider.children("li").width( item_width ).parent().width( item_width * slider.children("li").length );
        }








































});



