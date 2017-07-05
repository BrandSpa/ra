<?php

// function modify_jquery() {
// 	if (!is_admin()) {
// 		wp_deregister_script( 'wp-embed' );
// 		wp_deregister_script('jquery');
// 		wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', false, '3.1.1', true);
// 		wp_enqueue_script('jquery');
// 	}
// }
//
// add_action('init', 'modify_jquery');

location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
  expires 1M;
  access_log off;
  add_header Cache-Control "public";
}
