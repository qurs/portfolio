import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	style: ['normal', 'italic'],
})


export default function AboutSiteCard() {
	return (
		<div className='flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-2xl border border-white/25'>
			<h1 className={`text-xs xxs:text-sm xs:text-md sm:text-lg md:text-xl text-center mt-5 font-medium ${montserrat.className}`}>Веб-сайт был создан с помощью Next.JS + TailwindCSS</h1>
			<br></br>
			<div className='flex items-center justify-center gap-10'>
				<Link href={'https://github.com/qurs/portfolio'} target='_blank'>
				<Image className='hover:drop-shadow-[0_0_8px_#a776b8aa]' src={'/portfolio/github-mark-white.svg'} alt='' width={32} height={32} />
				</Link>
			</div>
        </div>
	)
}