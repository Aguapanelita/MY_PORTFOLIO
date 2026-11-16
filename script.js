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
      menu: 'Abrir menú',
      langLabel: 'Idioma'
    },


    intro: {
      label: 'Introducción',
      boot: '> inicializando percepción…',
      scan: '> escaneando malla facial…',
      detected: '> rostro detectado // bienvenida',
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
      lead: 'Soy Yurineth Vargas Salazar, diseñadora de Comunicación Gráfica. Nací en Colombia y hoy vivo en Chile.',
      p1: 'Me reconozco como una persona sensible, apasionada por el arte y muy curiosa: me mueve entender cómo se construyen las imágenes, las historias y las experiencias que nos conmueven.',
      p2: 'Mi paso por Chile amplió mi visión del diseño hacia las narrativas audiovisuales, la ilustración, la animación, el modelado 3D, la identidad de marca, el desarrollo de interfaces web y el diseño de indumentaria.',
      timeline: {
        fromTag: 'ORIGEN',
        fromPlace: 'Colombia',
        fromText: 'Formación en Comunicación Gráfica y primeras búsquedas en el arte y la imagen.',
        toTag: 'PRESENTE',
        toPlace: 'Chile',
        toText: 'Expansión hacia lo audiovisual, lo interactivo y lo tridimensional.'
      },
      disciplinesTitle: 'Disciplinas',
      disciplines: [
        'Narrativas audiovisuales',
        'Ilustración',
        'Animación',
        'Modelado 3D',
        'Identidad de marca',
        'Interfaces web',
        'Diseño de indumentaria'
      ]
    },


    gesture: {
      badge: 'beta',
      close: 'Cerrar panel',
      camera: '[ cámara desactivada ]',
      desc: 'Muy pronto podrás navegar este portafolio con las manos, usando visión computacional (MediaPipe) desde tu cámara.',
      items: {
        palm:  { name: 'Mano abierta', action: 'pausar' },
        swipe: { name: 'Deslizar',     action: 'siguiente proyecto' },
        pinch: { name: 'Pinza',        action: 'abrir proyecto' }
      },
      hint: 'Toca un gesto para simular su acción.',
      status: 'estado',
      statusValue: 'próximamente',
      toast: {
        pause: '✋ Animaciones en pausa',
        resume: '✋ Animaciones activas',
        next: '👉 Siguiente proyecto',
        open: '👌 Abriendo proyecto'
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
      menu: 'Open menu',
      langLabel: 'Language'
    },


    intro: {
      label: 'Intro',
      boot: '> initializing perception…',
      scan: '> scanning face mesh…',
      detected: '> face detected // welcome',
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
      lead: 'I’m Yurineth Vargas Salazar, a Graphic Communication Designer. I was born in Colombia and I now live in Chile.',
      p1: 'I see myself as a sensitive person, passionate about art and deeply curious: I’m driven by understanding how the images, stories and experiences that move us are built.',
      p2: 'My time in Chile broadened my vision of design toward audiovisual narratives, illustration, animation, 3D modeling, brand identity, web interface development and fashion design.',
      timeline: {
        fromTag: 'ORIGIN',
        fromPlace: 'Colombia',
        fromText: 'Training in Graphic Communication and first explorations in art and image.',
        toTag: 'PRESENT',
        toPlace: 'Chile',
        toText: 'Expanding into audiovisual, interactive and three-dimensional work.'
      },
      disciplinesTitle: 'Disciplines',
      disciplines: [
        'Audiovisual narratives',
        'Illustration',
        'Animation',
        '3D modeling',
        'Brand identity',
        'Web interfaces',
        'Fashion design'
      ]
    },


    gesture: {
      badge: 'beta',
      close: 'Close panel',
      camera: '[ camera off ]',
      desc: 'Soon you’ll be able to browse this portfolio with your hands, using computer vision (MediaPipe) through your camera.',
      items: {
        palm:  { name: 'Open palm', action: 'pause' },
        swipe: { name: 'Swipe',     action: 'next project' },
        pinch: { name: 'Pinch',     action: 'open project' }
      },
      hint: 'Tap a gesture to simulate its action.',
      status: 'status',
      statusValue: 'coming soon',
      toast: {
        pause: '✋ Animations paused',
        resume: '✋ Animations resumed',
        next: '👉 Next project',
        open: '👌 Opening project'
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
   6. CARA · INTRO
   ########################################################################## */


/* ==========================================================================
   FACE INTRO — Secuencia de carga
   1. barrido de escaneo que dibuja la malla
   2. la cara mira a la izquierda, a la derecha y vuelve al centro
   3. glitch + puntos de seguimiento ("rostro detectado")
   4. dispersión + fade-out que revela la portada


   Eventos que emite en document:
     yvs:introleave → empieza a desvanecerse (la portada aparece)
     yvs:introdone  → la intro ya no está en pantalla
   ========================================================================== */
(function (YVS) {
  'use strict';


  const SESSION_KEY = 'yvs-intro-seen';


  // Línea de tiempo (segundos)
  const T = {
    revealStart: 0.1, revealEnd: 1.25,
    scanLine: 0.7,
    glitchStart: 3.25, glitchEnd: 3.5,
    detected: 3.3,
    landmarksStart: 3.1, landmarksEnd: 3.7,
    disperseStart: 3.65, disperseEnd: 4.5,
    leave: 3.75,
    end: 4.6
  };


  // Mirada: [tiempo, yaw en radianes]
  const LOOK = [
    [0, 0], [1.0, 0],
    [1.55, -0.52], [1.85, -0.52],   // izquierda
    [2.5, 0.48], [2.8, 0.48],       // derecha
    [3.3, 0]                        // centro
  ];


  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const seg = (t, a, b) => clamp01((t - a) / (b - a));
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);


  function yawAt(t) {
    for (let i = 0; i < LOOK.length - 1; i++) {
      const [t0, y0] = LOOK[i];
      const [t1, y1] = LOOK[i + 1];
      if (t <= t1) return y0 + (y1 - y0) * easeInOut(seg(t, t0, t1));
    }
    return LOOK[LOOK.length - 1][1];
  }


  function setInert(value) {
    document.querySelectorAll('[data-intro-inert]').forEach((el) => {
      if (value) el.setAttribute('inert', ''); else el.removeAttribute('inert');
    });
  }


  function emit(name) { document.dispatchEvent(new CustomEvent(name)); }


  /**
   * @param {Object} cfg
   * @param {HTMLElement} cfg.root     contenedor .intro
   * @param {HTMLCanvasElement} cfg.canvas
   * @param {Object} cfg.source        FaceSource (ver sección 4)
   * @param {boolean} cfg.reduced      prefers-reduced-motion
   */
  function run(cfg) {
    const { root, canvas, source, reduced } = cfg;
    const body = document.body;


    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === '1'; } catch (e) { /* sin acceso */ }


    // Ya se vio en esta sesión: entrar directo
    if (!root || !canvas || seen) {
      if (root) root.classList.add('is-done');
      body.classList.remove('is-intro');
      emit('yvs:introleave');
      emit('yvs:introdone');
      return;
    }


    setInert(true);
    const renderer = YVS.createFaceRenderer(canvas, { scale: window.innerWidth < 600 ? 0.28 : 0.27 });
    renderer.resize();


    const lines = {};
    root.querySelectorAll('[data-intro-line]').forEach((el) => { lines[el.dataset.introLine] = el; });
    const count = document.getElementById('intro-count');
    if (count) count.textContent = 'MESH ' + String(source.getMesh().vertices.length).padStart(4, '0') + ' VTX';


    let raf = 0;
    let startTime = 0;
    let left = false;
    let finished = false;


    const onResize = () => renderer.resize();
    window.addEventListener('resize', onResize);


    function leave() {
      if (left) return;
      left = true;
      root.classList.add('is-leaving');
      body.classList.remove('is-intro');
      setInert(false);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) { /* sin acceso */ }
      emit('yvs:introleave');
    }


    function finish() {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      leave();
      document.removeEventListener('keydown', onKey);
      setTimeout(() => {
        root.classList.add('is-done');
        window.removeEventListener('resize', onResize);
        if (source.stop) source.stop();
        emit('yvs:introdone');
      }, 900);
    }


    function stateAt(t) {
      const pose = source.getPose ? source.getPose() : null;
      const glitchT = seg(t, T.glitchStart, T.glitchEnd);
      return {
        yaw: pose ? pose.yaw : yawAt(t),
        pitch: pose ? pose.pitch : -0.05 + 0.05 * Math.sin(t * 1.6),
        roll: pose ? 0 : -yawAt(t) * 0.07,
        reveal: easeOut(seg(t, T.revealStart, T.revealEnd)),
        alpha: 1 - seg(t, T.disperseStart + 0.2, T.disperseEnd),
        glitch: glitchT > 0 && glitchT < 1 ? Math.sin(glitchT * Math.PI) * (Math.random() > 0.3 ? 1 : 0.2) : 0,
        disperse: easeInOut(seg(t, T.disperseStart, T.disperseEnd)),
        landmarks: Math.sin(seg(t, T.landmarksStart, T.landmarksEnd) * Math.PI),
        zoom: 0.94 + 0.06 * easeOut(seg(t, 0, T.revealEnd)) + 0.12 * seg(t, T.disperseStart, T.disperseEnd)
      };
    }


    function tick(now) {
      if (!startTime) startTime = now;
      const t = (now - startTime) / 1000;


      renderer.render(source.getMesh(), stateAt(t));


      if (lines.boot) lines.boot.classList.add('is-on');
      if (t > T.scanLine && lines.scan) lines.scan.classList.add('is-on');
      if (t > T.detected && lines.detected) lines.detected.classList.add('is-on');
      if (t > T.leave) leave();


      if (t >= T.end) finish();
      else raf = requestAnimationFrame(tick);
    }


    // Saltar: adelanta la línea de tiempo hasta la dispersión
    function skip() {
      if (left) return;
      if (reduced) { finish(); return; }
      const t = (performance.now() - startTime) / 1000;
      if (startTime && t < T.disperseStart) startTime -= (T.disperseStart - t) * 1000;
    }


    function onKey(e) {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        skip();
      }
    }


    const skipBtn = document.getElementById('intro-skip');
    if (skipBtn) skipBtn.addEventListener('click', skip);
    document.addEventListener('keydown', onKey);


    if (reduced) {
      // Movimiento reducido: cara estática y fundido simple
      renderer.render(source.getMesh(), { reveal: 1, alpha: 1 });
      Object.values(lines).forEach((el) => el.classList.add('is-on'));
      setTimeout(finish, 1200);
      return;
    }


    Promise.resolve(source.start ? source.start() : null).then(() => {
      raf = requestAnimationFrame(tick);
    });
  }


  YVS.faceIntro = { run };
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
   8. FONDO DE PARTÍCULAS
   ########################################################################## */


/* ==========================================================================
   BACKGROUND — Red de partículas ambiental
   Las partículas "nacen" del centro cuando la cara se dispersa (burst),
   derivan lentamente, se conectan entre sí y esquivan el cursor.
   ========================================================================== */
(function (YVS) {
  'use strict';


  const COLORS = ['#F797F5', '#D45EE5', '#9113B2', '#E7B8FF'];
  const LINK_DIST = 130;


  let canvas, ctx, w = 0, h = 0, dpr = 1;
  let particles = [];
  let raf = 0;
  let paused = false;
  let reduced = false;
  let fade = 0;            // 0 → 1 tras la intro
  const mouse = { x: -9999, y: -9999 };


  function makeParticle(x, y) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.08 + Math.random() * 0.22;
    return {
      x: x == null ? Math.random() * w : x,
      y: y == null ? Math.random() * h : y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      bx: Math.cos(angle) * speed,
      by: Math.sin(angle) * speed,
      r: 0.6 + Math.random() * 1.6,
      c: COLORS[(Math.random() * COLORS.length) | 0]
    };
  }


  function targetCount() {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const n = Math.round((w * h) / 15000);
    return Math.max(24, Math.min(coarse ? 50 : 90, n));
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
    if (reduced) frame();
  }


  function frame() {
    ctx.clearRect(0, 0, w, h);
    fade = Math.min(1, fade + 0.012);


    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!reduced) {
        // Vuelve suavemente a su deriva base (tras el burst)
        p.vx += (p.bx - p.vx) * 0.02;
        p.vy += (p.by - p.vy) * 0.02;
        // Repulsión del cursor
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
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


    // Conexiones
    ctx.lineWidth = 0.6;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.22 * fade;
          ctx.strokeStyle = '#D45EE5';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }


    // Partículas
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.globalAlpha = 0.75 * fade;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }


  function loop() {
    frame();
    if (!paused && !document.hidden) raf = requestAnimationFrame(loop);
  }


  function start() {
    cancelAnimationFrame(raf);
    if (reduced) { fade = 1; frame(); return; }
    if (!paused && !document.hidden) raf = requestAnimationFrame(loop);
  }


  /** Explosión desde el centro: continuidad con la cara de la intro. */
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
    fade = 0.4;
  }


  function setPaused(value) {
    paused = value;
    start();
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
    setPaused,
    get paused() { return paused; }
  };
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


    document.getElementById('modal-label').innerHTML =
      '<span class="card__num">PRJ_' + card.dataset.num + '</span> // ' + escapeHtml(t(base + 'label'));
    document.getElementById('modal-title').textContent = t(base + 'title');
    document.getElementById('modal-text').textContent = t(base + 'long');


    const tools = document.getElementById('modal-tools');
    tools.innerHTML = '';
    card.querySelectorAll('.chips .chip').forEach((chip) => tools.appendChild(chip.cloneNode(true)));


    const media = document.getElementById('modal-media');
    media.innerHTML = '';
    const ph = card.querySelector('.ph');
    if (ph) media.appendChild(ph.cloneNode(true));


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
   11. PANEL DE GESTOS
   ########################################################################## */


