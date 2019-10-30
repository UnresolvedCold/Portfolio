
$( document ).ready(function() {
    // js goes in here.
    $("a._Schwifty_link").hover(
        function() {
            var href = $(this).attr('href');
            var str = getReferenceName(href);

          $( "p._Schwifty_link_info" ).text(str);
        }
      );

      $("a._Schwifty_link").mouseleave(
          function(){
            $( "p._Schwifty_link_info" ).text("");
          }
      ); 
  });
  

  function getReferenceName(href)
  {
      if(href.split("github").length > 1) return "Github";
      if(href.split("linkedin").length > 1) return "LinkedIn";
      if(href.split("facebook").length > 1) return "Facebook";
      if(href.split("Contact").length > 1) return "Contact Me";
      if(href.split("codeforces").length > 1) return "CodeForces";

      return "";
  }