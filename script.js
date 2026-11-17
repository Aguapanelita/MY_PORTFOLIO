/* ==========================================================================
   PORTAFOLIO · YURINETH VARGAS SALAZAR
   Script único (JavaScript vainilla, sin dependencias)


   Cada sección es un bloque autocontenido que se registra en el objeto
   global YVS. El orden importa: la sección 13 arranca todo.


   ÍNDICE
    1. TEXTOS · ESPAÑOL ......... edita aquí los textos en español
    2. TEXTOS · ENGLISH ......... edita aquí los textos en inglés
    3. IDIOMA (I18N) ............ cambio ES/EN
    4. CARA · FUENTE PROCEDURAL . genera la malla (reemplazable por MediaPipe)
    5. CARA · RENDERIZADOR ...... dibuja cualquier malla en <canvas>
    6. CARA · INTRO ............. secuencia de carga
    7. CARA · RETRATO ........... placeholder animado de "Sobre mí"
    8. FONDO DE PARTÍCULAS
    9. NAVEGACIÓN ............... menú, sección activa, apariciones
   10. TARJETAS Y MODAL ......... tilt 3D, modal, enlaces de proyectos
   11. PANEL DE GESTOS .......... interfaz conceptual (MediaPipe Hands)
   12. EFECTOS DE INTERFAZ ...... cursor, rotador, glitch, barras
   13. ARRANQUE
   ========================================================================== */


/* ##########################################################################
   1. TEXTOS · ESPAÑOL
   ########################################################################## */


/* ==========================================================================
   TEXTOS · ESPAÑOL
   Edita aquí cualquier texto del sitio. Las claves coinciden con los
   atributos data-i18n="..." del HTML.
   ========================================================================== */
