/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
$(function () {
  "use strict";

  const options = {
    containers: ["#swup", "#swupMenu"],
    animateHistoryBrowsing: true,
    linkSelector: 'a:not([data-no-swup]):not([href^="#"]):not([href=""])',
  };
  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#scrollbar"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector("#scrollbar2"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function () {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) {},
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        $(".art-preloader").css("display", "none");
      },
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: "easeInOut",
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(1);

  // counters
  anime({
    targets: ".art-counter-frame",
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: "linear",
  });

  anime({
    targets: ".art-counter",
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $(".art-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.85);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.75);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.50);

  var bar = new ProgressBar.Circle(circleprog4, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.65);

  var bar = new ProgressBar.Circle(circleprog5, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.80);

  // var bar = new ProgressBar.Circle(circleprog6, {
  //   strokeWidth: 7,
  //   easing: "easeInOut",
  //   duration: 1400,
  //   delay: 3000,
  //   trailWidth: 7,
  //   step: function (state, circle) {
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText("");
  //     } else {
  //       circle.setText(value);
  //     }
  //   },
  // });

  // bar.animate(0.8);


  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.83);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3000,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3100,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.84);

  // var bar = new ProgressBar.Line(lineprog5, {
  //   strokeWidth: 1.72,
  //   easing: "easeInOut",
  //   duration: 1400,
  //   delay: 3200,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: "100%",
  //     height: "100%",
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + " %");
  //   },
  // });

  // bar.animate(0.9);

  // Contact form
  $(".art-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("art-active");
    } else {
      $(this).removeClass("art-active");
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });

  // portfolio filter
  $(".art-filter a").on("click", function () {
    $(".art-filter .art-current").removeClass("art-current");
    $(this).addClass("art-current");

    var selector = $(this).data("filter");
    $(".art-grid").isotope({
      filter: selector,
    });
    return false;
  });

  // masonry Grid
  $(".art-grid").isotope({
    filter: "*",
    itemSelector: ".art-grid-item",
    transitionDuration: ".6s",
  });

  // slider testimonials
  var swiper = new Swiper(".art-testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper(".art-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper(".art-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "close"],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $.fancybox.defaults.hash = false;

  $(".current-menu-item a").clone().appendTo(".art-current-page");

  $(".art-map-overlay").on("click", function () {
    $(this).addClass("art-active");
  });

  $(".art-info-bar-btn").on("click", function () {
    $(".art-info-bar").toggleClass("art-active");
    $(".art-menu-bar-btn").toggleClass("art-disabled");
  });

  $(".art-menu-bar-btn").on("click", function () {
    $(".art-menu-bar-btn , .art-menu-bar").toggleClass("art-active");
    $(".art-info-bar-btn").toggleClass("art-disabled");
  });

  $(".art-info-bar-btn , .art-menu-bar-btn").on("click", function () {
    $(".art-content").toggleClass("art-active");
  });

  $(".art-curtain , .art-mobile-top-bar").on("click", function () {
    $(
      ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
    ).removeClass("art-active , art-disabled");
  });

  $(".menu-item").on("click", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(this).children(".sub-menu").toggleClass("art-active");
    } else {
      $(
        ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
      ).removeClass("art-active , art-disabled");
    }
  });

  //redirect
  


  // reinit
  document.addEventListener("swup:contentReplaced", function () {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector("#scrollbar"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector("#scrollbar2"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
      }).done(function () {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: ".art-submit",
          opacity: 0,
          scale: 0.5,
        }).add({
          targets: ".art-success",
          scale: 1,
          height: "45px",
        });
      });
      return false;
    });

    // Masonry Grid
    $(".art-grid").isotope({
      filter: "*",
      itemSelector: ".art-grid-item",
      transitionDuration: ".6s",
    });

    $(".art-filter a").on("click", function () {
      $(".art-filter .art-current").removeClass("art-current");
      $(this).addClass("art-current");

      var selector = $(this).data("filter");
      $(".art-grid").isotope({
        filter: selector,
      });
      return false;
    });

    anime({
      targets: ".art-counter-frame",
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: "linear",
    });

    $(".art-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "linear",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    // slider testimonials
    var swiper = new Swiper(".art-testimonial-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-testi-swiper-next",
        prevEl: ".art-testi-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });

    // slider works
    var swiper = new Swiper(".art-works-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-works-swiper-next",
        prevEl: ".art-works-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper(".art-blog-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-blog-swiper-next",
        prevEl: ".art-blog-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $.fancybox.defaults.hash = false;

    $(".current-menu-item a").clone().prependTo(".art-current-page");

    $(".menu-item").on("click", function () {
      if ($(this).hasClass("menu-item-has-children")) {
        $(this).children(".sub-menu").toggleClass("art-active");
      } else {
        $(
          ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
        ).removeClass("art-active , art-disabled");
      }
    });
  });
});

