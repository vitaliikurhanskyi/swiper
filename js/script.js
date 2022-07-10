const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    // clickable: true,
    // dynamicBullets: true,
    // // Custom Bullets
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    type: 'fraction',
    // Custom Fraction
    renderFraction: function (currentClass, totalClass) {
      return 'Photo <span class="' + currentClass + '"></snan>' + ' of ' + '<span class="' + totalClass + '"></span>';
    },

    //type: 'progressbar'

  },

  // Scroll
  scrollbar: {
    el: '.swiper-scrollbar',
    // ability to drag scroll
    draggable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Перетаскивание на PC
  simulateTouch: true,
  // Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаскивания,
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true, 
  // Переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
    watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
    // Включить/выключить
    enabled: true,
    // Включить/выключить
    // только когда слайдер
    // в пределах вьюпорта
    onlyInViewport: true,
    // Включить/выключить
    // управления клавишами
    // pageUp, pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // чуствительность колеса мыши
    sensitiovity: 1,
    // Класс обьекта на котором
    // будет срабатывать прокрутка мишью.
    eventsTarget: ".image-slider",
  },

  // Плавная автовысота
  //autoHeight: true,

  // Количество слайдов для показа
  slidesPerView: 1,

});