(function (YVS) {
  'use strict';
  YVS.lang = YVS.lang || {};


  YVS.lang.es = {
    meta: {
      title: 'Yurineth Vargas Salazar — Diseñadora de Comunicación Gráfica',
      description: 'Portafolio de Yurineth Vargas Salazar: diseño gráfico, ilustración, animación, 3D, identidad de marca, interfaces web e indumentaria. Colombia → Chile.'
    },


    skip: 'Saltar al contenido',


    nav: {
      label: 'Principal',
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      gestures: 'Gestos',
      theme: 'Alternar tema',
      menu: 'Abrir menú',
      langLabel: 'Idioma'
    },


    intro: {
      label: 'Flor de cerezo en ASCII Art',
      bud: 'Capullo',
      bloom: 'Flor',
      connectCam: 'Activar cámara',
      stopCam: 'Desactivar cámara',
      stateBud: '> flor en capullo // abre tu mano o usa el control manual',
      stateOpening: '> expandiendo pétalos ASCII // floración en progreso…',
      stateFull: '> floración completa // manteniendo confirmación (1.2s)…',
      stateDispersing: '> dispersión de partículas iniciada // revelando portafolio…',
      boot: '> inicializando percepción…',
      scan: '> calculando morfología radial…',
      detected: '> floración confirmada // bienvenida',
      skip: 'Saltar intro'
    },


    hero: {
      tag: '> PERFIL_CARGADO // COL → CHL',
      role: 'Diseñadora de Comunicación Gráfica',
      rotatorPrefix: 'explorando',
      rotator: [
        'narrativas audiovisuales',
        'ilustración',
        'animación',
        'modelado 3D',
        'identidad de marca',
        'interfaces web',
        'diseño de indumentaria'
      ],
      ctaProjects: 'Ver proyectos',
      ctaAbout: 'Conóceme',
      scroll: 'scroll',
      meta1: 'ORIGEN // COLOMBIA',
      meta2: 'BASE // CHILE'
    },


    projects: {
      tag: '> DIRECTORIO // TRABAJOS',
      title: 'Proyectos',
      intro: 'Experimentos entre el diseño, la percepción y la tecnología: interfaces que miran, sonidos que nacen del color y recuerdos que se vuelven animación.',
      open: 'Ver detalle',
      close: 'Cerrar',
      toolsLabel: 'Herramientas',
      link: '[enlace del proyecto]',
      visit: 'Abrir proyecto',
      placeholder: '[ IMG_PLACEHOLDER // reemplazar ]',
      items: {
        dos: {
          label: 'Web interactiva · Visión computacional',
          title: 'Dos realidades son infinitas',
          short: 'Una experiencia web interactiva que explora OpenCV y MediaPipe para entender cómo perciben la realidad las máquinas.',
          long: 'Experiencia web interactiva que explora las bibliotecas OpenCV y MediaPipe para comprender cómo las máquinas perciben la realidad. Una invitación a mirar el mundo a través de los ojos de un algoritmo.'
        },
        pulso: {
          label: 'Plataforma audiovisual experimental',
          title: 'PULSO',
          short: 'Transforma videos en composiciones sonoras a partir del análisis de color y movimiento.',
          long: 'Plataforma audiovisual experimental que transforma videos en composiciones sonoras mediante el análisis de color y movimiento, generando esculturas 3D evolutivas.'
        },
        senses: {
          label: 'Juego multijugador local · 4 jugadores',
          title: 'Senses Party',
          short: 'Un juego para cuatro personas en pantalla compartida donde cada teléfono se convierte en control.',
          long: 'Juego multijugador local para 4 personas en pantalla compartida. Cada jugador usa su propio teléfono como control directamente desde el navegador, sin instalar nada.'
        },
        ninos: {
          label: 'Animación · Narrativa',
          title: 'Ser niños',
          short: 'Una carta de amor a Chile que mira el mundo con ojos de infancia.',
          long: 'Animación concebida como una carta de amor a Chile que explora la mirada inocente, los recuerdos y la identidad a través de la nostalgia.'
        }
      }
    },



    about: {
      tag: '> SOBRE_MÍ // HISTORIA',
      title: 'Sobre mí',
      photo: '[ foto ]',
      lead: 'Soy Yurineth Vargas Salazar, diseñadora de Comunicación Gráfica.',
      p1: 'Me reconozco como una persona sensible, apasionada por el arte y curiosa: me mueve entender cómo se construyen las imágenes, las historias y las experiencias que nos conmueven.',
      p2: 'Mi recorrido en el diseño me ha llevado por los mágicos caminos de las narrativas audiovisuales, la ilustración, la animación, el modelado 3D, la identidad de marca, el desarrollo de interfaces web y el diseño de indumentaria.',
      timeline: {
        fromTag: 'ORIGEN',
        fromPlace: 'Colombia',
        fromText: 'Formación en Diseño de la Comunicación Gráfica en la Universidad Autónoma de Occidente.',
        toTag: 'PRESENTE',
        toPlace: 'Chile',
        toText: 'Enfoque en diseño de interfaces web y textil en la Universidad Diego Portales.'
      },
      ExperimentingTitle: 'Experimentando con...',
      Experimenting: [
        'Adobe Illustrator',
        'Photoshop',
        'After Effects',
        'Adobe Premiere',
        'Adobe InDesign',
        'Procreate',
        'Autodesk 3ds Max',
        'Figma',
        'GitHub',
        'Lightroom',
        'CapCut',
        'Canva'
      ]
    },


    gesture: {
      badge: 'MediaPipe',
      close: 'Cerrar panel',
      camera: '[ cámara desactivada ]',
      btnStart: 'Activar cámara',
      btnStop: 'Desactivar cámara',
      desc: 'Navega este portafolio con tus manos usando visión computacional (MediaPipe). Abre la mano para florecer, desliza para cambiar de proyecto y haz pinza para abrirlo.',
      items: {
        palm:  { name: 'Mano abierta', action: 'florecer / pausar' },
        swipe: { name: 'Deslizar',     action: 'siguiente proyecto' },
        pinch: { name: 'Pinza',        action: 'abrir proyecto' }
      },
      hint: 'Toca un gesto para simular su acción o usa la cámara para interactuar en tiempo real.',
      status: 'estado',
      statusReady: 'listo para conectar',
      statusPerm: 'solicitando permisos…',
      statusModel: 'cargando MediaPipe Tasks…',
      statusTracking: 'mano detectada // tracking activo',
      statusNoHand: 'cámara activa // buscando mano…',
      statusError: 'cámara no disponible',
      statusValue: 'listo para conectar',
      toast: {
        pause: '✋ Animaciones en pausa',
        resume: '✋ Animaciones activas',
        next: '👉 Siguiente proyecto',
        open: '👌 Abriendo proyecto',
        bloom: '✿ Floración confirmada // Revelando portafolio'
      }
    },


    contact: {
      tag: '> fin_de_transmisión',
      title: '¿Creamos algo juntos?',
      text: 'Estoy abierta a colaboraciones, encargos y proyectos experimentales.',
      location: '[Ciudad, Chile]',
      year: '[año]',
      credit: 'Diseñado y desarrollado con HTML, CSS y JavaScript.'
    }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   2. TEXTOS · ENGLISH
   ########################################################################## */


/* ==========================================================================
   TEXTS · ENGLISH
   Mismas claves que la sección 1.
   ========================================================================== */
(function (YVS) {
  'use strict';
  YVS.lang = YVS.lang || {};


  YVS.lang.en = {
    meta: {
      title: 'Yurineth Vargas Salazar — Graphic Communication Designer',
      description: 'Portfolio of Yurineth Vargas Salazar: graphic design, illustration, animation, 3D, brand identity, web interfaces and fashion design. Colombia → Chile.'
    },


    skip: 'Skip to content',


    nav: {
      label: 'Main',
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      gestures: 'Gestures',
      theme: 'Toggle theme',
      menu: 'Open menu',
      langLabel: 'Language'
    },


    intro: {
      label: 'ASCII Cherry Blossom Intro',
      bud: 'Bud',
      bloom: 'Bloom',
      connectCam: 'Enable camera',
      stopCam: 'Disable camera',
      stateBud: '> flower in bud // open your hand or use the manual slider',
      stateOpening: '> expanding ASCII petals // blooming in progress…',
      stateFull: '> full bloom // holding confirmation (1.2s)…',
      stateDispersing: '> particle dispersion initiated // revealing portfolio…',
      boot: '> initializing perception…',
      scan: '> computing radial morphology…',
      detected: '> bloom confirmed // welcome',
      skip: 'Skip intro'
    },


    hero: {
      tag: '> PROFILE_LOADED // COL → CHL',
      role: 'Graphic Communication Designer',
      rotatorPrefix: 'exploring',
      rotator: [
        'audiovisual narratives',
        'illustration',
        'animation',
        '3D modeling',
        'brand identity',
        'web interfaces',
        'fashion design'
      ],
      ctaProjects: 'View projects',
      ctaAbout: 'About me',
      scroll: 'scroll',
      meta1: 'ORIGIN // COLOMBIA',
      meta2: 'BASED // CHILE'
    },


    projects: {
      tag: '> DIRECTORY // WORK',
      title: 'Projects',
      intro: 'Experiments between design, perception and technology: interfaces that see, sounds born from color and memories that become animation.',
      open: 'View details',
      close: 'Close',
      toolsLabel: 'Tools',
      link: '[project link]',
      visit: 'Open project',
      placeholder: '[ IMG_PLACEHOLDER // replace ]',
      items: {
        dos: {
          label: 'Interactive web · Computer vision',
          title: 'Dos realidades son infinitas', // título original de la obra
          short: 'An interactive web experience exploring OpenCV and MediaPipe to understand how machines perceive reality.',
          long: 'An interactive web experience that explores the OpenCV and MediaPipe libraries to understand how machines perceive reality. An invitation to see the world through the eyes of an algorithm.'
        },
        pulso: {
          label: 'Experimental audiovisual platform',
          title: 'PULSO',
          short: 'Turns videos into sound compositions by analyzing color and motion.',
          long: 'An experimental audiovisual platform that turns videos into sound compositions through color and motion analysis, generating evolving 3D sculptures.'
        },
        senses: {
          label: 'Local multiplayer game · 4 players',
          title: 'Senses Party',
          short: 'A shared-screen game for four people where every phone becomes a controller.',
          long: 'A local multiplayer game for 4 people on a shared screen. Each player uses their own phone as a controller straight from the browser, with nothing to install.'
        },
        ninos: {
          label: 'Animation · Storytelling',
          title: 'Ser niños', // título original de la obra
          short: 'A love letter to Chile that looks at the world through a child’s eyes.',
          long: 'An animation conceived as a love letter to Chile, exploring innocence, memory and identity through nostalgia.'
        }
      }
    },


    
  about: {
    tag: '> ABOUT_ME // STORY',
    title: 'About me',
    photo: '[ photo ]',
    lead: 'I’m Yurineth Vargas Salazar, a Graphic Communication Designer.',
    p1: 'I see myself as a sensitive person, passionate about art and naturally curious. I’m driven by the desire to understand how images, stories and experiences that move us are created.',
    p2: 'My journey in design has led me through the fascinating worlds of audiovisual storytelling, illustration, animation, 3D modeling, brand identity, web interface development and fashion design.',
    timeline: {
      fromTag: 'ORIGIN',
      fromPlace: 'Colombia',
      fromText: 'Studied Graphic Communication Design at Universidad Autónoma de Occidente.',
      toTag: 'PRESENT',
      toPlace: 'Chile',
      toText: 'Focused on web interface and textile design at Universidad Diego Portales.'
    },
    ExperimentingTitle: 'Experimenting with...',
    Experimenting: [
      'Adobe Illustrator',
      'Photoshop',
      'After Effects',
      'Adobe Premiere',
      'Adobe InDesign',
      'Procreate',
      'Autodesk 3ds Max',
      'Figma',
      'GitHub',
      'Lightroom',
      'CapCut',
      'Canva'
    ]
  },



    gesture: {
      badge: 'MediaPipe',
      close: 'Close panel',
      camera: '[ camera off ]',
      btnStart: 'Enable camera',
      btnStop: 'Disable camera',
      desc: 'Browse this portfolio with your hands using computer vision (MediaPipe). Open your hand to bloom, swipe to advance projects, and pinch to open.',
      items: {
        palm:  { name: 'Open palm', action: 'bloom / pause' },
        swipe: { name: 'Swipe',     action: 'next project' },
        pinch: { name: 'Pinch',     action: 'open project' }
      },
      hint: 'Tap a gesture to simulate its action or use your camera for real-time interaction.',
      status: 'status',
      statusReady: 'ready to connect',
      statusPerm: 'requesting permissions…',
      statusModel: 'loading MediaPipe Tasks…',
      statusTracking: 'hand detected // tracking active',
      statusNoHand: 'camera active // looking for hand…',
      statusError: 'camera unavailable',
      statusValue: 'ready to connect',
      toast: {
        pause: '✋ Animations paused',
        resume: '✋ Animations resumed',
        next: '👉 Next project',
        open: '👌 Opening project',
        bloom: '✿ Bloom confirmed // Revealing portfolio'
      }
    },


    contact: {
      tag: '> end_of_transmission',
      title: 'Shall we create something together?',
      text: 'I’m open to collaborations, commissions and experimental projects.',
      location: '[City, Chile]',
      year: '[year]',
      credit: 'Designed and built with HTML, CSS and JavaScript.'
    }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   3. IDIOMA (I18N)
   ########################################################################## */


/* ==========================================================================
   I18N — Motor de idioma ES / EN
   - data-i18n="clave.anidada"           → reemplaza textContent
   - data-i18n-attr="attr:clave;attr2:k" → reemplaza atributos
   Emite el evento `yvs:langchange` (detail.lang) al cambiar.
   ========================================================================== */
(function (YVS) {
  'use strict';


  const STORAGE_KEY = 'yvs-lang';
  const SUPPORTED = ['es', 'en'];
  let current = 'es';


  /** Busca 'a.b.0' dentro de un objeto (soporta índices de arrays). */
  function lookup(dict, key) {
    return key.split('.').reduce((obj, k) => (obj == null ? undefined : obj[k]), dict);
  }


  function t(key) {
    const value = lookup(YVS.lang[current], key);
    return value === undefined ? lookup(YVS.lang.es, key) : value;
  }


  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;


    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });


    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const value = t(key);
        if (attr && typeof value === 'string') el.setAttribute(attr, value);
      });
    });


    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));


    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });


    document.dispatchEvent(new CustomEvent('yvs:langchange', { detail: { lang } }));
  }


  function set(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* almacenamiento no disponible */ }


    if (!YVS.reduced) {
      document.body.classList.remove('is-switching');
      void document.body.offsetWidth; // reinicia la animación
      document.body.classList.add('is-switching');
      setTimeout(() => document.body.classList.remove('is-switching'), 450);
    }
    apply(lang);
  }


  function detect() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* sin acceso */ }
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return nav === 'en' ? 'en' : 'es';
  }


  function init() {
    apply(detect());
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => set(btn.dataset.lang));
    });
  }


  YVS.i18n = {
    init,
    set,
    t,
    get current() { return current; }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   3B. TEMA · MODO CLARO / OSCURO
   ########################################################################## */


/* ==========================================================================
   THEME — Gestor de Modo Claro y Modo Oscuro
   - Controla [data-theme="light"] en el elemento <html>
   - Persistencia automática en localStorage ('yvs-theme')
   - Respeta prefers-color-scheme cuando no hay preferencia guardada
   - Emite el evento personalizado `yvs:themechange`
   ========================================================================== */
(function (YVS) {
  'use strict';


  const STORAGE_KEY = 'yvs-theme';
  let currentTheme = 'dark';


  function apply(theme) {
    currentTheme = theme;
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }


    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon) icon.textContent = theme === 'light' ? '☾' : '☀';
    if (label) label.textContent = theme === 'light' ? 'OSCURO' : 'CLARO';


    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#FAF6F0' : '#0D0221');


    document.dispatchEvent(new CustomEvent('yvs:themechange', { detail: { theme } }));
  }


  function toggle() {
    const next = currentTheme === 'light' ? 'dark' : 'light';
    set(next);
  }


  function set(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* almacenamiento no disponible */ }
    apply(theme);
  }


  function detect() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) { /* sin acceso */ }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }


  function init() {
    apply(detect());
    const btn = document.getElementById('theme-btn');
    if (btn) btn.addEventListener('click', toggle);


    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        try {
          if (!localStorage.getItem(STORAGE_KEY)) apply(e.matches ? 'light' : 'dark');
        } catch (err) {}
      });
    }
  }


  YVS.theme = {
    init,
    toggle,
    set,
    get current() { return currentTheme; }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   4. CARA · FUENTE PROCEDURAL
   ########################################################################## */


/* ==========================================================================
   FACE SOURCE · PROCEDURAL
   Genera una malla 3D de rostro con matemáticas puras (sin dependencias).


   CONTRATO "FaceSource" — cualquier fuente de cara debe cumplirlo:
     {
       id:        string,
       getMesh(): { vertices: [[x,y,z], ...],      // espacio ~[-1,1], +z hacia la cámara
                    edges:    [[i, j, peso?], ...], // peso <1 diagonal, >1 rasgo destacado
                    landmarks: [i, ...] },          // índices de puntos clave (opcional)
       getPose(): { yaw, pitch } | null,           // null = movimiento autónomo
       start():   Promise<void>,
       stop():    void
     }


   Para migrar a MediaPipe en el futuro, agrega aquí `YVS.FaceSources.mediapipe`
   que devuelva los 468 puntos de FaceMesh como `vertices`,
   FACEMESH_TESSELATION como `edges` y la rotación de la cabeza en getPose().
   El renderizador y la intro no necesitan cambios.
   ========================================================================== */
(function (YVS) {
  'use strict';


  const Y_TOP = 1.2;
  const Y_BOTTOM = -1.3;


  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (e0, e1, x) => {
    const t = clamp((x - e0) / (e1 - e0), 0, 1);
    return t * t * (3 - 2 * t);
  };
  const gauss = (x, y, cx, cy, sx, sy, a) =>
    a * Math.exp(-(((x - cx) ** 2) / (2 * sx * sx) + ((y - cy) ** 2) / (2 * sy * sy)));
  const sym = (x, y, cx, cy, sx, sy, a) =>
    gauss(x, y, cx, cy, sx, sy, a) + gauss(x, y, -cx, cy, sx, sy, a);


  /** Semiancho de la cabeza a la altura y (cráneo redondo, mandíbula afinada). */
  function halfWidth(y) {
    if (y >= 0) return 0.88 * Math.sqrt(Math.max(0, 1 - (y / 1.34) ** 2));
    const t = -y / -Y_BOTTOM;
    const jaw = 1 - 0.5 * Math.pow(t, 1.9);                        // mandíbula
    const chin = Math.sqrt(Math.max(0.12, 1 - Math.pow(t, 6)));    // mentón redondeado
    return 0.88 * jaw * chin;
  }


  /** Profundidad base del óvalo a la altura y. */
  function depth(y) {
    return halfWidth(y) * 0.92 + 0.06;
  }


  /** Relieve de rasgos faciales (+z sale hacia la cámara). */
  function features(x, y) {
    let z = 0;


    // Nariz: puente que crece hacia la punta
    const noseW = 0.07 + 0.06 * smooth(0.3, -0.3, y);
    const noseA = (0.03 + 0.25 * smooth(0.3, -0.28, y)) * smooth(0.44, 0.26, y) * smooth(-0.46, -0.3, y);
    z += noseA * Math.exp(-(x * x) / (2 * noseW * noseW));
    z += sym(x, y, 0.1, -0.36, 0.06, 0.045, 0.05);      // aletas nasales


    z += sym(x, y, 0.34, 0.14, 0.14, 0.08, -0.13);      // cuencas de los ojos
    z += sym(x, y, 0.33, 0.33, 0.19, 0.06, 0.06);       // arco ciliar
    z += sym(x, y, 0.47, -0.12, 0.15, 0.15, 0.06);      // pómulos
    z += sym(x, y, 0.72, 0.28, 0.1, 0.16, -0.04);       // sienes
    z += gauss(x, y, 0, 0.62, 0.42, 0.3, 0.03);         // frente


    z += gauss(x, y, 0, -0.58, 0.17, 0.05, 0.07);       // labio superior
    z += gauss(x, y, 0, -0.74, 0.15, 0.05, 0.06);       // labio inferior
    z += gauss(x, y, 0, -0.66, 0.2, 0.018, -0.035);     // línea de la boca
    z += gauss(x, y, 0, -0.88, 0.16, 0.05, -0.03);      // surco del mentón
    z += gauss(x, y, 0, -1.06, 0.17, 0.12, 0.08);       // mentón
    return z;
  }


  /** Superficie del rostro: z para cualquier (x, y). */
  function surfaceZ(x, y) {
    const w = Math.max(halfWidth(y), 1e-4);
    const s = clamp(x / w, -1, 1);
    const c = Math.sqrt(1 - s * s);
    return depth(y) * Math.pow(c, 0.75) + features(x, y) * Math.pow(c, 0.7);
  }


  function build(opts) {
    const rows = opts.rows || 26;
    const cols = opts.cols || 25;
    const vertices = [];
    const edges = [];
    const landmarks = [];


    const point = (x, y, lift) => {
      vertices.push([x, y, surfaceZ(x, y) + (lift || 0)]);
      return vertices.length - 1;
    };


    // --- 1. Retícula principal (filas = alturas, columnas = ángulo) ---
    const idx = (r, c) => r * cols + c;
    for (let r = 0; r < rows; r++) {
      const y = Y_TOP - (r / (rows - 1)) * (Y_TOP - Y_BOTTOM);
      const w = halfWidth(y);
      for (let c = 0; c < cols; c++) {
        const theta = (c / (cols - 1) - 0.5) * Math.PI; // -90° … 90°
        point(w * Math.sin(theta), y, 0);
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (c < cols - 1) edges.push([idx(r, c), idx(r, c + 1), 1]);
        if (r < rows - 1) edges.push([idx(r, c), idx(r + 1, c), 1]);
        if (r < rows - 1 && c < cols - 1) {
          if ((r + c) % 2 === 0) edges.push([idx(r, c), idx(r + 1, c + 1), 0.5]);
          else edges.push([idx(r, c + 1), idx(r + 1, c), 0.5]);
        }
      }
    }


    // --- 2. Contornos de rasgos (se dibujan destacados) ---
    const polyline = (pts, closed, weight) => {
      const ids = pts.map(([x, y]) => point(x, y, 0.018));
      for (let i = 0; i < ids.length - 1; i++) edges.push([ids[i], ids[i + 1], weight]);
      if (closed) edges.push([ids[ids.length - 1], ids[0], weight]);
      return ids;
    };
    const loop = (n, fn) => Array.from({ length: n }, (_, i) => fn((i / n) * Math.PI * 2));
    const line = (n, fn) => Array.from({ length: n }, (_, i) => fn(i / (n - 1)));


    [-1, 1].forEach((side) => {
      const cx = side * 0.34;
      const cy = 0.135;
      // Ojo en forma de almendra
      polyline(loop(18, (a) => {
        const s = Math.sin(a);
        return [cx + 0.13 * Math.cos(a), cy + (s > 0 ? 0.05 : 0.035) * s + 0.012 * Math.cos(a) * side];
      }), true, 1.6);
      // Iris
      polyline(loop(10, (a) => [cx + 0.034 * Math.cos(a), cy + 0.004 + 0.034 * Math.sin(a)]), true, 1.6);
      landmarks.push(point(cx, cy + 0.004, 0.02));
      // Ceja
      polyline(line(8, (t) => [side * (0.16 + 0.32 * t), 0.3 + 0.05 * Math.sin(t * Math.PI) - 0.025 * t]), false, 1.3);
    });


    // Labios (contorno con arco de cupido) y línea de la boca
    const lips = polyline(loop(22, (a) => {
      const x = 0.2 * Math.cos(a);
      const s = Math.sin(a);
      const up = 0.065 * s * (1 - 0.4 * Math.exp(-(x * x) / (2 * 0.03 * 0.03)));
      return [x, -0.655 + (s > 0 ? up : 0.08 * s)];
    }), true, 1.5);
    polyline(line(9, (t) => {
      const x = -0.19 + 0.38 * t;
      return [x, -0.66 + 0.012 * Math.cos(t * Math.PI * 2)];
    }), false, 1.3);
    landmarks.push(lips[0], lips[11]);


    // Base de la nariz
    polyline([[-0.13, -0.35], [-0.08, -0.4], [0, -0.385], [0.08, -0.4], [0.13, -0.35]], false, 1.3);
    landmarks.push(point(0, -0.3, 0.03));   // punta de la nariz
    landmarks.push(point(0, -1.06, 0.02));  // mentón


    return { vertices, edges, landmarks };
  }


  YVS.FaceSources = YVS.FaceSources || {};


  /** Crea una fuente procedural. opts: { rows, cols } */
  YVS.FaceSources.procedural = function (opts) {
    const mesh = build(opts || {});
    return {
      id: 'procedural',
      getMesh: () => mesh,
      getPose: () => null,
      start: () => Promise.resolve(),
      stop() {}
    };
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   5. CARA · RENDERIZADOR
   ########################################################################## */


/* ==========================================================================
   FACE RENDERER
   Proyecta cualquier malla { vertices, edges, landmarks } sobre un <canvas> 2D
   con perspectiva, sombreado por profundidad, glow y efectos (barrido,
   glitch, dispersión). No sabe de dónde viene la malla.


   Uso:
     const r = YVS.createFaceRenderer(canvas, { scale: 0.34 });
     r.resize();
     r.render(mesh, { yaw, pitch, roll, reveal, alpha, glitch, disperse, landmarks, zoom });
   ========================================================================== */
(function (YVS) {
  'use strict';


  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const boundsCache = new WeakMap();


  function getBounds(mesh) {
    let b = boundsCache.get(mesh);
    if (!b) {
      let minY = Infinity, maxY = -Infinity;
      mesh.vertices.forEach((v) => { if (v[1] < minY) minY = v[1]; if (v[1] > maxY) maxY = v[1]; });
      b = { minY, maxY };
      boundsCache.set(mesh, b);
    }
    return b;
  }


  function createFaceRenderer(canvas, options) {
    const ctx = canvas.getContext('2d');
    const opt = Object.assign({
      color: '#F797F5',     // líneas
      hot: '#FFE6FE',       // rasgos destacados
      glow: '#D45EE5',      // halo
      shadow: '#9113B2',    // canal de glitch
      fov: 3.4,             // distancia de cámara
      scale: 0.34,          // tamaño relativo al lado menor del canvas
      buckets: 6,           // niveles de profundidad
      glowPass: true,
      maxDpr: 2
    }, options || {});


    let w = 0, h = 0;
    let proj = new Float32Array(0);
    let seeds = null;


    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, opt.maxDpr);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }


    function ensureSeeds(n) {
      if (seeds && seeds.length === n * 3) return;
      seeds = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const b = Math.acos(2 * Math.random() - 1);
        const m = 0.6 + Math.random() * 1.4;
        seeds[i * 3] = Math.sin(b) * Math.cos(a) * m;
        seeds[i * 3 + 1] = Math.sin(b) * Math.sin(a) * m;
        seeds[i * 3 + 2] = Math.cos(b) * m;
      }
    }


    function clear() { ctx.clearRect(0, 0, w, h); }


    function render(mesh, state) {
      const s = Object.assign({ yaw: 0, pitch: 0, roll: 0, reveal: 1, alpha: 1, glitch: 0, disperse: 0, landmarks: 0, zoom: 1 }, state);
      const V = mesh.vertices;
      const E = mesh.edges;
      const n = V.length;
      if (proj.length !== n * 3) proj = new Float32Array(n * 3);
      ensureSeeds(n);
      clear();
      if (s.alpha <= 0.001 || w === 0) return;


      // --- Proyección ---
      const cyw = Math.cos(s.yaw), syw = Math.sin(s.yaw);
      const cp = Math.cos(s.pitch), sp = Math.sin(s.pitch);
      const cr = Math.cos(s.roll), sr = Math.sin(s.roll);
      const size = Math.min(w, h) * opt.scale * s.zoom;
      const ox = w / 2;
      const oy = h / 2;
      const D = opt.fov;
      const k = s.disperse * s.disperse * 2.4;


      for (let i = 0; i < n; i++) {
        let x = V[i][0], y = V[i][1], z = V[i][2];
        if (k > 0) { x += seeds[i * 3] * k; y += seeds[i * 3 + 1] * k; z += seeds[i * 3 + 2] * k; }
        const x1 = x * cyw + z * syw;          // yaw (eje Y)
        const z1 = -x * syw + z * cyw;
        const y1 = y * cp - z1 * sp;           // pitch (eje X)
        const z2 = y * sp + z1 * cp;
        const x2 = x1 * cr - y1 * sr;          // roll (eje Z)
        const y2 = x1 * sr + y1 * cr;
        const p = D / (D - z2);
        proj[i * 3] = ox + x2 * size * p;
        proj[i * 3 + 1] = oy - y2 * size * p;
        proj[i * 3 + 2] = z2;
      }


      // --- Agrupar aristas por profundidad (pocas llamadas a stroke) ---
      const B = opt.buckets;
      const paths = Array.from({ length: B * 2 }, () => new Path2D());
      const hotPath = new Path2D();
      const scanPath = new Path2D();
      const bounds = getBounds(mesh);
      const revealing = s.reveal < 1;
      const scanY = bounds.maxY - (bounds.maxY - bounds.minY + 0.1) * s.reveal;


      for (let e = 0; e < E.length; e++) {
        const a = E[e][0], b = E[e][1];
        const weight = E[e][2] == null ? 1 : E[e][2];
        let target;
        if (revealing) {
          const yy = Math.min(V[a][1], V[b][1]);
          if (yy < scanY) continue;
          if (yy - scanY < 0.09) target = scanPath;
        }
        if (!target) {
          if (weight > 1) target = hotPath;
          else {
            const zAvg = (proj[a * 3 + 2] + proj[b * 3 + 2]) / 2;
            const t = clamp((zAvg + 0.9) / 2, 0, 0.999);
            target = paths[(weight < 1 ? B : 0) + Math.floor(t * B)];
          }
        }
        target.moveTo(proj[a * 3], proj[a * 3 + 1]);
        target.lineTo(proj[b * 3], proj[b * 3 + 1]);
      }


      const draw = (dx, color, alphaMul) => {
        ctx.save();
        ctx.translate(dx, 0);
        for (let i = 0; i < B * 2; i++) {
          const diag = i >= B;
          const level = i % B;
          ctx.globalAlpha = (0.08 + 0.92 * Math.pow(level / (B - 1), 1.5)) * (diag ? 0.45 : 1) * s.alpha * alphaMul;
          ctx.strokeStyle = color || opt.color;
          ctx.lineWidth = diag ? 0.6 : 0.9;
          ctx.stroke(paths[i]);
        }
        ctx.globalAlpha = s.alpha * alphaMul;
        ctx.strokeStyle = color || opt.hot;
        ctx.lineWidth = 1.2;
        ctx.stroke(hotPath);
        ctx.restore();
      };


      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';


      // Halo (líneas anchas y tenues)
      if (opt.glowPass) {
        ctx.strokeStyle = opt.glow;
        ctx.lineWidth = 4;
        ctx.globalAlpha = 0.06 * s.alpha;
        for (let i = B - 3; i < B; i++) ctx.stroke(paths[i]);
        ctx.globalAlpha = 0.14 * s.alpha;
        ctx.lineWidth = 5;
        ctx.stroke(hotPath);
      }


      // Glitch: canales desplazados
      if (s.glitch > 0) {
        const off = s.glitch * 7;
        draw(-off, opt.glow, 0.55 * s.glitch);
        draw(off, opt.shadow, 0.7 * s.glitch);
      }


      draw(0, null, 1);


      // Barrido de escaneo
      if (revealing) {
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.3;
        ctx.stroke(scanPath);
        const ly = oy - scanY * size;
        const grad = ctx.createLinearGradient(ox - size * 1.3, 0, ox + size * 1.3, 0);
        grad.addColorStop(0, 'rgba(247,151,245,0)');
        grad.addColorStop(0.5, 'rgba(247,151,245,0.9)');
        grad.addColorStop(1, 'rgba(247,151,245,0)');
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.8 * s.alpha;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ox - size * 1.3, ly);
        ctx.lineTo(ox + size * 1.3, ly);
        ctx.stroke();
      }


      // Puntos de la malla (solo los que miran a la cámara)
      const dots = new Path2D();
      for (let i = 0; i < n; i += 2) {
        if (proj[i * 3 + 2] < 0.25) continue;
        if (revealing && V[i][1] < scanY) continue;
        dots.rect(proj[i * 3] - 0.7, proj[i * 3 + 1] - 0.7, 1.4, 1.4);
      }
      ctx.globalAlpha = 0.55 * s.alpha;
      ctx.fillStyle = opt.hot;
      ctx.fill(dots);


      // Landmarks: círculos de seguimiento
      if (s.landmarks > 0 && mesh.landmarks) {
        ctx.globalAlpha = s.landmarks * s.alpha;
        ctx.strokeStyle = opt.color;
        ctx.lineWidth = 1;
        const r = 5 + (1 - s.landmarks) * 10;
        mesh.landmarks.forEach((i) => {
          const x = proj[i * 3], y = proj[i * 3 + 1];
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.moveTo(x - r - 4, y); ctx.lineTo(x - r + 2, y);
          ctx.moveTo(x + r - 2, y); ctx.lineTo(x + r + 4, y);
          ctx.stroke();
        });
      }


      ctx.restore();
    }


    return { resize, render, clear, canvas };
  }


  YVS.createFaceRenderer = createFaceRenderer;
})(window.YVS = window.YVS || {});




