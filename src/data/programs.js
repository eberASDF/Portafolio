import alertBandIcon from '../assets/alertband.png'
import alertImageOne from '../assets/alert1.jpeg'
import alertImageTwo from '../assets/alert2.jpeg'
import alertImageThree from '../assets/alert3.jpeg'
import farmagenIcon from '../assets/farmagen.png'
import farmaImageOne from '../assets/farma1.png'
import farmaImageTwo from '../assets/farma2.png'
import farmaImageThree from '../assets/farma3.png'
import ticketazoIcon from '../assets/ticketazo.png'
import ticketImageOne from '../assets/tic1.jpeg'
import ticketImageTwo from '../assets/tic2.jpeg'
import ticketImageThree from '../assets/tic3.jpeg'
import brainCareIcon from '../assets/braincare.png'
import brainImageOne from '../assets/brain1.jpeg'
import brainImageTwo from '../assets/brain2.jpeg'
import sincronizadasIcon from '../assets/sincronizadas.png'
import sincronizadasImageOne from '../assets/sin1.png'
import sincronizadasImageTwo from '../assets/sin2.png'
import sincronizadasImageThree from '../assets/sin3.png'

export const taskbarPrograms = [
  {
    id: 'profile',
    label: 'Perfil',
    title: 'Perfil de Eber.H',
    icon: 'profile',
    canClose: false,
    defaultPosition: { x: 92, y: 70 },
    defaultSize: { width: 720, height: 560 },
    content: { kind: 'profile' },
  },
  {
    id: 'contact',
    label: 'Contacto',
    title: 'Contacto',
    icon: 'phone',
    canClose: true,
    defaultPosition: { x: 210, y: 126 },
    defaultSize: { width: 510, height: 380 },
    content: { kind: 'contact' },
  },
  {
    id: 'studies',
    label: 'Estudios',
    title: 'Estudios.log',
    icon: 'study',
    canClose: true,
    defaultPosition: { x: 270, y: 168 },
    defaultSize: { width: 540, height: 420 },
    content: { kind: 'studies' },
  },
]

