<?php



		// wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', false, '3.1.1', true);
    //     wp_enqueue_script('jquery');

function modify_jquery() {
	if (!is_admin()) {
    global $wp_scripts;

    print_r($wp_scripts->queue);

    foreach ($wp_scripts->queue as $name) {
      wp_deregister_script($name);
      wp_dequeue_script($name);
    }

    print_r($wp_scripts->queue);

	}
}

add_filter('wp_enqueue_scripts', 'modify_jquery', 99);
