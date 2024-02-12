  <section class="about">
    <div class="container">
      <div class="about__wrapper">

        <?php
        $title = get_field('about_title', 'options');
        ?>
        <?php if ($title) : ?>
          <h2 class="about__title section__title"><?= $title; ?></h2>
        <?php endif; ?>

        <div class="about__slider swiper">
          <div class="about__socials  swiper-wrapper">

            <?php while (have_rows('socials_list', 'options')) : the_row();
              $image = get_sub_field('socials_icon');
              $link = get_sub_field('socials_link') ?? '';
              $ch = curl_init($image);
              curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
              curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
              $svgContent = curl_exec($ch);
              curl_close($ch);
            ?>
              <a class="about__slide swiper-slide" href="<?= $link; ?>" target="_blank">
                <?php if ($image) {
                  echo $svgContent;
                } ?>
              </a>
            <?php endwhile; ?>

          </div>
        </div>
        <div class="about__swiper-pagination"></div>

      </div>
    </div>
  </section>