const translations = {
  en: {
    nav: {
      home: "Home",
      history: "History",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    profile: {
      title: "Full-Stack Engineer",
      residenceLabel: "Residence:",
      cityLabel: "City:",
      skills: "My Skills",
    },
    typing: [
      "build full-stack web and mobile applications.",
      "work with React, React Native, Go, and PostgreSQL.",
      "develop APIs and end-to-end features.",
      "am a Full-Stack Engineer!",
    ],
  },
  ar: {
    nav: {
      home: "الرئيسية",
      history: "السيرة المهنية",
      contact: "تواصل معي",
      portfolio: "معرض الأعمال",
    },
    profile: {
      title: "مهندس برمجيات متكامل",
      residenceLabel: "الإقامة:",
      cityLabel: "المدينة:",
      skills: "مهاراتي",
    },
    typing: [
      "أطور تطبيقات الويب والهواتف المتكاملة.",
      "أعمل باستخدام React وReact Native وGo وPostgreSQL.",
      "أطور واجهات API وميزات متكاملة.",
      "أنا مهندس برمجيات متكامل!",
    ],
    copy: {
      "Home": "الرئيسية",
      "History": "السيرة المهنية",
      "Contact": "تواصل معي",
      "Portfolio": "معرض الأعمال",
      "Accounts": "حساباتي",
      "Linked In": "لينكدإن",
      "Residence:": "الإقامة:",
      "Iraq": "العراق",
      "City:": "المدينة:",
      "Baghdad": "بغداد",
      "Baghdad, Iraq": "بغداد، العراق",
      "Website:": "الموقع الإلكتروني:",
      "My Skills": "مهاراتي",
      "More...": "المزيد...",
      "Download cv": "تنزيل السيرة الذاتية",
      "Take Tour Of My": "اكتشف",
      "Web Journey!": "رحلتي في تطوير الويب!",
      "code": "برمجة",
      "I": "أنا",
      "Explore now": "اكتشف الآن",
      "Years Experience": "سنوات من الخبرة",
      "Completed Projects": "مشروع مكتمل",
      "Happy Customers": "عميل سعيد",
      "Click to go to the last completed project": "اضغط للانتقال إلى أحدث مشروع مكتمل",
      "My Field Of Work": "مجالات عملي",
      "UI UX": "واجهات وتجربة المستخدم",
      "Website Development": "تطوير المواقع",
      "Front - End Development": "تطوير الواجهات الأمامية",
      "I build responsive web interfaces with JavaScript, TypeScript, React, Next.js, HTML5, and CSS3.": "أطور واجهات ويب متجاوبة باستخدام JavaScript وTypeScript وReact وNext.js وHTML5 وCSS3.",
      "Order": "اطلب الخدمة",
      "Back - End Development": "تطوير الواجهات الخلفية",
      "I build backend services and APIs with Go, tRPC, and Prisma ORM, using PostgreSQL and thoughtful database design.": "أطور خدمات خلفية وواجهات API باستخدام Go وtRPC وPrisma ORM، مع PostgreSQL وتصميم قواعد بيانات مدروس.",
      "Full - Stack Development": "تطوير متكامل",
      "I deliver end-to-end features across frontend and backend systems, from responsive interfaces and API integration to database design, using React, TypeScript, Go, tRPC, Prisma ORM, and PostgreSQL.": "أقدم ميزات متكاملة عبر الواجهات الأمامية والخلفية، من الواجهات المتجاوبة وتكامل API إلى تصميم قواعد البيانات، باستخدام React وTypeScript وGo وtRPC وPrisma ORM وPostgreSQL.",
      "Mobile Application Development": "تطوير تطبيقات الهاتف",
      "I develop cross-platform mobile applications with React Native and Expo, connecting user-friendly interfaces to backend APIs.": "أطور تطبيقات هاتف متعددة المنصات باستخدام React Native وExpo، مع ربط الواجهات سهلة الاستخدام بواجهات API الخلفية.",
      "UI UX Design": "تصميم واجهات وتجربة المستخدم",
      "I am skilled in UI/UX design, utilizing Figma and Photoshop to create intuitive, visually appealing interfaces. My design process focuses on enhancing user experience through thoughtful layout, color schemes, and interactive elements, ensuring that the final product is both aesthetically pleasing and highly functional.": "أمتلك مهارة في تصميم واجهات وتجربة المستخدم، وأستخدم Figma وPhotoshop لإنشاء واجهات واضحة وجذابة. أركز في التصميم على تحسين تجربة المستخدم من خلال التخطيط المدروس والألوان والعناصر التفاعلية، لتحقيق مظهر جميل ووظائف عملية.",
      "My Services": "خدماتي",
      "Most Liked": "الأكثر طلبًا",
      "Order the service": "اطلب هذه الخدمة",
      "Education": "التعليم",
      "Medical Technology Engineering": "هندسة التكنولوجيا الطبية",
      "Work History": "الخبرة المهنية",
      "Full-Stack Engineer": "مهندس برمجيات متكامل",
      "Frontend Developer": "مطور واجهات أمامية",
      "Developed web and mobile applications with React and React Native, and built backend services and APIs with Go and PostgreSQL. Delivered educational features for lecture videos, attendance, subscriptions, and multi-institute support.": "طورت تطبيقات ويب وهاتف باستخدام React وReact Native، وخدمات خلفية وواجهات API باستخدام Go وPostgreSQL. ونفذت ميزات تعليمية لإدارة المحاضرات والحضور والاشتراكات ودعم مؤسسات متعددة.",
      "Developed frontend features for a recruitment platform connecting employers with job seekers, including job postings, applications, and real-time communication.": "طورت ميزات الواجهة الأمامية لمنصة توظيف تربط أصحاب العمل بالباحثين عن عمل، بما يشمل نشر الوظائف والتقديم والتواصل الفوري.",
      "Designed and built an ERP system, developed a React Native mobile app, and contributed to CRM features using React, TypeScript, tRPC, Prisma, and PostgreSQL.": "صممت وطورت نظام ERP وتطبيق هاتف باستخدام React Native، وساهمت في ميزات CRM باستخدام React وTypeScript وtRPC وPrisma وPostgreSQL.",
      "Newyolk | Baghdad, Iraq": "Newyolk | بغداد، العراق",
      "INBOX | Remote": "INBOX | عن بُعد",
      "Contact information": "معلومات التواصل",
      "Country:": "الدولة:",
      "Email:": "البريد الإلكتروني:",
      "React / Next.js": "React وNext.js",
      "Go / tRPC": "Go وtRPC",
      "HTML5, CSS3, responsive design": "HTML5 وCSS3 وتصميم متجاوب",
      "React Native, Expo": "React Native وExpo",
      "REST APIs, Prisma ORM, PostgreSQL": "واجهات REST وPrisma ORM وPostgreSQL",
      "Git, GitHub, Railway, Vercel": "Git وGitHub وRailway وVercel",
      "API integration, debugging, problem-solving": "تكامل API وتصحيح الأخطاء وحل المشكلات",
      "Cross-platform mobile and end-to-end feature development": "تطوير تطبيقات متعددة المنصات وميزات متكاملة",
      "AI-assisted development tools": "أدوات التطوير بمساعدة الذكاء الاصطناعي",
      "Telegram:": "تيليجرام:",
      "WhatsApp:": "واتساب:",
      "Personal:": "الهاتف الشخصي:",
      "Get in touch": "ابقَ على تواصل",
      "Contact me": "تواصل معي",
      "Submit": "إرسال",
      "Success": "تم الإرسال بنجاح",
      "All Categories": "جميع الفئات",
      "Websites": "مواقع الويب",
      "Mobile Applications": "تطبيقات الهاتف",
      "Newyolk Mobile App": "تطبيق Newyolk للهاتف",
      "Newyolk ERP": "نظام Newyolk لتخطيط الموارد",
      "Kawon": "كون",
      "Screenshot coming soon": "لقطة الشاشة قريبًا",
      "Cross-platform mobile app built with React Native and connected to backend services and APIs.": "تطبيق هاتف متعدد المنصات طُوّر باستخدام React Native ويرتبط بخدمات خلفية وواجهات API.",
      "ERP features for lecture management, attendance tracking, subscriptions, and multi-institute support.": "ميزات لنظام ERP لإدارة المحاضرات ومتابعة الحضور والاشتراكات ودعم مؤسسات متعددة.",
      "Educational platform for lecture videos, assignments, and attendance tracking.": "منصة تعليمية لمقاطع المحاضرات والواجبات ومتابعة الحضور.",
      "Global Clean Design": "تصميم جلوبال كلين",
      "I designed this mobile application using Figma": "صممت تطبيق الهاتف هذا باستخدام Figma.",
      "Basamly": "بسملّي",
      "I used React Native along with Node.js and mongoDB to develop the application. You can download the app for Androids through the website.": "استخدمت React Native مع Node.js وMongoDB لتطوير التطبيق. يمكنك تنزيل التطبيق لأجهزة Android من خلال الموقع.",
      "Visit website": "زيارة الموقع",
      "White Tiger Drink": "مشروب وايت تايغر",
      "I developed this website using React.js with Tailwind.": "طورت هذا الموقع باستخدام React.js وTailwind.",
      "Live": "عرض مباشر",
      "Baghdad Beacon Website": "موقع بغداد بيكون",
      "I designed and developed this website using HTML, CSS and JavaScript along with Node.js and MongoDB. You can order a housemaid through the website!": "صممت وطورت هذا الموقع باستخدام HTML وCSS وJavaScript وNode.js وMongoDB. يمكنك طلب عاملة منزلية من خلال الموقع.",
      "Baghdad Star Website": "موقع بغداد ستار",
      "I developed this web application using React.js and tailwind along with Github APIs.": "طورت تطبيق الويب هذا باستخدام React.js وTailwind وواجهات GitHub API.",
      "Live Demo": "عرض تجريبي مباشر",
      "My Old Portfolio": "معرض أعمالي السابق",
      "A portfolio website I made using React.js and Tailwind": "موقع لمعرض أعمالي أنشأته باستخدام React.js وTailwind.",
      "Yaman Al-Khair Website": "موقع يمان الخير",
      "Discover a website I recently designed and programmed.": "اكتشف موقعًا صممته وبرمجته مؤخرًا.",
      "Full Name": "الاسم الكامل",
      "Email": "البريد الإلكتروني",
      "Message": "الرسالة",
      "Please fill out all fields": "يرجى ملء جميع الحقول.",
      "Message sent successfully!": "تم إرسال الرسالة بنجاح!",
      "Failed to send message. Please try again.": "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      "An error occurred while sending the message.": "حدث خطأ أثناء إرسال الرسالة.",
      "2025 - 2026": "٢٠٢٥ - ٢٠٢٦",
      "2024 - 2025": "٢٠٢٤ - ٢٠٢٥",
      "2022 - 2024": "٢٠٢٢ - ٢٠٢٤",
    },
  },
};

const originalTextNodes = new WeakMap();

function translateCopyText(lang) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        return node.parentElement &&
          node.parentElement.closest("script, style, [data-i18n], [data-rotate]")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    }
  );
  const copy = translations.ar.copy;
  let node;

  while ((node = treeWalker.nextNode())) {
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.textContent);
    }

    const originalText = originalTextNodes.get(node);
    const normalizedText = originalText.replace(/\s+/g, " ").trim();
    const translatedText = lang === "ar" ? copy[normalizedText] : normalizedText;

    if (translatedText !== undefined) {
      const leadingWhitespace = originalText.match(/^\s*/)[0];
      const trailingWhitespace = originalText.match(/\s*$/)[0];
      node.textContent = leadingWhitespace + translatedText + trailingWhitespace;
    } else {
      node.textContent = originalText;
    }
  }

  document.querySelectorAll("[placeholder]").forEach(function (element) {
    if (!element.dataset.originalPlaceholder) {
      element.dataset.originalPlaceholder = element.getAttribute("placeholder");
    }

    const originalPlaceholder = element.dataset.originalPlaceholder;
    const normalizedPlaceholder = originalPlaceholder.replace(/\s+/g, " ").trim();
    element.setAttribute(
      "placeholder",
      lang === "ar" ? copy[normalizedPlaceholder] || originalPlaceholder : originalPlaceholder
    );
  });
}

