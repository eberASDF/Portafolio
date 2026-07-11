import { useEffect, useState } from 'react'
import PixelIcon from './PixelIcon'

function Taskbar({ programs, pinnedProgramIds, states, onToggleProgram }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000 * 30)
    return () => window.clearInterval(timer)
  }, [])

  const clock = now.toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const pinnedSet = new Set(pinnedProgramIds)

  return (
    <nav className="taskbar" aria-label="Barra de tareas">
      <div className="taskbar__menu" aria-label="Menu retro">
        <PixelIcon type="menu" compact />
        <span className="taskbar__menu-label">Menu</span>
      </div>

      <div className="taskbar__programs" role="list">
        {programs.map((program) => {
          const state = states[program.id]

          return (
            <button
              key={program.id}
              type="button"
              className={`taskbar__button ${
                state?.isOpen ? 'is-open' : ''
              } ${state?.isMinimized ? 'is-minimized' : ''} ${
                pinnedSet.has(program.id) ? 'is-pinned' : ''
              }`}
              onClick={() => onToggleProgram(program.id)}
              aria-pressed={state?.isOpen}
            >
              <PixelIcon
                type={program.icon}
                compact
                src={program.iconImage}
              />
              <span className="taskbar__label">{program.label}</span>
            </button>
          )
        })}
      </div>

      <div className="taskbar__status" aria-label={`Hora ${clock}`}>
        <span className="taskbar__status-light" aria-hidden="true" />
        <span>{clock}</span>
      </div>
    </nav>
  )
}

export default Taskbar
