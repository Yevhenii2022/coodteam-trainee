<?php

function portfolio_custom_post()
{
  $labels = array(
    'name' => esc_html__('Портфоліо', 'pointer_theme'),
    'singular_name' => esc_html__('Робота', 'pointer_theme'),
    'add_new' => esc_html__('Додати нову роботу', 'pointer_theme'),
    'add_new_item' => esc_html__('Додати нову роботу', 'pointer_theme'),
    'edit_item' => esc_html__('Редагувати роботу', 'pointer_theme'),
    'new_item' => esc_html__('Нова робота', 'pointer_theme'),
    'all_items' => esc_html__('Всі роботи', 'pointer_theme'),
    'view_item' => esc_html__('Переглянути роботи', 'pointer_theme'),
    'search_items' => esc_html__('Знайти роботу', 'pointer_theme'),
    'not_found' => esc_html__('Робіт не знайдено', 'pointer_theme'),
    'featured_image' => esc_html__('Зображення', 'pointer_theme'),
    'set_featured_image' => esc_html__('Додати зображення', 'pointer_theme')
  );
  $args = array(
    'labels' => $labels,
    'description' => 'Портфоліо',
    'public' => true,
    'menu_position' => 19,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    'has_archive' => false,
    'show_in_admin_bar' => true,
    'show_in_nav_menus' => true,
    'rewrite' => array('slug' => 'portfolio'),
    'menu_icon' => 'dashicons-portfolio',
    'query_var' => true,
  );

  register_post_type('portfolio', $args);
}

add_action('init', 'portfolio_custom_post');
