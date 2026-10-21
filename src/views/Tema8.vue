<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Sostenibilidad de la marca territorial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-lg-3.mb-4 El sistema de valoración de marca territorial es un mecanismo que mide la solidez, autenticidad y coherencia de una marca frente a la identidad cultural, los tesoros locales y la organización comunitaria. Integra criterios estratégicos y socio productivos para evaluar su aporte al desarrollo endógeno y determinar qué tan alineada está la marca con los atributos del territorio, identificando fortalezas y oportunidades de mejora para garantizar su legitimidad y competitividad. A continuación, se desarrollan, de manera integrada y descriptiva, cada uno de los componentes clave.
        .cajon.color-acento-botones.p-4.mb-0
          p.mb-0 La promoción territorial reúne todas las acciones orientadas a dar visibilidad al territorio, sus tesoros locales, su cultura y su oferta económica y turística. No busca solo “mostrar”, sino conectar emocionalmente a los públicos con la identidad del territorio.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema8/1.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Aspectos integrados

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema8/2.svg')
          h4.mb-4.text-center Difusión identitaria
          p.mb-0 Comunica aquello que hace único al territorio, fortaleciendo orgullo interno y reconocimiento externo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema8/3.svg')
          h4.mb-4.text-center Multiplataforma
          p.mb-0 Ferias, rutas turísticas, mercados campesinos, redes sociales, medios comunitarios, experiencias vivenciales.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema8/4.svg')
          h4.mb-4.text-center Relato con sentido
          p.mb-0 Prioriza historias reales, memorias, saberes y prácticas que representan al territorio.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema8/5.svg')
          h4.mb-4.text-center Segmentación estratégica
          p.mb-0 Mensajes diferenciados según residentes, turistas, compradores, inversionistas o aliados institucionales.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Elementos de valoración de una marca territorial

    p.mb-5(data-aos="fade-left") Los elementos de valoración de una marca territorial conforman un sistema que analiza su coherencia identitaria, pertinencia cultural y capacidad para impulsar el desarrollo endógeno. Este conjunto de dimensiones evalúa la marca no solo como un recurso comunicacional, sino como un instrumento estratégico que articula identidad, economía y gobernanza del territorio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 18.
          | Dimensiones de análisis para la valoración de marca
        .tabla-a.tab3.t10.mb-0
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Apropiación y uso del recurso local
                td Mide el uso de materia prima, mano de obra y beneficios económicos locales. Verifica autenticidad productiva.
              tr.bgr
                td Valor agregado y diferenciación
                td Evalúa calidad, innovación y singularidad del producto o servicio asociado a la marca.
              tr
                td Identidad y pertenencia cultural
                td Revisa la fidelidad con que la marca refleja tradiciones, símbolos y memoria colectiva.
              tr.bgr
                td Sostenibilidad integral
                td Analiza impactos sociales, económicos y ambientales y la capacidad de sostener la marca en el tiempo.
              tr
                td Gobernanza y carácter colectivo
                td Examina organización, acuerdos y participación comunitaria en la gestión de la marca.
              tr.bgr
                td Coherencia visual y narrativa
                td Valora consistencia del logotipo, isotipo, eslogan y narrativa con la esencia territorial.
              tr
                td Potencial de posicionamiento
                td Determina capacidad de la marca para diferenciarse, atraer públicos y proyectarse en mercados.
              tr.bgr
                td Alineación con el sueño colectivo
                td Verifica si la marca expresa la visión de futuro y moviliza a la comunidad hacia ella.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Estrategias de sostenibilidad técnica de la marca territorial

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Sostenibilidad económica")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Modelos de negocio OVOP (ferias, rutas, tiendas antena).
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Alianzas comerciales.
                li.d-flex.mb-0
                  i.fas.fa-bolt.cr
                  p.mb-0 Productos estrella y cadenas cortas.
          .row.align-items-center(titulo="Sostenibilidad cultural")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Integración de memoria, saberes y valor simbólico.
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Protección de tesoros locales.  
                li.d-flex.mb-0
                  i.fas.fa-bolt.cr
                  p.mb-0 Puesta en valor de prácticas culturales.
          .row.align-items-center(titulo="Sostenibilidad social")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Participación continua.
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Relevo generacional (jóvenes).
                li.d-flex.mb-0
                  i.fas.fa-bolt.cr
                  p.mb-0 Comités activos y formación constante.
          .row.align-items-center(titulo="Sostenibilidad institucional")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Reglamentos de uso.
                li.d-flex.mb-2
                  i.fas.fa-bolt.cr
                  p.mb-0 Protocolos de protección de marca.
                li.d-flex.mb-0
                  i.fas.fa-bolt.cr
                  p.mb-0 Integración con planes municipales o departamentales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema8/6.png')


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
