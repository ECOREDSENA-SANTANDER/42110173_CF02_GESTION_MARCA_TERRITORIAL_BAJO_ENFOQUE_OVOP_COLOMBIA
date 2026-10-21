<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Gestión de Recursos
      
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-terciario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema7/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 #[b Alianzas estratégicas:] las alianzas son fundamentales para ampliar la capacidad del territorio para gestionar su marca y sostenerla en el tiempo. Permiten unir recursos, experiencias, conocimientos y legitimidad, transformando la marca territorial en un proyecto colectivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 17.
          | Tipos de alianzas y sus aportes
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Tipo de alianza
                th Actores involucrados
                th Aportes a la marca territorial
            tbody
              tr
                td Institucionales
                td Alcaldías, gobernaciones, SENA, ministerios, universidades.
                td Ejemplo: formación, asistencia técnica, financiación, acompañamiento, política pública.
              tr
                td Productivas y comerciales
                td Cámaras de comercio, empresarios, cooperativas, asociaciones.
                td Ejemplo: acceso a mercados, innovación, cadenas de valor, comercialización.
              tr
                td Culturales y comunitarias
                td Museos, teatros, colectivos artísticos, radios comunitarias.
                td Ejemplo: legitimación cultural, difusión territorial, apropiación simbólica.
              tr
                td Ambientales
                td Corporaciones ambientales, reservas, organizaciones ecológicas.
                td Ejemplo: sostenibilidad, conservación, turismo de naturaleza responsable.
              tr
                td Internacionales
                td Agencias de cooperación, Organización No Gubernamental - ONG globales, redes OVOP.
                td Ejemplo: intercambio técnico, certificaciones, visibilidad exterior, movilidad de capacidades.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Cooperación territorial

    p.mb-5(data-aos="fade-right") La cooperación territorial es el mecanismo que permite articular capacidades entre diferentes actores y niveles de gobierno, asegurando continuidad, sostenibilidad y proyección de la marca territorial.

    .tit-raya.mb-5(data-aos="fade-left")
      h4.mb-2 Dimensiones de la cooperación
      .barra-dots
        span.dot
        span.dot
        .barra  

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema7/2.svg')
          h4.mb-4.text-center Cooperación horizontal
          p.mb-0 Entre territorios que comparten vocaciones, cadenas productivas o desafíos similares. Facilita intercambio de experiencias, saberes y buenas prácticas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema7/3.svg')
          h4.mb-4.text-center Cooperación vertical
          p.mb-0 Entre niveles de gobierno (nación–departamento–municipio). Aporta coherencia institucional, recursos y articulación normativa.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema7/4.svg')
          h4.mb-4.text-center Cooperación transversal
          p.mb-0 Involucra sectores productivos, culturales, educativos, ambientales y sociales en una visión unificada.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema7/5.svg')
          h4.mb-4.text-center Cooperación internacional
          p.mb-0 Incluye misiones técnicas, certificaciones, apoyo OVOP global, participación en ferias y acceso a fondos de cooperación.

    p.mb-5(data-aos="fade-right") Una marca territorial sostenible no depende de un actor individual, sino de un ecosistema articulado.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Gestión de proyectos territoriales

    p.mb-5(data-aos="fade-left") Toda marca territorial se sostiene en proyectos concretos que fortalecen productos, experiencias, cultura, infraestructura y capacidades comunitarias.

    .row.justify-content-center.align-items.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        .bg8.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema7/6.svg')
          h4.mb-4 Componentes del modelo de gestión de proyectos
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Diagnóstico: análisis de identidad, tesoros locales, actores y potencialidades.
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Diseño: formulación del proyecto (objetivos, actividades, indicadores, alianzas).
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Ejecución: implementación participativa con actores locales.
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Seguimiento: revisión de avances, ajustes, validación comunitaria.
            li.d-flex.mb-0
              i.fas.fa-bolt.cr
              p.mb-0 Evaluación: valoración de resultados, aprendizajes y sostenibilidad.
      .col-lg-6
        .bg9.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema7/7.svg')
          h4.mb-4 Tipos de proyectos articulados a la marca territorial
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Proyectos de infraestructura identitaria: centros culturales, rutas interpretativas, talleres artesanales, puntos de venta.
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Proyectos productivos: fortalecimiento de cadenas OVOP, certificaciones, innovación productiva.
            li.d-flex.mb-2
              i.fas.fa-bolt.cr
              p.mb-0 Proyectos comunicativos: campañas, plataformas digitales, identidad visual, contenidos multimedia. 
            li.d-flex.mb-0
              i.fas.fa-bolt.cr
              p.mb-0 Proyectos socioculturales: festivales, escuelas de saberes, procesos de memoria, iniciativas comunitarias.

    p.mb-0(data-aos="fade-left") Cada proyecto debe fortalecer la identidad, la cohesión comunitaria, la sostenibilidad y el valor cultural del territorio, procurando que las acciones desarrolladas respondan a sus capacidades, necesidades y tesoros locales. Para ello, es fundamental promover la participación de los actores del territorio, establecer alianzas estratégicas y orientar los recursos hacia iniciativas que generen beneficios colectivos. De esta manera, los proyectos territoriales se convierten en instrumentos para materializar el sueño colectivo, fortalecer la marca territorial y contribuir al desarrollo endógeno de manera sostenible. 

      
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
