<?php
/*
Template Name: Головна сторінка
*/

get_header();
?>
<main>

  <?php get_template_part('template-parts/hero'); ?>

  <?php get_template_part('template-parts/services'); ?>

  <?php get_template_part('template-parts/portfolio'); ?>

  <?php get_template_part('template-parts/clients'); ?>

  <?php get_template_part('template-parts/about'); ?>

  <?php get_template_part('template-parts/popup'); ?>

</main>
<?php get_footer(); ?>