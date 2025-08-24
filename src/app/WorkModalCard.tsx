import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { WorkModalData } from './page'
import { Montserrat } from 'next/font/google'

interface WorkCardProps {
	active: boolean
	modalData: WorkModalData
	setModalActive: Dispatch<SetStateAction<boolean>>
}

const montserrat = Montserrat({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	style: ['normal', 'italic'],
})

export default function WorkModalCard({ active, modalData, setModalActive }: WorkCardProps) {
	if (!active) return

	const closeModal = () => {
		setModalActive(false)
	}

	return (
		<div className='fixed inset-0 backdrop-blur-md flex justify-center items-center'>
			<div className='shadow-2xl max-h-[80vh] flex flex-col p-5 bg-neutral-700 rounded-4xl border-2 border-emerald-700/40 w-3/4 sm:w-1/2'>
				<div className='flex justify-center items-center gap-5 mt-1 mb-1'>
					<Image className='w-12 aspect-auto sm:w-16 md:w-24' src={modalData.logo} alt={modalData.title} width={1024} height={1024}></Image>
					<h1 className={`text-xs sm:text-lg md:text-2xl font-bold ${montserrat.className} text-center`}>{modalData.title}</h1>
				</div>

				<br className='mt-1 mb-1'></br>

				<div className='flex items-center justify-center gap-5'>
					{modalData.links.map((link, index) => (
						<Link key={index} href={link.url} target='_blank'>
							<Image className='hover:contrast-10 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]' src={link.img} alt='' width={32} height={32} />
						</Link>
					))}
				</div>

				<br className='mt-1 mb-1'></br>

				<div className='overflow-y-auto flex flex-col'>
					<p className={`text-xs sm:text-md md:text-lg ${montserrat.className} font-bold mt-1 text-left`}>Моя роль в проекте</p>
					<hr className='mt-2 mb-2'></hr>

					<ul className='list-disc ml-6'>
						{modalData.roles.map((role, index) => (
							<li key={index} className={`text-xs sm:text-md md:text-lg ${montserrat.className} font-normal mt-1 text-left`}>{role}</li>
						))}
					</ul>

					<br className='mt-1 mb-1'></br>

					<p className={`text-xs sm:text-md md:text-lg ${montserrat.className} font-bold mt-1 text-left`}>Стек</p>
					<hr className='mt-2 mb-2'></hr>
					<ul className='list-disc ml-6'>
						{modalData.stack.map((role, index) => (
							<li key={index} className={`text-xs sm:text-md md:text-lg ${montserrat.className} font-normal mt-1 text-left`}>{role}</li>
						))}
					</ul>

					<br className='mt-1 mb-1'></br>

					<p className={`text-xs sm:text-md md:text-lg ${montserrat.className} font-bold mt-1 text-left`}>Описание</p>
					<hr className='mt-2 mb-2'></hr>
					<p className={`whitespace-pre-line text-xs sm:text-md md:text-lg ${montserrat.className} mt-1 text-left`}>{modalData.desc}</p>

					<button onClick={closeModal} className='bg-red-400 hover:bg-red-300 active:bg-red-500 transition-colors rounded-3xl p-1 mx-auto mt-5 text-sm w-4/5 sm:w-2/3 sm:text-lg md:w-2/3 lg:w-1/2 xl:w-1/4'>Закрыть</button>
				</div>
			</div>
		</div>
	)
}