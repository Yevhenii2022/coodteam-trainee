<?php
get_header();
?>
<main>

  <section>
    <?= the_title(); ?>
    <div>
      <?= the_content(); ?>
    </div>
  </section>

  <?php get_template_part('template-parts/portfolio'); ?>

  <?php get_template_part('template-parts/clients'); ?>

  <?php get_template_part('template-parts/about'); ?>

  <?php get_template_part('template-parts/popup'); ?>

  <?php get_template_part('template-parts/success'); ?>

</main>
<?php get_footer(); ?>