<?php $versions_list = get_field('versions_list');
if ($versions_list) : ?>
  <section class="versions">
    <div class="container">
      <div class="versions__wrapper">

        <?php
        $title = get_field('versions_title', 'options');
        ?>
        <?php if ($title) : ?>
          <h2 class="versions__title section__title section__title--black"><?= $title; ?></h2>
        <?php endif; ?>

        <div class="versions__accordion">
          <?php while (have_rows('versions_list')) : the_row();
            $heading = get_sub_field('versions_heading') ?? '';
            $content = get_sub_field('versions_content') ?? '';
          ?>
            <div class="versions__block">
              <div class="versions__question">
                <?= $heading ?>
                <div class="versions__icon">
                  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22" cy="22" r="21.5" />
                    <path d="M22.4229 13.5387L22.4229 31.308" />
                    <path d="M31.3076 22.4233L13.5384 22.4233" />
                  </svg>
                </div>
              </div>
              <div class="versions__answear">
                <div class="versions__inner">
                  <?= $content ?>
                </div>
              </div>
            </div>
          <?php endwhile; ?>

        </div>
      </div>
    </div>
  </section>
<?php endif ?>