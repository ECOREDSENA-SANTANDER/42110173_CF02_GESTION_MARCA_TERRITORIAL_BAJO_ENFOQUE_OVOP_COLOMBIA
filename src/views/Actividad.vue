<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'De la identidad a la acción territorial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, metodologías y herramientas necesarias para definir y planificar una estrategia de marca territorial con enfoque OVOP, mediante la identificación de elementos relacionados con narrativa territorial, sueño colectivo, propuesta de valor, ruta metodológica, tipos de marca, comunicación, promoción, comercialización, gobernanza, planificación participativa y sostenibilidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función cumple la narrativa territorial en la construcción de una marca con enfoque OVOP?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describir exclusivamente los atractivos turísticos del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dar sentido a los tesoros locales mediante historias, valores, memorias y elementos que expresan la identidad del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir los precios de los productos territoriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir el diagnóstico territorial por una estrategia de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoce que la narrativa territorial transforma los tesoros locales en símbolos de identidad y orgullo colectivo, conectando a la comunidad con la proyección de su territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué es el sueño colectivo dentro del enfoque OVOP?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una campaña de comunicación diseñada para atraer turistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una meta económica definida únicamente por los productores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una visión de futuro construida por los actores del territorio que conecta lo que la comunidad es con lo que quiere llegar a ser.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un conjunto de elementos gráficos que representan el territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El sueño colectivo funciona como una brújula que orienta el desarrollo local y la construcción estratégica de la marca.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el orden de las cuatro fases propuestas para construir el sueño colectivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exploración, validación, sensibilización y visualización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sensibilización, exploración, visualización y validación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diagnóstico, promoción, comercialización y evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sensibilización, comercialización, posicionamiento y validación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La construcción del sueño colectivo avanza desde la sensibilización hasta la validación de una visión compartida con los actores territoriales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué pregunta central busca responder la propuesta de valor territorial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Cuánto cuesta promocionar el territorio?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Por qué este territorio es diferente y valioso?',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '¿Cuántas instituciones existen en el territorio?',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Qué logotipo utiliza actualmente el territorio?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La propuesta de valor identifica los beneficios diferenciales del territorio a partir de su identidad, tesoros locales y visión de futuro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En el <em>storytelling</em> local, definir quién protagoniza la historia, a quién se dirige y qué se quiere comunicar corresponde principalmente a:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el ADN de la historia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elegir el medio y la forma de contar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar la identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el posicionamiento de la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La primera fase del <em>storytelling</em> establece las bases que dan coherencia y sentido al relato territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son las cuatro fases de la ruta metodológica OVOP para el desarrollo de la marca territorial?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico, diseño, promoción y venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Introducción, creación de valor, desarrollo colectivo y sostenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Planeación, financiación, ejecución y cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identidad, comunicación, mercado y publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La ruta metodológica OVOP conduce progresivamente desde la preparación del territorio hasta la consolidación de una marca apropiada y sostenible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes corresponde a un eje estratégico de la metodología de marca OVOP?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión sostenible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicidad corporativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Competencia institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustitución de productos locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La gestión sostenible articula gobernanza y gestión participativa para fortalecer la continuidad de la marca territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuáles son los cuatro tipos principales de marca territorial planteados en el componente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Marca municipal, departamental, nacional e internacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marca pública, privada, comunitaria y comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Marca de espacio geográfico, marca de productos y servicios, marca de turismo y marca de cultura y medio ambiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Marca agrícola, industrial, turística y digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Estos cuatro tipos funcionan como capas complementarias que interactúan para construir una marca territorial integral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Cuando un alimento, artesanía, bebida o servicio local se convierte en embajador del territorio, se está desarrollando principalmente una:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Marca de espacio geográfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marca de productos y servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Marca institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Marca de infraestructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'En este tipo de marca, el producto o servicio comunica el origen, los saberes, las técnicas y los atributos propios del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué diferencia principalmente la ruta territorial de la ruta productiva en la implementación de una marca OVOP?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ruta territorial se centra en la comunidad y los tesoros locales, mientras la productiva se enfoca en productores, emprendedores y asociaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La territorial se utiliza únicamente en ciudades y la productiva en zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La territorial trabaja exclusivamente turismo y la productiva únicamente agricultura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existe diferencia entre ambas rutas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las dos rutas son complementarias y se adaptan a las características, actores y necesidades del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué principio debe orientar la construcción de la identidad visual de una marca territorial bajo el enfoque OVOP?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar tendencias gráficas internacionales independientemente del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construir los elementos visuales a partir de la cultura, los tesoros, los símbolos y las características reales del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente los gustos del diseñador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Utilizar los mismos colores y símbolos de otras marcas exitosas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La identidad visual debe nacer del territorio y reflejar de manera auténtica su cultura, memoria y elementos diferenciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué diferencia principalmente un isotipo de un logotipo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El isotipo identifica visualmente la marca sin necesidad de palabras o letras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El isotipo siempre contiene el nombre completo del territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El logotipo solamente puede utilizarse en productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existe ninguna diferencia entre ambos conceptos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El isotipo puede funcionar como un sello visual independiente, permitiendo reconocer la marca sin necesidad de texto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito principal de la promoción territorial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Visibilizar la identidad, los tesoros, la riqueza cultural, la oferta productiva y las experiencias del territorio, generando conexión y reconocimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar exclusivamente las ventas de un producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar la identidad territorial por campañas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promocionar únicamente los atractivos turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La promoción territorial conecta la identidad con diferentes públicos y genera valor emocional, simbólico y experiencial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué caracteriza a la promoción y comercialización vivencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presenta exclusivamente fotografías y productos en vitrinas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite que el visitante participe directamente en actividades y experiencias relacionadas con los saberes y productos del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se desarrolla únicamente mediante redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evita el contacto entre visitantes y comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La modalidad vivencial convierte al visitante en protagonista y le permite experimentar directamente la identidad territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Un territorio organiza recorridos guiados por lugares emblemáticos y experiencias comunitarias como estrategia de promoción. ¿Qué modelo OVOP está aplicando principalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'D-HOPE.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SARUKU.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tienda Antena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ONPAKU',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'SARUKU utiliza recorridos guiados por lugares emblemáticos y experiencias comunitarias como mecanismo de promoción territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué caracteriza a la planificación estratégica participativa de una marca territorial?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se limita a elaborar un cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un proceso colectivo mediante el cual los actores definen cómo construir, gestionar y sostener la marca territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Es responsabilidad exclusiva de las instituciones públicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se concentra únicamente en diseñar acciones publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La planificación participativa articula identidad, visión, recursos, actores, metas e indicadores para orientar la marca en el tiempo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes es un indicador de impacto de una marca territorial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de reuniones realizadas por el comité.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cumplimiento del cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incremento de ventas, visitas o flujos turísticos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Número de talleres programados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los indicadores de impacto permiten observar cambios relacionados con el posicionamiento y el desarrollo local, como ventas, visitas, reputación y reconocimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la función principal del comité local OVOP en la planificación de la marca territorial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar exclusivamente las piezas gráficas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hacer seguimiento al Plan de Acción, participar en la toma de decisiones, regular el uso de la marca y contribuir a la continuidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar a los productores y líderes comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar exclusivamente los recursos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El comité local OVOP constituye una instancia fundamental de gobernanza y sostenibilidad de la marca territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué evalúa la dimensión “coherencia visual y narrativa” dentro del sistema de valoración de marca territorial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de productos vendidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La consistencia del logotipo, isotipo, eslogan y narrativa con la esencia territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente la cantidad de seguidores en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto invertido en promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La valoración de la marca busca verificar que sus expresiones visuales y narrativas sean consistentes con la identidad del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una comunidad ya cuenta con tesoros locales identificados y un sueño colectivo. Ahora quiere convertirlos en una marca sostenible. ¿Cuál de las siguientes acciones representa mejor la estrategia propuesta en el componente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar primero el logotipo y posteriormente definir qué representa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construir una estrategia que articule narrativa, propuesta de valor, rutas de implementación, identidad visual, promoción, comercialización, actores, indicadores, gobernanza y sostenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Concentrar todos los esfuerzos en publicidad digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delegar la construcción de la marca a una empresa externa sin participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que la construcción de una marca territorial con enfoque OVOP es un proceso integral, participativo y estratégico que transforma la identidad y los tesoros locales en acciones sostenibles de desarrollo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué evalúa la dimensión “coherencia visual y narrativa” dentro del sistema de valoración de marca territorial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de productos vendidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La consistencia del logotipo, isotipo, eslogan y narrativa con la esencia territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente la cantidad de seguidores en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto invertido en promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La valoración de la marca busca verificar que sus expresiones visuales y narrativas sean consistentes con la identidad del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una comunidad ya cuenta con tesoros locales identificados y un sueño colectivo. Ahora quiere convertirlos en una marca sostenible. ¿Cuál de las siguientes acciones representa mejor la estrategia propuesta en el componente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar primero el logotipo y posteriormente definir qué representa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construir una estrategia que articule narrativa, propuesta de valor, rutas de implementación, identidad visual, promoción, comercialización, actores, indicadores, gobernanza y sostenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Concentrar todos los esfuerzos en publicidad digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delegar la construcción de la marca a una empresa externa sin participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que la construcción de una marca territorial con enfoque OVOP es un proceso integral, participativo y estratégico que transforma la identidad y los tesoros locales en acciones sostenibles de desarrollo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
