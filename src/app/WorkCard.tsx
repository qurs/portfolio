import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { WorkModalData, WorkModalLink } from './page'
import { Montserrat } from 'next/font/google'

interface WorkCardProps {
	title: string
	desc: string
	fullDesc?: string
	logo: string
	logoSize?: number
	roles: string[]
	stack: string[]
	links: WorkModalLink[]
	setModalActive: Dispatch<SetStateAction<boolean>>
	setModalData: Dispatch<SetStateAction<WorkModalData | undefined>>
}

const montserrat = Montserrat({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	style: ['normal', 'italic'],
})

export default function WorkCard({ title, desc, fullDesc=desc, logo, roles, stack, links, logoSize=46, setModalActive, setModalData }: WorkCardProps) {
	const openModal = () => {
		setModalData({
			title: title,
			desc: fullDesc,
			logo: logo,
			roles: roles,
			stack: stack,
			links: links,
		})
		setModalActive(true)
	}

	return (
		<div className='flex flex-col gap-5 p-5 mx-auto mt-5 bg-neutral-800 rounded-2xl w-3/4 min-h-64 border border-purple-400/40'>
			<div className='flex justify-center items-center gap-5 m-1'>
				<Image src={logo} alt={title} width={logoSize} height={logoSize}></Image>
				<h1 className={`text-md sm:text-2xl font-bold ${montserrat.className} text-center`}>{title}</h1>
			</div>
			
			<p className={`text-sm sm:text-lg xl:text-sm 2xl:text-lg ${montserrat.className} text-left`}>{desc}</p>

			<button onClick={openModal} className='bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 transition-colors rounded-3xl mt-auto p-1 mx-auto text-sm w-2/3 sm:w-1/2 sm:text-lg md:w-3/8 lg:w-1/4 xl:w-2/3'>Подробнее</button>
		</div>
	)
}