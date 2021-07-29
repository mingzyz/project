$('html > body').imagesLoaded(function() {
  gsap.fromTo('.section-1__txt', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-1__txt',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-2__box', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-2__box',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-2__color', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-2__color',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-2__typo', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-2__typo',
      start: '0% 70%',
    },
    duration: 1
  });
  
  gsap.fromTo('.section-3__chart', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-3__chart',
      start: '0% 70%',
    },
    duration: 1
  });
  
  // 알람
  gsap.fromTo('.section-4__popup', {
    opacity: 0,
    scale: 0,
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start: '50% 50%',
    },
    duration: 0.5
  });

  gsap.fromTo('.section-5__txt', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-5__txt',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-5__main', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-5__main',
      start: '0% 70%',
    },
    duration: 1,
    delay: 0.3
  });
  

  gsap.fromTo('.section-5__popup', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-5__main',
      start: '0% 70%',
    },
    duration: 1,
    delay: 0.6
  });

  gsap.fromTo('.section-6__choose', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-6__choose',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-7__phone, .section-7__video', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-7__phone',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-7__txt', {
    opacity: 0,
    x:-50,
  }, {
    opacity: 1,
    x:0,
    scrollTrigger: {
      trigger: '.section-7__txt',
      start: '0% 70%',
    },
    duration: 1,
    delay: 0.5
  });

  gsap.fromTo('.section-7__popup', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-7__phone',
      start: '0% 70%',
    },
    duration: 1,
    delay: 1
  });

  gsap.fromTo('.section-8__txt', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-8__txt',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-8__phone, .section-8__video', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-8__phone',
      start: '0% 70%',
    },
    duration: 1,
    delay: 0.5
  });
  
  gsap.fromTo('.section-8__popup', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-8__popup',
      start: '0% 70%',
    },
    duration: 1,
    delay: 1
  });
  
  gsap.fromTo('.section-8__share', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-8__phone',
      start: '0% 70%',
    },
    duration: 1,
    delay: 1.5
  });

  gsap.fromTo('.section-9__phone, .section-9__video', {
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-9__phone',
      start: '0% 70%',
    },
    duration: 1
  });


  gsap.fromTo('.section-9__txt', {
    opacity: 0,
    x:50,
  }, {
    opacity: 1,
    x:0,
    scrollTrigger: {
      trigger: '.section-9__txt',
      start: '0% 70%',
    },
    duration: 1,
    delay: 1
  });

  gsap.fromTo('.section-10__txt', {
    opacity: 0,
    y:50,
  }, {
    opacity: 1,
    y:0,
    scrollTrigger: {
      trigger: '.section-10__txt',
      start: '0% 70%',
    },
    duration: 1
  });

  gsap.fromTo('.section-10__community', {
    opacity: 0,
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-10__community',
      start: '0% 70%',
    },
    duration: 1,
    delay: 0.5
  });
});