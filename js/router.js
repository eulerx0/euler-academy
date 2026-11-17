/**
 * Euler Academy — Hash Router & Application Bootstrap
 */
(function (global) {
  'use strict';

  function parseRoute() {
    const raw = (global.location.hash || '').replace(/^#\/?/, '').trim();
    if (!raw) return { type: 'catalog', subjectKey: 'math' };

    const parts = raw.split('/').filter(Boolean);
    if (parts[0] === 'lesson' && parts[1]) {
      return { type: 'lesson', lessonId: parts[1], sectionId: parts[2] || null };
    }
    if (['math', 'physics', 'chemistry'].includes(parts[0])) {
      return { type: 'catalog', subjectKey: parts[0] };
    }
    return { type: 'catalog', subjectKey: 'math' };
  }

  function applyRoute() {
    const route = parseRoute();
    if (route.type === 'lesson') {
      const found = global.EulerAcademy.findLesson(route.lessonId);
      if (found) {
        global.EulerLessonView.openLesson(found.subjectKey, found.lesson.id, route.sectionId);
        return;
      }
    }
    global.EulerCatalog.showSubjectCatalog(route.subjectKey || 'math');
  }

  function goToSubject(subjectKey) {
    const targetHash = `#/${subjectKey}`;
    if (global.location.hash === targetHash) {
      global.EulerCatalog.showSubjectCatalog(subjectKey);
    } else {
      global.location.hash = targetHash;
    }
  }

  function goToLesson(lessonId, sectionId) {
    const targetHash = sectionId ? `#/lesson/${lessonId}/${sectionId}` : `#/lesson/${lessonId}`;
    if (global.location.hash === targetHash) {
      applyRoute();
    } else {
      global.location.hash = targetHash;
    }
  }

  function initScrollTopButton() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    global.addEventListener('scroll', () => {
      if (global.scrollY > 360) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    }, { passive: true });
    btn.addEventListener('click', () => {
      global.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  global.EulerRouter = {
    goToSubject,
    goToLesson,
    applyRoute
  };

  // Compatibility helpers for legacy HTML links
  global.showSubjectCatalog = goToSubject;
  global.openLesson = (subjectKey, lessonId) => goToLesson(lessonId);

  global.addEventListener('hashchange', applyRoute);
  global.addEventListener('DOMContentLoaded', () => {
    const brandLink = document.getElementById('brandHomeLink');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        goToSubject(global.EulerCatalog.getCurrentSubject());
      });
    }

    ['math', 'physics', 'chemistry'].forEach((subjKey) => {
      const tab = document.getElementById(`tab-${subjKey}`);
      if (tab) tab.addEventListener('click', () => goToSubject(subjKey));
    });

    const backBtn = document.getElementById('btnBackToCatalog');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        goToSubject(global.EulerCatalog.getCurrentSubject());
      });
    }

    initScrollTopButton();
    applyRoute();
  });
})(window);