/* ##########################################################################
   6. FLOR DE CEREZO · ASCII ART & MOTOR MORFOLÓGICO
   ########################################################################## */


/* ==========================================================================
   SAKURA ASCII ART ENGINE
   Genera la morfología paramétrica de una flor de cerezo (5 pétalos radiales,
   escotadura distal, estambres y pistilos centrales, y contornos técnicos).
   Permite interpolación continua entre capullo (0.0) y floración total (1.0).
   Devuelve los puntos de ancla de cada carácter para la dispersión.
   ========================================================================== */
(function (YVS) {
  'use strict';


  const CHARS_CORE = ['*', 'o', '°', '+', '·'];
  const CHARS_PETAL = ['+', '=', ':', '-', '~', '·'];
  const CHARS_EDGE = ['-', '=', '+', '_', '|', '[', ']'];
  const CHARS_AURA = ['·', '°', '+', '*'];


  function renderBlossom(ctx, width, height, bloom, time, isLight) {
    const anchors = [];
    if (width <= 0 || height <= 0) return anchors;


    const cx = width / 2;
    const cy = height / 2;
    const minDim = Math.min(width, height);


    // Escala general
    const maxRadius = minDim * 0.38;
    const currentRadius = maxRadius * (0.24 + 0.76 * Math.min(1, bloom));


    // 0. Resplandor cálido ámbar / aureola de pigmento estilo ORBITAL TRACE
    const glowR = currentRadius * (1.18 + 0.32 * bloom);
    const glowGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, glowR);
    if (!isLight) {
      glowGrad.addColorStop(0, `rgba(245, 158, 11, ${0.42 + 0.38 * bloom})`);
      glowGrad.addColorStop(0.35, `rgba(217, 119, 6, ${0.30 + 0.25 * bloom})`);
      glowGrad.addColorStop(0.68, `rgba(180, 83, 9, ${0.12 + 0.14 * bloom})`);
      glowGrad.addColorStop(1, 'rgba(13, 2, 33, 0)');
    } else {
      glowGrad.addColorStop(0, `rgba(245, 158, 11, ${0.28 + 0.22 * bloom})`);
      glowGrad.addColorStop(0.42, `rgba(224, 78, 94, ${0.18 + 0.16 * bloom})`);
      glowGrad.addColorStop(1, 'rgba(250, 246, 240, 0)');
    }
    ctx.save();
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();


    // 1. Líneas orbitales, círculos concéntricos y constelación técnica
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = isLight ? 'rgba(74, 18, 138, 0.22)' : 'rgba(247, 151, 245, 0.20)';
    ctx.setLineDash([3, 6]);

    [0.55, 1.05, 1.45].forEach((scale) => {
      ctx.beginPath();
      ctx.arc(cx, cy, currentRadius * scale, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // Se omiten etiquetas y coordenadas técnicas alrededor de la flor.

    // 2. Eje técnico vertical / tallo con marcas milimétricas
    const stemTop = cy + currentRadius * 0.15;
    const stemBottom = Math.min(height * 0.92, cy + currentRadius * 1.65);
    ctx.strokeStyle = isLight ? 'rgba(196, 131, 36, 0.45)' : 'rgba(251, 191, 36, 0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, stemTop);
    ctx.lineTo(cx, stemBottom);
    ctx.stroke();

    ctx.font = '500 11px "IBM Plex Mono", monospace';
    ctx.fillStyle = isLight ? '#C48324' : '#FBBF24';
    for (let sy = stemTop + 14; sy <= stemBottom; sy += 16) {
      ctx.fillText('+', cx, sy);
      ctx.beginPath();
      ctx.moveTo(cx - 3, sy);
      ctx.lineTo(cx + 3, sy);
      ctx.stroke();
    }
    ctx.restore();


    // 3. Matriz ASCII Art de la Flor de Cerezo
    const cellW = Math.max(7, Math.round(minDim * 0.016));
    const cellH = Math.max(10, Math.round(minDim * 0.024));
    const cols = Math.floor((currentRadius * 2.5) / cellW);
    const rows = Math.floor((currentRadius * 2.5) / cellH);


    ctx.save();
    ctx.font = `500 ${Math.round(cellH * 0.88)}px "IBM Plex Mono", ui-monospace, monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';


    const numPetals = 5;
    const petalAngleStep = (Math.PI * 2) / numPetals;
    const baseOffset = -Math.PI / 2;


    const startX = cx - (cols * cellW) / 2;
    const startY = cy - (rows * cellH) / 2;


    const colAmber = isLight ? '#C48324' : '#FBBF24';
    const colPinkSoft = isLight ? '#C83884' : '#F9B3D1';
    const colMagenta = isLight ? '#9113B2' : '#D45EE5';
    const colCoral = isLight ? '#E04E5E' : '#FF7A8A';
    const colIvory = isLight ? '#1E0A3C' : '#FFF0F5';


    // Clasificación de celdas
    const cellMap = new Uint8Array(rows * cols); // 0=fuera, 1=pétalo, 2=núcleo, 3=borde
    const cellData = new Array(rows * cols);


    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * cellW + cellW / 2;
        const y = startY + r * cellH + cellH / 2;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > currentRadius * 1.2 || dist < 2) continue;


        const angle = Math.atan2(dy, dx);
        const normAngle = ((angle - baseOffset + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        const petalIdx = Math.round(normAngle / petalAngleStep);
        const da = normAngle - petalIdx * petalAngleStep;
        const distRatio = dist / currentRadius;
        const petalSpan = petalAngleStep * 0.52;


        const notch = distRatio > 0.65 ? Math.exp(-(da * da) / 0.015) * 0.16 : 0;
        const maxRAtAngle = currentRadius * (0.86 + 0.14 * Math.cos(da * 2.8)) * (1 - notch);


        const idx = r * cols + c;
        if (distRatio < 0.22) {
          cellMap[idx] = 2; // Núcleo
          cellData[idx] = { x, y, dist, angle, petalIdx: (petalIdx + 5) % 5, distRatio, edge: false };
        } else if (dist <= maxRAtAngle && Math.abs(da) < petalSpan * (0.96 - notch * 0.4)) {
          const edgeDist = maxRAtAngle - dist;
          const isEdge = edgeDist < cellW * 1.2 || Math.abs(Math.abs(da) - petalSpan * 0.9) < 0.08;
          cellMap[idx] = isEdge ? 3 : 1; // 1=interior, 3=borde
          cellData[idx] = { x, y, dist, angle, petalIdx: (petalIdx + 5) % 5, distRatio, edge: isEdge };
        }
      }
    }


    // Renderizado de caracteres ASCII
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const type = cellMap[idx];
        const data = cellData[idx];


        let char = '';
        let color = colPinkSoft;
        let isCore = false;


        if (type === 2) {
          // Núcleo
          isCore = true;
          const coreIdx = Math.floor(Math.abs(Math.sin(data.dist * 0.8 + data.angle * 3 + time * 0.001)) * CHARS_CORE.length);
          char = CHARS_CORE[coreIdx % CHARS_CORE.length];
          color = colAmber;
        } else if (type === 3) {
          // Borde de pétalo
          const edgeChars = ['+', '-', '_', '|', '[', ']'];
          const edgeIdx = Math.floor(Math.abs(Math.cos(data.angle * 7 + time * 0.002)) * edgeChars.length);
          char = edgeChars[edgeIdx % edgeChars.length];
          color = colMagenta;
        } else if (type === 1) {
          // Interior de pétalo: alternancia entre líneas continuas y rejilla de puntos
          const isEvenRow = r % 2 === 0;
          if (isEvenRow) {
            const hasLeft = c > 0 && cellMap[idx - 1] > 0;
            const hasRight = c < cols - 1 && cellMap[idx + 1] > 0;
            if (!hasLeft) char = '[';
            else if (!hasRight) char = ']';
            else if (c % 4 === 0) char = '+';
            else char = (r % 4 === 0) ? '=' : '-';
          } else {
            const dotChars = ['·', '+', '.', 'o'];
            char = dotChars[(c + r) % dotChars.length];
          }
          color = data.distRatio > 0.7 ? colCoral : (data.distRatio > 0.45 ? colPinkSoft : colIvory);
        } else if (bloom > 0.35 && Math.random() < 0.06 * bloom) {
          // Aura de partículas flotantes
          const x = startX + c * cellW + cellW / 2;
          const y = startY + r * cellH + cellH / 2;
          const dist = Math.hypot(x - cx, y - cy);
          if (dist <= currentRadius * 1.18 && dist > currentRadius * 0.4) {
            char = CHARS_AURA[(c + r) % CHARS_AURA.length];
            color = colMagenta;
            anchors.push({ x, y, char, color, petalIndex: (c % 5), distRatio: dist / currentRadius });
          }
        }


        if (char && data) {
          ctx.fillStyle = color;
          if (isCore && !isLight) {
            ctx.shadowColor = colAmber;
            ctx.shadowBlur = 6;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillText(char, data.x, data.y);
          anchors.push({ x: data.x, y: data.y, char, color, petalIndex: data.petalIdx, distRatio: data.distRatio });
        }
      }
    }


    ctx.restore();
    return anchors;
  }


  YVS.SakuraASCII = { renderBlossom };
})(window.YVS = window.YVS || {});




/* ==========================================================================
   SAKURA INTRO — Secuencia de bienvenida y transición en 5 etapas
   Etapa 1: Capullo cerrado
   Etapa 2: Florecimiento continuo (tecla espacio, 5 segundos)
   Etapa 3: Floración completa
   Etapa 4: Dispersión en miles de partículas desde cada pétalo
   Etapa 5: Revelación suave de la homepage y continuidad generativa
   ========================================================================== */
(function (YVS) {
  'use strict';


  const SESSION_KEY = 'yvs-intro-seen';
  let canvas, ctx, w = 0, h = 0, dpr = 1;
  let raf = 0;
  let root = null;
  let bloom = 0;
  let targetBloom = 0;
  let dwellStart = null;
  const DWELL_DURATION = 1200; // 1.2 segundos para confirmar
  let stage = 1;
  let isDispersed = false;
  let lastAnchors = [];
  let consoleLines = {};
  let dwellCircle = null;
  let bloomSlider = null;
  let bloomVal = null;
  let statusText = null;
  let spaceHeld = false;
  let lastFrameTime = 0;


  function resize() {
    if (!canvas) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }


  function setBloom(val) {
    if (stage >= 4) return;
    targetBloom = Math.min(1, Math.max(0, val));
    if (bloomSlider && Math.abs(parseFloat(bloomSlider.value) - targetBloom) > 0.02) {
      bloomSlider.value = targetBloom;
    }
    if (bloomVal) {
      bloomVal.textContent = Math.round(targetBloom * 100) + '%';
    }
  }


  function updateHUD(time) {
    if (statusText) {
      if (stage === 1) statusText.textContent = `CAPULLO // ${Math.round(bloom * 100)}%`;
      else if (stage === 2) statusText.textContent = `ABRIENDO // ${Math.round(bloom * 100)}%`;
      else if (stage === 3) statusText.textContent = `CONFIRMANDO // ${Math.round(((time - dwellStart) / DWELL_DURATION) * 100)}%`;
      else if (stage === 4) statusText.textContent = `DISPERSIÓN // 2400+ VTX`;
      else statusText.textContent = `REVELADO // HOMEPAGE`;
    }


    if (consoleLines.state && stage < 3) {
      consoleLines.state.classList.add('is-on');
      if (bloom < 0.15) {
        consoleLines.state.textContent = YVS.i18n.t('intro.stateBud');
      } else {
        consoleLines.state.textContent = YVS.i18n.t('intro.stateOpening');
      }
    }
  }


  function triggerDisperse() {
    if (isDispersed) return;
    isDispersed = true;
    stage = 4;


    if (consoleLines.dwell) consoleLines.dwell.classList.remove('is-on');
    if (consoleLines.disperse) consoleLines.disperse.classList.add('is-on');


    // Desconecta la cámara temporalmente para dedicar 100% recursos a las partículas
    if (YVS.gestures && YVS.gestures.pauseDetectionForTransition) {
      YVS.gestures.pauseDetectionForTransition();
    }


    // Lanza la dispersión unificada de partículas
    if (YVS.particles && YVS.particles.burstFromBlossom) {
      YVS.particles.burstFromBlossom(lastAnchors);
    }


    // Etapa 5: Revelación gradual de la homepage
    setTimeout(() => {
      stage = 5;
      if (root) root.classList.add('is-leaving');
      document.body.classList.remove('is-intro');
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}
      document.dispatchEvent(new CustomEvent('yvs:introleave'));


      setTimeout(() => {
        if (root) root.classList.add('is-done');
        cancelAnimationFrame(raf);
        document.dispatchEvent(new CustomEvent('yvs:introdone'));
      }, 1100);
    }, 850);
  }


  function tick(now) {
    ctx.clearRect(0, 0, w, h);


    // La tecla espacio controla la floración durante cinco segundos acumulados.
    // Al soltarla, la flor se detiene; al presionarla de nuevo, continúa.
    const delta = lastFrameTime ? Math.min(40, now - lastFrameTime) : 0;
    lastFrameTime = now;
    if (spaceHeld && !isDispersed) {
      targetBloom = Math.min(1, targetBloom + delta / 5000);
    }
    bloom += (targetBloom - bloom) * 0.16;
    if (targetBloom >= 1) bloom = 1;

    const title = document.querySelector('.intro__portfolio-title');
    if (title) title.style.setProperty('--intro-reveal', String(bloom));

    stage = bloom < 0.15 ? 1 : 2;


    // Dibujar la Flor de Cerezo en ASCII Art
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (stage < 5) {
      lastAnchors = YVS.SakuraASCII.renderBlossom(ctx, w, h, bloom, now, isLight);
      const countEl = document.getElementById('intro-count');
      if (countEl && lastAnchors.length) {
        countEl.textContent = `ASCII ${String(lastAnchors.length).padStart(4, '0')} CHR`;
      }
    }


    if (targetBloom >= 1 && !isDispersed) {
      bloom = 1;
      triggerDisperse();
    }

    updateHUD(now);


    if (stage < 5) {
      raf = requestAnimationFrame(tick);
    }
  }


  function skip() {
    if (isDispersed) return;
    targetBloom = 1;
    bloom = 1;
    triggerDisperse();
  }
  function run(cfg) {
    root = cfg.root || document.getElementById('intro');
    canvas = cfg.canvas || document.getElementById('intro-canvas');
    if (!root || !canvas) return;


    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === '1'; } catch (e) {}


    if (seen) {
      root.classList.add('is-done');
      document.body.classList.remove('is-intro');
      document.dispatchEvent(new CustomEvent('yvs:introleave'));
      document.dispatchEvent(new CustomEvent('yvs:introdone'));
      return;
    }


    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);


    dwellCircle = document.getElementById('dwell-progress');
    bloomSlider = document.getElementById('manual-bloom-slider');
    bloomVal = document.getElementById('bloom-val');
    statusText = document.getElementById('intro-status-text');


    consoleLines = {
      state: document.getElementById('intro-console-state'),
      dwell: document.getElementById('intro-console-dwell'),
      disperse: document.getElementById('intro-console-disperse')
    };


    if (bloomSlider) {
      bloomSlider.addEventListener('input', (e) => {
        setBloom(parseFloat(e.target.value));
      });
    }


    const skipBtn = document.getElementById('intro-skip');
    if (skipBtn) skipBtn.addEventListener('click', skip);


    document.addEventListener('keydown', (e) => {
      if ((e.code === 'Space' || e.key === ' ') && !isDispersed) {
        e.preventDefault();
        spaceHeld = true;
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        spaceHeld = false;
      }
    });
    window.addEventListener('blur', () => { spaceHeld = false; });


    const camBtn = document.getElementById('intro-cam-btn');
    if (camBtn) {
      camBtn.addEventListener('click', () => {
        if (YVS.gestures && YVS.gestures.toggleCamera) {
          YVS.gestures.toggleCamera();
        }
      });
    }


    if (YVS.reduced) {
      // Movimiento reducido
      bloom = 1;
      targetBloom = 1;
      setTimeout(skip, 1400);
      return;
    }


    raf = requestAnimationFrame(tick);
  }


  YVS.intro = {
    run,
    setBloom,
    skip,
    get stage() { return stage; },
    get bloom() { return bloom; }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   7. CARA · RETRATO
   ########################################################################## */


/* ==========================================================================
   FACE PORTRAIT — Placeholder del retrato en "Sobre mí"
   Reutiliza el mismo renderizador: la cara gira lentamente y sigue
   levemente al cursor. Solo se anima cuando está visible.
   (Cuando tengas la foto real, reemplaza el <canvas> por un <img>.)
   ========================================================================== */
(function (YVS) {
  'use strict';


  function init(canvas, source, reduced) {
    if (!canvas) return;
    const renderer = YVS.createFaceRenderer(canvas, { scale: 0.3, glowPass: true });
    const mesh = source.getMesh();
    let visible = false;
    let paused = false;
    let raf = 0;
    let target = { x: 0, y: 0 };
    let look = { x: 0, y: 0 };


    const draw = (t) => {
      look.x += (target.x - look.x) * 0.05;
      look.y += (target.y - look.y) * 0.05;
      renderer.render(mesh, {
        yaw: Math.sin(t * 0.0004) * 0.45 + look.x * 0.35,
        pitch: -0.06 + look.y * 0.2,
        roll: 0,
        alpha: 0.95
      });
    };


    const loop = (t) => {
      draw(t);
      if (visible && !paused) raf = requestAnimationFrame(loop);
    };


    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) { draw(0); return; }
      if (visible && !paused) raf = requestAnimationFrame(loop);
    };


    renderer.resize();
    draw(0);


    window.addEventListener('resize', () => { renderer.resize(); draw(performance.now()); });


    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        start();
      }).observe(canvas);
    }


    window.addEventListener('pointermove', (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });


    document.addEventListener('yvs:pause', (e) => { paused = e.detail.paused; start(); });
  }


  YVS.facePortrait = { init };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   8. FONDO GENERATIVO · MANCHAS, GRADIENTES Y PARTÍCULAS
   ########################################################################## */


