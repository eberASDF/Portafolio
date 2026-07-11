import { useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PixelIcon from './PixelIcon'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function Window({
  windowData,
  program,
  children,
  onClose,
  onMinimize,
  onMove,
  onResize,
  onFocus,
}) {
  const windowRef = useRef(null)
  const lastMinimizeRequest = useRef(windowData.minimizeRequest)
  const dragCleanup = useRef(null)
  const resizeCleanup = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, scale: 0.86, y: 18, filter: 'brightness(1.35)' },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'brightness(1)',
          duration: 0.3,
          ease: 'back.out(2)',
        },
      )
    }, windowRef)

    return () => ctx.revert()
  }, [windowData.id])

  useEffect(() => {
    return () => {
      dragCleanup.current?.()
      resizeCleanup.current?.()
    }
  }, [])

  const animateMinimize = useCallback(() => {
    const target = windowRef.current

    if (!target || target.dataset.animating === 'true') {
      return
    }

    target.dataset.animating = 'true'
    gsap.to(target, {
      opacity: 0,
      scale: 0.72,
      y: 52,
      duration: 0.24,
      ease: 'power2.in',
      onComplete: () => onMinimize(windowData.id),
    })
  }, [onMinimize, windowData.id])

  useEffect(() => {
    if (lastMinimizeRequest.current === windowData.minimizeRequest) {
      return
    }

    lastMinimizeRequest.current = windowData.minimizeRequest
    animateMinimize()
  }, [animateMinimize, windowData.minimizeRequest])

  const animateClose = () => {
    if (program.canClose === false) {
      return
    }

    const target = windowRef.current

    if (!target || target.dataset.animating === 'true') {
      return
    }

    target.dataset.animating = 'true'
    gsap.to(target, {
      opacity: 0,
      scale: 0.78,
      rotate: -1,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => onClose(windowData.id),
    })
  }

  const handlePointerDown = (event) => {
    if (
      event.button !== 0 ||
      event.target.closest('button') ||
      event.target.closest('.retro-window__resize-handle')
    ) {
      return
    }

    onFocus(windowData.id)

    const target = windowRef.current
    const rect = target.getBoundingClientRect()
    const start = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: windowData.position.x,
      y: windowData.position.y,
      width: rect.width,
      height: rect.height,
    }

    const handlePointerMove = (moveEvent) => {
      const viewportWidth = globalThis.window.innerWidth
      const viewportHeight = globalThis.window.innerHeight
      const taskbarSpace = 74
      const nextX = clamp(
        start.x + moveEvent.clientX - start.pointerX,
        8,
        Math.max(8, viewportWidth - start.width - 8),
      )
      const nextY = clamp(
        start.y + moveEvent.clientY - start.pointerY,
        8,
        Math.max(8, viewportHeight - start.height - taskbarSpace),
      )

      onMove(windowData.id, { x: nextX, y: nextY })
    }

    const stopDragging = () => {
      globalThis.window.removeEventListener('pointermove', handlePointerMove)
      globalThis.window.removeEventListener('pointerup', stopDragging)
      document.body.style.userSelect = ''
      dragCleanup.current = null
    }

    dragCleanup.current = stopDragging
    document.body.style.userSelect = 'none'
    globalThis.window.addEventListener('pointermove', handlePointerMove)
    globalThis.window.addEventListener('pointerup', stopDragging)
  }

  const handleResizePointerDown = (event) => {
    if (event.button !== 0) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    onFocus(windowData.id)

    const target = windowRef.current
    const rect = target.getBoundingClientRect()
    const start = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      width: rect.width,
      height: rect.height,
      maxWidth: Math.max(330, globalThis.window.innerWidth - rect.left - 12),
      maxHeight: Math.max(230, globalThis.window.innerHeight - rect.top - 70),
    }

    const handlePointerMove = (moveEvent) => {
      onResize(windowData.id, {
        width: clamp(start.width + moveEvent.clientX - start.pointerX, 330, start.maxWidth),
        height: clamp(start.height + moveEvent.clientY - start.pointerY, 230, start.maxHeight),
      })
    }

    const stopResizing = () => {
      globalThis.window.removeEventListener('pointermove', handlePointerMove)
      globalThis.window.removeEventListener('pointerup', stopResizing)
      document.body.style.userSelect = ''
      document.body.style.cursor = ''
      resizeCleanup.current = null
    }

    resizeCleanup.current = stopResizing
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'nwse-resize'
    globalThis.window.addEventListener('pointermove', handlePointerMove)
    globalThis.window.addEventListener('pointerup', stopResizing)
  }

  return (
    <article
      ref={windowRef}
      className={`retro-window retro-window--${program.id}`}
      style={{
        '--window-width': `${windowData.size.width}px`,
        '--window-height': `${windowData.size.height}px`,
        left: `${windowData.position.x}px`,
        top: `${windowData.position.y}px`,
        zIndex: windowData.zIndex,
      }}
      onPointerDown={() => onFocus(windowData.id)}
      aria-label={program.title}
    >
      <header className="retro-window__titlebar" onPointerDown={handlePointerDown}>
        <div className="retro-window__title">
          <PixelIcon type={program.icon} compact src={program.iconImage} />
          <span className="retro-window__label">{program.title}</span>
        </div>

        <div className="retro-window__controls" aria-label="Controles">
          <button
            type="button"
            className="retro-window__control"
            onClick={animateMinimize}
            aria-label={`Minimizar ${program.title}`}
          >
            _
          </button>

          {program.canClose !== false && (
            <button
              type="button"
              className="retro-window__control"
              onClick={animateClose}
              aria-label={`Cerrar ${program.title}`}
            >
              x
            </button>
          )}
        </div>
      </header>

      <div className="retro-window__content">{children}</div>
      <span
        className="retro-window__resize-handle"
        onPointerDown={handleResizePointerDown}
        aria-hidden="true"
      />
    </article>
  )
}

export default Window
