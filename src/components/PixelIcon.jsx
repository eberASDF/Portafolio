import {
  BookOpen,
  FileText,
  MenuSquare,
  PhoneCall,
  Trash,
  User,
} from 'pixelarticons/react'

const libraryIcons = {
  menu: MenuSquare,
  phone: PhoneCall,
  profile: User,
  study: BookOpen,
  text: FileText,
  trash: Trash,
}

function PixelIcon({ type, compact = false, src }) {
  const LibraryIcon = libraryIcons[type]

  return (
    <span
      className={`pixel-icon pixel-icon--${type} ${
        compact ? 'pixel-icon--compact' : ''
      } ${src ? 'pixel-icon--asset' : ''} ${
        LibraryIcon ? 'pixel-icon--library' : ''
      }`}
      aria-hidden="true"
    >
      {src ? (
        <img
          className="pixel-icon__image"
          src={src}
          alt=""
          draggable="false"
        />
      ) : LibraryIcon ? (
        <LibraryIcon className="pixel-icon__svg" />
      ) : (
        <>
          <span className="pixel-icon__detail" />
          <span className="pixel-icon__shine" />
        </>
      )}
    </span>
  )
}

export default PixelIcon
