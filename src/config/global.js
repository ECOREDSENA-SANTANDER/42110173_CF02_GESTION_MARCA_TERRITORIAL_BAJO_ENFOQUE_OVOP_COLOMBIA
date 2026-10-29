export default {
  global: {
    Name: 'Definición estratégica y planificación de marca territorial',
    Description:
      'El componente orienta la construcción estratégica de la marca territorial bajo el enfoque OVOP, articulando diagnóstico, narrativa, sueño colectivo, tesoros locales, gobernanza, promoción y comercialización. Integra herramientas para definir la arquitectura de marca, planificar acciones, establecer objetivos e indicadores y fortalecer la sostenibilidad económica, social, cultural e institucional, consolidando marcas territoriales auténticas, participativas, competitivas y vinculadas al desarrollo endógeno.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-p.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Estrategia de construcción de marca territorial con enfoque OVOP',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Narrativa territorial y sueño colectivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          '<em>Storytelling</em> local: herramienta metodológica para comunicar la marca territorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos comunicativos de marca bajo el enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identidad visual: la “cara” del territorio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Caso Colombia: eslogan, símbolo e isotipo en la marca país. ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de marca territorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Planificación estratégica participativa y sostenibilidad de la marca territorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Gestión de Recursos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Sostenibilidad de la marca territorial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/42110173_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Apropiación social',
      significado:
        'grado en que la comunidad reconoce, valida, usa y protege la marca territorial. Implica participación, compromiso y sentido de pertenencia en la gestión de la identidad territorial.',
    },
    {
      termino: 'Autogestión comunitaria',
      significado:
        'capacidad del territorio para organizarse, tomar decisiones y ejecutar acciones sin depender exclusivamente de actores externos. Es uno de los principios centrales del enfoque OVOP.',
    },
    {
      termino: 'Calidad territorial',
      significado:
        'conjunto de atributos técnicos, culturales y simbólicos que garantizan que un producto o experiencia refleja su origen territorial de manera auténtica y consistente.',
    },
    {
      termino: 'Comité local OVOP',
      significado:
        'instancia de gobernanza que orienta, regula y hace seguimiento al proceso OVOP, incluyendo la marca territorial y los proyectos comunitarios asociados.',
    },
    {
      termino: 'Competitividad territorial',
      significado:
        'capacidad del territorio para diferenciarse y destacarse mediante su identidad, patrimonio, productos y experiencias, atrayendo visitantes, inversiones y oportunidades económicas.',
    },
    {
      termino: 'Desarrollo del recurso humano',
      significado:
        'principio OVOP que promueve la formación de capacidades técnicas, creativas y organizativas en la comunidad para activar el desarrollo endógeno.',
    },
    {
      termino: 'Identidad territorial',
      significado:
        'conjunto de rasgos culturales, naturales, sociales e históricos que definen a una comunidad y que sirven como base para construir y comunicar su marca territorial.',
    },
    {
      termino: 'Isotipo',
      significado:
        'símbolo visual que representa una marca sin necesidad de texto. En territorios suele inspirarse en tesoros locales y elementos culturales reconocidos por la comunidad.',
    },
    {
      termino: 'Narrativa de marca',
      significado:
        'relato estructurado que expresa la esencia del territorio, sus valores, símbolos, tesoros locales y visión de futuro. Es la base de la comunicación territorial.',
    },
    {
      termino: 'Producto estrella',
      significado:
        'producto territorial emblemático que logra alta demanda y reconocimiento, representando la identidad del territorio y dinamizando cadenas productivas.',
    },
    {
      termino: 'Valor agregado territorial',
      significado:
        'beneficio adicional que un producto, servicio o experiencia ofrece gracias a su origen cultural, natural o identitario, generando diferenciación y atractivo en el mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Cooperación Internacional del Japón (JICA) & Servicio Nacional de Aprendizaje (SENA). (2020). Guía de estrategia de marca territorial.',
      link: '',
    },
    {
      referencia:
        'Ancin A., I. (2018). Análisis sobre la elección de isotipos y logotipos en los procesos de comunicación de la marca. Revista Caribeña de Ciencias Sociales.',
      link: '',
    },
    {
      referencia:
        'Anholt, S. (2010). Places: Identity, image and reputation. Palgrave Macmillan.',
      link: '',
    },
    {
      referencia:
        'Barra Villalón, C. (s. f.). Elementos de la identidad de marca. Facultad de Economía y Negocios, Universidad de Chile.',
      link: '',
    },
    {
      referencia: 'Cassisi, L. (2020). Cómo crear una marca-lugar. FOROALFA.',
      link: '',
    },
    {
      referencia:
        'Comisión Nacional de la Micro y Pequeña Empresa (CONAMYPE). (2017). Manual para la facilitación del programa Un Pueblo, Un Producto.',
      link: '',
    },
    {
      referencia:
        'Correa, A., & Doria, F. (2021). Narrativas del territorio: Herramientas para el fortalecimiento de la identidad local. Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Díaz Mesa, H., & Ruiz Rallo, A. (2023). Diseño de marcas territoriales en España. I+Diseño, 18.',
      link: '',
    },
    {
      referencia:
        'Harada Olivares, E. (2014). Logotipos, isotipos, imagotipos e isologos: Una aclaración terminológica. Revista Mixcoac: De la Academia a la Sociedad, 11(2), 36–47.',
      link: '',
    },
    {
      referencia:
        'Marca País Colombia. (s. f.). Preguntas frecuentes sobre Marca País Colombia.',
      link: '',
    },
    {
      referencia:
        'Paz, S. (2005). Administración estratégica de marca territorial: Cómo construir y administrar la marca de ciudades y regiones. Revista Electrónica de Administración (REAd), 11(3), 1–20.',
      link: '',
    },
    {
      referencia:
        'Quispe, W., Mamani, J., & Huanca, C. (2018). Participación de actores locales en procesos de desarrollo rural. Revista de Investigación y Desarrollo, 25(2), 45–60.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025a). Guía DM_01 – Redescubrimiento de tesoros locales.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025b). Guía DM_02 – Construcción del sueño colectivo OVOP.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025c). Guía DM_08 – Análisis de actores para el desarrollo local.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025d). Guía DM_09 – Estrategia de marca territorial.',
      link: '',
    },
    {
      referencia:
        'Vaca López, A. (2016). Las marcas territoriales, una apuesta al desarrollo local desde la cultura. Gestión y Región, 12(1), 43–60.',
      link: '',
    },
    {
      referencia:
        'Vázquez Barquero, A. (1997). Desarrollo endógeno y economía del territorio. Instituto de Economía y Geografía del CSIC.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yadira Eliana Cruz González',
          cargo: 'Instructora',
          centro: 'Centro Nacional de Hotelería, Turismo y Alimentos',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
