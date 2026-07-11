import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import camaleonGif from '../assets/camaleon.gif'

function Assistant() {
  const assistantRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.assistant__mascot',
        { y: 10, scale: 0.92, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: 'steps(6)',
        },
      )

      gsap.to('.assistant__mascot', {
        y: -4,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.assistant__bubble',
        { y: 6, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'steps(5)' },
      )
    }, assistantRef)

    return () => ctx.revert()
  }, [])

  return (
    <aside
      ref={assistantRef}
      className="assistant"
      aria-label="Asistente retro del portafolio"
    >
      <div className="assistant__bubble">
        Hola, bienvenido al portafolio de Eber Higuera. Explora todos sus
        trabajos aqu&iacute;
      </div>

      <div className="assistant__mascot">
        <img
          className="assistant__gif"
          src={camaleonGif}
          alt="Camaleon pixel art"
          draggable="false"
        />
      </div>
    </aside>
  )
}

export default Assistant
