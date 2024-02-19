<?php
$title = get_field('form_title', 'options');
?>

<div class="popup">
  <div class="container">
    <div class="popup__wrapper">

      <div class="popup__header">
        <div class="popup__icon-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 27">
            <path fill="#101010" d="m28.954 8.25-2.767-5.04C27.352 2.167 28.8 1.349 30.395.778c8.076-2.886 16.89 2.58 17.876 11.087.847 7.305-4.14 13.844-11.428 14.98-7.382 1.149-14.485-4.236-15.328-11.631-.14-1.22-.099-2.474-.366-3.66-.879-3.902-4.62-6.374-8.765-5.899-3.723.427-6.74 3.83-6.783 7.651-.039 3.35 1.852 6.252 4.896 7.522 2.96 1.233 6.369.519 8.693-1.824.095-.097.167-.216.292-.38.444.946.804 1.822 1.255 2.646.45.818.992 1.584 1.56 2.479-.593.417-1.197.902-1.855 1.294-8.142 4.86-18.51.144-20.225-9.19-1.4-7.64 4.168-15.03 11.877-15.76 7.149-.677 13.346 3.952 14.673 11.016.214 1.143.161 2.335.297 3.497.454 3.893 3.928 6.849 7.973 6.813 3.861-.035 7.3-3.136 7.703-6.948.372-3.526-1.468-6.799-4.616-8.208-3.159-1.413-6.757-.638-9.144 1.97-.025.029-.066.041-.025.018Z" />
          </svg>
        </div>
        <div class="popup--close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
            <circle cx="22.5" cy="22.5" r="22" />
            <path d="M28.157 17.343 16.843 28.657M28.157 28.657 16.843 17.343" />
          </svg>
        </div>
      </div>

      <div class="popup__content">
        <div class="popup__form">
          <h2 class="popup__title section__title"><?= $title ?></h2>
          <?php get_template_part('template-parts/form'); ?>
        </div>
        <div class="popup__contacts">
          <?php while (have_rows('contacts_list', 'options')) : the_row();
            $image = get_sub_field('contacts_icon');
            $link = get_sub_field('contacts_icon_link') ?? '';
            $name = get_sub_field('contacts_name') ?? '';
            $file_path = get_attached_file($image);
            $svg_content = file_get_contents($file_path);
          ?>
            <?php if ($link) : ?>
              <a href="<?= $link; ?>" target="_blank">
              <?php endif; ?>
              <?php if ($svg_content !== false) {
                echo $svg_content;
              } ?>
              <?php if ($name) : ?>
                <span><?= $name; ?></span>
              <?php endif; ?>
              </a>
            <?php endwhile; ?>

        </div>
      </div>
    </div>
  </div>
</div>