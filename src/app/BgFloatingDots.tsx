import { useEffect, useRef } from 'react';

interface FloatingDotsProps {
	count: number
	velMul?: number
}

interface Dot {
	x: number
	y: number
	vx: number
	vy: number
}

export function FloatingDots({ count, velMul=1 }: FloatingDotsProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const dots: Dot[] = []

		for (let i = 0; i < count; ++i) {
			dots.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 2 * velMul,
				vy: (Math.random() - 0.5) * 2 * velMul,
			})
		}

		const moveX = (dot: Dot, w: number, h: number) => {
			let angle = Math.atan2(dot.vy, dot.vx)

			dot.x += dot.vx
			if (dot.x >= w || dot.x <= 0) {
				angle = Math.PI - angle
			}
			else {
				return
			}

			const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
			dot.vx = Math.cos(angle) * speed
			dot.vy = Math.sin(angle) * speed
		}

		const moveY = (dot: Dot, w: number, h: number) => {
			let angle = Math.atan2(dot.vy, dot.vx)

			dot.y += dot.vy
			if (dot.y >= h || dot.y <= 0) {
				angle = -angle
			}
			else {
				return
			}

			const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
			dot.vx = Math.cos(angle) * speed
			dot.vy = Math.sin(angle) * speed
		}

		const draw = () => {
			const w = canvas.width
			const h = canvas.height

			ctx.clearRect(0, 0, w, h)

			dots.forEach((dot: Dot) => {
				moveX(dot, w, h)
				moveY(dot, w, h)

				ctx.beginPath()
				ctx.ellipse(dot.x, dot.y, 2, 2, 0, Math.PI * 2, 0)
	
				ctx.shadowBlur = 8
				ctx.shadowColor = 'white'
				ctx.fillStyle = 'white'
				ctx.fill()
			})

			requestAnimationFrame(draw)
		}
		draw()

		const handleResize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<canvas ref={canvasRef} className='fixed w-full h-full inset-0' />
	)
}