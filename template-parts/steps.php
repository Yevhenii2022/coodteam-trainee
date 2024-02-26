<?php $steps_list = get_field('steps_list');
$counter = 1;
if ($steps_list) : ?>
  <section class="steps">
    <div class="container">
      <div class="steps__wrapper">
        <?php $title = get_field('steps_title', 'options') ?? '' ?>
        <?php if ($title) : ?>
          <h2 class="section__title steps__title"><?= $title ?></h2>
        <?php endif ?>

        <div class="steps__inner">
          <?php while (have_rows('steps_list')) : the_row();
            $heading = get_sub_field('steps_heading') ?? '';
            $text = get_sub_field('steps_text') ?? '';
            $icon = get_sub_field('steps_icon') ?? '';
            $file_path = get_attached_file($icon);
            $svg_content = file_get_contents($file_path);
          ?>
            <div class="steps__item">
              <div class="steps__block">
                <span>
                  <?php if ($counter < 10) {
                    echo  '[0' . $counter . ']';
                  } else {
                    echo '[' . $counter . ']';
                  }
                  $counter++; ?>
                </span>
                <div class="steps__icon">
                  <?php if ($svg_content !== false) {
                    echo $svg_content;
                  } ?>
                </div>
              </div>
              <div class="steps__description">
                <?php if ($heading) : ?>
                  <p class="steps__heading"><?= $heading ?></p>
                <?php endif ?>
                <div>
                  <?php if ($text) : ?>
                    <p><?= $text ?></p>
                  <?php endif ?>
                </div>
              </div>
            </div>
          <?php endwhile ?>
        </div>
      </div>
    </div>
  </section>
<?php endif ?>