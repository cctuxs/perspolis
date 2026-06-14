/* ============================================
  RESTAURANTE PERSÉPOLIS — Main JavaScript
  Handles: Nav toggle, hero margin, scroll shadow
  ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  const nav = document.getElementById('myTopnav');
  const hero = document.getElementById('heroSection');

  // ── Set hero margin = navbar height ───────
  function setHeroMargin() {
    if (nav && hero) {
      hero.style.marginTop = nav.offsetHeight + 'px';
    }
  }
  setHeroMargin();
  window.addEventListener('resize', function () {
    setHeroMargin();
  });

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  const scrollThreshold = 20;

  // ── Scroll: hide header on scroll down, show on scroll up, deepen nav shadow ─────────────
  window.addEventListener('scroll', function () {
    var currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (!nav) { return; }

    if (currentScrollY > lastScrollY + scrollThreshold) {
      nav.classList.add('hidden');
      nav.classList.remove('shrink');
    } else if (currentScrollY < lastScrollY - scrollThreshold) {
      nav.classList.remove('hidden');
      nav.classList.add('shrink');
    }

    nav.style.boxShadow = currentScrollY > 10
      ? '0 2px 14px rgba(0,0,0,0.14)'
      : '0 1px 4px rgba(0,0,0,0.08)';

    lastScrollY = currentScrollY;
    setHeroMargin();
  });

  // ── Highlight active nav link ──────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (nav) {
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href !== '#' && page === href) {
        a.classList.add('active');
      }
    });
  }

  // ── Language switching ────────────────────
  const translations = {
    en: {
      nav: { home: 'HOME', menu: 'MENU', about: 'ABOUT', contact: 'CONTACT', book: 'BOOK A TABLE' },
      hero: {
        badge: '&#10022; Spain · València',
        title: 'Authentic Persian Flavors',
        sub: 'Discover warm hospitality and authentic, saffron-infused Persian dishes in the heart of València.',
        box1: 'IT\'S ALWAYS<br>MORE THAN<br>GOOD FOOD',
        scroll: 'SCROLL'
      },
      index: {
        big_text: 'OUR MENU',
        about_text: 'From traditional kebabs to slow-simmered khoresh stews, our menu celebrates authentic Persian cuisine using time-honoured recipes and the finest ingredients. Enjoy a premium Persian dining experience in València, with saffron-infused rice and dishes crafted for memorable hospitality.',
        explore: 'EXPLORE MENU',
        box2: 'At Restaurante Persépolis, every meal is an experience. We welcome you with genuine hospitality and dishes rooted in Persian tradition — from fragrant saffron rice to char-grilled kebabs. Come as a guest, leave as family.',
        about_link: 'ABOUT US',
        moments: 'RESTAURANTE PERSÉPOLIS MOMENTS',
        follow: 'FOLLOW US ON INSTAGRAM'
      },
      menu: {
        title: 'MENU',
        section: {
          starters: 'Starters & Soups',
          kebabs: 'Traditional Kebabs',
          stews: 'Persian Stews (Khoresh)',
          rice: 'Rice Specialties',
          desserts: 'Desserts & Drinks'
        }
      },
      booking: {
        title: 'BOOK A TABLE',
        party_size: 'Party Size',
        date: 'Date',
        time: 'Time',
        choose_slot: 'Choose an available time slot:',
        book_now: 'BOOK NOW',
        popup_title: 'Online reservations are<br>currently unavailable',
        popup_text: 'To make a reservation, contact us directly by phone at<br><strong>+34 671 85 12 66</strong>',
        close: 'CLOSE'
      },
      about: {
        heading: 'ABOUT',
        paragraph1: 'Restaurante Persépolis is an authentic Persian restaurant located in the heart of València. We celebrate traditional Iranian heritage with saffron-infused rice, Chelo Kebab, and Ghormeh Sabzi, all prepared with care and premium ingredients. Our chefs focus on balance, aroma, and tradition, honoring recipes passed down through generations.',
        paragraph2: 'We are committed to warm hospitality — a table where family-style sharing and attentive service make every visit memorable. Join us to experience Persian flavors crafted with respect for heritage and a welcoming Valencian spirit.',
        contact_heading: 'CONTACT',
        book_link: 'BOOK A TABLE'
      },
      footer: {
        contact_hours: 'A: Carrer del Mestre Clavé, 12, 46001 València, Spain<br>T: +34 671 85 12 66<br>E: info@restaurantepersépolis.com<br><br>Tue–Sun: 1:00 PM – 5:00 PM, 7:30 PM – 11:00 PM (Monday: Closed)'
      }
    },
    es: {
      nav: { home: 'INICIO', menu: 'MENÚ', about: 'SOBRE NOSOTROS', contact: 'CONTACTO', book: 'RESERVAR' },
      hero: {
        badge: '&#10022; España · València',
        title: 'Sabores persas auténticos',
        sub: 'Descubre una hospitalidad cálida y platos auténticos infusionados con azafrán en el corazón de València.',
        box1: 'SIEMPRE ES<br>MÁS QUE<br>BUENA COMIDA',
        scroll: 'DESPLAZAR'
      },
      index: {
        big_text: 'NUESTRO MENÚ',
        about_text: 'Desde kebabs tradicionales hasta guisos khoresh cocinados lentamente, nuestro menú celebra la auténtica cocina persa con recetas consagradas y los mejores ingredientes. Disfruta de una experiencia persa premium en València, con arroz infusionado con azafrán y platos creados para una hospitalidad memorable.',
        explore: 'EXPLORAR MENÚ',
        box2: 'En Restaurante Persépolis, cada comida es una experiencia. Te damos la bienvenida con hospitalidad genuina y platos arraigados en la tradición persa — desde arroz fragante con azafrán hasta kebabs a la parrilla. Ven como invitado, vete como familia.',
        about_link: 'SOBRE NOSOTROS',
        moments: 'MOMENTOS DE RESTAURANTE PERSÉPOLIS',
        follow: 'SÍGUENOS EN INSTAGRAM'
      },
      menu: {
        title: 'MENÚ',
        section: {
          starters: 'Entrantes y sopas',
          kebabs: 'Kebabs tradicionales',
          stews: 'Guisos persas (Khoresh)',
          rice: 'Especialidades de arroz',
          desserts: 'Postres y bebidas'
        }
      },
      booking: {
        title: 'RESERVAR UNA MESA',
        party_size: 'Tamaño del grupo',
        date: 'Fecha',
        time: 'Hora',
        choose_slot: 'Elige una franja horaria disponible:',
        book_now: 'RESERVAR AHORA',
        popup_title: 'Las reservas en línea no están disponibles actualmente',
        popup_text: 'Para hacer una reserva, contáctanos directamente por teléfono al<br><strong>+34 671 85 12 66</strong>',
        close: 'CERRAR'
      },
      about: {
        heading: 'SOBRE NOSOTROS',
        paragraph1: 'Restaurante Persépolis es un auténtico restaurante persa ubicado en el corazón de València. Celebramos la herencia tradicional iraní con arroz infusionado con azafrán, Chelo Kebab y Ghormeh Sabzi, todo preparado con cuidado e ingredientes premium. Nuestros chefs se centran en el equilibrio, el aroma y la tradición, honrando recetas transmitidas de generación en generación.',
        paragraph2: 'Estamos comprometidos con una hospitalidad cálida — una mesa donde compartir al estilo familiar y un servicio atento hacen que cada visita sea memorable. Únete a nosotros para experimentar sabores persas elaborados con respeto por la herencia y un espíritu valenciano acogedor.',
        contact_heading: 'CONTACTO',
        book_link: 'RESERVAR UNA MESA'
      },
      footer: {
        contact_hours: 'A: Carrer del Mestre Clavé, 12, 46001 València, Spain<br>T: +34 671 85 12 66<br>E: info@restaurantepersépolis.com<br><br>Mar–Dom: 13:00 – 17:00, 19:30 – 23:00 (Lunes: Cerrado)'
      }
    },
  };

  function getTranslation(key, lang) {
    var value = translations[lang] || translations.en;
    key.split('.').forEach(function (part) {
      if (value && value.hasOwnProperty(part)) {
        value = value[part];
      } else {
        value = undefined;
      }
    });
    return value;
  }

  function translatePage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.dataset.i18n;
      var translated = getTranslation(key, lang);
      if (translated !== undefined) {
        element.innerHTML = translated;
      }
    });
  }

  const languageSelect = document.getElementById('langSelect');
  if (languageSelect) {
    const savedLang = localStorage.getItem('siteLanguage');
    const activeLang = savedLang && translations[savedLang] ? savedLang : 'en';
    languageSelect.value = activeLang;
    translatePage(activeLang);

    languageSelect.addEventListener('change', function () {
      localStorage.setItem('siteLanguage', this.value);
      translatePage(this.value);
    });
  }

  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let testimonialIndex = 0;

  function showTestimonial(index) {
    testimonialSlides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === index);
    });
    testimonialDots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === index);
    });
    testimonialIndex = index;
  }

  if (testimonialSlides.length > 0) {
    testimonialDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        showTestimonial(i);
      });
    });

    setInterval(function () {
      showTestimonial((testimonialIndex + 1) % testimonialSlides.length);
    }, 7000);
  }

});
