<?php
$title = get_field('hero_title') ?? '';
$subtitle = get_field('hero_subtitle') ?? '';
$button_text = get_field('hero_button') ?? '';
?>

<section class="clients">
  <div class="container container--left">
    <div class="clients__wrapper">

      <?php
      $title = get_field('clients_title', 'options');
      ?>
      <?php if ($title) : ?>
        <h2 class="clients__title section__title"><?= $title; ?></h2>
      <?php endif; ?>

      <div class="clients__slider swiper ">
        <div class="swiper-wrapper">

          <?php while (have_rows('clients_list', 'options')) : the_row();
            $image = get_sub_field('clients_image');
          ?>
            <?php if ($image) : ?>
              <div class="swiper-slide clients__image">
                <?php
                $alt_text = get_post_meta($image, '_wp_attachment_image_alt', true);
                echo wp_get_attachment_image($image, "full", '', ['alt' => $alt_text]);
                ?>
              </div>
            <?php endif; ?>
          <?php endwhile; ?>

        </div>
      </div>
      <div class="clients__swiper-pagination"></div>

    </div>
  </div>
</section>