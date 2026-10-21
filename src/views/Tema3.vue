<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Storytelling] local: herramienta metodológica para comunicar la marca territorial
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 El #[em storytelling] local es una herramienta metodológica que permite transformar la identidad, los tesoros locales y el sueño colectivo del territorio en historias capaces de generar conexión con diferentes públicos. En el enfoque OVOP, contribuye a comunicar de manera cercana los valores, saberes, experiencias y aspiraciones de la comunidad, fortaleciendo la apropiación de la marca territorial y su proyección. 
        p.mb-0 Una historia territorial no consiste únicamente en promocionar un lugar, producto o atractivo. Su construcción debe partir de elementos auténticos del territorio y reconocer las voces de quienes lo habitan. Por ello, el relato debe guardar coherencia con la narrativa territorial, la propuesta de valor y los atributos que diferencian la marca. A continuación, se proponen cuatro fases para su desarrollo:
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/1.png')

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Fase 1. Definir el ADN de la historia")
            .col-lg-12
              p.mb-4 En esta fase se establece la base que dará coherencia y sentido al relato territorial:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Identidad y audiencia:] reconocer quién protagoniza la historia (productores, sabedores, comunidad) y a quién se dirige (jóvenes, turistas, aliados, consumidores). 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Objetivo del mensaje:] definir con claridad qué se quiere comunicar: un valor, un logro, un proceso, una tradición o una transformación. 
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 #[b Autenticidad:] asegurar que las historias surjan del territorio, sean veraces y reflejen su cultura, experiencias y formas de vida.
          .row.align-items-center(titulo="Fase 2. Identificar el contenido y la estructura narrativa")
            .col-lg-12
              p.mb-4 En esta fase se organizan los elementos que darán forma al relato y permitirán conectar hechos, personajes y emociones:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Mensaje y conflicto:] establecer el propósito de la historia, los desafíos enfrentados y el proceso de transformación. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Estructura narrativa:] organizar el relato con un inicio, un desarrollo y un cierre que faciliten su comprensión.  
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Personajes reales:] incorporar las voces y experiencias de artesanos, agricultores, cocineras, jóvenes, líderes y demás actores del territorio. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Emociones humanas:] integrar sentimientos asociados con el orgullo, la esperanza, la resiliencia, el sentido de pertenencia o el arraigo. 
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 #[b Veracidad:] comunicar la historia con transparencia y respeto por los hechos, experiencias y voces de la comunidad. 
          .row.align-items-center(titulo="Fase 3. Elegir el medio y la forma de contar")
            .col-lg-12
              p.mb-4 Una vez estructurada la historia, se seleccionan los canales y recursos más adecuados para comunicarla:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Canales:] seleccionar los medios pertinentes, como redes sociales, ferias, videos, murales, medios comunitarios, exposiciones, pódcasts o experiencias turísticas. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Llamada a la acción:] definir qué se espera del público después de conocer la historia: visitar el territorio, adquirir un producto, apoyar una iniciativa o participar en una actividad. 
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 #[b Recursos narrativos y comunicativos:] seleccionar fotografías, ilustraciones, testimonios, piezas audiovisuales, sonidos, pódcasts u otros recursos que complementen el relato. 
          .row.align-items-center(titulo="Fase 4. Validar y fortalecer la historia")
            .col-lg-12
              p.mb-4 Antes de su difusión, es importante comprobar que la historia representa de manera auténtica al territorio y mantiene coherencia con la marca territorial:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Validación comunitaria:] compartir el relato con actores del territorio para reconocer si representa adecuadamente su identidad, experiencias y valores. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Coherencia con la marca:] verificar su relación con la narrativa territorial, el sueño colectivo, los tesoros locales y la propuesta de valor. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 #[b Pertinencia del mensaje:] confirmar que el lenguaje, contenido y formato sean apropiados para el público al que se dirige. 
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 #[b Mejora del relato:] incorporar los aportes de la comunidad y realizar los ajustes necesarios antes de su difusión.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')

    p.mb-0(data-aos="fade-right") De esta manera, el #[em storytelling] local se convierte en un recurso para dar voz al territorio y comunicar su identidad desde las experiencias de quienes lo construyen. Una historia territorial auténtica no solo busca generar recordación, sino también fortalecer el sentido de pertenencia, favorecer la participación comunitaria y proyectar los atributos diferenciales de la marca territorial.

      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