/* ==========================================================================
   GESTURE PANEL — Interfaz conceptual de control por gestos
   Hoy: panel visual + simulación al tocar cada gesto.
   Mañana: un detector (p. ej. MediaPipe Hands) solo tiene que llamar a
     YVS.gestures.handle('open_palm' | 'swipe' | 'pinch')
   y la navegación responderá sin cambiar nada más.
   ========================================================================== */
(function (YVS) {
  'use strict';


  /** Gesto detectado → acción del sitio */
  const GESTURE_MAP = {
    open_palm: 'pause',
    swipe: 'next',
    pinch: 'open'
  };


  /** Acciones disponibles */
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


  /* Esqueleto de mano: 21 puntos, misma topología que MediaPipe Hands */
  const HAND = [
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


  function toast(key) {
    if (!toastEl) return;
    toastEl.textContent = YVS.i18n.t(key);
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 1800);
  }


  function drawHand(svg) {
    if (!svg) return;
    const NS = 'http://www.w3.org/2000/svg';
    HAND_CONNECTIONS.forEach(([a, b]) => {
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', HAND[a][0]); l.setAttribute('y1', HAND[a][1]);
      l.setAttribute('x2', HAND[b][0]); l.setAttribute('y2', HAND[b][1]);
      l.setAttribute('class', 'hand-bone');
      svg.appendChild(l);
    });
    HAND.forEach(([x, y], i) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', x); c.setAttribute('cy', y);
      c.setAttribute('r', TIPS.includes(i) ? 2.6 : 2);
      c.setAttribute('class', TIPS.includes(i) ? 'hand-joint is-tip' : 'hand-joint');
      if (TIPS.includes(i)) c.style.animationDelay = (TIPS.indexOf(i) * 0.15) + 's';
      svg.appendChild(c);
    });
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


  /** Punto de entrada para un futuro detector real. */
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
    if (!panel || !btn) return;


    drawHand(document.getElementById('hand-svg'));


    btn.addEventListener('click', () => setOpen(panel.hidden));
    document.getElementById('gesture-close').addEventListener('click', () => { setOpen(false); btn.focus(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
    });


    panel.querySelectorAll('[data-gesture]').forEach((item) => {
      item.addEventListener('click', () => handle(item.dataset.gesture));
    });
  }


  YVS.gestures = { init, handle, actions, GESTURE_MAP };
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


  // 1. Idioma primero: el resto de módulos lee los textos desde aquí
  YVS.i18n.init();


  // 2. Interfaz
  YVS.ui.init();
  YVS.nav.init();
  YVS.cards.init();
  YVS.gestures.init();
  YVS.background.init(document.getElementById('bg-canvas'), YVS.reduced);


  // 3. Fuente de la cara (cambiar aquí por MediaPipe en el futuro)
  const faceSource = YVS.FaceSources.procedural({ rows: 26, cols: 25 });


  YVS.facePortrait.init(document.getElementById('portrait-canvas'), faceSource, YVS.reduced);


  // 4. Cuando la intro se desvanece, aparece la portada
  document.addEventListener('yvs:introleave', () => {
    YVS.background.burst();
    YVS.nav.initReveal();
  });


  // 5. Intro
  YVS.faceIntro.run({
    root: document.getElementById('intro'),
    canvas: document.getElementById('intro-canvas'),
    source: faceSource,
    reduced: YVS.reduced
  });
})(window.YVS = window.YVS || {});