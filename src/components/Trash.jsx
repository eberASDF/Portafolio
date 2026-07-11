import DesktopIcon from './DesktopIcon'

function Trash({ program, position, onMove, onOpen }) {
  return (
    <div className="trash-slot">
      <DesktopIcon
        program={program}
        position={position}
        onMove={onMove}
        onOpen={onOpen}
      />
    </div>
  )
}

export default Trash
