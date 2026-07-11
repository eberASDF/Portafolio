import DesktopIcon from './DesktopIcon'
import Trash from './Trash'

function Desktop({
  programs,
  trashProgram,
  iconPositions,
  onMoveIcon,
  onOpenProgram,
}) {
  return (
    <section className="desktop" aria-label="Escritorio retro">
      <div className="desktop__scanline" aria-hidden="true" />
      <div className="desktop__icons" aria-label="Programas del escritorio">
        {programs.map((program) => (
          <DesktopIcon
            key={program.id}
            program={program}
            position={iconPositions[program.id]}
            onMove={onMoveIcon}
            onOpen={onOpenProgram}
          />
        ))}

        <Trash
          program={trashProgram}
          position={iconPositions[trashProgram.id]}
          onMove={onMoveIcon}
          onOpen={onOpenProgram}
        />
      </div>
    </section>
  )
}

export default Desktop
