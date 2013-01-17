/*	Responsive Boilerplate V.2.1.
	  Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	  Licensed under MIT license, http://opensource.org/licenses/mit-license.php
	
*/

//Hide the url bar on smartphones
/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/
(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
    
    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
    
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    } );
  }
})( this );
//Simple function to a responsive menu
   $(function() {
      // Create the dropdown base
      $("<select />").appendTo("nav");
      // Default option "-- Table of Content-- Change this valeu to fit your needs"
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "-- Table of Content --"
      }).appendTo("nav select");
      // Populate dropdown with menu items
      $("nav a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("nav select");
      });
   
   
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
   });

//apply to any markap with nav like this:
/*
<nav> 
    <ul> 
      <li><a href="#">Link</a></li> 
      <li><a href="#">Link</a></li> 
      <li><a href="#">Link</a></li> 
      <li><a href="#">Link</a></li> 
      <li><a href="#">Link</a></li> 
    </ul>
</nav>

*/

//Add your scripts here
