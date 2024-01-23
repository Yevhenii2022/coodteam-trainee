<?php
/*
Template Name: Головна сторінка
*/

get_header();
?>
<main>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="hero__title">Розробка конверсійних сайтів під ключ</h1>
        <p class="hero__text">
          COOD — стратегічний партнер по розробці програмного забезпечення
        </p>
        <div class="hero--size">
          <a class="button hero__button" href="#">
            <span>Зв’язатись з нами</span>
            <svg>
              <path d="M.838 4.69H9.85M6.432.96l3.73 3.73-3.73 3.729" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio">
    <div class="container">
      <h2 class="section-title">Наше портфоліо</h2>

      <div class="portfolio__slider swiper ">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <a href="#" class="portfolio__link">
              <div class="portfolio__link--border">
                <img class="portfolio__image" src="wp-content/themes/pointer-theme/assets/images/portfolio/portfolio-img-1.webp" alt="portfolio__image">
              </div>
              <div class="portfolio__description">
                <div>
                  <h3 class="portfolio__name">
                    Lesgroup
                  </h3>
                  <p class="portfolio__excerpt">
                    Постачальник палива
                  </p>
                </div>
                <svg fill="none">
                  <circle cx="22" cy="21.5" r="21.5" fill="#fff" />
                  <path stroke="#368B3C" d="M13.284 20.919h16.851M23.743 13.946l6.973 6.973-6.973 6.973" />
                </svg>
              </div>
            </a>
          </div>

          <div class="swiper-slide">
            <a href="#" class="portfolio__link">
              <div class="portfolio__link--border">
                <img class="portfolio__image" src="wp-content/themes/pointer-theme/assets/images/portfolio/portfolio-img-2.webp" alt="portfolio__image">
              </div>
              <div class="portfolio__description">
                <div>
                  <h3 class="portfolio__name">
                    Donum
                  </h3>
                  <p class="portfolio__excerpt">
                    Магазин подарункових сертифікатів
                  </p>
                </div>
                <svg fill="none">
                  <circle cx="22" cy="21.5" r="21.5" fill="#fff" />
                  <path stroke="#368B3C" d="M13.284 20.919h16.851M23.743 13.946l6.973 6.973-6.973 6.973" />
                </svg>
              </div>
            </a>
          </div>

          <div class="swiper-slide">
            <a href="#" class="portfolio__link">
              <div class="portfolio__link--border">
                <img class="portfolio__image" src="wp-content/themes/pointer-theme/assets/images/portfolio/portfolio-img-3.webp" alt="portfolio__image">
              </div>
              <div class="portfolio__description">
                <div>
                  <h3 class="portfolio__name">
                    Dbuy
                  </h3>
                  <p class="portfolio__excerpt">
                    Імпортер кліматичного обладнання
                  </p>
                </div>
                <svg fill="none">
                  <circle cx="22" cy="21.5" r="21.5" fill="#fff" />
                  <path stroke="#368B3C" d="M13.284 20.919h16.851M23.743 13.946l6.973 6.973-6.973 6.973" />
                </svg>
              </div>
            </a>
          </div>

          <div class="swiper-slide">
            <a href="#" class="portfolio__link">
              <div class="portfolio__link--border">
                <img class="portfolio__image" src="wp-content/themes/pointer-theme/assets/images/portfolio/portfolio-img-2.webp" alt="portfolio__image">
              </div>
              <div class="portfolio__description">
                <div>
                  <h3 class="portfolio__name">
                    Donum
                  </h3>
                  <p class="portfolio__excerpt">
                    Магазин подарункових сертифікатів
                  </p>
                </div>
                <svg fill="none">
                  <circle cx="22" cy="21.5" r="21.5" fill="#fff" />
                  <path stroke="#368B3C" d="M13.284 20.919h16.851M23.743 13.946l6.973 6.973-6.973 6.973" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </div>
      <!-- <div class="clients__swiper-pagination"></div> -->

    </div>
  </section>

  <section class="clients">
    <div class="container">
      <h2 class="section-title">Що про нас кажуть клієнти</h2>

      <div class="clients__slider swiper ">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="clients__image" src="wp-content/themes/pointer-theme/assets/images/clients/clients-img-1.webp" alt="clients__image">
          </div>
          <div class="swiper-slide">
            <img class="clients__image" src="wp-content/themes/pointer-theme/assets/images/clients/clients-img-2.webp" alt="clients__image">
          </div>
          <div class="swiper-slide">
            <img class="clients__image" src="wp-content/themes/pointer-theme/assets/images/clients/clients-img-3.webp" alt="clients__image">
          </div>
          <div class="swiper-slide">
            <img class="clients__image" src="wp-content/themes/pointer-theme/assets/images/clients/clients-img-4.webp" alt="clients__image">
          </div>
          <div class="swiper-slide">
            <img class="clients__image" src="wp-content/themes/pointer-theme/assets/images/clients/clients-img-2.webp" alt="clients__image">
          </div>
        </div>
      </div>
      <div class="clients__swiper-pagination"></div>

    </div>
  </section>

  <section class="about">
    <div class="container">
      <h2 class="section-title">Читайте про нас</h2>
      <div class="about__wrapper">
        <svg width="64" height="40">
          <path d="M48.816.088a14.228 14.228 0 0 1 10.316 4.328 14.543 14.543 0 0 1 3.11 4.846 14.686 14.686 0 0 1 1.001 5.69 14.668 14.668 0 0 1-.964 5.725 14.523 14.523 0 0 1-3.097 4.88 14.29 14.29 0 0 1-4.736 3.25 14.073 14.073 0 0 1-5.613 1.103h-.6a14.78 14.78 0 0 1-1.921-.198 14.49 14.49 0 0 1-5.374-2.09c-.21-.135-.418-.273-.625-.413a23.908 23.908 0 0 1-1.196-.896 16.092 16.092 0 0 1-.576-.483L36.27 40h-6.554l3.453-20a45.737 45.737 0 0 1-2.062-3.377 44.688 44.688 0 0 1-1.772-3.542 45.343 45.343 0 0 1-1.465-3.685 46.552 46.552 0 0 1-1.151-3.798v9.552c0 8.678-5.444 14.743-13.214 14.743-.91.025-1.822-.05-2.72-.223a12.934 12.934 0 0 1-2.608-.808 12.727 12.727 0 0 1-4.434-3.175 15.318 15.318 0 0 1-1.664-2.356 15.537 15.537 0 0 1-1.892-5.447 15.726 15.726 0 0 1-.161-2.893V.858h6.45v14.133c0 5.152 2.554 8.946 7.045 8.946 4.496 0 6.785-3.81 6.785-8.946V.858h11.223c.188.867.4 1.727.638 2.583.237.855.497 1.703.778 2.544a47.19 47.19 0 0 0 1.987 4.926 13.918 13.918 0 0 1 5.013-8.004 13.623 13.623 0 0 1 4.207-2.23 13.489 13.489 0 0 1 4.698-.643m0 23.865c4.475 0 7.998-3.58 7.998-8.946 0-5.367-3.452-8.942-7.998-8.942-4.545 0-7.981 2.97-9.161 12.521.488.79 1.068 1.518 1.726 2.17.658.652 1.387 1.22 2.182 1.695.79.476 1.635.854 2.513 1.124.881.269 1.788.433 2.707.488l.033-.11Z" clip-rule="evenodd" />
        </svg>

        <svg width="50" height="50">
          <g>
            <path d="M1.261 16.849h9.746v30.878H1.26V16.85Zm4.625-3.862h-.071C2.287 12.987 0 10.627 0 7.634c0-3.05 2.355-5.361 5.953-5.361 3.595 0 5.806 2.305 5.877 5.352 0 2.992-2.282 5.362-5.944 5.362ZM50 47.727H38.95V31.748c0-4.182-1.73-7.038-5.53-7.038-2.908 0-4.525 1.927-5.277 3.784-.283.666-.239 1.595-.239 2.523v16.71H16.957s.14-28.305 0-30.878h10.947v4.846c.647-2.12 4.145-5.143 9.728-5.143C44.558 16.552 50 20.993 50 30.558v17.17Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath>
              <path d="M0 0h50v50H0z" />
            </clipPath>
          </defs>
        </svg>

        <div class="about__wrapper-item">
          <svg>
            <g>
              <path d="M25 0C11.204 0 0 11.204 0 25s11.204 25 25 25 25-11.204 25-25S38.796 0 25 0Zm0 43.889C14.537 43.889 6.019 35.462 6.019 25A19.012 19.012 0 0 1 25 6.019 19.012 19.012 0 0 1 43.981 25C43.89 35.462 35.462 43.889 25 43.889Z" />
              <path d="M21.945 28.611c1.759 1.574 4.352 1.574 6.019 0V21.39c-1.759-1.574-4.352-1.574-6.019 0v7.222Zm3.056-16.481c-3.426 0-6.666 1.389-9.073 3.796l4.258 4.259a6.761 6.761 0 0 1 9.63 0l4.26-4.259C31.667 13.52 28.427 12.13 25 12.13Z" />
              <path d="M29.815 29.815a6.762 6.762 0 0 1-9.63 0l-4.259 4.259c5 5 13.149 5 18.149 0l-4.259-4.26h-.001ZM24.995 50c.185-2.963-1.574-5.649-4.445-6.574-7.408-1.852-12.963-7.87-14.166-15.37h12.592c-1.018-1.945-1.018-4.166 0-6.019H6.384a18.907 18.907 0 0 1 21.575-15.74 18.538 18.538 0 0 1 6.851 2.5c2.593 1.573 6.019.925 7.87-1.482-9.722-9.723-25.555-9.723-35.37 0-9.815 9.722-9.815 25.555 0 35.37C12.033 47.315 18.329 50 24.995 50Z" />
            </g>
            <defs>
              <clipPath>
                <path d="M0 0h50v50H0z" />
              </clipPath>
            </defs>
          </svg>
          <svg>
            <g>
              <path fill="#DCDCDC" d="M30.442 0c-16.556 0-30 13.444-30 30 0 16.556 13.444 30 30 30 16.555 0 30-13.444 30-30 0-16.556-13.445-30-30-30Zm0 52.666C17.887 52.666 7.664 42.555 7.664 30A22.815 22.815 0 0 1 30.442 7.223 22.815 22.815 0 0 1 53.219 30c-.11 12.555-10.222 22.666-22.777 22.666Z" />
              <g fill="#F7AD1A">
                <path d="M26.776 34.333c2.11 1.889 5.221 1.889 7.222 0v-8.667c-2.11-1.888-5.223-1.888-7.222 0v8.667Zm3.667-19.777c-4.111 0-8 1.666-10.888 4.555l5.11 5.11a8.115 8.115 0 0 1 11.556 0l5.11-5.11c-2.888-2.889-6.776-4.555-10.888-4.555Z" />
                <path d="M36.22 35.778a8.115 8.115 0 0 1-11.556 0l-5.11 5.11c6 6 15.778 6 21.778 0l-5.11-5.11h-.002ZM30.436 60c.222-3.555-1.889-6.779-5.334-7.889-8.89-2.223-15.555-9.444-17-18.444h15.111c-1.222-2.334-1.222-5 0-7.222H8.103a22.689 22.689 0 0 1 25.89-18.89 22.245 22.245 0 0 1 8.22 3c3.112 1.889 7.223 1.112 9.445-1.777C39.99-2.89 20.992-2.89 9.214 8.778c-11.778 11.667-11.778 30.666 0 42.444C14.88 56.778 22.436 60 30.436 60Z" />
              </g>
            </g>
            <defs>
              <clipPath>
                <path d="M.442 0h60v60h-60z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <svg width="50" height="50">
          <defs>
            <linearGradient id="gradient-insta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgb(254,178,0)" />
              <stop offset="61%" style="stop-color:rgb(216,17,151)" />
              <stop offset="100%" style="stop-color:rgb(117,52,252)" />
            </linearGradient>
          </defs>
          <g>
            <path d="M41.345 11.655a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM25 33.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 0 1 0 16.666Zm0-21.17c-7.09 0-12.838 5.747-12.838 12.837S17.91 37.838 25 37.838c7.09 0 12.838-5.748 12.838-12.838 0-7.09-5.748-12.838-12.838-12.838Zm0-7.658c6.675 0 7.466.025 10.102.145 2.438.112 3.761.519 4.642.861 1.167.454 2 .996 2.875 1.87.875.875 1.416 1.708 1.87 2.875.342.881.75 2.205.861 4.642.12 2.637.146 3.427.146 10.103 0 6.675-.026 7.466-.146 10.102-.111 2.437-.518 3.761-.86 4.642-.455 1.167-.996 2-1.871 2.875s-1.708 1.416-2.875 1.87c-.88.342-2.205.75-4.642.86-2.636.121-3.427.146-10.102.146-6.676 0-7.466-.025-10.102-.145-2.438-.111-3.762-.519-4.643-.861-1.166-.454-2-.995-2.874-1.87-.875-.875-1.417-1.708-1.87-2.875-.343-.88-.75-2.205-.861-4.642-.12-2.637-.146-3.427-.146-10.102 0-6.676.025-7.466.146-10.103.11-2.437.518-3.76.86-4.642.454-1.167.996-2 1.87-2.874.875-.875 1.708-1.417 2.875-1.87.881-.343 2.205-.75 4.643-.862 2.636-.12 3.427-.145 10.102-.145ZM25 0c-6.79 0-7.641.029-10.307.15-2.661.122-4.479.545-6.069 1.163-1.644.638-3.038 1.493-4.428 2.883-1.39 1.39-2.245 2.784-2.883 4.428C.695 10.214.272 12.032.15 14.693.03 17.359 0 18.21 0 25c0 6.79.029 7.641.15 10.307.122 2.661.545 4.478 1.163 6.069.638 1.644 1.493 3.038 2.883 4.428 1.39 1.39 2.784 2.244 4.428 2.883 1.59.619 3.408 1.041 6.069 1.163C17.359 49.97 18.21 50 25 50c6.79 0 7.641-.029 10.307-.15 2.661-.122 4.478-.544 6.069-1.163 1.644-.639 3.038-1.493 4.428-2.883 1.39-1.39 2.244-2.784 2.883-4.428.619-1.59 1.041-3.408 1.163-6.069C49.97 32.641 50 31.79 50 25c0-6.79-.029-7.641-.15-10.307-.122-2.661-.544-4.479-1.163-6.069-.639-1.644-1.493-3.038-2.883-4.428-1.39-1.39-2.784-2.244-4.428-2.883C39.786.695 37.968.272 35.307.15 32.641.03 31.79 0 25 0Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath>
              <path d="M0 0h50v50H0z" />
            </clipPath>
          </defs>
        </svg>

        <svg width="64" height="40">
          <g>
            <path d="M29.363 4.158c1.207 1.66 1.813 3.642 1.813 5.955 0 2.379-.606 4.299-1.829 5.746-.685.81-1.69 1.551-3.018 2.22 2.017.727 3.537 1.874 4.572 3.445 1.023 1.566 1.539 3.474 1.539 5.717 0 2.313-.587 4.388-1.765 6.222a10.844 10.844 0 0 1-2.8 3.07c-1.26.954-2.747 1.603-4.466 1.96-1.72.352-3.578.523-5.588.523H0V0h19.112c4.824.07 8.237 1.455 10.25 4.158ZM7.883 6.775v8.609h9.619c1.712 0 3.108-.323 4.184-.969 1.069-.646 1.607-1.79 1.607-3.422 0-1.823-.707-3.022-2.122-3.609-1.227-.405-2.785-.609-4.678-.609h-8.61Zm0 15.065v10.405h9.604c1.716 0 3.055-.23 4.007-.687 1.735-.854 2.6-2.473 2.6-4.87 0-2.035-.835-3.427-2.518-4.188-.94-.423-2.261-.646-3.954-.661H7.883ZM56.35 10.75c2.044.899 3.725 2.324 5.05 4.269 1.208 1.715 1.983 3.705 2.337 5.965.207 1.322.29 3.238.256 5.729h-21.31c.128 2.892 1.136 4.922 3.063 6.084 1.166.724 2.57 1.087 4.218 1.087 1.735 0 3.154-.441 4.242-1.321.598-.479 1.124-1.14 1.576-1.986h7.808c-.207 1.707-1.155 3.448-2.834 5.216C58.139 38.597 54.469 40 49.755 40c-3.895 0-7.33-1.18-10.3-3.549-2.983-2.364-4.466-6.218-4.466-11.549 0-5 1.343-8.835 4.026-11.505 2.691-2.661 6.171-4.002 10.457-4.002 2.548.001 4.84.454 6.879 1.356ZM44.91 17.27c-1.08 1.099-1.76 2.587-2.039 4.465h13.181c-.139-2.004-.824-3.519-2.035-4.562-1.227-1.035-2.736-1.551-4.543-1.551-1.955 0-3.483.549-4.563 1.648ZM40.896 6.675h16.948V1.819H40.895v4.856Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath>
              <path d="M0 0h64v40H0z" />
            </clipPath>
          </defs>
        </svg>

        <svg width="50" height="50">
          <g>
            <path d="M25 50C11.214 50 0 38.783 0 24.998 0 11.216 11.214 0 25 0c13.784 0 25 11.216 25 24.998C50 38.783 38.784 50 25 50Zm21.083-21.578c-.73-.233-6.608-1.985-13.302-.913 2.794 7.672 3.931 13.924 4.147 15.225 4.792-3.239 8.203-8.37 9.155-14.312Zm-12.74 16.267c-.32-1.873-1.56-8.403-4.557-16.192l-.142.048C16.602 32.741 12.277 41.094 11.892 41.88A21.246 21.246 0 0 0 25 46.388c2.956 0 5.777-.605 8.342-1.699ZM9.135 39.311c.484-.828 6.344-10.533 17.358-14.092.276-.094.558-.175.839-.255a69.627 69.627 0 0 0-1.731-3.623C14.939 24.53 4.59 24.4 3.658 24.38c-.006.218-.013.433-.013.653a21.27 21.27 0 0 0 5.49 14.278Zm-5.04-18.653c.954.014 9.752.053 19.741-2.6C20.3 11.768 16.484 6.48 15.92 5.709 9.947 8.525 5.481 14.031 4.097 20.658Zm15.9-16.388c.59.79 4.468 6.075 7.966 12.5 7.596-2.843 10.81-7.165 11.194-7.712A21.276 21.276 0 0 0 25 3.678c-1.725 0-3.4.205-5.005.592Zm21.532 7.258c-.45.61-4.028 5.195-11.923 8.42a67.29 67.29 0 0 1 1.876 4.196c7.105-.894 14.164.539 14.87.684a21.26 21.26 0 0 0-4.823-13.3Z" />
          </g>
          <defs>
            <clipPath>
              <path d="M0 0h50v50H0z" />
            </clipPath>
          </defs>
        </svg>

        <svg width="45" height="50">
          <g>
            <path d="M-96.0903 -21.6733H-84.6226V50H-96.0903V-21.6733ZM-44.4855 27.1362C-44.4855 38.1051 -53.7084 38.9795 -56.4521 38.9795C-63.3069 38.9795 -64.554 32.5633 -64.554 28.693V1.26214H-76.0218V28.6356C-76.0218 35.4303 -73.8888 41.038 -70.1503 44.7765C-66.8476 48.0821 -61.8993 49.8882 -56.5381 49.8882C-52.7365 49.8882 -47.3524 48.7042 -44.4855 46.0867V50H-33.0177V1.26214H-44.4855V27.1362ZM-10.0823 -15.9395H-21.55V1.26214H-30.1508V12.7299H-21.55V50H-10.0823V12.7299H-1.48146V1.26214H-10.0823V-15.9395ZM34.6333 35.4274C32.1362 37.6722 28.8393 38.9165 25.2212 38.9165C17.2454 38.9165 11.3882 33.0593 11.3882 25.0176C11.3882 16.9758 17.059 11.3652 25.2212 11.3652C28.7762 11.3652 32.1362 12.5493 34.6964 14.7941L36.4366 16.2906L44.1687 8.56136L42.2336 6.8154C37.6837 2.70708 31.6431 0.402063 25.2183 0.402063C10.8836 0.402063 0.473785 10.746 0.473785 24.9574C0.473785 39.1086 11.1331 49.8223 25.2183 49.8223C31.7635 49.8223 37.8672 47.5173 42.3597 43.343L44.229 41.5971L36.3764 33.8735L34.6333 35.4274ZM85.1 5.51094C81.7973 2.20823 77.9269 0.402063 72.5658 0.402063C68.7642 0.402063 64.4581 1.58611 61.5911 4.20075V-21.6733H50.1234V50H61.5911V23.1512C61.5911 11.1823 69.3835 11.3108 72.1271 11.3108C78.982 11.3108 78.7927 17.7298 78.7927 21.5945V50H90.2605V21.6547C90.2605 14.86 88.8413 9.25229 85.1 5.51094Z" />

            <svg width="18" height="18" x="35%" y="32%">
              <path d="M8.84293 0.852539C11.0419 0.852539 13.1508 1.72607 14.7057 3.28097C16.2606 4.83587 17.1341 6.94476 17.1341 9.14372C17.1341 11.3427 16.2606 13.4516 14.7057 15.0065C13.1508 16.5614 11.0419 17.4349 8.84293 17.4349C6.64397 17.4349 4.53508 16.5614 2.98018 15.0065C1.42529 13.4516 0.551758 11.3427 0.551758 9.14372C0.551758 6.94476 1.42529 4.83587 2.98018 3.28097C4.53508 1.72607 6.64397 0.852539 8.84293 0.852539Z" />
            </svg>
          </g>
          <defs>
            <clipPath>
              <rect width="44.5564" height="50" />
            </clipPath>
          </defs>
        </svg>

        <svg width="74" height="40">
          <g>
            <path d="M56.406 0 43.827 39.497h-8.553L28.48 14.088l-6.792 25.66h-8.554L.557.252h9.811l7.044 27.17L24.204.251h9.057l6.792 27.17L47.097.251 56.406 0ZM67.224 26.918c3.773 0 6.54 2.768 6.54 6.541 0 3.774-2.767 6.541-6.54 6.541-3.774 0-6.541-2.767-6.541-6.54 0-3.774 2.767-6.542 6.54-6.542Z" />
          </g>
          <defs>
            <clipPath>
              <path d="M.557 0h73.208v40H.557z" />
            </clipPath>
          </defs>
        </svg>

      </div>
    </div>
  </section>

</main>
<?php get_footer(); ?>