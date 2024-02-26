<?php $questions_list = get_field('questions_list');
if ($questions_list) : ?>
  <section class="questions">
    <div class="container">
      <div class="questions__wrapper">

        <?php
        $title = get_field('questions_title', 'options');
        ?>
        <?php if ($title) : ?>
          <h2 class="questions__title section__title"><?= $title; ?></h2>
        <?php endif; ?>

        <div class="questions__accordion">
          <?php while (have_rows('questions_list')) : the_row();
            $heading = get_sub_field('questions_heading') ?? '';
            $content = get_sub_field('questions_content') ?? '';
          ?>
            <div class="questions__block">
              <div class="questions__question">
                <p> <?= $heading ?></p>
                <div class="questions__icon">
                  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22" cy="22" r="21.5" />
                    <path d="M22.4229 13.5387L22.4229 31.308" />
                    <path d="M31.3076 22.4233L13.5384 22.4233" />
                  </svg>
                </div>
              </div>
              <div class="questions__answear">
                <div class="questions__inner">
                  <p> <?= $content ?></p>
                </div>
              </div>
            </div>
          <?php endwhile; ?>

        </div>
      </div>
    </div>
  </section>
<?php endif ?>