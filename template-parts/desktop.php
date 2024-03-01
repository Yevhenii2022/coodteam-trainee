<section class="desktop">
  <div class="container container--left">
    <div class="desktop__wrapper">

      <?php
      $title = get_field('desktop_title', 'options');
      ?>
      <?php if ($title) : ?>
        <h2 class="desktop__title section__title section__title--black"><?= $title; ?></h2>
      <?php endif; ?>

      <div class="desktop__slider swiper ">
        <div class="swiper-wrapper">

          <?php
          // $gallery = get_field('gallery_mobile');
          $gallery = get_field('gallery');
          $mobile =  $gallery['mobile'];
          // var_dump($gallery);
          // while (have_rows($mobile)) : the_row();
          // $image = get_sub_field('mobile');
          foreach ($mobile as $image) {
            echo wp_get_attachment_image($image, "full", '', ['alt' => 'image']);
          }
          ?>



        </div>
      </div>
      <div class="desktop__swiper-pagination"></div>

    </div>
  </div>
</section>