<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        img.img-t.mb-4(src='@/assets/curso/intro/2.svg')
        p.mb-0 La marca territorial constituye una herramienta estratégica para reconocer, organizar y proyectar los atributos que hacen único a un territorio. Desde el enfoque OVOP Colombia, su construcción parte de la identidad, los tesoros locales, los saberes, las capacidades comunitarias y las aspiraciones compartidas, elementos que permiten transformar el potencial territorial en propuestas de valor auténticas. En este proceso, la participación de la comunidad resulta fundamental para garantizar que la marca represente de manera coherente su cultura, sus recursos y su visión de futuro.
    
    p.mb-5(data-aos="fade-left") Este componente formativo aborda los elementos necesarios para definir y planificar estratégicamente una marca territorial, integrando la ruta metodológica OVOP, la narrativa territorial, el sueño colectivo, el #[em storytelling,] la identidad visual, la promoción, la comercialización, la gobernanza y la sostenibilidad. Asimismo, proporciona orientaciones para formular acciones, establecer indicadores, gestionar recursos y fortalecer alianzas que contribuyan al posicionamiento de la marca y al desarrollo endógeno del territorio.

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
