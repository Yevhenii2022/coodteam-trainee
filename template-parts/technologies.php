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
            $ch = curl_init($image);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $svgContent = curl_exec($ch);
            curl_close($ch);
          ?>
            <a class="technologies__slide swiper-slide" href="<?= $link; ?>" target="_blank">
              <?php if ($image) {
                echo $svgContent;
              } ?>
            </a>
          <?php endwhile; ?>

        </div>
      </div>
      <div class="technologies__swiper-pagination"></div>

    </div>
  </div>
</section>