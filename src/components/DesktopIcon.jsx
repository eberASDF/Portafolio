import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PixelIcon from './PixelIcon'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function DesktopIcon({ program, position, onMove, onOpen }) {
  const iconRef = useRef(null)
  const sparkleRef = useRef(null)
  const dragState = useRef(null)
  const suppressOpen = useRef(false)

  useEffect(() => {
    return () => {
      dragState.current?.()
    }
  }, [])

  const playOpenFeedback = () => {
    gsap.fromTo(
      iconRef.current,
      { filter: 'brightness(1.8)', scale: 0.88 },
      {
        filter: 'brightness(1)',
        scale: 1,
        duration: 0.28,
        ease: 'steps(4)',
      },
    )

    gsap.fromTo(
      sparkleRef.current,
      { opacity: 0.9, scale: 0.35 },
      { opacity: 0, scale: 1.6, duration: 0.34, ease: 'power2.out' },
    )
  }

  const openProgram = () => {
    if (suppressOpen.current) {
      return
    }

    playOpenFeedback()
    onOpen(program.id)
  }

  const handlePointerDown = (event) => {
    if (event.button !== 0) {
      return
    }

    const desktop = event.currentTarget.closest('.desktop')

    if (!desktop) {
      return
    }

    const desktopRect = desktop.getBoundingClientRect()
    const iconRect = event.currentTarget.getBoundingClientRect()
    const startPosition = position ?? { x: iconRect.left, y: iconRect.top }
    const start = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: startPosition.x,
      y: startPosition.y,
      maxX: Math.max(8, desktopRect.width - iconRect.width - 10),
      maxY: Math.max(8, desktopRect.height - iconRect.height - 10),
      dragging: false,
    }

    const handlePointerMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - start.pointerX
      const deltaY = moveEvent.clientY - start.pointerY

      if (!start.dragging && Math.hypot(deltaX, deltaY) < 6) {
        return
      }

      start.dragging = true
      iconRef.current?.classList.add('is-dragging')

      onMove(program.id, {
        x: clamp(start.x + deltaX, 8, start.maxX),
        y: clamp(start.y + deltaY, 8, start.maxY),
      })
    }

    const stopDragging = () => {
      globalThis.window.removeEventListener('pointermove', handlePointerMove)
      globalThis.window.removeEventListener('pointerup', stopDragging)
      document.body.style.userSelect = ''
      iconRef.current?.classList.remove('is-dragging')

      if (start.dragging) {
        suppressOpen.current = true
        window.setTimeout(() => {
          suppressOpen.current = false
        }, 220)
      }

      dragState.current = null
    }

    dragState.current = stopDragging
    document.body.style.userSelect = 'none'
    globalThis.window.addEventListener('pointermove', handlePointerMove)
    globalThis.window.addEventListener('pointerup', stopDragging)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      openProgram()
    }
  }

  return (
    <button
      ref={iconRef}
      type="button"
      className={`desktop-icon desktop-icon--${program.icon}`}
      style={{
        '--icon-x': `${position?.x ?? 24}px`,
        '--icon-y': `${position?.y ?? 24}px`,
      }}
      onPointerDown={handlePointerDown}
      onDoubleClick={openProgram}
      onKeyDown={handleKeyDown}
      aria-label={`Abrir ${program.label}`}
    >
      <span ref={sparkleRef} className="desktop-icon__spark" />
      <PixelIcon type={program.icon} src={program.iconImage} />
      <span className="desktop-icon__label">{program.label}</span>
    </button>
  )
}

export default DesktopIcon
