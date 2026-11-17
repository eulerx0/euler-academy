/**
 * Euler Academy — Core Registry, Lazy Module Loader & KaTeX Renderer
 */
(function (global) {
  'use strict';

  const curriculum = {};
  const axisStore = new Map();
  const examStore = new Map();
  const lexiqueStore = new Map();
  const simulatorStore = new Map();
  const scriptPromises = new Map();

  // Track elements waiting for deferred KaTeX auto-render
  const pendingMathNodes = new Set();
  let mathFlushTimer = null;

  function flushMathQueue() {
    if (!global.renderMathInElement) return;
    const nodes = Array.from(pendingMathNodes);
    pendingMathNodes.clear();
    for (const el of nodes) {
      if (!el || !el.isConnected) continue;
      try {
        global.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render warning:', err);
      }
    }
  }

  function scheduleMathFlush(attemptsLeft = 80) {
    if (global.renderMathInElement) {
      flushMathQueue();
      return;
    }
    if (mathFlushTimer || attemptsLeft <= 0) return;
    mathFlushTimer = global.setTimeout(() => {
      mathFlushTimer = null;
      if (global.renderMathInElement) {
        flushMathQueue();
      } else if (attemptsLeft > 1) {
        scheduleMathFlush(attemptsLeft - 1);
      }
    }, 100);
  }

  function renderMath(el) {
    if (!el) return;
    pendingMathNodes.add(el);
    if (global.renderMathInElement) {
      flushMathQueue();
    } else {
      scheduleMathFlush();
    }
  }

  function loadScript(src) {
    if (!src) return Promise.resolve();
    if (scriptPromises.has(src)) return scriptPromises.get(src);

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromises.delete(src);
        reject(new Error('Failed to load module: ' + src));
      };
      document.head.appendChild(script);
    });

    scriptPromises.set(src, promise);
    return promise;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toggleCollapsible(targetId, triggerBtn) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const isHidden = el.classList.toggle('hidden');
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', String(!isHidden));
    }
    if (!isHidden) {
      renderMath(el);
    }
  }

  function getAxisKey(lessonId, axisId) {
    return `${lessonId}:${axisId}`;
  }

  function getLessonModuleBase(subjectId, lessonId) {
    return `./modules/${subjectId}/${lessonId}`;
  }

  function findLesson(lessonId) {
    for (const [subjectKey, subj] of Object.entries(curriculum)) {
      const lesson = (subj.lessons || []).find((l) => l.id === lessonId);
      if (lesson) return { subjectKey, subject: subj, lesson };
    }
    return null;
  }

  global.EULER_CURRICULUM = curriculum;
  global.EulerAcademy = {
    curriculum,

    registerSubject(subjectData) {
      if (!subjectData || !subjectData.id) return;
      curriculum[subjectData.id] = subjectData;
    },

    registerAxis(lessonId, axisId, contentHtml) {
      axisStore.set(getAxisKey(lessonId, axisId), contentHtml);
    },

    getAxisContent(lessonId, axisId) {
      return axisStore.get(getAxisKey(lessonId, axisId)) || null;
    },

    registerExam(lessonId, contentHtml) {
      examStore.set(lessonId, contentHtml);
    },

    getExamContent(lessonId) {
      return examStore.get(lessonId) || null;
    },

    registerLexique(lessonId, items) {
      lexiqueStore.set(lessonId, Array.isArray(items) ? items : []);
    },

    getLexique(lessonId) {
      return lexiqueStore.get(lessonId) || null;
    },

    registerSimulator(lessonId, simulatorApi) {
      simulatorStore.set(lessonId, simulatorApi);
    },

    getSimulator(lessonId) {
      return simulatorStore.get(lessonId) || null;
    },

    loadScript,
    renderMath,
    escapeHtml,
    toggleCollapsible,
    getLessonModuleBase,
    findLesson
  };
})(window);