/* ==========================================================================
   BACKGROUND & UNIFIED PARTICLES ENGINE — Organic Perception
   - Manchas orgánicas generativas: nebulosas de pigmentos difuminados multicapa
   - Texturas de semitono (halftone) y líneas orbitales
   - Sistema unificado de partículas: gestiona el ambiente y recibe la dispersión
     de miles de partículas procedentes de la flor de cerezo ASCII
   - Reacción al cursor del ratón y a la mano detectada por MediaPipe
   - Respeta prefers-reduced-motion y pausa gestual
   ========================================================================== */
(function (YVS) {
  'use strict';


  const COLORS_DARK = ['#F797F5', '#D45EE5', '#9113B2', '#FF7A8A', '#FFAE9E', '#E8A850', '#FFF0F5'];
  const COLORS_LIGHT = ['#D8469E', '#A822B5', '#6E1599', '#E04E5E', '#D97059', '#C48324', '#FAF6F0'];
  const LINK_DIST = 120;


  let canvas, ctx, w = 0, h = 0, dpr = 1;
  let particles = [];
  let burstParticles = [];
  let raf = 0;
  let paused = false;
  let reduced = false;
  let fade = 0;
  const mouse = { x: -9999, y: -9999 };
  const hand = { x: -9999, y: -9999, active: false };


  // Manchas de pigmento orgánicas (Metaballs generativos)
  const BLOBS = [
    { xRatio: 0.18, yRatio: 0.22, rRatio: 0.38, colDark: 'rgba(76, 2, 142, 0.45)', colLight: 'rgba(216, 70, 158, 0.20)', speed: 0.00028, px: 0.2, py: 1.1 },
    { xRatio: 0.82, yRatio: 0.28, rRatio: 0.44, colDark: 'rgba(212, 94, 229, 0.35)', colLight: 'rgba(168, 34, 181, 0.18)', speed: 0.00022, px: 2.3, py: 0.5 },
    { xRatio: 0.32, yRatio: 0.78, rRatio: 0.42, colDark: 'rgba(145, 19, 178, 0.38)', colLight: 'rgba(224, 78, 94, 0.18)', speed: 0.00032, px: 1.5, py: 3.1 },
    { xRatio: 0.74, yRatio: 0.75, rRatio: 0.36, colDark: 'rgba(255, 122, 138, 0.25)', colLight: 'rgba(217, 112, 89, 0.22)', speed: 0.00025, px: 3.1, py: 2.4 },
    { xRatio: 0.52, yRatio: 0.48, rRatio: 0.34, colDark: 'rgba(232, 168, 80, 0.20)', colLight: 'rgba(196, 131, 36, 0.16)', speed: 0.00035, px: 4.0, py: 1.6 }
  ];


  function isThemeLight() {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }


  function makeParticle(x, y, customCol, customSpeed) {
    const angle = Math.random() * Math.PI * 2;
    const speed = customSpeed || (0.08 + Math.random() * 0.24);
    const cols = isThemeLight() ? COLORS_LIGHT : COLORS_DARK;
    return {
      x: x == null ? Math.random() * w : x,
      y: y == null ? Math.random() * h : y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      bx: Math.cos(angle) * speed,
      by: Math.sin(angle) * speed,
      r: 0.7 + Math.random() * 1.8,
      c: customCol || cols[(Math.random() * cols.length) | 0],
      alpha: 0.5 + Math.random() * 0.45
    };
  }


  function targetCount() {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const n = Math.round((w * h) / 14000);
    return Math.max(28, Math.min(coarse ? 45 : 85, n));
  }


  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = targetCount();
    while (particles.length < n) particles.push(makeParticle());
    particles.length = n;
    if (reduced) frame(performance.now());
  }


  /**
   * Dispersión de la flor: inyecta más de 2000 partículas desde los caracteres ASCII
   * de los pétalos hacia el fondo generativo de la homepage.
   */
  function burstFromBlossom(anchors) {
    if (reduced || !anchors || !anchors.length) {
      burst();
      return;
    }


    const cx = w / 2;
    const cy = h / 2;
    const countPerAnchor = Math.max(1, Math.floor(2400 / anchors.length));


    anchors.forEach((a) => {
      for (let k = 0; k < countPerAnchor; k++) {
        const angle = Math.atan2(a.y - cy, a.x - cx) + (Math.random() - 0.5) * 0.9;
        const speed = 2.5 + Math.random() * 8.5;
        burstParticles.push({
          x: a.x + (Math.random() - 0.5) * 6,
          y: a.y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 1.0 + Math.random() * 2.6,
          c: a.color,
          alpha: 1.0,
          decay: 0.0035 + Math.random() * 0.005,
          friction: 0.958 + Math.random() * 0.015
        });
      }
    });


    fade = 0.85;
  }


  function burst() {
    if (reduced) return;
    const cx = w / 2, cy = h / 2;
    particles.forEach((p) => {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * Math.min(w, h) * 0.18;
      const sp = 2 + Math.random() * 5;
      p.x = cx + Math.cos(a) * r;
      p.y = cy + Math.sin(a) * r;
      p.vx = Math.cos(a) * sp;
      p.vy = Math.sin(a) * sp;
    });
    fade = 0.5;
  }


  function drawBlobs(time, light) {
    ctx.save();
    ctx.globalCompositeOperation = light ? 'multiply' : 'screen';


    BLOBS.forEach((b) => {
      const bx = (b.xRatio + 0.07 * Math.sin(time * b.speed + b.px)) * w;
      const by = (b.yRatio + 0.07 * Math.cos(time * b.speed + b.py)) * h;
      const br = Math.min(w, h) * b.rRatio * (0.92 + 0.08 * Math.sin(time * 0.0004 + b.px));


      // Reacción al cursor / mano
      const targetX = hand.active ? hand.x : mouse.x;
      const targetY = hand.active ? hand.y : mouse.y;
      const dx = bx - targetX;
      const dy = by - targetY;
      const d = Math.hypot(dx, dy);
      const pushX = d < 250 && d > 1 ? (dx / d) * (250 - d) * 0.15 : 0;
      const pushY = d < 250 && d > 1 ? (dy / d) * (250 - d) * 0.15 : 0;


      const grad = ctx.createRadialGradient(bx + pushX, by + pushY, 0, bx + pushX, by + pushY, br);
      const col = light ? b.colLight : b.colDark;
      grad.addColorStop(0, col);
      const commaIdx = col.lastIndexOf(',');
      const dimCol = commaIdx !== -1 ? col.slice(0, commaIdx) + ', 0.12)' : col;
      grad.addColorStop(0.55, dimCol);
      grad.addColorStop(1, 'rgba(0,0,0,0)');


      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(bx + pushX, by + pushY, br, 0, Math.PI * 2);
      ctx.fill();
    });


    ctx.restore();
  }


  function drawHalftoneAndOrbits(light) {
    ctx.save();
    ctx.strokeStyle = light ? 'rgba(30, 10, 60, 0.05)' : 'rgba(247, 151, 245, 0.06)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([4, 12]);


    // Órbitas tenues de fondo
    const cx = w * 0.72;
    const cy = h * 0.45;
    const r1 = Math.min(w, h) * 0.35;
    const r2 = Math.min(w, h) * 0.55;


    ctx.beginPath();
    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(cx, cy, r2, 0, Math.PI * 2);
    ctx.stroke();


    ctx.restore();
  }


  function frame(now) {
    ctx.clearRect(0, 0, w, h);
    fade = Math.min(1, fade + 0.012);
    const light = isThemeLight();


    // 1. Manchas orgánicas de pigmento difuminadas
    drawBlobs(now, light);


    // 2. Líneas orbitales y semitono
    drawHalftoneAndOrbits(light);


    // 3. Partículas ambientales
    const activeTargetX = hand.active ? hand.x : mouse.x;
    const activeTargetY = hand.active ? hand.y : mouse.y;


    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!reduced) {
        p.vx += (p.bx - p.vx) * 0.02;
        p.vy += (p.by - p.vy) * 0.02;


        const dx = p.x - activeTargetX;
        const dy = p.y - activeTargetY;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14400 && d2 > 0.1) {
          const f = (1 - Math.sqrt(d2) / 120) * 0.6;
          p.vx += (dx / Math.sqrt(d2)) * f;
          p.vy += (dy / Math.sqrt(d2)) * f;
        }


        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;
      }
    }


    // Conexiones de red
    ctx.lineWidth = 0.6;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK_DIST) * (light ? 0.15 : 0.22) * fade;
          ctx.strokeStyle = light ? '#A822B5' : '#D45EE5';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }


    // Dibujar partículas ambientales
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.globalAlpha = p.alpha * fade;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }


    // 4. Partículas de dispersión procedente de la flor de cerezo
    for (let i = burstParticles.length - 1; i >= 0; i--) {
      const bp = burstParticles[i];
      bp.x += bp.vx;
      bp.y += bp.vy;
      bp.vx *= bp.friction;
      bp.vy *= bp.friction;
      bp.alpha -= bp.decay;


      if (bp.alpha <= 0.02) {
        burstParticles.splice(i, 1);
        continue;
      }


      ctx.globalAlpha = Math.max(0, bp.alpha);
      ctx.fillStyle = bp.c;
      ctx.beginPath();
      ctx.arc(bp.x, bp.y, bp.r, 0, Math.PI * 2);
      ctx.fill();
    }


    ctx.globalAlpha = 1;
  }


  function loop(now) {
    frame(now);
    if (!paused && !document.hidden) raf = requestAnimationFrame(loop);
  }


  function start() {
    cancelAnimationFrame(raf);
    if (reduced) { fade = 1; frame(0); return; }
    if (!paused && !document.hidden) raf = requestAnimationFrame(loop);
  }


  function setPaused(value) {
    paused = value;
    start();
  }


  function setHandPosition(x, y, active) {
    hand.x = x;
    hand.y = y;
    hand.active = active;
  }


  function init(el, isReduced) {
    canvas = el;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    reduced = isReduced;
    resize();
    start();


    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', start);
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  }


  YVS.background = {
    init,
    burst,
    burstFromBlossom,
    setPaused,
    setHandPosition,
    get paused() { return paused; }
  };
  YVS.particles = YVS.background;
})(window.YVS = window.YVS || {});




