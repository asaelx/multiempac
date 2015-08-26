<?php
/**
 * Displays the header section of the theme.
 *
 * @package Theme Horse
 * @subpackage Clean_Retina
 * @since Clean Retina 1.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta name="format-detection" content="telephone=no">

<?php $isiPad = (bool) strpos($_SERVER['HTTP_USER_AGENT'],'iPad');
if ( $isiPad ) { ?>
<?php // This is an iPad! ?>
    <meta name="viewport" content="1024; initial-scale=0.9; maximum-scale=0.9; user-scalable=no;">
<?php    } else { ?>
<?php // Not an iPad ?>
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
<?php } ?>
	<?php		
		/** 
		 * cleanretina_title hook
		 *
		 * HOOKED_FUNCTION_NAME PRIORITY
		 *
		 * cleanretina_add_meta 5
		 * cleanretina_show_title 10
		 *
		 */
		do_action( 'cleanretina_title' );

		/** 
		 * cleanretina_meta hook
		 */
		do_action( 'cleanretina_meta' );

		/** 
		 * cleanretina_links hook
		 *
		 * HOOKED_FUNCTION_NAME PRIORITY
		 *
		 * cleanretina_add_links 10
		 * cleanretina_favicon 15
		 * cleanretina_webpageicon 20
		 *
		 */
		do_action( 'cleanretina_links' );

		/** 
		 * This hook is important for wordpress plugins and other many things
		 */
		wp_head();
	?>
	
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-515e02c357305bac"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
	$(document).ready(function(){
		$(".nav-button").click(function () {
		$(".nav-button,.primary-nav").toggleClass("open");
		});    
	});
</script>

<!-- Google Maps -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

<?php if (is_page(20) ) { ?>
<style type="text/css">
body {
	margin-top: -10px;
}
</style>
<?php } ?>

<?php if (is_page(7) ) { ?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/mapa_sucursales.js"></script>
<?php } ?>

<?php if (is_page(11) ) { ?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/mapa.js"></script>
<?php } ?>

<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/ddscrollspy.js"></script>

<script>
jQuery(function($){ 
	$('#ProductosMenu').ddscrollSpy({
		scrolltopoffset: -140
	})

	$('').ddscrollSpy({ 
		spytarget: document.getElementById('contentcontainer'),
		scrollduration: 300 
	})
})
function dynamicadditem(){ // function that dynamically adds a new menu item to first demo, spying on #para6
	$('#ProductosMenu').append('<li><a href="#Producto_Otros">Otros productos</a></li>')
	$('#ProductosMenu').trigger('updatespy')
}
</script>

<link rel="apple-touch-icon-precomposed" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-precomposed.png" />

</head>

<link rel="stylesheet" type="text/css" href="http://goo.gl/MFhnba" />
<script type="text/javascript" src="http://goo.gl/P4YrUf"></script>
<body <?php body_class(); ?> onload="initialize()">
	<?php
		/** 
		 * cleanretina_before hook
		 */
		do_action( 'cleanretina_before' );
	?>

	<div id="wrapper">
		<?php
			/** 
			 * cleanretina_before_header hook
			 */
			do_action( 'cleanretina_before_header' );
		?>
		<header id="branding" >
			<?php
				/** 
				 * cleanretina_header hook
				 *
				 * HOOKED_FUNCTION_NAME PRIORITY
				 *
				 * cleanretina_headerdetails 10
				 */
				do_action( 'cleanretina_header' );
			?>
			<div id="SombraInicio">
			<!-- CSS -->
			</div>
		</header>
		<?php
			/** 
			 * cleanretina_after_header hook
			 */
			do_action( 'cleanretina_after_header' );
		?>

		<?php
			/** 
			 * cleanretina_before_main hook
			 */
			do_action( 'cleanretina_before_main' );
		?>
		<div id="main" class="wrapper clearfix">
