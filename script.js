(function () {
  'use strict';

  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // 스크롤 시 헤더 스타일 변경
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 초기 한 번 실행

  // 모바일 메뉴 토글
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-label', nav.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기');
    });
  }

  // 메뉴 링크 클릭 시 모바일 메뉴 닫기
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && window.innerWidth <= 768) {
        nav.classList.remove('is-open');
      }
    });
  });

  // 섹션 스크롤 시 부드러운 등장 (Intersection Observer)
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