/* ##########################################################################
   9. NAVEGACIÓN
   ########################################################################## */


/* ==========================================================================
   NAV — Barra fija, menú móvil, sección activa y aparición al hacer scroll
   ========================================================================== */
(function (YVS) {
  'use strict';


  let revealStarted = false;


  function init() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('nav-burger');
    const links = Array.from(document.querySelectorAll('.nav__link'));
    if (!nav) return;


    // Fondo más sólido al hacer scroll
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle('is-scrolled', window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();


    // Menú móvil
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      if (burger) burger.setAttribute('aria-expanded', String(open));
    };
    if (burger) burger.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    links.forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false); });


    // Sección activa
    if ('IntersectionObserver' in window) {
      const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
          const link = map.get(entry.target.id);
          if (link) { link.classList.add('is-active'); link.setAttribute('aria-current', 'true'); }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      document.querySelectorAll('#top, #proyectos, #sobre-mi, #contacto').forEach((s) => io.observe(s));
    }


    // Enlaces pendientes de completar [ ... ]
    document.querySelectorAll('a[data-placeholder]').forEach((a) => {
      a.addEventListener('click', (e) => {
        if (a.getAttribute('href') === '#') e.preventDefault();
      });
    });
  }


  /** Activa las apariciones .reveal (se llama al terminar la intro). */
  function initReveal() {
    if (revealStarted) return;
    revealStarted = true;
    const items = document.querySelectorAll('.reveal');


    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  }


  YVS.nav = { init, initReveal };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   10. TARJETAS Y MODAL
   ########################################################################## */


