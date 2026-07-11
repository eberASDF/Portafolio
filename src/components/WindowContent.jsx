import PixelIcon from './PixelIcon'
import { LetterX, Mail, MessageText } from 'pixelarticons/react'
import {
  SiCisco,
  SiCplusplus,
  SiFirebase,
  SiGithub,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiReact,
  SiStripe,
  SiSupabase,
  SiVite,
} from 'react-icons/si'

const profileTools = [
  { name: 'HTML', Icon: SiHtml5, tone: 'html' },
  { name: 'JavaScript', Icon: SiJavascript, tone: 'javascript' },
  { name: 'Java', Icon: SiOpenjdk, tone: 'java' },
  { name: 'Python', Icon: SiPython, tone: 'python' },
  { name: 'C++', Icon: SiCplusplus, tone: 'cplusplus' },
  { name: 'MySQL', Icon: SiMysql, tone: 'mysql' },
  { name: 'Firebase', Icon: SiFirebase, tone: 'firebase' },
  { name: 'Supabase', Icon: SiSupabase, tone: 'supabase' },
  { name: 'MongoDB', Icon: SiMongodb, tone: 'mongodb' },
  { name: 'PHP', Icon: SiPhp, tone: 'php' },
  { name: 'GitHub', Icon: SiGithub, tone: 'github' },
  { name: 'Stripe', Icon: SiStripe, tone: 'stripe' },
  { name: 'Cisco Packet Tracer', Icon: SiCisco, tone: 'cisco' },
  { name: 'Hostinger', Icon: SiHostinger, tone: 'hostinger' },
  { name: 'React Native', Icon: SiReact, tone: 'react' },
  { name: 'Vite', Icon: SiVite, tone: 'vite' },
]

