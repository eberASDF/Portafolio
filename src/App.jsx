import { useCallback, useMemo, useRef, useState } from 'react'
import Assistant from './components/Assistant'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import WindowContent from './components/WindowContent'
import {
  desktopPrograms,
  programCatalog,
  taskbarPrograms,
  trashProgram,
} from './data/programs'
import './App.css'

const createWindow = (program, zIndex) => ({
  id: program.id,
  minimized: false,
  position: { ...program.defaultPosition },
  size: { ...program.defaultSize },
  zIndex,
  minimizeRequest: 0,
})

const createIconPositions = () =>
  [...desktopPrograms, trashProgram].reduce((positions, program) => {
    positions[program.id] = { ...program.desktopPosition }
    return positions
  }, {})

function App() {
  const zCounter = useRef(8)
  const [windows, setWindows] = useState(() => [
    createWindow(programCatalog.profile, 5),
  ])
  const [iconPositions, setIconPositions] = useState(createIconPositions)

  const getNextZ = useCallback(() => {
    zCounter.current += 1
    return zCounter.current
  }, [])

  const openWindow = useCallback(
    (programId) => {
      const program = programCatalog[programId]

      if (!program) {
        return
      }

      setWindows((currentWindows) => {
        const zIndex = getNextZ()
        const existingWindow = currentWindows.find(
          (windowItem) => windowItem.id === programId,
        )

        if (existingWindow) {
          return currentWindows.map((windowItem) =>
            windowItem.id === programId
              ? { ...windowItem, minimized: false, zIndex }
              : windowItem,
          )
        }

        return [...currentWindows, createWindow(program, zIndex)]
      })
    },
    [getNextZ],
  )

  const closeWindow = useCallback((programId) => {
    const program = programCatalog[programId]

    if (program?.canClose === false) {
      return
    }

    setWindows((currentWindows) =>
      currentWindows.filter((windowItem) => windowItem.id !== programId),
    )
  }, [])

  const minimizeWindow = useCallback((programId) => {
    setWindows((currentWindows) =>
      currentWindows.map((windowItem) =>
        windowItem.id === programId
          ? { ...windowItem, minimized: true }
          : windowItem,
      ),
    )
  }, [])

  const requestMinimizeWindow = useCallback((programId) => {
    setWindows((currentWindows) =>
      currentWindows.map((windowItem) =>
        windowItem.id === programId
          ? {
              ...windowItem,
              minimizeRequest: windowItem.minimizeRequest + 1,
            }
          : windowItem,
      ),
    )
  }, [])

  const bringToFront = useCallback(
    (programId) => {
      setWindows((currentWindows) =>
        currentWindows.map((windowItem) =>
          windowItem.id === programId
            ? { ...windowItem, zIndex: getNextZ() }
            : windowItem,
        ),
      )
    },
    [getNextZ],
  )

  const moveWindow = useCallback((programId, position) => {
    setWindows((currentWindows) =>
      currentWindows.map((windowItem) =>
        windowItem.id === programId ? { ...windowItem, position } : windowItem,
      ),
    )
  }, [])

  const resizeWindow = useCallback((programId, size) => {
    setWindows((currentWindows) =>
      currentWindows.map((windowItem) =>
        windowItem.id === programId ? { ...windowItem, size } : windowItem,
      ),
    )
  }, [])

  const moveDesktopIcon = useCallback((programId, position) => {
    setIconPositions((currentPositions) => ({
      ...currentPositions,
      [programId]: position,
    }))
  }, [])

  const toggleTaskbarProgram = useCallback(
    (programId) => {
      const targetWindow = windows.find(
        (windowItem) => windowItem.id === programId,
      )

      if (targetWindow && !targetWindow.minimized) {
        requestMinimizeWindow(programId)
        return
      }

      openWindow(programId)
    },
    [openWindow, requestMinimizeWindow, windows],
  )

  const taskbarStates = useMemo(
    () =>
      windows.reduce((states, windowItem) => {
        const program = programCatalog[windowItem.id]

        if (!program) {
          return states
        }

        states[program.id] = {
          isOpen: !windowItem.minimized,
          isMinimized: windowItem.minimized,
        }

        return states
      }, {}),
    [windows],
  )

  const activeTaskbarPrograms = useMemo(
    () => {
      const pinnedIds = new Set(taskbarPrograms.map((program) => program.id))
      const activePrograms = windows
        .map((windowItem) => programCatalog[windowItem.id])
        .filter(Boolean)
        .filter((program) => !pinnedIds.has(program.id))

      return [...taskbarPrograms, ...activePrograms]
    },
    [windows],
  )

  const visibleWindows = windows.filter((windowItem) => !windowItem.minimized)

  return (
    <main className="retro-shell" aria-label="Portafolio retro de Eber Higuera">
      <Desktop
        programs={desktopPrograms}
        trashProgram={trashProgram}
        iconPositions={iconPositions}
        onMoveIcon={moveDesktopIcon}
        onOpenProgram={openWindow}
      />

      <Assistant />

      <section className="window-layer" aria-label="Ventanas abiertas">
        {visibleWindows.map((windowItem) => {
          const program = programCatalog[windowItem.id]

          return (
            <Window
              key={windowItem.id}
              windowData={windowItem}
              program={program}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onMove={moveWindow}
              onResize={resizeWindow}
              onFocus={bringToFront}
            >
              <WindowContent content={program.content} onOpenFile={openWindow} />
            </Window>
          )
        })}
      </section>

      <Taskbar
        programs={activeTaskbarPrograms}
        pinnedProgramIds={taskbarPrograms.map((program) => program.id)}
        states={taskbarStates}
        onOpenProgram={openWindow}
        onToggleProgram={toggleTaskbarProgram}
      />
    </main>
  )
}

export default App
