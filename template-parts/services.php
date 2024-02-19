<?php
$title = get_field('services_title') ?? '';

$args = array(
  'post_type' => 'services',
  'post_per_page' => 1,
);
$services_query = new WP_Query($args);
if ($services_query->have_posts()) :
?>
  <section class="services">
    <div class="container container--left-media">
      <div class="services__wrapper">
        <h2 class="services__title section__title"><?= $title ?></h2>

        <div class="services__slider swiper">
          <div class="swiper-wrapper">
            <?php
            while ($services_query->have_posts()) : $services_query->the_post();
            ?>
              <a href="<?= get_the_permalink() ?>" class="swiper-slide services__card">
                <div class="services__card-top">
                  <h3 class="services__heading"><?= get_the_title() ?></h3>
                  <p class="services__description">
                    <?= get_the_excerpt() ?>
                  </p>
                </div>

                <?php
                $terms = get_field('services__term');
                $price_uah = get_field('services_price_uah');
                $price_usd = get_field('services_price_usd');
                ?>
                <div class="services__card-bottom">
                  <?php if ($terms) : ?>
                    <p class="services__term">
                      Термін:
                      <span><?= $terms; ?></span>
                    </p>
                  <?php endif; ?>

                  <?php if ($price_uah ||  $price_usd) : ?>
                    <div class="services__price">
                      <div class="services__price-inner">
                        <h4>
                          <?= $price_uah; ?>
                          <span><?= $price_usd; ?></span>
                        </h4>
                      </div>
                      <div class="services__price-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
                          <circle cx="14.5" cy="14.5" r="14.5" />
                          <path d="M8.622 14.108h11.364M15.675 9.405l4.703 4.703-4.703 4.703" />
                        </svg>
                      </div>
                    </div>
                  <?php endif; ?>
                </div>
              </a>
            <?php endwhile;
            wp_reset_postdata();
            ?>
          </div>
        </div>
        <div class="services__swiper-pagination"></div>
      </div>
    </div>
  </section>
<?php endif; ?>