/* ==========================================================================
   CARDS — Tarjetas de proyecto: tilt 3D, brillo y modal de detalle
   API pública (usada también por el panel de gestos):
     YVS.cards.open(id) · next() · prev() · openCurrent()
   ========================================================================== */
(function (YVS) {
  'use strict';


  /* [rellenar] Enlaces de cada proyecto (GitHub Pages, video, Behance…).
     Mientras estén vacíos, el botón muestra "[enlace del proyecto]". */
  const LINKS = {
    dos: '',
    pulso: '',
    senses: '',
    ninos: ''
  };


  let cards = [];
  let modal, current = null, highlight = -1, lastFocus = null;
  const t = (k) => YVS.i18n.t(k);


  function enableTilt(card) {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.setProperty('--ry', ((px - 0.5) * 9).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((0.5 - py) * 7).toFixed(2) + 'deg');
      card.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }


  function fill(id) {
    const card = cards.find((c) => c.dataset.project === id);
    if (!card) return;
    const base = 'projects.items.' + id + '.';
    const isOskowampik = id === 'oskowampik';



const projectLabel = id === 'oskowampik'
  ? 'Modelado 3D'
  : t(base + 'label');

const projectTitle = id === 'oskowampik'
  ? 'Oskowampik'
  : t(base + 'title');

const projectDescription = id === 'oskowampik'
  ? 'Este es un cortometraje motion capture. La historia sigue a dos jóvenes investigadores que se adentran en la cordillera central Colombiana para documentar las tradiciones de una comunidad originaria casi desconocida. Guiados por un misterioso intermediario descubrirán la magia que resguarda este pueblo y el inminente riesgo de que su legado desaparezca para siempre.'
  : t(base + 'long');

document.getElementById('modal-label').innerHTML =
  '<span class="card__num">PRJ_' + card.dataset.num + '</span> // ' + escapeHtml(projectLabel);

document.getElementById('modal-title').textContent = projectTitle;
document.getElementById('modal-text').textContent = projectDescription;



    const tools = document.getElementById('modal-tools');
    tools.innerHTML = '';
    card.querySelectorAll('.chips .chip').forEach((chip) => tools.appendChild(chip.cloneNode(true)));


    const media = document.getElementById('modal-media');
    media.innerHTML = '';

    
    if (id === 'ninos' || id === 'oskowampik') {
      const video = document.createElement('iframe');

      video.src = id === 'ninos'
        ? 'https://player.vimeo.com/video/1247494989?title=0&byline=0&portrait=0&autopause=0'
        : 'https://player.vimeo.com/video/1247582273?autopause=0&player_id=0&app_id=58479';

      video.title = id === 'ninos' ? 'Ser Niños' : 'Oskowampik';
      video.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
      video.allowFullscreen = true;
      video.loading = 'lazy';
      media.appendChild(video);
    } else {
      const ph = card.querySelector('.ph');
      if (ph) media.appendChild(ph.cloneNode(true));
    }


    const link = document.getElementById('modal-link');
    if (LINKS[id]) {
      link.href = LINKS[id];
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = t('projects.visit') + ' ↗';
      link.removeAttribute('data-placeholder');
    } else {
      link.href = '#';
      link.removeAttribute('target');
      link.textContent = t('projects.link');
      link.setAttribute('data-placeholder', '');
    }
  }


  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }


  function open(id) {
    if (!modal) return;
    current = id;
    highlight = cards.findIndex((c) => c.dataset.project === id);
    fill(id);
    lastFocus = document.activeElement;
    if (typeof modal.showModal === 'function') {
      if (!modal.open) modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  }


  function close() {
    if (!modal) return;
    if (typeof modal.close === 'function' && modal.open) modal.close();
    else modal.removeAttribute('open');
  }


  function setHighlight(index) {
    if (!cards.length) return;
    highlight = (index + cards.length) % cards.length;
    cards.forEach((c, i) => c.classList.toggle('is-highlight', i === highlight));
    const card = cards[highlight];
    card.scrollIntoView({ behavior: YVS.reduced ? 'auto' : 'smooth', block: 'center' });
    const btn = card.querySelector('.card__open');
    if (btn) btn.focus({ preventScroll: true });
  }


  function next() { if (modal && modal.open) close(); setHighlight(highlight + 1); }
  function prev() { if (modal && modal.open) close(); setHighlight(highlight - 1); }
  function openCurrent() {
    const card = cards[highlight >= 0 ? highlight : 0];
    if (card) open(card.dataset.project);
  }


  function init() {
    cards = Array.from(document.querySelectorAll('.card[data-project]'));
    modal = document.getElementById('project-modal');


    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (fine && !YVS.reduced) cards.forEach(enableTilt);


    document.querySelectorAll('[data-open]').forEach((btn) => {
      btn.addEventListener('click', () => open(btn.dataset.open));
    });


    if (!modal) return;
    modal.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', close));
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); }); // clic en el fondo
    modal.addEventListener('close', () => {
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
    });
    document.getElementById('modal-link').addEventListener('click', (e) => {
      if (e.currentTarget.hasAttribute('data-placeholder')) e.preventDefault();
    });


    document.addEventListener('yvs:langchange', () => { if (modal.open && current) fill(current); });
  }


  YVS.cards = { init, open, close, next, prev, openCurrent };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   11. PANEL DE GESTOS · MEDIAPIPE VISION + CLASIFICADOR GEOMÉTRICO
   ########################################################################## */


