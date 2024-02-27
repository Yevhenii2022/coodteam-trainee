<section class="desktop">
  <div class="container container--left">
    <div class="desktop__wrapper">

      <?php
      $title = get_field('desktop_title', 'options');
      ?>
      <?php if ($title) : ?>
        <h2 class="desktop__title section__title section__title--black"><?= $title; ?></h2>
      <?php endif; ?>

      <div class="desktop__slider swiper ">
        <div class="swiper-wrapper">

          <?php while (have_rows('gallery')) : the_row();
            $image = get_sub_field('desktop');
          ?>
            <?php if ($image) : ?>
              <div class="swiper-slide desktop__image">
                <?php
                $alt_text = get_post_meta($image, '_wp_attachment_image_alt', true);
                echo wp_get_attachment_image($image, "full", '', ['alt' => $alt_text]);
                ?>
              </div>
            <?php endif; ?>
          <?php endwhile; ?>

        </div>
      </div>
      <div class="desktop__swiper-pagination"></div>

    </div>
  </div>
</section>