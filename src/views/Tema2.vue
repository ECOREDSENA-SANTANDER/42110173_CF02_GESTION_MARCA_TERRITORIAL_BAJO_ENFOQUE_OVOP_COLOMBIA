<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Narrativa territorial y sueño colectivo

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-terciario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Toda marca territorial requiere una historia que la anime y una visión que la guíe. En OVOP, la narrativa territorial expresa quiénes somos a partir de nuestros tesoros locales, y el sueño colectivo proyecta hacia dónde queremos ir. Ambos conforman el corazón de la marca, integrando identidad, orgullo y futuro, y comunicando el territorio como una experiencia viva sustentada en valores culturales, ecológicos y humanos.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Narrativa territorial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png')
      .col-lg-7
        p.mb-3 La narrativa territorial es el relato que da sentido a los tesoros locales: convierte los productos, paisajes, saberes y tradiciones en símbolos de identidad y orgullo colectivo. Contar el territorio es mucho más que describirlo: es darle voz a las personas, historias, valores y tesoros que hacen único cada lugar.
        p.mb-4 La narrativa territorial es la forma en que una comunidad se cuenta a sí misma, se reconoce y se proyecta hacia el futuro” (Correa & Doria, 2021, p. 3).
        .bg3.p-4
          p.mb-0 En OVOP, la narrativa territorial se construye a partir de los tesoros locales, que concentran valor simbólico, económico y emocional. Cada artesanía, alimento o práctica cultural refleja la esencia y los valores del territorio. Al contar estas historias, la narrativa convierte los tesoros en productos con propósito, capaces de emocionar, inspirar y proyectar la marca desde adentro hacia afuera.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Elementos de la narrativa territorial 
    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-9
        .tabla-a.tab3.t9.mb-0
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Identidad
                td Quiénes somos, qué nos distingue y cómo nos reconocen, lo cual está relacionado con los tesoros locales, que nos hacen únicos.
              tr.bgr
                td Memoria
                td Hechos, personajes, símbolos y relatos del pasado que siguen presentes, a partir de ellos se generan lo relatos asociados al tesoro local.
              tr
                td Emociones compartidas
                td Orgullo, esperanza, arraigo, resiliencia y otros sentimientos que unen a la comunidad, que es el vínculo emocional que genera ese tesoro.
              tr.bgr
                td Propósito
                td Hacia dónde queremos ir y qué valor proyectamos como territorio, que está relacionado con nuestro sueño colectivo.
              tr
                td Lenguaje simbólico
                td Colores, sonidos, sabores, expresiones y metáforas del territorio.
              tr.bgr
                td Recursos locales
                td Tesoros locales naturales, productivos y culturales que fortalecen la narrativa.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png')
    
    p.mb-5 Lo invitamos a visitar el pódcast, un espacio para descubrir cómo la narrativa territorial, los tesoros locales y el sueño colectivo se conectan para fortalecer la identidad y construir una marca auténtica, participativa y con propósito .

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema2/4.png')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Cuando un territorio aprende a contar su historia"
                :audio="require_src('@/assets/actividad/audio/Podcast_CF2_42110173_Gestion_de_marca_territorial_bajo_el_enfoque_ovop_Colombia.mp3')"
              ).mb-0
                p.mb-0 

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Visión colectiva: el sueño colectivo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/5.png')
      .col-lg-7
        p.mb-lg-3.mb-4 El sueño colectivo es la visión de futuro construida por los actores del territorio y que orienta la marca territorial. Conecta quiénes somos con lo que queremos ser, guiando el uso sostenible de los tesoros locales. No es un texto técnico, sino una declaración inspiradora basada en valores, esperanzas y compromisos compartidos, cuya fuerza radica en ser colectiva, emocional y alcanzable. Un sueño colectivo bien construido conecta la identidad (quiénes somos) con la proyección (lo que queremos ser).
        .cajon.color-acento-botones.p-4.mb-0
          p.mb-0 Según la Guía Construcción del Sueño Colectivo OVOP, “el sueño colectivo actúa como la brújula del desarrollo local y constituye el punto de partida para la creación de valor” (SENA & JICA, 2025, p. 7).
    
    p.mb-5(data-aos="fade-right") La construcción del sueño colectivo avanza a través de cuatro fases articuladas:

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/6.svg')
          h4.mb-4.text-center Sensibilización
          p.mb-0 Reconocer la importancia de contar con un horizonte común que oriente el desarrollo del territorio.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/7.svg')
          h4.mb-4.text-center Exploración
          p.mb-0 Recoger los anhelos, preocupaciones, valores y expectativas de la comunidad.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/8.svg')
          h4.mb-4.text-center Visualización
          p.mb-0 Imaginar cómo se quiere vivir y cómo desea ser reconocido el territorio en los próximos 10 o 20 años.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/9.svg')
          h4.mb-4.text-center Validación
          p.mb-0 Contrastar y ajustar la propuesta con los distintos actores del territorio para asegurar su apropiación y legitimidad.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Propuesta de valor territorial

    p.mb-4(data-aos="fade-left") La propuesta de valor territorial expresa los beneficios diferenciales que ofrece el territorio a sus diferentes públicos, sustentados en su identidad, sus tesoros locales y su visión de futuro.
    
    p.mb-5(data-aos="fade-right") Responde a la pregunta:

    .row.justify-content-center.align-items.mb-0(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        img.mb-0(src='@/assets/curso/tema2/10.svg')
        .bg5.p-4.text-white
          p.mb-4 #[b ¿Por qué este territorio es diferente y valioso?]
          p.mb-4 En el enfoque OVOP, la propuesta de valor debe construirse a partir de:
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Recursos locales. 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Desarrollo del recurso humano. 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Autogestión y creatividad. 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Pensar global, actuar local. 
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Participación comunitaria. 
      .col-lg-6
        img.mb-0(src='@/assets/curso/tema2/11.svg')
        .bg5.p-4.text-white
          p.mb-4 #[b Componentes de la propuesta de valor territorial]
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Diferenciación: ¿qué nos hace únicos?
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Beneficio: ¿qué valor ofrecemos?
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Identidad: ¿qué nos representa?
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Evidencia: ¿qué demuestra nuestro valor?
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Futuro: ¿qué queremos construir?


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