function applyLanguage(lang) {
  const selectedLang = lang === "ar" ? "ar" : "en";
  localStorage.setItem("preferred-language", selectedLang);

  document.documentElement.lang = selectedLang;
  document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", selectedLang === "ar" ? "rtl" : "ltr");
  translateCopyText(selectedLang);

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const keys = element.dataset.i18n.split(".");
    let value = translations[selectedLang];

    for (const key of keys) {
      if (!value || !(key in value)) {
        value = "";
        break;
      }
      value = value[key];
    }

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
    const isActive = button.dataset.langToggle === selectedLang;
    button.classList.toggle("art-active-lang", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    const link = button.querySelector("a");
    if (link) {
      link.setAttribute(
        "aria-label",
        selectedLang === "ar"
          ? button.dataset.langToggle === "ar"
            ? "التبديل إلى العربية"
            : "التبديل إلى الإنجليزية"
          : button.dataset.langToggle === "ar"
            ? "Switch to Arabic"
            : "Switch to English"
      );
    }
  });

  document.querySelectorAll("[data-rotate]").forEach(function (element) {
    element.setAttribute(
      "data-rotate",
      JSON.stringify(translations[selectedLang].typing)
    );

    if (document.readyState === "complete") {
      const replacement = element.cloneNode(false);
      replacement.textContent = translations[selectedLang].typing[0];
      element.replaceWith(replacement);
    }
  });
}

function openpage(link) {
  window.open(link, "_blank");
}

function openPage(url) {
  window.location.href = url;
}

const goButton = document.getElementById("goButton");
if (goButton) {
  goButton.addEventListener("click", function () {
    window.location.href = "https://meemapps.github.io/meem";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const preferredLanguage = localStorage.getItem("preferred-language") || "en";
  applyLanguage(preferredLanguage);

  document.addEventListener("click", function (event) {
    const toggle = event.target.closest("[data-lang-toggle]");
    if (!toggle) {
      return;
    }

    event.preventDefault();
    applyLanguage(toggle.dataset.langToggle);
  });
});

document.addEventListener("swup:contentReplaced", function () {
  const preferredLanguage = localStorage.getItem("preferred-language") || "en";
  applyLanguage(preferredLanguage);
});