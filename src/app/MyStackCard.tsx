import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	style: ['normal', 'italic'],
})

export default function MyStackCard() {
	return (
		<div className={`flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-2xl w-full border border-white/25`}>
			<h1 className={`mb-3 text-xs sm:text-md md:text-lg text-center font-medium ${montserrat.className}`}>Стек, с которым я работал:</h1>
			<ul className='self-start list-disc ml-6'>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Next.JS</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>TailwindCSS</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Node.JS</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>TypeScript</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>JavaScript</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Docker</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Git</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>MySQL</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>HTML</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>CSS</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Java</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>C#</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Python</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>ImGui</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>PHP</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Electron</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Windows Forms</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Godot 4</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>GDScript</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Lua</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>LuaJIT</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Luvit</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Love2D</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Spigot</li>
				<li className={`font-medium md:font-bold text-xs md:text-sm ${montserrat.className}`}>Garry&apos;s Mod</li>
			</ul>
		</div>
	)
}