export const desktopPrograms = [
  {
    id: 'alertband',
    label: 'AlertBand',
    title: 'AlertBand',
    icon: 'alertband',
    iconImage: alertBandIcon,
    desktopPosition: { x: 24, y: 24 },
    defaultPosition: { x: 500, y: 64 },
    defaultSize: { width: 690, height: 540 },
    content: {
      kind: 'project',
      eyebrow: 'Proyecto destacado',
      heading: 'AlertBand',
      sections: [
        {
          text:
            'AlertBand es un proyecto escolar desarrollado en equipo y un sistema de monitoreo portátil diseñado para prevenir emergencias médicas asociadas al calor extremo. Este proyecto busca integrar sensores biométricos, tecnología IoT y herramientas digitales para brindar una solución eficaz que alerte al usuario en tiempo real ante cualquier anomalía en su temperatura corporal o ritmo cardíaco.',
          image: alertImageOne,
          imageAlt: 'Vista del proyecto AlertBand con componentes del sistema',
        },
        {
          text:
            'El sistema se compone de una pulsera inteligente conectada a una Raspberry Pi, la cual permite registrar y procesar las señales de los sensores mediante programación en Python. Además, se complementa con una aplicación móvil y una plataforma web, donde tanto los trabajadores como los administradores pueden visualizar datos, recibir alertas y tomar decisiones preventivas basadas en información real.',
          image: alertImageTwo,
          imageAlt: 'Interfaz y monitoreo de datos de AlertBand',
        },
        {
          text:
            'En este proyecto participé desarrollando la aplicación móvil con React, enfocándome en crear una interfaz clara para visualizar información importante, recibir alertas y facilitar el uso del sistema desde un dispositivo móvil.',
          image: alertImageThree,
          imageAlt: 'Aplicacion movil de AlertBand desarrollada con React',
        },
      ],
    },
  },
  {
    id: 'farmagen',
    label: 'FarmaGen',
    title: 'FarmaGen',
    icon: 'farmagen',
    iconImage: farmagenIcon,
    desktopPosition: { x: 24, y: 132 },
    defaultPosition: { x: 560, y: 118 },
    defaultSize: { width: 690, height: 540 },
    content: {
      kind: 'project',
      eyebrow: 'Proyecto web',
      heading: 'FarmaGen',
      sections: [
        {
          text:
            'FarmaGen es una página web desarrollada con React, Vite y JavaScript para una farmacia local. El proyecto fue creado para ofrecer una experiencia clara y práctica, donde la información de productos y servicios pueda consultarse desde una interfaz moderna, rápida y fácil de usar.',
          image: farmaImageOne,
          imageAlt: 'Pantalla principal del proyecto FarmaGen',
        },
        {
          text:
            'Dentro de la página, los clientes pueden iniciar sesión, explorar productos, comprar medicamentos o artículos de farmacia, elegir envío a domicilio o seleccionar la opción de pagar en sucursal. La idea principal es facilitar el proceso de compra y acercar los servicios de la farmacia a más usuarios.',
          image: farmaImageTwo,
          imageAlt: 'Vista de productos y compra en FarmaGen',
        },
        {
          text:
            'El proyecto también cuenta con un panel de administrador para modificar banners, productos destacados y sucursales sin cambiar el código manualmente. Además, los usuarios, productos y pedidos se guardan en una base de datos creada con Firebase, herramienta que también utilicé para almacenar y organizar la información del sistema.',
          image: farmaImageThree,
          imageAlt: 'Panel de administración y datos de FarmaGen',
        },
      ],
    },
  },
  {
    id: 'ticketazo',
    label: 'Ticketazo',
    title: 'Ticketazo',
    icon: 'ticketazo',
    iconImage: ticketazoIcon,
    desktopPosition: { x: 24, y: 240 },
    defaultPosition: { x: 520, y: 170 },
    defaultSize: { width: 690, height: 540 },
    content: {
      kind: 'project',
      eyebrow: 'Proyecto escolar',
      heading: 'Ticketazo',
      sections: [
        {
          text:
            'Ticketazo es un proyecto escolar desarrollado en equipo como una boletera de eventos. La plataforma permite que los clientes puedan ver eventos disponibles, revisar su información principal y comprar boletos desde una experiencia clara y fácil de usar.',
          image: ticketImageOne,
          imageAlt: 'Pantalla principal del proyecto Ticketazo',
        },
        {
          text:
            'El sistema contaba con base de datos y tres paneles principales. El panel Admin administraba la página, el panel Tesorero se encargaba de la parte del dinero y el panel Organizador de eventos permitía crear y gestionar los eventos publicados en la plataforma.',
          image: ticketImageTwo,
          imageAlt: 'Paneles de administración de Ticketazo',
        },
        {
          text:
            'En este proyecto participé desarrollando la base de datos con Supabase, por lo que también tengo experiencia usando esa herramienta para organizar información del sistema. Además, creé el mapa de asientos, el cual se actualiza en tiempo real para mostrar la disponibilidad de lugares mientras los usuarios compran boletos.',
          image: ticketImageThree,
          imageAlt: 'Mapa de asientos en tiempo real de Ticketazo',
        },
      ],
    },
  },
  {
    id: 'braincare',
    label: 'BrainCare',
    title: 'BrainCare',
    icon: 'braincare',
    iconImage: brainCareIcon,
    desktopPosition: { x: 24, y: 348 },
    defaultPosition: { x: 470, y: 92 },
    defaultSize: { width: 690, height: 520 },
    content: {
      kind: 'project',
      eyebrow: 'Primer proyecto',
      heading: 'BrainCare',
      sections: [
        {
          text:
            'BrainCare fue mi primer proyecto escolar desarrollado en equipo. La idea principal era crear una plataforma para una clínica mental, donde los usuarios pudieran crear una cuenta, consultar información importante de la clínica y agendar citas de forma sencilla.',
          image: brainImageOne,
          imageAlt: 'Pantalla principal del proyecto BrainCare',
        },
        {
          text:
            'El sistema contaba con una base de datos conectada para guardar la información de usuarios y citas. En este proyecto participé creando la base de datos y desarrollando la funcionalidad para registrar usuarios y agendar citas, lo que me ayudó a entender mejor cómo conectar una aplicación con datos reales.',
          image: brainImageTwo,
          imageAlt: 'Vista de usuarios y citas de BrainCare',
        },
      ],
    },
  },
  {
    id: 'sincronizadas',
    label: 'Sincronizadas',
    title: 'Sincronizadas',
    icon: 'sincronizadas',
    iconImage: sincronizadasIcon,
    desktopPosition: { x: 132, y: 24 },
    defaultPosition: { x: 500, y: 132 },
    defaultSize: { width: 700, height: 540 },
    content: {
      kind: 'project',
      eyebrow: 'Marketplace',
      heading: 'Sincronizadas',
      sections: [
        {
          text:
            'Sincronizadas funciona como un sistema de tienda y marketplace donde los usuarios pueden iniciar sesion, ver productos, buscarlos, filtrarlos, agregarlos al carrito y finalizar una compra. Tambien calcula de forma automatica el subtotal, IVA, descuentos y total, ademas de permitir el seguimiento del pedido con estados simulados como pendiente, confirmado, empacado, enviado y entregado.',
          image: sincronizadasImageOne,
          imageAlt: 'Pantalla principal del proyecto Sincronizadas',
        },
        {
          text:
            'El proyecto tambien incluye funciones avanzadas como compras grupales, donde varios usuarios pueden unirse con un codigo de invitacion, agregar productos a un carrito comun, confirmar su parte y completar la compra solo cuando todos estan de acuerdo. Ademas, la pagina integra notificaciones, historial de compras, recomendaciones, comparacion de productos y una simulacion de logistica.',
          image: sincronizadasImageTwo,
          imageAlt: 'Funciones de compras grupales y productos en Sincronizadas',
        },
        {
          text:
            'Dentro del Marketplace, los usuarios pueden publicar sus propios productos con imagen, precio, stock y descripcion para que otras personas puedan verlos y comprarlos. El administrador cuenta con herramientas especiales para revisar el dashboard, reportes, auditorias, productos, pedidos y publicaciones del marketplace, manteniendo el sistema organizado desde un panel central.',
          image: sincronizadasImageThree,
          imageAlt: 'Panel de administracion y marketplace de Sincronizadas',
        },
      ],
    },
  },
]

export const trashProgram = {
  id: 'trash',
  label: 'Papelera',
  title: 'Papelera',
  icon: 'trash',
  desktopPosition: { x: 700, y: 24 },
  defaultPosition: { x: 690, y: 98 },
  defaultSize: { width: 490, height: 330 },
  content: {
    kind: 'trash',
    fileId: 'trash-note',
    fileName: 'revision-final.txt',
  },
}

export const trashFileProgram = {
  id: 'trash-note',
  label: 'revision-final.txt',
  title: 'revision-final.txt',
  icon: 'text',
  defaultPosition: { x: 330, y: 214 },
  defaultSize: { width: 540, height: 260 },
  content: {
    kind: 'textFile',
    text: 'No hay nada aqu\u00ed todos estos programas funcionan muy bien',
  },
}

export const programCatalog = [
  ...taskbarPrograms,
  ...desktopPrograms,
  trashProgram,
  trashFileProgram,
].reduce((catalog, program) => {
  catalog[program.id] = program
  return catalog
}, {})