/* ==========================================================================
   GESTURE INTERFACE — MediaPipe Tasks Vision (Hands) & Gestos Reales
   - Carga dinámica de @mediapipe/tasks-vision con HandLandmarker
   - Control de permisos de cámara y ciclo de vida de streams
   - Clasificación geométrica invariante a escala:
       * Mano abierta (open_palm): apertura continua / pausar fondo
       * Deslizar (swipe): avance rápido lateral de muñeca/palma → siguiente proyecto
       * Pinza (pinch): aproximación pulgar-índice → abrir proyecto
   - Conexión reactiva al SVG #hand-svg con actualización de los 21 landmarks
   - Mantiene 100% la simulación manual por clic sin cámara
   ========================================================================== */
(function (YVS) {
  'use strict';


  const GESTURE_MAP = {
    open_palm: 'pause',
    swipe: 'next',
    pinch: 'open'
  };


  const actions = {
    pause() {
      const paused = !(YVS.background && YVS.background.paused);
      if (YVS.background) YVS.background.setPaused(paused);
      document.dispatchEvent(new CustomEvent('yvs:pause', { detail: { paused } }));
      toast(paused ? 'gesture.toast.pause' : 'gesture.toast.resume');
    },
    next() {
      YVS.cards.next();
      toast('gesture.toast.next');
    },
    open() {
      toast('gesture.toast.open');
      YVS.cards.openCurrent();
    }
  };


  // Topología MediaPipe Hands: 21 puntos anatómicos
  const HAND_BASE = [
    [50, 112],
    [36, 103], [25, 92], [17, 81], [11, 71],
    [37, 72], [34, 54], [32, 42], [30, 31],
    [49, 69], [49, 49], [49, 36], [49, 24],
    [60, 71], [63, 53], [65, 41], [67, 31],
    [70, 77], [75, 64], [78, 55], [81, 46]
  ];
  const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]
  ];
  const TIPS = [4, 8, 12, 16, 20];


  let panel, btn, toastEl, toastTimer;
  let videoEl, debugCanvas, debugCtx;
  let handSvgBones = [], handSvgJoints = [];
  let isCameraActive = false;
  let stream = null;
  let handLandmarker = null;
  let isModelLoading = false;
  let lastVideoTime = -1;
  let rafDetect = 0;


  // Variables de suavizado y clasificación
  let smoothedLandmarks = null;
  let currentOpenRatio = 0;
  let lastSwipeTime = 0;
  let lastPinchTime = 0;
  let lastPauseTime = 0;
  let prevWristX = null;
  let prevTimestamp = null;


  function toast(key) {
    if (!toastEl) return;
    toastEl.textContent = YVS.i18n.t(key);
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 1800);
  }


  function setStatus(statusKey, isConnected) {
    const valEl = document.getElementById('gesture-status-val');
    const barEl = document.getElementById('gesture-status-bar');
    const camLabel = document.getElementById('gesture-cam-label');


    if (valEl) valEl.textContent = YVS.i18n.t('gesture.' + statusKey) || statusKey;
    if (barEl) barEl.classList.toggle('is-connected', !!isConnected);
    if (camLabel) {
      if (isConnected) camLabel.textContent = '[ cámara activa // visión online ]';
      else camLabel.textContent = '[ cámara desactivada ]';
    }


    const camBtnText = document.getElementById('gesture-cam-btn-text');
    const introCamText = document.getElementById('intro-cam-text');
    const label = isCameraActive ? YVS.i18n.t('gesture.btnStop') : YVS.i18n.t('gesture.btnStart');
    if (camBtnText) camBtnText.textContent = label;
    if (introCamText) introCamText.textContent = label;


    const camToggles = document.querySelectorAll('.cam-btn, .intro__cam-toggle');
    camToggles.forEach(b => b.classList.toggle('is-active', isCameraActive));
  }


  function drawHand(svg) {
    if (!svg) return;
    const NS = 'http://www.w3.org/2000/svg';
    svg.innerHTML = '';
    handSvgBones = [];
    handSvgJoints = [];


    HAND_CONNECTIONS.forEach(([a, b]) => {
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', HAND_BASE[a][0]); l.setAttribute('y1', HAND_BASE[a][1]);
      l.setAttribute('x2', HAND_BASE[b][0]); l.setAttribute('y2', HAND_BASE[b][1]);
      l.setAttribute('class', 'hand-bone');
      svg.appendChild(l);
      handSvgBones.push({ el: l, a, b });
    });


    HAND_BASE.forEach(([x, y], i) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', x); c.setAttribute('cy', y);
      c.setAttribute('r', TIPS.includes(i) ? 2.8 : 2);
      c.setAttribute('class', TIPS.includes(i) ? 'hand-joint is-tip' : 'hand-joint');
      svg.appendChild(c);
      handSvgJoints.push(c);
    });
  }


  function updateSvgHand(landmarks) {
    if (!landmarks || !landmarks.length) return;
    // Mapeo de coordenadas normalizadas (0..1) al viewBox (100x120)
    const pts = landmarks.map(p => [
      Math.round((1 - p.x) * 100), // Espejo horizontal
      Math.round(p.y * 115 + 2)
    ]);


    handSvgBones.forEach(({ el, a, b }) => {
      el.setAttribute('x1', pts[a][0]); el.setAttribute('y1', pts[a][1]);
      el.setAttribute('x2', pts[b][0]); el.setAttribute('y2', pts[b][1]);
    });


    handSvgJoints.forEach((c, i) => {
      c.setAttribute('cx', pts[i][0]);
      c.setAttribute('cy', pts[i][1]);
    });
  }


  /**
   * Carga asíncrona de MediaPipe Tasks Vision desde CDN con fallback
   */
  async function loadMediaPipe() {
    if (handLandmarker) return handLandmarker;
    if (isModelLoading) return null;
    isModelLoading = true;
    setStatus('statusModel', false);


    try {
      const visionModule = await import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.js');
      const { FilesetResolver, HandLandmarker } = visionModule;
      const wasm = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
      );


      handLandmarker = await HandLandmarker.createFromOptions(wasm, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
          delegate: 'GPU'
        },
        runningMode: 'VIDEO',
        numHands: 1
      });


      const modelBadge = document.getElementById('gesture-model-status');
      if (modelBadge) modelBadge.textContent = 'Vision // Online';
      isModelLoading = false;
      return handLandmarker;
    } catch (err) {
      console.warn('[YVS.gestures] Error cargando MediaPipe Tasks Vision. Modo simulación activado.', err);
      isModelLoading = false;
      setStatus('statusError', false);
      return null;
    }
  }


  async function startCamera() {
    if (isCameraActive) return;
    setStatus('statusPerm', false);


    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false
      });


      if (!videoEl) videoEl = document.getElementById('gesture-video');
      if (videoEl) {
        videoEl.srcObject = stream;
        await videoEl.play();
      }


      isCameraActive = true;
      const viz = document.getElementById('gesture-viz');
      if (viz) viz.classList.add('has-camera');


      setStatus('statusReady', true);
      await loadMediaPipe();
      detectLoop();
    } catch (err) {
      console.warn('[YVS.gestures] Permiso de cámara no concedido o no disponible.', err);
      isCameraActive = false;
      setStatus('statusError', false);
      toast('gesture.statusError');
    }
  }


  function stopCamera() {
    isCameraActive = false;
    cancelAnimationFrame(rafDetect);


    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
    if (videoEl) {
      videoEl.srcObject = null;
    }


    const viz = document.getElementById('gesture-viz');
    if (viz) viz.classList.remove('has-camera');


    drawHand(document.getElementById('hand-svg'));
    setStatus('statusReady', false);
  }


  function toggleCamera() {
    if (isCameraActive) stopCamera();
    else startCamera();
  }


  function pauseDetectionForTransition() {
    // Breve pausa para no sobrecargar el hilo mientras las partículas explotan
    if (isCameraActive) {
      cancelAnimationFrame(rafDetect);
      setTimeout(() => {
        if (isCameraActive) detectLoop();
      }, 1500);
    }
  }


  function dist(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }


  /**
   * Clasificador de gestos geométricos normalizados
   */
  function classifyHand(landmarks, timestamp) {
    const wrist = landmarks[0];
    const mcpMiddle = landmarks[9];
    const palmScale = dist(wrist, mcpMiddle) || 0.1;


    // 1. Apertura de la mano (Open Palm / Bloom ratio)
    // Calcula la extensión de las 5 yemas respecto a la muñeca
    let totalExt = 0;
    TIPS.forEach(tipIdx => {
      totalExt += dist(wrist, landmarks[tipIdx]) / palmScale;
    });
    const avgExt = totalExt / TIPS.length;


    // Mapeo empírico: puño cerrado ~ 0.8..1.0, mano abierta ~ 1.7..2.2
    const rawRatio = Math.min(1, Math.max(0, (avgExt - 0.95) / 0.85));
    // Suavizado EMA
    currentOpenRatio += (rawRatio - currentOpenRatio) * 0.28;


    // 2. Pinza (Pinch): distancia entre pulgar (4) e índice (8)
    const pinchDist = dist(landmarks[4], landmarks[8]) / palmScale;


    // 3. Velocidad lateral (Swipe) basada en la muñeca (0)
    let vx = 0;
    if (prevWristX !== null && prevTimestamp !== null) {
      const dt = (timestamp - prevTimestamp) / 1000;
      if (dt > 0.005) {
        vx = (wrist.x - prevWristX) / dt;
      }
    }
    prevWristX = wrist.x;
    prevTimestamp = timestamp;


    // Actualizar telemetría visual en el panel
    const telOpen = document.getElementById('telemetry-open');
    const telGesture = document.getElementById('telemetry-gesture');
    const telPinch = document.getElementById('telemetry-pinch');
    const telAction = document.getElementById('telemetry-action');


    if (telOpen) telOpen.textContent = Math.round(currentOpenRatio * 100) + '%';
    if (telPinch) telPinch.textContent = (pinchDist * 10).toFixed(1);


    // Conectar con el fondo para esquivar la mano
    if (YVS.background && YVS.background.setHandPosition) {
      YVS.background.setHandPosition(
        (1 - wrist.x) * window.innerWidth,
        wrist.y * window.innerHeight,
        true
      );
    }


    // GESTIÓN DE CONTEXTOS
    // Si estamos en la INTRO: la apertura de la mano controla la flor de cerezo
    if (YVS.intro && YVS.intro.stage < 4) {
      YVS.intro.setBloom(currentOpenRatio);
      if (telGesture) telGesture.textContent = currentOpenRatio > 0.88 ? 'mano abierta (flor)' : 'abriendo';
      if (telAction) telAction.textContent = currentOpenRatio > 0.88 ? 'confirmando dwell' : 'floreciendo';
      return;
    }


    // Si estamos en la HOMEPAGE:
    const now = performance.now();


    // A. Pinza (Pinch) -> Abrir proyecto actual
    if (pinchDist < 0.28 && now - lastPinchTime > 900) {
      lastPinchTime = now;
      handle('pinch');
      if (telGesture) telGesture.textContent = 'pinza (pinch)';
      if (telAction) telAction.textContent = 'abrir proyecto';
      return;
    }


    // B. Deslizar (Swipe) -> Siguiente proyecto
    if (Math.abs(vx) > 1.25 && now - lastSwipeTime > 700) {
      lastSwipeTime = now;
      handle('swipe');
      if (telGesture) telGesture.textContent = 'deslizar (swipe)';
      if (telAction) telAction.textContent = 'siguiente proyecto';
      return;
    }


    // C. Mano abierta (Open Palm) en homepage -> Pausar / reanudar fondo
    if (currentOpenRatio > 0.88 && now - lastPauseTime > 1200) {
      lastPauseTime = now;
      handle('open_palm');
      if (telGesture) telGesture.textContent = 'mano abierta';
      if (telAction) telAction.textContent = 'pausar / reanudar';
      return;
    }


    if (telGesture) telGesture.textContent = 'detectada';
    if (telAction) telAction.textContent = 'en espera';
  }


  function detectLoop() {
    if (!isCameraActive || !videoEl) return;


    if (handLandmarker && videoEl.readyState >= 2) {
      const now = performance.now();
      if (videoEl.currentTime !== lastVideoTime) {
        lastVideoTime = videoEl.currentTime;
        const results = handLandmarker.detectForVideo(videoEl, now);


        if (results && results.landmarks && results.landmarks.length > 0) {
          const raw = results.landmarks[0];


          // Suavizado EMA de los 21 landmarks
          if (!smoothedLandmarks) {
            smoothedLandmarks = raw.map(p => ({ x: p.x, y: p.y, z: p.z }));
          } else {
            for (let i = 0; i < 21; i++) {
              smoothedLandmarks[i].x += (raw[i].x - smoothedLandmarks[i].x) * 0.45;
              smoothedLandmarks[i].y += (raw[i].y - smoothedLandmarks[i].y) * 0.45;
              smoothedLandmarks[i].z += (raw[i].z - smoothedLandmarks[i].z) * 0.45;
            }
          }


          updateSvgHand(smoothedLandmarks);
          classifyHand(smoothedLandmarks, now);
          setStatus('statusTracking', true);
        } else {
          setStatus('statusNoHand', true);
          if (YVS.background && YVS.background.setHandPosition) {
            YVS.background.setHandPosition(-9999, -9999, false);
          }
        }
      }
    }


    rafDetect = requestAnimationFrame(detectLoop);
  }


  function setOpen(open) {
    if (!panel) return;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    if (open) {
      const first = panel.querySelector('.gesture-item');
      if (first) first.focus({ preventScroll: true });
    }
  }


  function handle(gesture) {
    const action = GESTURE_MAP[gesture];
    if (!action || !actions[action]) return;
    actions[action]();
    if (panel) {
      const item = panel.querySelector('[data-gesture="' + gesture + '"]');
      if (item) {
        item.classList.add('is-firing');
        setTimeout(() => item.classList.remove('is-firing'), 500);
      }
    }
  }


  function init() {
    panel = document.getElementById('gesture-panel');
    btn = document.getElementById('gesture-btn');
    toastEl = document.getElementById('toast');
    videoEl = document.getElementById('gesture-video');
    debugCanvas = document.getElementById('gesture-debug-canvas');
    if (!panel || !btn) return;


    drawHand(document.getElementById('hand-svg'));


    btn.addEventListener('click', () => setOpen(panel.hidden));
    document.getElementById('gesture-close').addEventListener('click', () => { setOpen(false); btn.focus(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
    });


    // Botón de cámara en el panel
    const camToggleBtn = document.getElementById('gesture-cam-toggle');
    if (camToggleBtn) camToggleBtn.addEventListener('click', toggleCamera);


    // Simulación manual haciendo clic en cada gesto
    panel.querySelectorAll('[data-gesture]').forEach((item) => {
      item.addEventListener('click', () => handle(item.dataset.gesture));
    });
  }


  YVS.gestures = {
    init,
    handle,
    actions,
    GESTURE_MAP,
    toggleCamera,
    startCamera,
    stopCamera,
    pauseDetectionForTransition,
    get isCameraActive() { return isCameraActive; }
  };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   12. EFECTOS DE INTERFAZ
   ########################################################################## */


/* ==========================================================================
   UI EFFECTS — Cursor, brillo que sigue al puntero, rotador de disciplinas,
   glitch periódico del título y barras de audio de PULSO
   ========================================================================== */
(function (YVS) {
  'use strict';


  /* --- Cursor personalizado (solo puntero fino) --- */
  function initCursor() {
    if (YVS.reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;
    document.body.classList.add('has-cursor');


    let x = -100, y = -100, cx = x, cy = y;
    window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });


    const hoverSel = 'a, button, .card, .chip, [role="button"]';
    document.addEventListener('pointerover', (e) => {
      cursor.classList.toggle('is-hover', !!e.target.closest(hoverSel));
    });


    (function loop() {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      cursor.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
      requestAnimationFrame(loop);
    })();
  }


  /* --- Brillo radial del fondo que sigue al puntero --- */
  function initGlow() {
    if (YVS.reduced) return;
    let pending = false, px = 0, py = 0;
    window.addEventListener('pointermove', (e) => {
      px = e.clientX; py = e.clientY;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        document.body.style.setProperty('--mx', px + 'px');
        document.body.style.setProperty('--my', py + 'px');
        pending = false;
      });
    }, { passive: true });
  }


  /* --- Rotador tipo "typing" de disciplinas --- */
  function initRotator() {
    const el = document.getElementById('rotator');
    if (!el) return;
    let timer = 0, word = 0, char = 0, deleting = false;


    const words = () => YVS.i18n.t('hero.rotator') || [];


    function step() {
      const list = words();
      if (!list.length) return;
      const current = list[word % list.length];
      if (!deleting) {
        char++;
        el.textContent = current.slice(0, char);
        if (char >= current.length) { deleting = true; timer = setTimeout(step, 1700); return; }
        timer = setTimeout(step, 55);
      } else {
        char--;
        el.textContent = current.slice(0, char);
        if (char <= 0) { deleting = false; word++; timer = setTimeout(step, 300); return; }
        timer = setTimeout(step, 28);
      }
    }


    function restart() {
      clearTimeout(timer);
      if (YVS.reduced) { el.textContent = words().join(' · '); return; }
      word = 0; char = 0; deleting = false;
      el.textContent = '';
      step();
    }


    document.addEventListener('yvs:langchange', restart);
    restart();
  }


  /* --- Glitch periódico en el título de portada --- */
  function initGlitchLoop() {
    if (YVS.reduced) return;
    const items = Array.from(document.querySelectorAll('.hero .glitch'));
    if (!items.length) return;
    setInterval(() => {
      if (document.hidden || window.scrollY > window.innerHeight) return;
      const el = items[(Math.random() * items.length) | 0];
      el.classList.add('is-glitching');
      setTimeout(() => el.classList.remove('is-glitching'), 380);
    }, 6500);
  }


  /* --- Barras de audio del placeholder de PULSO --- */
  function initBars() {
    document.querySelectorAll('.ph__bars[data-bars]').forEach((wrap) => {
      const n = parseInt(wrap.dataset.bars, 10) || 24;
      for (let i = 0; i < n; i++) {
        const bar = document.createElement('span');
        const env = Math.sin((i / (n - 1)) * Math.PI);           // envolvente
        bar.style.setProperty('--s', (0.25 + env * 0.75 * (0.55 + Math.random() * 0.45)).toFixed(2));
        bar.style.setProperty('--delay', (-Math.random() * 1.3).toFixed(2) + 's');
        wrap.appendChild(bar);
      }
    });
  }


  function init() {
    initBars();
    initCursor();
    initGlow();
    initRotator();
    initGlitchLoop();
  }


  YVS.ui = { init };
})(window.YVS = window.YVS || {});