function ProfileContent() {
  return (
    <div className="window-content profile-content">
      <p className="content-eyebrow">Archivo personal</p>
      <h1>Eber Higuera Ortiz</h1>

      <section className="profile-card" aria-labelledby="profile-presentation">
        <h2 id="profile-presentation">Presentación</h2>
        <p>
          Hola, soy <strong>Eber Higuera Ortiz</strong>, un estudiante
          mexicano de 20 años apasionado por la programación. Me gusta crear
          proyectos tanto del lado frontend como backend, cuidando que cada
          página sea funcional, clara y agradable de usar.
        </p>
      </section>

      <div className="profile-facts" aria-label="Información personal">
        <article className="profile-fact">
          <span>Edad</span>
          <strong>20 años</strong>
        </article>
        <article className="profile-fact">
          <span>Ciudad</span>
          <strong>San Luis Río Colorado</strong>
        </article>
      </div>

      <section className="profile-tools" aria-labelledby="profile-tools-title">
        <h2 id="profile-tools-title">Herramientas que he utilizado</h2>
        <div className="profile-tool-grid">
          {profileTools.map((tool) => (
            <article
              className={`profile-tool profile-tool--${tool.tone}`}
              key={tool.name}
            >
              <tool.Icon className="profile-tool__icon" aria-hidden="true" />
              <span>{tool.name}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function ContactContent() {
  const contacts = [
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+52 6671964575',
      href: 'https://wa.me/526671964575',
      Icon: MessageText,
    },
    {
      type: 'mail',
      label: 'Correo',
      value: 'ioteber51@gmail.com',
      href: 'mailto:ioteber51@gmail.com',
      Icon: Mail,
    },
    {
      type: 'x',
      label: 'Twitter/X',
      value: '@eberho009',
      href: 'https://x.com/eberho009',
      Icon: LetterX,
    },
  ]

  return (
    <div className="window-content contact-content">
      <p className="content-eyebrow">Directorio</p>
      <h1>Contacto</h1>
      <p>
        Canales directos para hablar con Eber Higuera Ortiz y conocer más de
        sus proyectos.
      </p>

      <div className="contact-list" aria-label="Datos de contacto">
        {contacts.map((contact) => (
          <a
            className="contact-row"
            href={contact.href}
            key={contact.type}
            target={contact.type === 'mail' ? undefined : '_blank'}
            rel={contact.type === 'mail' ? undefined : 'noreferrer'}
          >
            <span
              className={`contact-icon contact-icon--${contact.type}`}
              aria-hidden="true"
            >
              <contact.Icon className="contact-icon__svg" />
            </span>
            <span className="contact-row__text">
              <strong>{contact.label}</strong>
              <span>{contact.value}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function StudiesContent() {
  const completedStudies = [
    'Los esenciales de Primaria a Preparatoria.',
    'Mantenimiento en Sistemas Electrónicos.',
    'Técnico Superior Universitario en Tecnologías de la Información, Área Desarrollo de Software Multiplataforma.',
  ]

  return (
    <div className="window-content studies-content">
      <p className="content-eyebrow">Historial académico</p>

      <div className="studies-header">
        <PixelIcon type="study" />
        <div>
          <h1>Estudios</h1>
        </div>
      </div>

      <section className="studies-section" aria-labelledby="studies-titles">
        <h2 id="studies-titles">Títulos</h2>
        <div className="studies-card-list">
          {completedStudies.map((study) => (
            <article className="studies-card" key={study}>
              <span className="studies-card__marker" aria-hidden="true" />
              <strong>{study}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="studies-section" aria-labelledby="studies-current">
        <h2 id="studies-current">Cursando</h2>
        <article className="studies-card studies-card--current">
          <span className="studies-card__marker" aria-hidden="true" />
          <div>
            <strong>Ingeniería en Desarrollo y Gestión de Software.</strong>
            <p>
              Actualmente sigo aprendiendo sobre programación, desarrollo de
              aplicaciones, bases de datos y creación de soluciones
              tecnológicas.
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

function ListContent({ content }) {
  return (
    <div className="window-content">
      <p className="content-eyebrow">{content.eyebrow}</p>
      <h1>{content.heading}</h1>
      <p>{content.intro}</p>
      <ul className="program-list">
        {content.items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.body}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectContent({ content }) {
  return (
    <div className="window-content project-content">
      <p className="content-eyebrow">{content.eyebrow}</p>
      <h1>{content.heading}</h1>

      <div className="project-flow">
        {content.sections.map((section) => (
          <section className="project-section" key={section.imageAlt}>
            <p>{section.text}</p>
            <figure className="project-media">
              <img src={section.image} alt={section.imageAlt} />
            </figure>
          </section>
        ))}
      </div>
    </div>
  )
}

function TrashContent({ content, onOpenFile }) {
  const openFile = () => {
    onOpenFile(content.fileId)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      openFile()
    }
  }

  return (
    <div className="window-content trash-content">
      <p className="content-eyebrow">Papelera</p>
      <h1>Elementos eliminados</h1>
      <button
        className="file-row"
        type="button"
        onDoubleClick={openFile}
        onKeyDown={handleKeyDown}
        aria-label={`Abrir ${content.fileName}`}
      >
        <PixelIcon type="text" compact />
        <span>{content.fileName}</span>
        <small>1 KB</small>
      </button>
    </div>
  )
}

function TextFileContent({ content }) {
  return (
    <div className="window-content text-file-content">
      <p className="content-eyebrow">Bloc de notas</p>
      <pre>{content.text}</pre>
    </div>
  )
}

function WindowContent({ content, onOpenFile }) {
  if (content.kind === 'profile') {
    return <ProfileContent />
  }

  if (content.kind === 'contact') {
    return <ContactContent />
  }

  if (content.kind === 'studies') {
    return <StudiesContent />
  }

  if (content.kind === 'trash') {
    return <TrashContent content={content} onOpenFile={onOpenFile} />
  }

  if (content.kind === 'project') {
    return <ProjectContent content={content} />
  }

  if (content.kind === 'textFile') {
    return <TextFileContent content={content} />
  }

  return <ListContent content={content} />
}

export default WindowContent
