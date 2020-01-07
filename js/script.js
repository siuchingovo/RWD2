$(document).ready(function(){

    let openingAnimWindow = document.querySelector("#openingAnimation");
    let openingAnimData = {
      container: openingAnimWindow,
      animType: "svg",
      loop: false,
      prerender: true,
      autoplay: true,
      path: 'loading.json',
    };
  
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    $("#lottie-start").click(function() {
      openingAnim.play();
    });

    $(document).ready(function(){
        setTimeout(function(){
          $(".loading").fadeOut(500);}, 5000);
    });
  





    $(".plus").click(function(){
        $(".dietary1").slideToggle("Slow")
        if($("#cos").attr("src")==="images/OCR-A_char_Plus_Sign.png"){
        
             $("#cos").attr("src","images/OCR-B_char_Plus_Sign.png");    
            } else{
        $("#cos").attr("src","images/OCR-A_char_Plus_Sign.png");
            }
    });
    

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1000){
            $(".GOTOP").fadeIn("Slow");
        } else {
            $(".GOTOP").fadeOut("Slow");
        }
    });

    $(".GOTOP").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    

    $(".ccc").click(function(){
        $(".viewwindow").fadeIn(500);
        $(".window").fadeIn(500);
        $("body").addClass("stopscroll")
        $(".GOTOP").fadeOut("Slow");
    });

    $(".X").click(function(){
        $(".viewwindow").fadeOut(500);
        $(".window").fadeOut(500);
        $("body").removeClass("stopscroll")
    });

    $(".Dietary-Requirements").click(function(){
        $(".fruit_checkbox").slideDown("Slow");
        $(".furit_checkbox").slideToggle("Slow");
    });


});