/* ##########################################################################
   13. ARRANQUE
   ########################################################################## */


/* ==========================================================================
   MAIN — Orquestador
   Todos los módulos cuelgan del objeto global `YVS` (scripts clásicos),
   así el sitio funciona incluso abriendo index.html con doble clic.
   ========================================================================== */
(function (YVS) {
  'use strict';


  YVS.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  // 1. Tema e idioma primero: el resto de módulos lee los textos y paleta desde aquí
  if (YVS.theme) YVS.theme.init();
  YVS.i18n.init();


  // 2. Interfaz y navegación
  YVS.ui.init();
  YVS.nav.init();
  YVS.cards.init();
  YVS.gestures.init();
  YVS.background.init(document.getElementById('bg-canvas'), YVS.reduced);


  // 3. Fuente de rostro procedural para el retrato animado de "Sobre mí"
  const faceSource = YVS.FaceSources.procedural({ rows: 26, cols: 25 });
  YVS.facePortrait.init(document.getElementById('portrait-canvas'), faceSource, YVS.reduced);


  // 4. Cuando la intro se desvanece, la portada se revela
  document.addEventListener('yvs:introleave', () => {
    YVS.nav.initReveal();
  });


  // 5. Experiencia de bienvenida: Flor de cerezo en ASCII Art & 5 etapas
  YVS.intro.run({
    root: document.getElementById('intro'),
    canvas: document.getElementById('intro-canvas'),
    reduced: YVS.reduced
  });
})(window.YVS = window.YVS || {});
