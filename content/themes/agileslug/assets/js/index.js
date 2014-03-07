/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        //$('.comment').hide();
        //$('#disqus_thread').hide();
        $('#showcomments').hide();

    });

    $('#showcomments').on('click', function(event) {  
     	//event.preventDefault();       
         //$('.comment').slideDown();
         //$('#disqus_thread').slideDown();
         //$('#showcomments').hide();
    });

}(jQuery));