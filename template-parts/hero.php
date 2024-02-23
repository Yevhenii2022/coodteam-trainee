  <?php
  $title = get_field('hero_title') ?? '';
  $subtitle = get_field('hero_subtitle') ?? '';
  $button_text = get_field('hero_button') ?? '';
  ?>

  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="main__title hero__title"><?php echo $title ?></h1>
        <p class="hero__text"><?= $subtitle ?></p>
        <div class="button hero__button button--contacts">
          <span><?= $button_text ?></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" fill="none">
            <circle cx="11.5" cy="12" r="11.5" fill="#368B3C" />
            <path stroke="#fff" d="M6.838 11.69h9.013M12.432 7.96l3.73 3.73-3.73 3.729" />
          </svg>
        </div>
      </div>
    </div>
  </section>