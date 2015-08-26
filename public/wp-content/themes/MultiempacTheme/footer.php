
<?php
/**
 * Displays the footer section of the theme.
 *
 * @package 		Theme Horse
 * @subpackage 	Clean_Retina
 * @since 			Clean Retina 1.0
 */
?>
	   </div><!-- #main -->

	   <?php
	      /** 
	       * cleanretina_after_main hook
	       */
	      do_action( 'cleanretina_after_main' );
	   ?>

	   <?php 
	   	/**
	   	 * cleanretina_before_footer hook
	   	 */
	   	do_action( 'cleanretina_before_footer' );
	   ?>	
	   
	   <footer id="colophon" class="clearfix">
			<?php
		      /** 
		       * cleanretina_footer hook		       
				 *
				 * HOOKED_FUNCTION_NAME PRIORITY
				 *
				 * cleanretina_open_wrapper_div 5
				 * cleanretina_footer_widget_area 10
				 * cleanretina_open_sitegenerator_div 15
				 * cleanretina_socialnetworks 20
				 * cleanretina_footer_info 25
				 * cleanretina_close_sitegenerator_div 30
				 * cleanretina_close_wrapper_div 35
				 * cleanretina_backtotop_html 40
		       */
		      do_action( 'cleanretina_footer' );
		   ?>
		</footer>
	   
		<?php 
	   	/**
	   	 * cleanretina_after_footer hook
	   	 */
	   	do_action( 'cleanretina_after_footer' );
	   ?>	

	</div><!-- #wrapper -->

	<?php
		/** 
		 * cleanretina_after hook
		 */
		do_action( 'cleanretina_after' );
	?> 

<?php wp_footer(); ?>

<?php if (is_page(5) ) { ?>
<script src="<?php bloginfo('template_directory'); ?>/js/jquery-scrolltofixed-min.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
	$(window).resize();
    var summaries = $('#secondary');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];
		
        summary.scrollToFixed({
            limit: function() {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true) - 0;
                } else {
                    limit = $('#colophon').offset().top - $(this).outerHeight(true) - 0;
                }
                return limit;
            },
            zIndex: 999
        });
		
    });
});
</script>
<?php } ?>

</body>
</html>