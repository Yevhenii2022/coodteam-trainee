<?php
$args = array(
  'post_type' => 'portfolio',
  'post_per_page' => 1,
);
$portfolio_query = new WP_Query($args);

if ($portfolio_query->have_posts()) :
?>
  <section class="portfolio">
    <div class="container container--left">
      <div class="portfolio__wrapper">
        <?php
        $title = get_field('portfolio_title', 'options');
        if ($title) :
        ?>
          <h2 class="portfolio__title section__title"><?= $title; ?></h2>
        <?php endif; ?>
        <div class="portfolio__slider swiper">
          <div class="swiper-wrapper">
            <?php
            while ($portfolio_query->have_posts()) : $portfolio_query->the_post();
            ?>
              <a href="<?= get_the_permalink() ?>" class="swiper-slide portfolio__link">
                <div class="portfolio__image">
                  <?= the_post_thumbnail() ?>
                </div>
                <div class="portfolio__description">
                  <div>
                    <h3 class="portfolio__name">
                      <?= get_the_title() ?>
                    </h3>
                    <p class="portfolio__excerpt">
                      <?= get_the_excerpt() ?>
                    </p>
                  </div>
                  <svg viewBox="0 0 44 43" fill="none">
                    <circle cx="22" cy="21.5" r="21.5" fill="#fff" />
                    <path stroke="#368B3C" d="M13.284 20.919h16.851M23.743 13.946l6.973 6.973-6.973 6.973" />
                  </svg>
                </div>
              </a>
            <?php endwhile;
            wp_reset_postdata();
            ?>
          </div>
        </div>
        <div class="portfolio__swiper-pagination"></div>
      </div>
    </div>
  </section>
<?php endif; ?>