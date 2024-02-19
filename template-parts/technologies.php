<section class="technologies">
  <div class="container">
    <div class="technologies__wrapper">

      <?php
      $title = get_field('technologies_title', 'options');
      ?>
      <?php if ($title) : ?>
        <h2 class="technologies__title section__title"><?= $title; ?></h2>
      <?php endif; ?>

      <div class="technologies__slider swiper">
        <div class="technologies__socials  swiper-wrapper">

          <?php while (have_rows('technologies_list', 'options')) : the_row();
            $image = get_sub_field('technologies_icon');
            $link = get_sub_field('technologies_link') ?? '';
            $file_path = get_attached_file($image);
            $svg_content = file_get_contents($file_path);
          ?>
            <a class="technologies__slide swiper-slide" href="<?= $link; ?>" target="_blank">
              <?php if ($svg_content !== false) {
                echo $svg_content;
              } ?>
            </a>
          <?php endwhile; ?>

        </div>
      </div>
      <div class="technologies__swiper-pagination"></div>

    </div>
  </div>
</section>