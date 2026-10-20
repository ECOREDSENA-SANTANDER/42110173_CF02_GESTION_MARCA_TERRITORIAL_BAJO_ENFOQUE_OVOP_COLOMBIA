<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La construcción de una marca territorial bajo el enfoque OVOP requiere integrar los elementos que representan la identidad, las aspiraciones y los valores propios del territorio. En este sentido, la siguiente síntesis articula los conceptos fundamentales que permiten transformar los tesoros locales y el sueño colectivo en una propuesta de valor auténtica, mediante una narrativa territorial coherente y estrategias de storytelling que fortalezcan el reconocimiento y la diferenciación del territorio .
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis integra cinco elementos esenciales para la construcción de la marca territorial OVOP: narrativa territorial, sueño colectivo, storytelling territorial, concepto de marca y propuesta de valor. Estos componentes articulan la identidad, los tesoros locales, las aspiraciones de la comunidad y sus elementos diferenciadores, orientándolos hacia la creación de una marca territorial participativa, auténtica y conectada con el desarrollo local.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
