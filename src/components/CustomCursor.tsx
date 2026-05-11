import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const handleMouseMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      cursor.style.left = mx.current + 'px'
      cursor.style.top = my.current + 'px'
    }

    const animateRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      ring.style.left = rx.current + 'px'
      ring.style.top = ry.current + 'px'
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    const animationId = requestAnimationFrame(animateRing)

    const handleMouseEnter = () => {
      cursor.style.width = '20px'
      cursor.style.height = '20px'
      ring.style.width = '56px'
      ring.style.height = '56px'
    }

    const handleMouseLeave = () => {
      cursor.style.width = '10px'
      cursor.style.height = '10px'
      ring.style.width = '36px'
      ring.style.height = '36px'
    }

    const interactiveElements = document.querySelectorAll('a, button')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

export default CustomCursor
