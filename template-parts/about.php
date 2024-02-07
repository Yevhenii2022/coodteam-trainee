  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <h2 class="about__title section__title">Читайте про нас</h2>

        <div class="about__slider swiper">
          <div class="about__socials  swiper-wrapper">

            <?php while (have_rows('socials_list', 'options')) : the_row();
              $image = get_sub_field('socials_icon');
              $link = get_sub_field('socials_link') ?? '';
            ?>
              <a class="about__slide swiper-slide" href="<?= $link; ?>" target="_blank">
                <?php if ($image) {
                  echo file_get_contents($image);
                } ?>
              </a>
            <?php endwhile; ?>

          </div>
        </div>
        <div class="about__swiper-pagination"></div>

      </div>
    </div>
  </section>