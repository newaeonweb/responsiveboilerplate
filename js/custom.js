/*	Responsive Boilerplate V.2.1.
	  Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	  Licensed under MIT license, http://opensource.org/licenses/mit-license.php
	
*/

//Hide the url bar on smartphones
body.onload = function() {
  window.setTimeout(function() {
    window.scrollTo(0, 1);
}, 0);
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
