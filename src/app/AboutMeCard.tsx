import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	style: ['normal', 'italic'],
})

export default function AboutMeCard() {
	return (
		<div className='flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-2xl border border-white/25'>
			<h1 className={`text-sm xxs:text-lg xs:text-xl sm:text-xl md:text-2xl text-center mt-5 font-medium ${montserrat.className}`}>Иван Щетинский</h1>
			<p className={`italic text-neutral-300 text-tiny tiny:text-xxs xxs:text-xs xs:text-sm sm:text-sm md:text-md text-center mt-5 font-normal ${montserrat.className}`}>Разработчик с 6-летним опытом самостоятельной работы над pet-проектами. Создавал приложения и веб-сервисы с использованием Node.js, Next.js, TypeScript. Практиковался в создании игр с использованием Godot 4, Love2D и Lua. Интересуюсь разработкой современных веб-технологий, постоянно развиваю навыки и осваиваю новые инструменты</p>
			<br></br>
			<div className='flex items-center justify-center gap-10'>
				<Link href={'https://github.com/qurs'} target='_blank'>
				<Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/github-mark-white.svg'} alt='' width={32} height={32} />
				</Link>
				<Link href={'https://t.me/vankuver11'} target='_blank'>
				<Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/telegram.svg'} alt='' width={32} height={32} />
				</Link>
			</div>
		</div>
	)
}